export type ButtonProps = {
  label: string;
  disabled?: boolean;
  onClick: () => void;
};

const Button = ({ label, disabled, onClick }: ButtonProps) => {
  return (
    <button style={style.button} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

const style = {
  button: {
    display: "flex",
    margin: 10,
    backgroundColor: "red",
  },
};

export default Button;
