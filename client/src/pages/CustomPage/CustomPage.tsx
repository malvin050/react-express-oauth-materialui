import React, { useState } from "react";

import { useApi } from "common/hooks/useApi";
import { createCustomPageCall } from "./customPageService";
import { CoreTextField } from "common/components/CoreTextField/CoreTextField";
import { CoreCheckbox } from "common/components/CoreCheckBox/CoreCheckbox";
import { CoreSelect } from "common/components/CoreSelect/CoreSelect";
import { CoreButton } from "common/components/CoreButton/CoreButton";
import { useForm } from "common/hooks/useForm";

import styles from "./CustomPage.module.scss";

export const CustomPage = () => {
  const { executeApiCall } = useApi();
  const { getFieldProps, values } = useForm({
    initialValues: { fieldOne: "", fieldTwo: "", fieldThree: false, fieldFour: "" },
    onAnyChangeValidator: () => Promise.resolve({}),
  });
  const [helloMessage, setHelloMessage] = useState<string>();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(values);
    try {
      const data = await executeApiCall(createCustomPageCall(values));
      setHelloMessage(JSON.stringify(data));
    } catch (error) {
      setHelloMessage("call failed");
    }
  };

  return (
    <div>
      <div>My Custom Page</div>
      <form onSubmit={onSubmit}>
        <div>
          <CoreTextField label="Field One" id="fieldOne" {...getFieldProps("fieldOne")} />
        </div>
        <div>
          <CoreTextField label="Field Two" id="fieldTwo" {...getFieldProps("fieldTwo")} />
        </div>
        <div>
          <CoreCheckbox label="Field Three" id="fieldThree" {...getFieldProps("fieldThree")} />
        </div>
        <div>
          <CoreSelect
            label="Field Four"
            id="fieldFour"
            options={[
              { label: "1", value: "1" },
              { label: "2", value: "2" },
            ]}
            {...getFieldProps("fieldFour")}
          />
        </div>
        <div>
          <CoreButton type="submit">Submit</CoreButton>
        </div>
      </form>
      <div>{`Api call result: ${helloMessage}`}</div>
    </div>
  );
};
