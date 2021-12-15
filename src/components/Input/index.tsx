import styled from "@emotion/styled";
import Icon from "../Icon";
import Text, { TextType } from "../Text";

export enum InputsType {
  text = "text",
  date = "date",
  address = "address",
}

export type InputProps = {
  label: string;
  value: string;
  type: InputsType;
};

const InputComp = ({ label, value, type }: InputProps) => {
  return (
    <Input type={type}>
      <Text label={label} type={TextType.subtitle} />
      <InputContainer>
        <StyledInput type={type} defaultValue={value}></StyledInput>
        {type === InputsType.date && (
          <StyledIcon icon="calendar" color={"var(--accent-color)"} />
        )}
      </InputContainer>
    </Input>
  );
};

const Flex = styled.div`
  display: flex;
`;
const FlexCol = styled(Flex)`
  flex-direction: column;
`;
const Input = styled(FlexCol)<{ type: InputProps["type"] }>`
  width: calc(
    ${(props) => (props.type === InputsType.address ? 100 : 50)}% -
      var(--sm-size) * 2
  );
  margin: var(--xs-size) var(--sm-size);
`;
const InputContainer = styled(Flex)`
  align-items: center;
  position: relative;
`;
const StyledInput = styled.input`
  flex: 1;
  appearance: none;
  border: 0;
  background-color: transparent;
  padding: var(--sm-size);
  border-radius: var(--roundness);
  background-color: var(--gray-bg-color);
  padding-right: ${(props) =>
    props.type === InputsType.date ? 2.5 : "var(--sm-size)"}rem;
`;
const StyledIcon = styled(Icon)`
  margin: 0 var(--md-size);
  height: var(--md-size);
  position: absolute;
  right: 0;
`;

export default InputComp;
