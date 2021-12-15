import styled from "@emotion/styled";

type ItemProps = {
  letter: string;
  scale?: number;
};

const AvatarComp = ({ letter, scale = 1 }: ItemProps) => {
  return (
    <Avatar scale={scale}>
      <div>{letter}</div>
    </Avatar>
  );
};

const Avatar = styled.div<{ scale?: ItemProps["scale"] }>`
  display: flex;
  width: calc(var(--xl-size) * ${(props) => props.scale});
  height: calc(var(--xl-size) * ${(props) => props.scale});
  margin: var(--md-size);

  border-radius: var(--full-roundness);
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  text-align: center;

  color: var(--accent-text-color);
  background-color: var(--picture-bg-color);

  > div {
    width: ${(props) => props.scale}rem;
    height: ${(props) => props.scale}rem;
    font-size: ${(props) => props.scale}rem;
    line-height: ${(props) => props.scale}rem;
    margin-bottom: ${(props) => props.scale}px;
  }
`;

export default AvatarComp;
