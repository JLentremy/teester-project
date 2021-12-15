import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { DateTime } from "luxon";

export type ProfileProps = {
  firstname: string;
  lastname: string;
  birthdate: DateTime;
  address: string;
  city: string;
  country: string;
  contact_mail: string;
  login_mail: string;
  phone: string;
};

export type InfosProps = {
  label: string;
  icon: IconProp;
  value: string[];
};
