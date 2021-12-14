import React from "react";

type ItemProps = {
  label: string;
};

const Item = ({ label }: ItemProps) => {
  return <div style={style.item as React.CSSProperties}>{label[0]}</div>;
};

const style = {
  item: {
    display: "flex",
    padding: 10,
    backgroundColor: "red",
    textTransform: "uppercase",
  },
};

export default Item;
