import styled from "styled-components";

export const TemplateContainer = styled.main`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 1200px;
  height: 630px;
  padding: 64px;
  border: 8px solid ${({ theme }) => theme.title};
  background-color: ${({ theme }) => theme.background};
`;

type TitleProps = {
  titleLength: number;
};

export const Title = styled.h1<TitleProps>`
  color: ${({ theme }) => theme.title};
  font-size: ${({ titleLength }) => (titleLength > 60 ? "72px" : "100px")};
`;

export const Author = styled.p`
  color: ${({ theme }) => theme.author};
  font-size: 32px;
  font-weight: 700;
`;

export const WebsiteUrl = styled.p`
  color: ${({ theme }) => theme.websiteUrl};
  font-size: 32px;
  font-weight: 200;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  border: solid 2px ${({ theme }) => theme.title};
  margin-right: 24px;
`;

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
`;
