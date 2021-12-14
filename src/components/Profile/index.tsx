import styled from "@emotion/styled";
import ProfilePicture from "../ProfilePicture";
import Title from "../Title";
import Item from "./Item";
import { InfosProps, ProfileProps } from "./types";

type Props = {
  profile: ProfileProps;
  infos: InfosProps[];
};

const Profile = ({ profile, infos }: Props) => {
  return (
    <Aside>
      <ProfilePicture label={profile.firstname} />
      <Title label={`${profile.firstname} ${profile.lastname}`} />
      {infos.map((info, key) => (
        <Item
          key={key}
          icon={info.icon}
          label={info.label}
          value={info.value}
        />
      ))}
    </Aside>
  );
};

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  margin: 0.65rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: rgba(255, 255, 255, 1);

  box-shadow: var(--ring-offset-shadow, 0 0 #0000),
    var(--ring-shadow, 0 0 #0000), var(--shadow);
`;

export default Profile;
