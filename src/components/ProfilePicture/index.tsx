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
    margin: 10,
    color: "#fff",
    backgroundColor: "#5D6AC0",
    textTransform: "uppercase",
  },
};

export default Item;
