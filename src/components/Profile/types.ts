import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type ProfileProps = {
  firstname: string;
  lastname: string;
  birthdate: string;
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
  value: string;
};
