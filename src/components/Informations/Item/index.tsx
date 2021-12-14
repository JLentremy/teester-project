import React from "react";
import Input, { InputProps } from "../../Input";
import Title from "../../Title";
import { ItemProps } from "../types";

const Item = ({ title, inputs }: ItemProps) => {
  return (
    <article style={style.item as React.CSSProperties}>
      <Title label={title} />
      <div style={style.div as React.CSSProperties}>
        {inputs.map((input: InputProps, key) => (
          <Input
            key={key}
            label={input.label}
            type={input.type}
            value={input.value}
          />
        ))}
      </div>
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
  div: {
    display: "flex",
    flex: 1,
  },
};

export default Item;
