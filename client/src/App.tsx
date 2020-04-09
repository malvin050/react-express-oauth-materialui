import React from "react";
import { Switch, Route } from "react-router-dom";
import { CoreHeader } from "common/components/CoreHeader/CoreHeader";
import { CoreFooter } from "common/components/CoreFooter/CoreFooter";
import { LANDING_PAGE_URL, CUSTOM_PAGE_URL, CUSTOM_PROTECTED_PAGE_URL } from "common/constants/routerConstants";
import { CustomPage } from "pages/CustomPage/CustomPage";
import { CustomProtectedPage } from "pages/CustomProtectedPage/CustomProtectedPage";
import { LandingPage } from "pages/LandingPage/LandingPage";

import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <CoreHeader />
      <main role="main">
        <Switch>
          <Route exact path={LANDING_PAGE_URL} component={LandingPage} />
          <Route exact path={CUSTOM_PAGE_URL} component={CustomPage} />
          <Route exact path={CUSTOM_PROTECTED_PAGE_URL} component={CustomProtectedPage} />
        </Switch>
      </main>
      <CoreFooter />
    </div>
  );
}

export default App;
