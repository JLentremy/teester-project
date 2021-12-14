import styled from "@emotion/styled";
import React from "react";

type ItemProps = {
  label: string;
};

const Item = ({ label }: ItemProps) => {
  return (
    <Content>
      <Letter>{label[0]}</Letter>
    </Content>
  );
};

const Content = styled.div`
  display: flex;
  width: 2rem;
  height: 2rem;
  max-width: 100%;
  margin: 0 1rem;
  padding-bottom: 0.5 rem;

  border-radius: 9999px;
  align-items: center;
  justify-content: center;

  background-color: #5d6ac0;
`;
const Letter = styled.div`
  display: flex;
  width: 1rem;
  height: 1rem;
  margin-bottom: 1px;

  align-items: center;
  justify-content: center;
  text-transform: uppercase;

  color: #fff;
`;

export default Item;
