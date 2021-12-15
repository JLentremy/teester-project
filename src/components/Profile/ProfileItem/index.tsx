import styled from "@emotion/styled";
import React from "react";
import Text, { TextType } from "../../Text";
import { InfosProps } from "../types";

const ProfileItemComp = ({ icon, label, value }: InfosProps) => {
  return (
    <ProfileItem>
      <Text label={label} iconLeft={icon} type={TextType.small} />
      {value.map(
        (line, key) =>
          line && (
            <Text
              key={key}
              label={line}
              type={TextType.small}
              color="var(--gray-color)"
            />
          )
      )}
    </ProfileItem>
  );
};

const ProfileItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: var(--md-size);
`;

export default ProfileItemComp;
