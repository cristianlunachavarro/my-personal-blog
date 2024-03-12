import { StyleSheet } from "react-native";

interface ColorStyles {
  shipGray: string;
  darkViolet: string;
  lightViolet: string;
  coolGray: string;
  slateGray: string;
  white: string;
  red: string;
}

const colors = StyleSheet.create<ColorStyles>({
  shipGray: "#808d8e",
  darkViolet: "#766C7F",
  lightViolet: "#947EB0",
  coolGray: "#A3A5C3",
  slateGray: "#224244",
  white: "#fff",
  red: "#ba2d20",
});

export default colors;
