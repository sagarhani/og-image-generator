import styled from "styled-components";
import { colors } from "./tokens";

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0px 64px;
  align-items: center;
  gap: 60px;
`;

export const FormContainer = styled.div`
  flex-grow: 0.5;
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div {
      display: flex;
      flex-direction: column;
      margin-bottom: 18px;
    }
    div:last-child {
      margin-bottom: 0;
    }
  }
  @media only screen and (max-width: 950px) {
    flex-direction: column;
    flex-grow: 1;
  }
`;

export const PreviewContainer = styled.div``;

export const TextInput = styled.input`
  padding: 8px 18px;
  border-radius: 4px;
  border: 1px solid ${colors.secondary};
  font-size: 14px;
  color: ${colors.primary};
  line-height: 1.6;

  :focus-visible {
    outline: none;
    box-shadow: 0 2px 6px rgb(0 0 0 / 10%);
  }

  :hover {
    box-shadow: 0 2px 6px rgb(0 0 0 / 10%);
    border-color: ${colors.secondary};
  }
`;

export const Label = styled.label`
  opacity: 0.5;
  margin-bottom: 6px;
  font-size: 12px;
  text-transform: uppercase;
`;

export const Dropdown = styled.select`
  padding: 8px 18px;
  border-radius: 4px;
  border: 1px solid ${colors.secondary};
  font-size: 14px;
  color: ${colors.primary};
  line-height: 1.6;
  appearance: none;
  outline: none;
  border: 1px solid ${colors.secondary};
  border-radius: 4px;
  white-space: nowrap;

  :hover {
    cursor: pointer;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  font-weight: bold;
  font-size: 24px;
  color: ${colors.primary};
  margin: 12px 0 14px 0;
`;

const buttonStyles = `
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  border-radius: 4px;
  font-size: 14px;
  color: #fff;
  box-shadow: 0 3px 5px 0 rgb(1 12 14 / 25%);
  border: 1px solid transparent;
  transition: box-shadow 0.2s ease-in-out;
  text-shadow: 0 1px 0 rgb(1 12 14 / 25%);
  gap: 12px;
  flex-basis: 0;

  @media only screen and (max-width: 950px) {
    flex-basis: 100%;
  }

  img {
    height: 22px;
    width: 22px;
  }

  :hover {
    cursor: pointer;
    box-shadow: 0 3px 5px 0 rgb(1 12 14 / 25%);
  }
`;

export const DownloadButton = styled.a`
  ${buttonStyles}
  flex-grow: 1;
  flex-shrink: 0;
  background-image: linear-gradient(130deg, ${colors.lightRed}, ${colors.red});
`;

export const CopyButton = styled.a`
  ${buttonStyles}
  flex-grow: 1;
  flex-shrink: 0;
  background-image: linear-gradient(
    130deg,
    ${colors.lightBlue},
    ${colors.blue}
  );
`;

export const ImageActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-top: 18px;
  flex-wrap: wrap;
`;

export const PreviewImageContainer = styled.div`
  box-shadow: 4px 6px 7px 0px rgb(0 0 0 / 20%);

  :hover {
    cursor: pointer;
    box-shadow: 6px 7px 7px 0px rgb(0 0 0 / 20%);
  }
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SvgWithShadow = styled.img`
  filter: drop-shadow(0 1px 0 rgb(1 12 14 / 25%));
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  margin: 0 25%;
  margin-top: 45px;
  margin-bottom: 20px;

  @media only screen and (max-width: 950px) {
    margin: 0 10%;
  }

  .highlight {
    color: ${colors.red};
    text-shadow: 0 1px 0 rgb(161 106 106 / 25%);
  }
`;

export const Heading = styled.h3`
  align-self: center;
  color: ${colors.blue};
  font-size: 24px;
  text-shadow: 0 1px 0 rgb(1 12 14 / 25%);
  border-bottom: 2px solid ${colors.lightRed};
`;

export const Paragraph = styled.p``;

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  font-size: 12px;
  opacity: 0.6;
  padding-bottom: 12px;
`;

export const Link = styled.a`
  color: ${colors.lightRed};

  :hover {
    color: #fff;
    background-color: ${colors.lightBlue};
  }
`;

export const CodeContainer = styled.div`
  padding: 24px;
  font-family: monospace;
  border: 1px dashed ${colors.lightRed};
  border-radius: 4px;
  background: #b5c7f730;
  box-shadow: 0 2px 6px rgb(0 0 0 / 10%);
  font-size: 14px;
  word-break: break-all;
  letter-spacing: 0.2px;
  user-select: all;

  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
