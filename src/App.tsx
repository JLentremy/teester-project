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
    firstname: "Maxime",
    lastname: "Baconnais",
    birthdate: "23/07/1996",
    address: "7 ruelle Lilly Reich",
    city: "Nantes",
    country: "",
    contact_mail: "maxime.baconnais@teester.com",
    login_mail: "maxime.baconnais@teester.com",
    phone: "+33658729674",
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
        { label: "Address", type: "text", value: profile.address },
        { label: "City", type: "text", value: profile.city },
        { label: "Country", type: "text", value: profile.country },
      ],
    },
  ];

  return (
    <AppComp>
      <Navbar
        name={`${profile.firstname} ${profile.lastname}`}
        mail={profile.login_mail}
      />
      <Body>
        <div>
          <Profile profile={profile} infos={infos} />
          <Informations title="Edit personal information" items={items} />
        </div>
      </Body>
    </AppComp>
  );
}

const Flex = styled.div`
  display: flex;
`;
const FlexCol = styled(Flex)`
  flex-direction: column;
`;
const AppComp = styled(FlexCol)`
  min-height: 100vh;
  background-color: var(--bg-color);
`;
const Body = styled(FlexCol)`
  align-items: center;
  flex: 1 1 0%;
  padding: var(--xl-size);

  > div {
    display: flex;
    align-items: flex-start;
    max-width: 80rem;
  }
`;

export default App;
