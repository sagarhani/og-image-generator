import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding: 0px 64px;
  height: calc(100vh - 64px);
  margin-top: -64px;
  align-items: center;

  @media only screen and (max-width: 950px) {
    flex-direction: column;
  }
`;

export const FormContainer = styled.div`
  padding: 0px 24px;
  flex: 0.5;
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div {
      display: flex;
      flex-direction: column;
      margin-bottom: 18px;
    }
  }
`;

export const PreviewContainer = styled.div``;

export const TextInput = styled.input`
  padding: 8px 18px;
  border-radius: 4px;
  border: 1px solid #d3dae8;
  font-size: 14px;
  color: #2e3645;
  line-height: 1.6;

  :focus-visible {
    outline: none;
    box-shadow: 0 2px 6px rgb(0 0 0 / 10%);
  }

  :hover {
    box-shadow: 0 2px 6px rgb(0 0 0 / 10%);
    border-color: #d3dae8;
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
  border: 1px solid #d3dae8;
  font-size: 14px;
  color: #2e3645;
  line-height: 1.6;
  appearance: none;
  outline: none;
  border: 1px solid #eaeaea;
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
  color: #2e3645;
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
  

  img {
    height: 22px;
    width: 22px;
    margin-right: 10px;
  }

  :hover {
    cursor: pointer;
    box-shadow: 0 3px 5px 0 rgb(1 12 14 / 25%);
  }
`;

export const DownloadButton = styled.a`
  ${buttonStyles}
  background-image: linear-gradient(130deg, #fc4c6a, #f6415f);
`;

export const CopyButton = styled.button`
  ${buttonStyles}
  background-image: linear-gradient(130deg, #4a7bff, #2862ff);
`;

export const ImageActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 18px;
`;

export const PreviewImageContainer = styled.div`
  box-shadow: 4px 6px 7px 0px rgb(0 0 0 / 20%);

  :hover {
    cursor: pointer;
    box-shadow: 6px 7px 7px 0px rgb(0 0 0 / 20%);
  }
`;
