import { Dimensions, PixelRatio } from "react-native";
import { useAppSelector } from "../redux/hooks";
import { useSelector } from "react-redux";

const { width, height } = Dimensions.get("screen");

export const screenWidth = width < height ? width : height;

export const screenHeight = width < height ? height : width;

export const responsiveWidth = (size:number) => {
  const responsiveValue = screenWidth / 375;
  return responsiveValue * size;
};

export const responsiveHeight = (size:number) => {
  const responsiveValue = screenHeight / 812;
  return responsiveValue * size;
};

// const sizeFactor = 1.25;

export const respFontSize = (size: number, sizeFactor: number) => {
  const font = useSelector(state=>state.font)
  console.log("Size Factor====> ",font.sizeFactor)
 return responsiveWidth(size * font.sizeFactor) / PixelRatio.getFontScale();
}