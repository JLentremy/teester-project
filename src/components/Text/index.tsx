import styled from "@emotion/styled";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Icon from "../Icon";

type TextProps = {
  label: string;
  iconLeft?: IconProp;
  type?: TextType;
  color?: string;
  accent?: boolean;
};
type StyleProps = {
  accent?: TextProps["accent"];
  color?: TextProps["color"];
};

export enum TextType {
  headtitle = "headtitle",
  title = "title",
  subtitle = "subtitle",
  text = "text",
  large = "large",
  small = "small",
}

const TextComp = ({
  label,
  iconLeft,
  type = TextType.text,
  ...styledProps
}: TextProps) => {
  switch (type) {
    case TextType.headtitle:
      return (
        <HeadTitle {...styledProps}>
          {iconLeft && <StyledIcon icon={iconLeft} aria-hidden="true" />}
          {label}
        </HeadTitle>
      );
    case TextType.title:
      return (
        <Title {...styledProps}>
          {iconLeft && <StyledIcon icon={iconLeft} aria-hidden="true" />}
          {label}
        </Title>
      );
    case TextType.subtitle:
      return (
        <Subtitle {...styledProps}>
          {iconLeft && <StyledIcon icon={iconLeft} aria-hidden="true" />}
          {label}
        </Subtitle>
      );
    case TextType.large:
      return (
        <Large {...styledProps}>
          {iconLeft && <StyledIcon icon={iconLeft} aria-hidden="true" />}
          {label}
        </Large>
      );
    case TextType.small:
      return (
        <Small {...styledProps}>
          {iconLeft && <StyledIcon icon={iconLeft} aria-hidden="true" />}
          {label}
        </Small>
      );
    case TextType.text:
    default:
      return (
        <Text {...styledProps}>
          {iconLeft && <StyledIcon icon={iconLeft} aria-hidden="true" />}
          {label}
        </Text>
      );
  }
};

const Text = styled.div<StyleProps>`
  font-size: var(--md-font);
  line-height: 1.25rem;
  align-items: center;

  ${(props) => props.color && `color: ${props.color}`};
  ${(props) => props.accent && "color: var(--accent-color)"};
`;
const Small = styled(Text)`
  font-size: var(--sm-font);
  line-height: 1.125rem;
`;
const Large = styled(Text)`
  font-weight: 600;
  text-transform: capitalize;
`;
const Title = styled(Large)`
  margin-bottom: var(--sm-size);
`;
const Subtitle = styled(Text)`
  font-size: calc(var(--md-font) / 1.125);
  font-weight: 600;
  margin-bottom: calc(var(--sm-size) / 2);
`;
const HeadTitle = styled(Large)`
  font-size: var(--xl-font);
  margin-top: calc(var(--sm-size) / 2);
  margin-bottom: var(--xl-size);
`;
const StyledIcon = styled(Icon)`
  margin-right: calc(var(--sm-size) / 1.25);
`;

export default TextComp;
