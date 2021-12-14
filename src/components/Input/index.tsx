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
    <Input>
      <Title label={label} />
      <StyledInput type={type} defaultValue={value}></StyledInput>
    </Input>
  );
};

const Flex = styled.div`
  display: flex;
`;
const FlexCol = styled(Flex)`
  flex-direction: column;
`;
const Input = styled(FlexCol)`
  width: calc(50% - var(--sm-size) * 2);
  margin: var(--xs-size) var(--sm-size);
`;
const StyledInput = styled.input`
  appearance: none;
  border: 0;
  padding: var(--sm-size);
  background-color: var(--gray-bg-color);
  border-radius: var(--roundness);
`;

export default InputComp;
