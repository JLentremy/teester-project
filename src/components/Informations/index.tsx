import Button from "../Button";
import Title from "../Title";
import Item from "./Item";
import { PersonalInfosProps } from "./types";

const PersonalInfos = ({ title, items }: PersonalInfosProps) => {
  return (
    <section style={style.section as React.CSSProperties}>
      <Title label={title} />
      {items.map((item) => (
        <Item title={item.title} inputs={item.inputs} />
      ))}
      <Button label="Save" onClick={() => true} disabled={true} />
    </section>
  );
};

const style = {
  section: {
    display: "flex",
    flexDirection: "column",
    padding: 10,
    backgroundColor: "red",
  },
};

export default PersonalInfos;
