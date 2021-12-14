import React from "react";
import Title from "../Title";

export type InputProps = {
  label: string;
  value: string;
  type: React.HTMLInputTypeAttribute;
};

const Input = ({ label, value, type }: InputProps) => {
  return (
    <div>
      <Title label={label} />
      <input style={style.input} type={type} defaultValue={value}></input>
    </div>
  );
};

const style = {
  input: {
    display: "flex",
    padding: 10,
  },
};

export default Input;
