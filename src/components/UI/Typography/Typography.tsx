import { TypographyTypes } from 'constants/types';
import { FC } from 'react';
import { PropsTypographyStyle, TypographyStyle } from './style';

type Props = {
  type: TypographyTypes;
  children?: React.ReactNode;
};

const Typography: FC<Props> = ({ type, children }: Props) => {
  let styleType: PropsTypographyStyle = {
    fontFamily: 'Space Grotesk',
    fontSize: 'xl',
    fontWeight: 'semiBold',
  };

  switch (type) {
    case 'hero':
      styleType = {
        fontFamily: 'Space Grotesk',
        fontSize: 'xl',
        fontWeight: 'semiBold',
      };
      break;

    case 'h1':
      styleType = {
        fontFamily: 'Space Grotesk',
        fontSize: 'lg',
        fontWeight: 'semiBold',
      };
      break;

    case 'body':
      styleType = {
        fontFamily: 'Inter',
        fontSize: 'md',
        fontWeight: 'medium',
      };
      break;

    case 'body-small':
      styleType = {
        fontFamily: 'Inter',
        fontSize: 'sm',
        fontWeight: 'regular',
      };
      break;

    case 'button':
      styleType = {
        fontFamily: 'Space Grotesk',
        fontSize: 'sm',
        fontWeight: 'bold',
      };
      break;
    default:
      break;
  }
  return (
    <TypographyStyle
      fontFamily={styleType.fontFamily}
      fontSize={styleType.fontSize}
      fontWeight={styleType.fontWeight}
    >
      {children}
    </TypographyStyle>
  );
};

export default Typography;
