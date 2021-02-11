import React from "react";
import { Input } from "reactstrap";

const InputComponent = (props) => {
  const { value, handleInput, error, type } = props;
  console.log(`input component - ${type}`);

  return (
    <Input
      key={type}
      type={type}
      value={value}
      onChange={(e) => {
        handleInput(e);
      }}
      placeholder="example@gmail.com"
      invalid={error !== ""}
    />
  );
};

export default React.memo(InputComponent);
