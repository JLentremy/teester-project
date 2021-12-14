import React from "react";
import "./App.css";
import Informations from "./components/Informations";
import { ItemProps } from "./components/Informations/types";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import { InfosProps, ProfileProps } from "./components/Profile/types";

function App() {
  const profile: ProfileProps = {
    firstname: "maxime",
    lastname: "baconnais",
    birthdate: "23/07/1996",
    address: "7 ruelle Lilly Reich Nantes",
    contact_mail: "maxime.baconnais@teester.com",
    login_mail: "maxime.baconnais@teester.com",
    phone: "0658729674",
  };
  const infos: InfosProps[] = [
    {
      label: "Date of birth",
      icon: "check",
      value: profile.birthdate,
    },
    {
      label: "Address",
      icon: "check",
      value: profile.address,
    },
    {
      label: "Contact email",
      icon: "check",
      value: profile.contact_mail,
    },
    {
      label: "Login email",
      icon: "check",
      value: profile.login_mail,
    },
    {
      label: "Phone number",
      icon: "check",
      value: profile.phone,
    },
  ];
  const items: ItemProps[] = [
    {
      title: "General information",
      inputs: [
        { label: "Firstname", type: "text" },
        { label: "Lastname", type: "text" },
        { label: "Birthdate", type: "date" },
      ],
    },
    {
      title: "Contact information",
      inputs: [
        { label: "Contact email", type: "text" },
        { label: "Phone", type: "text" },
        { label: "Adress", type: "text" },
        { label: "City", type: "text" },
        { label: "Country", type: "text" },
      ],
    },
  ];

  return (
    <div className="App">
      <Navbar
        logo=""
        name={`${profile.firstname} ${profile.lastname}`}
        mail={profile.login_mail}
      />
      <body style={style.body}>
        <Profile profile={profile} infos={infos} />
        <Informations title="Edit personal information" items={items} />
      </body>
    </div>
  );
}

const style = {
  body: {
    display: "flex",
  },
};

export default App;
