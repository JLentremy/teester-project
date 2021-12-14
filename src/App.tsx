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
    address: "7 ruelle Lilly Reich",
    city: "Nantes",
    country: "",
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
      value: `${profile.address} ${profile.city} ${profile.country}`,
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
        { label: "Firstname", type: "text", value: profile.firstname },
        { label: "Lastname", type: "text", value: profile.lastname },
        { label: "Birthdate", type: "date", value: profile.birthdate },
      ],
    },
    {
      title: "Contact information",
      inputs: [
        { label: "Contact email", type: "text", value: profile.contact_mail },
        { label: "Phone", type: "text", value: profile.phone },
        { label: "Adress", type: "text", value: profile.address },
        { label: "City", type: "text", value: profile.city },
        { label: "Country", type: "text", value: profile.country },
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
  min-height: 100vh;
  background-color: #f4f4f6;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  padding: 1.5rem 2.5rem;
  align-items: center;
`;
const BodyContent = styled.div`
  display: flex;
  align-items: flex-start;
`;

export default App;
