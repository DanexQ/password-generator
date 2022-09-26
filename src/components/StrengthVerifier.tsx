import styled from "styled-components";
import { DataFormObj } from "../interfaces/interfaces";

const StrengthVerifier = ({ dataForm }: DataFormObj): JSX.Element => {
  return <VerifierContainer>Strength:</VerifierContainer>;
};

export default StrengthVerifier;

const VerifierContainer = styled.div`
  grid-column: 1/3;
  margin: 1rem 0;
`;
