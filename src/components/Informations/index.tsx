import styled from "@emotion/styled";
import { withProperties } from "../../app/utils";
import Button from "../Button";
import Icon from "../Icon";
import { Profile } from "../Profile";
import Text, { TextType } from "../Text";
import Item from "./InfosItem";
import { PersonalInfosProps } from "./types";

type Props = {
  title: PersonalInfosProps["title"];
};

const PersonalInfos = ({ title, children }: React.PropsWithChildren<Props>) => {
  return (
    <Section>
      <Header>
        <Text label={title} type={TextType.headtitle} accent />
        <StyledIcon icon="chevron-up" />
      </Header>
      {children}
      <Button label="Save" onClick={() => true} disabled={true} />
    </Section>
  );
};

const Section = styled(Profile)``;
const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
const StyledIcon = styled(Icon)`
  margin: var(--xs-size) 0;
  color: var(--accent-color);
`;

export default withProperties(PersonalInfos, { Item });
