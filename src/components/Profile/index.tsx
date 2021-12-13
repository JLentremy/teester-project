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
    <aside style={style.profile as React.CSSProperties}>
      <ProfilePicture label={profile.firstname} />
      <Title label={`${profile.firstname} ${profile.lastname}`} />
      {infos.map((info) => (
        <Item icon={info.icon} label={info.label} value={info.value} />
      ))}
    </aside>
  );
};

const style = {
  profile: {
    display: "flex",
    flexDirection: "column",
    padding: 10,
    backgroundColor: "green",
  },
};

export default Profile;
