import React from "react";
import { InfosProps } from "../types";

const Item = ({ icon, label, value }: InfosProps) => {
  return (
    <div style={style.item as React.CSSProperties}>
      <div>{icon}</div>
      <div>{label}</div>
      <div>{value}</div>
    </div>
  );
};

const style = {
  item: {
    display: "flex",
    flexDirection: "column",
    padding: 10,
    backgroundColor: "red",
  },
};

export default Item;
