import styled from "@emotion/styled";

export type ButtonProps = {
  label: string;
  disabled?: boolean;
  onClick: () => void;
};

const ButtonComp = ({ label, disabled, onClick }: ButtonProps) => {
  return (
    <Button onClick={onClick} disabled={disabled}>
      {label}
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  align-self: flex-end;
  background-color: var(--dark-gray-bg-color);
  border-style: none;

  padding: var(--sm-size) var(--md-size);

  border-radius: var(--roundness);

  font-weight: 600;
  font-size: var(--sm-font);
  color: var(--accent-text-color);

  min-width: 6.5rem;
  justify-content: center;

  &(:hover): {
    background-color: rgba(67, 56, 202, 1);
  }
`;

export default ButtonComp;
