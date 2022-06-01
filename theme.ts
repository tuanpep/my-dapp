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

export interface Theme {
  //   font: IFont;
  //   screen: IScreen;
  //   spacing: ISpacing;
  //   shadows: IShadows;
  //   radius: IRadius;
  //   zIndex: IZIndex;
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
};

export default theme;
