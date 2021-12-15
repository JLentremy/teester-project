import styled from "@emotion/styled";
import { DateTime } from "luxon";
import "./App.css";
import {
  AppProvider as AppContextProvider,
  useAppContext,
} from "./app/AppContext";
import Body from "./components/Body";
import Informations from "./components/Informations";
import { ItemProps } from "./components/Informations/types";
import { InputsType } from "./components/Input";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import { InfosProps } from "./components/Profile/types";

function App() {
  const context = useAppContext();

  if (!context.profile) return null;

  const infos: InfosProps[] = [
    {
      label: "Date of birth",
      icon: "birthday-cake",
      value: [context.profile.birthdate.toLocaleString(DateTime.DATE_MED)],
    },
    {
      label: "Address",
      icon: "map-marker-alt",
      value: [
        context.profile.address,
        context.profile.city,
        context.profile.country,
      ],
    },
    {
      label: "Contact email",
      icon: "envelope",
      value: [context.profile.contact_mail],
    },
    {
      label: "Login email",
      icon: "envelope",
      value: [context.profile.login_mail],
    },
    {
      label: "Phone number",
      icon: "phone-alt",
      value: [context.profile.phone],
    },
  ];
  const items: ItemProps[] = [
    {
      title: "General information",
      inputs: [
        {
          label: "Firstname",
          type: InputsType.text,
          value: context.profile.firstname,
        },
        {
          label: "Lastname",
          type: InputsType.text,
          value: context.profile.lastname,
        },
        {
          label: "Birthdate",
          type: InputsType.date,
          value: context.profile.birthdate.toFormat("yyyy-MM-dd"),
        },
      ],
    },
    {
      title: "Contact information",
      inputs: [
        {
          label: "Contact email",
          type: InputsType.text,
          value: context.profile.contact_mail,
        },
        { label: "Phone", type: InputsType.text, value: context.profile.phone },
        {
          label: "Address",
          type: InputsType.address,
          value: context.profile.address,
        },
        { label: "City", type: InputsType.text, value: context.profile.city },
        {
          label: "Country",
          type: InputsType.text,
          value: context.profile.country,
        },
      ],
    },
  ];

  return (
    <AppComp>
      <Navbar>
        <Navbar.Logo />
        <Navbar.Profile
          name={`${context.profile.firstname} ${context.profile.lastname}`}
          mail={context.profile.login_mail}
        />
      </Navbar>
      <Body>
        <Profile
          name={`${context.profile.firstname} ${context.profile.lastname}`}
        >
          {infos.map((info, key) => (
            <Profile.Item
              key={key}
              icon={info.icon}
              label={info.label}
              value={info.value}
            />
          ))}
        </Profile>
        <Informations title="Edit personal information">
          {items.map((item, key) => (
            <Informations.Item
              key={key}
              title={item.title}
              inputs={item.inputs}
            />
          ))}
        </Informations>
      </Body>
    </AppComp>
  );
}

function AppWithContext() {
  return (
    <AppContextProvider>
      <App />
    </AppContextProvider>
  );
}

const AppComp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--bg-color);
`;

export default AppWithContext;
