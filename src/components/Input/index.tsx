import styled from "@emotion/styled";
import React from "react";
import Title from "../Title";

export type InputProps = {
  label: string;
  value: string;
  type: React.HTMLInputTypeAttribute;
};

const InputComp = ({ label, value, type }: InputProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "48%",
        margin: "0.4rem",
      }}
    >
      <Title label={label} />
      <Input type={type} defaultValue={value}></Input>
    </div>
  );
};

const Input = styled.input`
  display: block;
  appearance: none;
  border: 0;
  padding: 0.5rem;
  background-color: #f5f5f5;
  border-radius: 0.375rem;
`;

export default InputComp;
