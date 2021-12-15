import styled from "@emotion/styled";
import Input, { InputProps } from "../../Input";
import Text, { TextType } from "../../Text";
import { ItemProps } from "../types";

const InfosItemComp = ({ title, inputs }: ItemProps) => {
  return (
    <InfosItem>
      <Text label={title} type={TextType.title} accent />
      <Inputs>
        {inputs.map((input: InputProps, key) => (
          <Input
            key={key}
            label={input.label}
            type={input.type}
            value={input.value}
          />
        ))}
      </Inputs>
    </InfosItem>
  );
};

const Flex = styled.div`
  display: flex;
`;
const FlexCol = styled(Flex)`
  flex-direction: column;
`;
const InfosItem = styled(FlexCol)`
  margin-bottom: var(--md-size);
`;
const Inputs = styled(Flex)`
  flex: 1;
  flex-wrap: wrap;
  width: calc(100% + var(--sm-size) * 2);
  margin-right: calc(var(--sm-size) * -1);
  margin-left: calc(var(--sm-size) * -1);
  margin-bottom: var(--md-size);
`;

export default InfosItemComp;
