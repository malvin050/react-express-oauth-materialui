import React, { useEffect, useState } from "react";

import { createCustomProtectedPageCall } from "./customProtectedPageService";
import { useApi } from "common/hooks/useApi";
import { LOGIN_PAGE_URL } from "common/constants/routerConstants";

import styles from "./CustomProtectedPage.module.scss";

export const CustomProtectedPage = () => {
  const { executeApiCall } = useApi();
  const [result, setResult] = useState<string>();
  useEffect(() => {
    const onPageLoad = async () => {
      try {
        const message = await executeApiCall(createCustomProtectedPageCall());
        setResult(message);
      } catch (error) {
        if (error.response.status === 401) {
          setResult("User is not logged in");
          // redirect to login page
          // return (window.location.href = LOGIN_PAGE_URL);
        }
      }
    };
    onPageLoad();
  }, []);

  if (!result) {
    return null;
  }
  return (
    <div>
      <div>My Custom Protected Page</div>
      <div>{result}</div>
    </div>
  );
};
