import styled from "@emotion/styled";
import React from "react";

const BodyComp = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <Body>
      <div>{children}</div>
    </Body>
  );
};

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 0%;
  padding: var(--xl-size);

  > div {
    display: flex;
    align-items: flex-start;
    max-width: 80rem;

    @media (max-width: 700px) {
      flex-direction: column;
    }
  }
`;

export default BodyComp;
