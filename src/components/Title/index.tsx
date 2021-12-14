import styled from "@emotion/styled";

type TitleProps = {
  label: string;
};

const Title = ({ label }: TitleProps) => {
  return <Content>{label}</Content>;
};

const Content = styled.h1`
  display: flex;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-transform: capitalize;

  margin-bottom: 0.75rem;
  margin-top: 0;

  color: #7272ff;
`;

export default Title;
