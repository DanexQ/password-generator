import { StyledContainer } from "./StyledContainer";
import styled from "styled-components";
import StrengthVerifier from "./StrengthVerifier";
import { DataForm } from "../interfaces/interfaces";
import React from "react";

interface Generator {
  dataForm: DataForm;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const GeneratorForm = ({ dataForm, handleChange, handleSubmit }: Generator) => {
  return (
    <StyledContainer>
      <PasswordLength>
        <h2>Password length</h2>
        <span>{dataForm.passwordLength}</span>
      </PasswordLength>
      <StyledForm onSubmit={(e) => handleSubmit(e)}>
        <Slider
          name="passwordLength"
          type="range"
          min="8"
          max="20"
          value={dataForm.passwordLength}
          style={{ gridColumn: "1/3" }}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="checkbox"
          checked={dataForm.includeUpper}
          name="includeUpper"
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="includeUpper">Include Upper Case Letters</label>
        <input
          type="checkbox"
          checked={dataForm.includeLower}
          name="includeLower"
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="includeLower">Include Lower Case Letters</label>
        <input
          type="checkbox"
          checked={dataForm.includeNumbers}
          name="includeNumbers"
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="includeNumbers">Include Numbers</label>
        <input
          type="checkbox"
          checked={dataForm.includeSymbols}
          name="includeSymbols"
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="includeSymbols">Include Symbols</label>
        <StrengthVerifier dataForm={dataForm} />
        <SubmitButton>GENERATE PASSWORD</SubmitButton>
      </StyledForm>
    </StyledContainer>
  );
};

export default GeneratorForm;

const StyledForm = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-rows: repeat(4, max-content);
  align-items: center;
  column-gap: 1rem;
  row-gap: 1rem;
  font-size: 1.5rem;

  input[type="checkbox"] {
    -webkit-appearance: none;
    width: 2rem;
    height: 2rem;
    background: #1b1b1b;
    border-radius: 5px;
    cursor: pointer;

    &:checked {
      background: green;
    }
  }
`;

const PasswordLength = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  span {
    color: green;
    font-size: 2.5rem;
  }
`;

const Slider = styled.input`
  -webkit-appearance: none;
  background: #1b1b1b;
  border-radius: 20px;
  height: 10px;
  margin: 1rem 0;
  width: 90%;
  justify-self: center;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: green;
    width: 25px;
    height: 25px;
    border-radius: 20px;
    transition: all 0.2s;
  }

  &:hover {
    &::-webkit-slider-thumb {
    }
  }
`;

const SubmitButton = styled.button`
  justify-self: center;
  grid-column: 1/3;
  width: max-content;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  color: green;
  background-color: transparent;
  border: 4px solid green;
  font-weight: 700;
  font-family: inherit;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.2s;
  border-radius: 5px;
  opacity: 1;

  &:hover {
    background-color: green;
    color: #343434;
    border: 4px solid #343434;
  }

  &:disabled {
    opacity: 0.3;
  }
`;
