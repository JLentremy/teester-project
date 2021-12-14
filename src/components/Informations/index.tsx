import styled from "@emotion/styled";
import Button from "../Button";
import { Profile } from "../Profile";
import Title from "../Title";
import InfosItem from "./InfosItem";
import { PersonalInfosProps } from "./types";

const PersonalInfos = ({ title, items }: PersonalInfosProps) => {
  return (
    <Section>
      <Title label={title} />
      {items.map((item, key) => (
        <InfosItem key={key} title={item.title} inputs={item.inputs} />
      ))}
      <Button label="Save" onClick={() => true} disabled={true} />
    </Section>
  );
};

const Section = styled(Profile)``;

export default PersonalInfos;
