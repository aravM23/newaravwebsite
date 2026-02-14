import { NextResponse } from "next/server";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const RECENTLY_PLAYED_ENDPOINT =
  "https://api.spotify.com/v1/me/player/recently-played?limit=5";
const TOP_TRACKS_ENDPOINT =
  "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=5";
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refresh_token || "",
    }),
  });
  return response.json();
};

const getRecentlyPlayed = async () => {
  const { access_token } = await getAccessToken();
  return fetch(RECENTLY_PLAYED_ENDPOINT, {
    headers: { Authorization: `Bearer ${access_token}` },
  });
};

const getTopTracks = async () => {
  const { access_token } = await getAccessToken();
  return fetch(TOP_TRACKS_ENDPOINT, {
    headers: { Authorization: `Bearer ${access_token}` },
  });
};

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");

    if (type === "top") {
      const response = await getTopTracks();
      if (response.status === 204 || response.status > 400) {
        return NextResponse.json({ tracks: [] });
      }
      const data = await response.json();
      if (!data.items?.length) {
        return NextResponse.json({ tracks: [] });
      }
      const tracks = data.items.map((item: any) => ({
        title: item.name,
        artist: item.artists.map((a: any) => a.name).join(", "),
        album: item.album.name,
        albumImageUrl: item.album.images[0]?.url || "",
        songUrl: item.external_urls.spotify,
      }));
      return NextResponse.json(
        { tracks },
        {
          headers: {
            "Cache-Control": "public, s-maxage=300, stale-while-revalidate=60",
          },
        }
      );
    }

    // Default: recently played
    const response = await getRecentlyPlayed();
    if (response.status === 204 || response.status > 400) {
      return NextResponse.json({ tracks: [] });
    }
    const data = await response.json();
    if (!data.items?.length) {
      return NextResponse.json({ tracks: [] });
    }
    const tracks = data.items.map((item: any) => ({
      title: item.track.name,
      artist: item.track.artists.map((a: any) => a.name).join(", "),
      album: item.track.album.name,
      albumImageUrl: item.track.album.images[0]?.url || "",
      songUrl: item.track.external_urls.spotify,
      playedAt: item.played_at,
    }));

    return NextResponse.json(
      { tracks },
      {
        headers: {
          "Cache-Control": "public, s-maxage=60, stale-while-revalidate=30",
        },
      }
    );
  } catch (error) {
    console.error("Error fetching Spotify data:", error);
    return NextResponse.json({ tracks: [] });
  }
}
