import styled from "@emotion/styled";
import { withProperties } from "../../app/utils";
import Button from "../Button";
import { Profile } from "../Profile";
import Title from "../Title";
import Item from "./InfosItem";
import { PersonalInfosProps } from "./types";

type Props = {
  title: PersonalInfosProps["title"];
};

const PersonalInfos = ({ title, children }: React.PropsWithChildren<Props>) => {
  return (
    <Section>
      <Title label={title} />
      {children}
      <Button label="Save" onClick={() => true} disabled={true} />
    </Section>
  );
};

const Section = styled(Profile)``;

export default withProperties(PersonalInfos, { Item });
