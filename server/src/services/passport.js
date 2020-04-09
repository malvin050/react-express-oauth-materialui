import passport from "passport";
import { WebAppStrategy } from "ibmcloud-appid";

import {
  APPID_REDIRECT_DOMAIN,
  APPID_OAUTH_SERVER_URL,
  APPID_CLIENT_ID,
  APPID_TENANT_ID,
  CALLBACK_URL,
  APPID_SECRET
} from "../config";

passport.use(
  new WebAppStrategy({
    tenantId: APPID_TENANT_ID,
    clientId: APPID_CLIENT_ID,
    secret: APPID_SECRET,
    oauthServerUrl: APPID_OAUTH_SERVER_URL,
    redirectUri: APPID_REDIRECT_DOMAIN + CALLBACK_URL
  })
);

passport.serializeUser((user, cb) => cb(null, user));
passport.deserializeUser((user, cb) => cb(null, user));


export default passport;