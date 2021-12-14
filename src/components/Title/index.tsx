import styled from "@emotion/styled";

type TitleProps = {
  label: string;
};

const TitleComp = ({ label }: TitleProps) => {
  return <StyledTitle>{label}</StyledTitle>;
};

const StyledTitle = styled.h1`
  display: flex;
  font-weight: 600;
  font-size: var(--md-font);
  line-height: 1.25rem;
  text-transform: capitalize;

  margin-bottom: var(--sm-size);
  margin-top: 0;

  color: var(--accent-color);
`;

export default TitleComp;
