import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeObjType {}
}

export const Themes: ThemesType = {
  nightOwl: {
    background: "rgb(1, 22, 39)",
    title: "rgb(199, 146, 234)",
    websiteUrl: "rgb(130, 170, 255)",
    author: "rgb(240, 113, 120)"
  },
  default: {
    background: "rgb(0, 0, 0)",
    title: "rgb(255, 255, 255)",
    websiteUrl: "rgb(255, 255, 255)",
    author: "rgb(255, 255, 255)"
  },
  github: {
    background: "rgb(240, 240, 240)",
    title: "rgb(47,54,60)",
    websiteUrl: "rgb(215, 58, 73)",
    author: "rgb(0, 92, 197)"
  },
  matrix: {
    background: "rgb(0, 51, 0)",
    title: "rgb(0, 255, 0)",
    websiteUrl: "rgb(255, 102, 102)",
    author: "rgb(204, 255, 204)"
  },
  dracula: {
    background: "rgb(25, 26, 33)",
    title: "rgb(189, 147, 249)",
    websiteUrl: "rgb(248, 248, 242)",
    author: "rgb(255, 121, 198)"
  },
  tinacious: {
    background: "rgb(236, 236, 236)",
    title: "rgb(255, 51, 153)",
    websiteUrl: "rgb(68, 66, 94)",
    author: "rgb(0, 174, 232)"
  },
  shadesOfPurple: {
    background: "rgb(45, 43, 85)",
    title: "rgb(179, 98, 255)",
    websiteUrl: "rgb(158, 255, 255)",
    author: "rgb(255, 157, 0)"
  }
};

export interface ThemeObjType {
  background: string;
  title: string;
  websiteUrl: string;
  author: string;
}

type ThemesType = {
  [key: string]: DefaultTheme;
};
