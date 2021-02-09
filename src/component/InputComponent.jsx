import { Input } from "reactstrap";

const InputComponent = (props) => {
  const { value, handleInput, error, type } = props;

  return (
    <Input
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

export default InputComponent;
