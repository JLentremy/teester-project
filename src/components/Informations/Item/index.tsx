import Input, { InputProps } from "../../Input";
import Title from "../../Title";
import { ItemProps } from "../types";

const Item = ({ title, inputs }: ItemProps) => {
  return (
    <article style={style.item}>
      <Title label={title} />
      {inputs.map((input: InputProps) => (
        <Input label={input.label} type={input.type} />
      ))}
    </article>
  );
};

const style = {
  item: {
    display: "flex",
    padding: 10,
    backgroundColor: "red",
  },
};

export default Item;
