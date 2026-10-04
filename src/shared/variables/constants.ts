export const Path = {
    Main: "/",
    Playlists: "/playlists",
    Tracks: "/tracks",
    Profile: "/profile",
    OAuthRedirect: '/oauth/callback',
    NotFound: "*",
} as const

export const AUTH_KEYS = {
    accessToken: 'spotifun-access-token',
    refreshToken: 'spotifun-refresh-token',
} as const