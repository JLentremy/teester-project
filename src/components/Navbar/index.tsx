import ProfilePicture from "../ProfilePicture";

export type NavbarProps = {
  logo: string;
  name: string;
  mail: string;
};

const Navbar = ({ logo, name, mail }: NavbarProps) => {
  return (
    <header style={style.navbar}>
      <div>{logo}</div>
      <ProfilePicture label={name} />
      <div>{name}</div>
      <div>{mail}</div>
    </header>
  );
};

const style = {
  navbar: {
    display: "flex",
    padding: 10,
    color: "#fff",
    backgroundColor: "#7272FF",
  },
};

export default Navbar;
