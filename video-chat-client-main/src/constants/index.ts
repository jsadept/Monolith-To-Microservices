export const SERVER_BASE_URL = "http://localhost:5500";
export const WEBSOCKET_BASE_URL = "http://localhost:3001";

export const PEER_BASE_URL = "localhost";
export const PEER_PORT = 9000;



export const API_BASE_URL = SERVER_BASE_URL + "/api";
export const WEBSOCKET_URL = WEBSOCKET_BASE_URL + "/websocket";


// auth
export const AUTH_LOGIN = "/auth/login";
export const AUTH_REG = "/auth/register";


// room
export const ROOM_CREATE = "/room/create";
export const ROOM_JOIN = "/room/join";
export const ROOM_LEAVE = "/room/leave";
export const ROOM_CHECK = "/room/has-room";


// news
export const NEWS_CREATE = "/news/create";
export const NEWS_FIND_BY_ID= "/news/:id";
export const NEWS_REMOVE = "/news/remove/:id";
export const NEWS_GET = "/news/";


// NOTES
export const NOTES_CREATE = "/notes/create";
export const NOTES_FIND_BY_ID = "/notes/:id";
export const NOTES_REMOVE = "/notes/remove/:id";
export const NOTES_GET = "/notes/";
