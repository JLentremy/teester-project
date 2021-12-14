import styled from "@emotion/styled";
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
    <AppContainer>
      <Navbar
        logo=""
        name={`${profile.firstname} ${profile.lastname}`}
        mail={profile.login_mail}
      />
      <Body>
        <BodyContent>
          <Profile profile={profile} infos={infos} />
          <Informations title="Edit personal information" items={items} />
        </BodyContent>
      </Body>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Body = styled(AppContainer)`
  flex: 1 1 0%;
  padding: 2.5rem;
  align-items: center;
  justify-content: center;
  background-color: #f4f4f6;
`;
const BodyContent = styled.div`
  display: flex;
`;

export default App;
