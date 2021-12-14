import styled from "@emotion/styled";
import React from "react";
import Icon from "../../Icon";
import { InfosProps } from "../types";

const Item = ({ icon, label, value }: InfosProps) => {
  return (
    <Content>
      <Label>
        <div style={{ marginRight: "0.5rem" }}>
          <Icon icon={icon} aria-hidden="true" />
        </div>
        <div>{label}</div>
      </Label>
      <Value>{value}</Value>
    </Content>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;
const Label = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 0.75rem;
  margin-bottom: 0.1rem;
`;
const Value = styled.div`
  display: flex;
  font-size: 0.75rem;
  color: rgba(107, 114, 128, 1);
`;

export default Item;
