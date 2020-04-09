import express from "express";
import session from "express-session";
import { WebAppStrategy } from "ibmcloud-appid";

import passport from "../services/passport";
import {
  AUTH_PAGE,
  UNAUTH_PAGE,
  LOGIN_URL,
  CALLBACK_URL,
  LOGOUT_URL,
  SESSION_SECRET,
} from "../config";

const router = express.Router();

// Setup express application to use express-session middleware
// Must be configured with proper session storage for production
// environments. See https://github.com/expressjs/session for
// additional documentation
router.use(
  session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);
router.use(passport.initialize());
router.use(passport.session());

// Explicit login endpoint. Will always redirect browser to login widget due to {forceLogin: true}. If forceLogin is set to false the redirect to login widget will not occur if user is already authenticated
router.get(
  LOGIN_URL,
  passport.authenticate(WebAppStrategy.STRATEGY_NAME, {
    successRedirect: AUTH_PAGE,
    successReturnToOrRedirect: AUTH_PAGE,
    forceLogin: false,
  })
);

// Callback to finish the authorization process. Will retrieve access and identity tokens/
// from router ID service and redirect to either (in below order)
// 1. the original URL of the request that triggered authentication, as persisted in HTTP session under WebrouterStrategy.ORIGINAL_URL key.
// 2. successRedirect as specified in passport.authenticate(name, {successRedirect: "...."}) invocation
// 3. routerlication root ("/")
router.get(
  CALLBACK_URL,
  passport.authenticate(WebAppStrategy.STRATEGY_NAME, {
    successRedirect: AUTH_PAGE,
    successReturnToOrRedirect: AUTH_PAGE,
    failureRedirect: UNAUTH_PAGE,
  })
);

// Logout endpoint. Clears authentication information from session
router.get(LOGOUT_URL, function (req, res) {
  WebAppStrategy.logout(req);
  res.redirect(UNAUTH_PAGE);
});

export default router;
