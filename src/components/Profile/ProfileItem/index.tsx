import styled from "@emotion/styled";
import React from "react";
import Icon from "../../Icon";
import { InfosProps } from "../types";

const ProfileItemComp = ({ icon, label, value }: InfosProps) => {
  return (
    <ProfileItem>
      <Label>
        <StyledIcon icon={icon} aria-hidden="true" />
        {label}
      </Label>
      {value.map((line) => line && <Value>{line}</Value>)}
    </ProfileItem>
  );
};

const Flex = styled.div`
  display: flex;
`;
const FlexCol = styled(Flex)`
  flex-direction: column;
`;
const ProfileItem = styled(FlexCol)`
  margin-bottom: var(--md-size);
`;
const Label = styled(Flex)`
  font-weight: 600;
  font-size: var(--sm-font);
  align-items: center;
  margin-bottom: calc(var(--xs-size) / 2);
`;
const StyledIcon = styled(Icon)`
  margin-right: var(--xs-size);
`;
const Value = styled(Flex)`
  font-size: var(--sm-font);
  color: var(--gray-color);
  margin-bottom: calc(var(--xs-size) / 2);
`;

export default ProfileItemComp;
