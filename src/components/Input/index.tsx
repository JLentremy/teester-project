import Title from "../Title";

export type InputProps = {
  label: string;
  type: any;
};

const Input = ({ label, type }: InputProps) => {
  return (
    <div>
      <Title label={label} />
      <input style={style.input} type={type}></input>
    </div>
  );
};

const style = {
  input: {
    display: "flex",
    padding: 10,
    backgroundColor: "blue",
  },
};

export default Input;
