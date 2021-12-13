type ItemProps = {
  label: string;
};

const Item = ({ label }: ItemProps) => {
  return <div style={style.item}>{label}</div>;
};

const style = {
  item: {
    display: "flex",
    padding: 10,
    backgroundColor: "red",
  },
};

export default Item;
