import styled from "@emotion/styled";

export type ButtonProps = {
  label: string;
  disabled?: boolean;
  onClick: () => void;
};

const Button = ({ label, disabled, onClick }: ButtonProps) => {
  return (
    <div style={{ display: "flex", flexDirection: "row-reverse" }}>
      <ButtonContent onClick={onClick} disabled={disabled}>
        {label}
      </ButtonContent>
    </div>
  );
};

const ButtonContent = styled.button`
  display: inline-flex;
  background-color: #dfdfdf;
  border-style: none;

  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  border-radius: 0.375rem;

  font-weight: 600;
  font-size: 0.75rem;
  color: var(--accent-text-color);

  min-width: 6rem;
  justify-content: center;

  .hover: {
    background-color: rgba(67, 56, 202, 1);
  }
`;

export default Button;
