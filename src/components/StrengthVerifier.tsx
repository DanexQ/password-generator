import styled from "styled-components";

interface props {
  strength: number;
}

const StrengthVerifier = ({ strength }: props): JSX.Element => {
  return (
    <VerifierContainer>
      Strength:
      <StrengthScale strength={strength}>
        <StrengthUnit></StrengthUnit>
        <StrengthUnit></StrengthUnit>
        <StrengthUnit></StrengthUnit>
        <StrengthUnit></StrengthUnit>
        <StrengthUnit></StrengthUnit>
      </StrengthScale>
    </VerifierContainer>
  );
};

export default StrengthVerifier;

const VerifierContainer = styled.div`
  background-color: #1b1b1b;
  padding: 1rem 2rem;
  border-radius: 5px;
  grid-column: 1/3;
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #646464;
`;

const StrengthUnit = styled.div`
  width: 10px;
  height: 30px;
  background-color: red;
  border: 1px solid white;
  border-radius: 2px;
`;

const StrengthScale = styled.div<{ strength: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4rem;
  gap: 0.5rem;

  > *:nth-child(-n + ${({ strength }) => strength}) {
    background-color: green;
  }
`;
