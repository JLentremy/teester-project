import styled from "@emotion/styled";
import React from "react";
import { NavbarProps } from "..";
import Avatar from "../../Avatar";
import Text, { TextType } from "../../Text";

const NavbarProfileComp = ({ name, mail }: NavbarProps) => {
  return (
    <NavbarProfile>
      <Avatar letter={name[0]} />
      <div>
        <Text label={name} type={TextType.large} />
        <Text label={mail} type={TextType.small} />
      </div>
    </NavbarProfile>
  );
};

const NavbarProfile = styled.div`
  display: flex;
  align-items: center;
`;

export default NavbarProfileComp;
