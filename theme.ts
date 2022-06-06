export type ColorPalettes =
  | 'brown'
  | 'dark'
  | 'greenDark'
  | 'greenMidnight'
  | 'blueMidnight'
  | 'green'
  | 'pink'
  | 'yellow'
  | 'white'
  | 'grey'
  | 'whiteTransparent';

export type FontFamily = 'Space Grotesk' | 'Inter';
export type FontWeight = 'semiBold' | 'regular' | 'medium' | 'bold';
export type FontSize = 'sm' | 'md' | 'lg' | 'xl';
export type ZIndex = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type Spacing = 'none' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type Screen = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';

export interface IColors {
  general: { [key in ColorPalettes]: string };
}
interface IFont {
  family?: FontFamily;
  weight: { [key in FontWeight]: string };
  size: { [key in FontSize]: string };
}
type IZIndex = { [key in ZIndex]: number };
type ISpacing = { [key in Spacing]: string };
type IScreen = { [key in Screen]: string };

export interface Theme {
  font: IFont;
  colors: IColors;
  zIndex: IZIndex;
  spacing: ISpacing;
  screen: IScreen;
}

const theme: Theme = {
  colors: {
    general: {
      brown: '#391E25',
      dark: '#08121C',
      green: '#00CB65',
      greenDark: '#0F282A',
      greenMidnight: '#1F4E4A',
      pink: '#ED4B9E',
      blueMidnight: '#1C1C6F',
      yellow: '#F6B24F',
      white: '#FFFFFF',
      grey: '#2A3138',
      whiteTransparent: '#ffffffa5',
    },
  },

  font: {
    weight: {
      bold: '700',
      semiBold: '600',
      medium: '500',
      regular: '400',
    },
    size: {
      sm: '14px',
      md: '16px',
      lg: '20px',
      xl: '64px',
    },
  },

  zIndex: {
    xs: 10,
    sm: 20,
    md: 30,
    lg: 40,
    xl: 50,
  },
  spacing: {
    none: '0',
    xxs: '5px',
    xs: '10px',
    sm: '20px',
    md: '30px',
    lg: '40px',
    xl: '60px',
  },
  screen: {
    xs: '540px',
    sm: '640px',
    md: '1007px',
    lg: '1100px',
    xl: '1230px',
    xxl: '1440px',
    xxxl: '1920px',
  },
};

export default theme;
