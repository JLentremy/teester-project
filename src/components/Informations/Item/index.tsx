import styled from "@emotion/styled";
import React from "react";
import Input, { InputProps } from "../../Input";
import Title from "../../Title";
import { ItemProps } from "../types";

const Item = ({ title, inputs }: ItemProps) => {
  return (
    <article style={style.item as React.CSSProperties}>
      <Title label={title} />
      <Inputs>
        {inputs.map((input: InputProps, key) => (
          <Input
            key={key}
            label={input.label}
            type={input.type}
            value={input.value}
          />
        ))}
      </Inputs>
    </article>
  );
};

const style = {
  item: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 10,
    // backgroundColor: "red",
  },
};

const Inputs = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 -0.65rem 1rem;
`;

export default Item;
