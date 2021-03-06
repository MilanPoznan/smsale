import { DefaultTheme } from "styled-components";

export const theme = {
  colors: {
    primary: '#FEE715',
    primaryDark: '#FFB408',
    primary2: '#E8BB07',
    secondary: '#101820',
  },
  fonts: ["arial", "Roboto"],
  defaultGradients: {
    heat: 'linear-gradient(to right, #fec95e -1%, #f86262 101%)',
    illustrations: 'linear-gradient(91deg, #377ade 18%, #7cb0ff 91%)',
    chart: 'linear-gradient(to bottom, rgba(2, 132, 254, 0.12), rgba(2, 132, 254, 0))'
  },
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
}
