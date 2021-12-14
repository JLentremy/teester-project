type TitleProps = {
  label: string;
};

const Title = ({ label }: TitleProps) => {
  return <h1 style={style.title}>{label}</h1>;
};

const style = {
  title: {
    display: "flex",
    margin: 10,
    // color: "#7272FF",
    backgroundColor: "red",
  },
};

export default Title;
