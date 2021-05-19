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
  }
};

export type ThemeObjType = {
  background: string;
  title: string;
  websiteUrl: string;
  author: string;
};

type ThemesType = {
  [key: string]: ThemeObjType;
};
