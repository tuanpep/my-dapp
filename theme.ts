export type ColorPalettes =
  | 'brown'
  | 'dark'
  | 'greenDark'
  | 'greenMidnight'
  | 'blueMidnight'
  | 'green'
  | 'pink';

export interface IColors {
  general: { [key in ColorPalettes]: string };
}
interface IFont {
  family: string;
  weight: { [key in FontWeight]: string };
  size: { [key in FontSize]: string };
}

export type FontWeight = 'light' | 'normal' | 'bold';
export type FontSize = 'sm' | 'md' | 'lg' | 'xl';

export interface Theme {
  font: IFont;
  colors: IColors;
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
    },
  },

  font: {
    family: 'Space Grotesk' || 'Inter',
    weight: {
      light: '300',
      normal: '400',
      bold: '600',
    },
    size: {
      sm: '14px',
      md: '16px',
      lg: '20px',
      xl: '64px',
    },
  },
};

export default theme;
