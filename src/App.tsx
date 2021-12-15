import styled from "@emotion/styled";
import { DateTime } from "luxon";
import React from "react";
import "./App.css";
import Informations from "./components/Informations";
import { ItemProps } from "./components/Informations/types";
import { InputsType } from "./components/Input";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import { InfosProps, ProfileProps } from "./components/Profile/types";

function App() {
  const profile: ProfileProps = {
    firstname: "Maxime",
    lastname: "Baconnais",
    birthdate: DateTime.local(1996, 7, 23),
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
      icon: "birthday-cake",
      value: [profile.birthdate.toLocaleString(DateTime.DATE_MED)],
    },
    {
      label: "Address",
      icon: "map-marker-alt",
      value: [profile.address, profile.city, profile.country],
    },
    {
      label: "Contact email",
      icon: "envelope",
      value: [profile.contact_mail],
    },
    {
      label: "Login email",
      icon: "envelope",
      value: [profile.login_mail],
    },
    {
      label: "Phone number",
      icon: "phone-alt",
      value: [profile.phone],
    },
  ];
  const items: ItemProps[] = [
    {
      title: "General information",
      inputs: [
        { label: "Firstname", type: InputsType.text, value: profile.firstname },
        { label: "Lastname", type: InputsType.text, value: profile.lastname },
        {
          label: "Birthdate",
          type: InputsType.date,
          value: profile.birthdate.toFormat("yyyy-MM-dd"),
        },
      ],
    },
    {
      title: "Contact information",
      inputs: [
        {
          label: "Contact email",
          type: InputsType.text,
          value: profile.contact_mail,
        },
        { label: "Phone", type: InputsType.text, value: profile.phone },
        { label: "Address", type: InputsType.address, value: profile.address },
        { label: "City", type: InputsType.text, value: profile.city },
        { label: "Country", type: InputsType.text, value: profile.country },
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
