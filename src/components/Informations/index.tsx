import styled from "@emotion/styled";
import Button from "../Button";
import { Aside } from "../Profile";
import Title from "../Title";
import Item from "./Item";
import { PersonalInfosProps } from "./types";

const PersonalInfos = ({ title, items }: PersonalInfosProps) => {
  return (
    <Section>
      <Title label={title} />
      {items.map((item, key) => (
        <Item key={key} title={item.title} inputs={item.inputs} />
      ))}
      <Button label="Save" onClick={() => true} disabled={true} />
    </Section>
  );
};

const Section = styled(Aside)``;

export default PersonalInfos;
