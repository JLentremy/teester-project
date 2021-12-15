import styled from "@emotion/styled";
import { withProperties } from "../../app/utils";
import Avatar from "../Avatar";
import Text, { TextType } from "../Text";
import Item from "./ProfileItem";

type Props = {
  name: string;
};

const ProfileComp = ({ name, children }: React.PropsWithChildren<Props>) => {
  return (
    <Profile>
      <Media>
        <Avatar letter={name[0]} scale={2.5} />
        <Text label={name} type={TextType.headtitle} />
      </Media>
      {children}
    </Profile>
  );
};

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;
const Media = styled(FlexCol)`
  align-items: center;
  justify-content: center;

  width: 18rem;
`;
export const Profile = styled(FlexCol)`
  margin: var(--sm-size);
  padding: var(--md-size);
  border-radius: var(--roundness);
  background-color: white;

  box-shadow: var(--ring-offset-shadow, 0 0 #0000),
    var(--ring-shadow, 0 0 #0000), var(--shadow);
`;

export default withProperties(ProfileComp, { Item });
