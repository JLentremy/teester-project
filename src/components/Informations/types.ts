import { InputProps } from "../Input";

export type PersonalInfosProps = {
  title: string;
  items: ItemProps[];
};

export type ItemProps = {
  title: string;
  inputs: InputProps[];
};
