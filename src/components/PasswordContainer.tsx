import styled from "styled-components";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  padding: 2rem;
  background-color: #343434;
  font-size: 2rem;
`;

const PasswordContainer = ({ password }: { password: string }): JSX.Element => {
  return (
    <StyledContainer>
      {password}
      <ContentCopyIcon style={{ color: "green" }} />
    </StyledContainer>
  );
};

export default PasswordContainer;
