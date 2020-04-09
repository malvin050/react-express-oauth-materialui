import React from "react";
import { Link } from "react-router-dom";
import { CUSTOM_PAGE_URL } from "common/constants/routerConstants";

import styles from "./CustomPage.module.scss";

export const LandingPage = () => {
  return (
    <div>
      <div>Landing Page</div>
      <Link to={CUSTOM_PAGE_URL}>Go to Custom Page</Link>
    </div>
  );
};
