import React from "react";
import Icon from "../../Icon";
import { InfosProps } from "../types";

const Item = ({ icon, label, value }: InfosProps) => {
  return (
    <div style={style.item as React.CSSProperties}>
      <Icon icon={icon} aria-hidden="true" />
      <div>{label}</div>
      <div>{value}</div>
    </div>
  );
};

const style = {
  item: {
    display: "flex",
    flexDirection: "column",
    margin: 10,
    backgroundColor: "red",
  },
};

export default Item;
