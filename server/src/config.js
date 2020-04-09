const inProduction = process.env.NODE_ENV === "production";
const inStaging = process.env.NODE_ENV === "staging";

if (!(inProduction || inStaging)) {
  require("dotenv").config();
}

/** AppId/login settings */
export const APPID_CLIENT_ID = process.env.APPID_CLIENT_ID;
export const APPID_TENANT_ID = process.env.APPID_TENANT_ID;
export const APPID_OAUTH_SERVER_URL = process.env.APPID_OAUTH_SERVER_URL;
export const APPID_SECRET = process.env.APPID_SECRET;
export const SESSION_SECRET = process.env.SESSION_SECRET;

// TODO: update based on prod environment
export const APPID_REDIRECT_DOMAIN =
  process.env.APPID_REDIRECT_DOMAIN || "http://localhost:3000";

// UI routes
export const AUTH_PAGE = "/custom-protected";
export const UNAUTH_PAGE = "/";
// endpoint shared by UI and server
export const LOGIN_URL = "/login";
// server side routes. Below URLs will be used for App ID OAuth flows
export const CALLBACK_URL = "/auth/callback";
export const LOGOUT_URL = "/auth/logout";

// Cloudant
export const CLOUDANT_URL = process.env.CLOUDANT_URL;
export const CLOUDANT_USERNAME = process.env.CLOUDANT_USERNAME;
export const CLOUDANT_PASSWORD = process.env.CLOUDANT_PASSWORD;
export const CLOUDANT_DONATIONS_DB = process.env.CLOUDANT_DONATIONS_DB;
export const CLOUDANT_REQUESTS_DB = process.env.CLOUDANT_REQUESTS_DB;
