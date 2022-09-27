import styled from "styled-components";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useState } from "react";

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 600px;
  padding: 2rem;
  background-color: #343434;
  font-size: 2rem;
`;

const PasswordContainer = ({ password }: { password: string }): JSX.Element => {
  const [text, setText] = useState("Copy to clipboard");
  const handleClick = () => {
    navigator.clipboard.writeText(password);
    setText("Copied successfully!");
  };

  const handleMouseOut = () => {
    setText("Copy to clipboard");
  };

  return (
    <StyledContainer>
      <MyNewPassword>{password}</MyNewPassword>
      <StyledButton onClick={handleClick} onMouseOut={handleMouseOut}>
        <ContentCopyIcon />
        <Announcement>{text}</Announcement>
      </StyledButton>
    </StyledContainer>
  );
};

export default PasswordContainer;

const MyNewPassword = styled.h2`
  font-size: 2rem;
  overflow: auto;
  margin-right: 1.5rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledButton = styled.button`
  position: relative;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 5;
  display: flex;
  align-items: center;

  &:hover {
    p {
      opacity: 1;
    }
  }

  > svg {
    color: green;
    font-size: 2rem !important;
    z-index: 4;
  }
`;

const Announcement = styled.p`
  font-size: 1rem;
  padding: 0.5rem;
  position: absolute;
  border-radius: 5px;
  background-color: green;
  top: 0;
  left: 50%;
  transform-origin: center;
  transform: translate(-50%, -100%);
  opacity: 0;
`;
