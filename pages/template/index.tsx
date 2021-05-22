import React, { FC, useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import {
  TemplateContainer,
  Title,
  Author,
  WebsiteUrl,
  Avatar,
  FooterContainer
} from "../../styles/templateStyle";
import { ThemeProvider } from "styled-components";
import { Themes, ThemeObjType } from "../../utils/themes";

const Template: FC<OgImageContent> = ({
  title,
  author,
  avatar,
  websiteUrl,
  theme
}) => {
  const [selectedTheme, setSelectedTheme] = useState<ThemeObjType>(
    Themes["default"]
  );

  useEffect(() => {
    setSelectedTheme(Themes[theme]);
  }, []);

  const trimString = (string: string, count: number) => {
    if (string && string.length > count) {
      return string.substr(0, count) + "\u2026";
    }
    return string;
  };

  return (
    <ThemeProvider theme={selectedTheme || Themes.default}>
      <TemplateContainer>
        <Title titleLength={title.length}>{trimString(title, 70)}</Title>
        <FooterContainer>
          {avatar && (
            <Avatar alt={author} src={avatar} width={100} height={100} />
          )}
          <div>
            <Author>{author}</Author>
            <WebsiteUrl>{websiteUrl}</WebsiteUrl>
          </div>
        </FooterContainer>
      </TemplateContainer>
    </ThemeProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const cardContent = context?.query;
  return {
    props: cardContent
  };
};

export default Template;
