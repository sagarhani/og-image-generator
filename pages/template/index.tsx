import React, { FC } from "react";
import { GetServerSideProps } from "next";

const Template: FC<OgImageContent> = ({
  title,
  author,
  avatar,
  websiteUrl
}) => {
  return (
    <main>
      <p>Author: {author} </p>
      <p>title: {title} </p>
      <p>avatar: {avatar} </p>
      <p>websiteUrl: {websiteUrl} </p>
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const cardContent = context?.query;
  return {
    props: cardContent
  };
};

export default Template;
