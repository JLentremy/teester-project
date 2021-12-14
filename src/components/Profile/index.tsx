import styled from "@emotion/styled";
import ProfilePicture from "../ProfilePicture";
import Title from "../Title";
import ProfileItem from "./ProfileItem";
import { InfosProps, ProfileProps } from "./types";

type Props = {
  profile: ProfileProps;
  infos: InfosProps[];
};

const ProfileComp = ({ profile, infos }: Props) => {
  return (
    <Profile>
      <Media>
        <ProfilePicture letter={profile.firstname[0]} />
        <Title label={`${profile.firstname} ${profile.lastname}`} />
      </Media>
      {infos.map((info, key) => (
        <ProfileItem
          key={key}
          icon={info.icon}
          label={info.label}
          value={info.value}
        />
      ))}
    </Profile>
  );
};

const Flex = styled.div`
  display: flex;
`;
const FlexCol = styled(Flex)`
  flex-direction: column;
`;
const Media = styled(FlexCol)`
  align-items: center;
  justify-content: center;

  width: 20rem;
`;
export const Profile = styled(FlexCol)`
  margin: var(--sm-size);
  padding: var(--md-size);
  border-radius: var(--roundness);
  background-color: white;

  box-shadow: var(--ring-offset-shadow, 0 0 #0000),
    var(--ring-shadow, 0 0 #0000), var(--shadow);
`;

export default ProfileComp;
