import { StyledContainer } from "./StyledContainer";
import styled from "styled-components";
import StrengthVerifier from "./StrengthVerifier";
import { DataForm } from "../interfaces/interfaces";
import React, { useState, useEffect } from "react";

interface Generator {
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

interface requirements {
  includeUpper: boolean;
  includeLower: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
}

const charCombination = ({
  includeUpper,
  includeLower,
  includeNumbers,
  includeSymbols,
}: requirements) => {
  let chars = "";
  if (includeLower) chars = chars.concat("bcdfghjklmnpqrstvwxz");
  if (includeUpper) chars = chars.concat("BCDFGHJKLMNPQRSTVWXZ");
  if (includeNumbers) chars = chars.concat("1234567890");
  if (includeSymbols) chars = chars.concat("!@#$%^&*");
  return chars;
};

const GeneratorForm = ({ setPassword }: Generator) => {
  const [dataForm, setDataForm] = useState<DataForm>({
    passwordLength: 0,
    includeUpper: false,
    includeLower: false,
    includeNumbers: false,
    includeSymbols: false,
  });
  const [combination, setCombination] = useState(() =>
    charCombination(dataForm)
  );

  useEffect(() => {
    setCombination(() => charCombination(dataForm));
  }, [
    dataForm.includeLower,
    dataForm.includeUpper,
    dataForm.includeNumbers,
    dataForm.includeSymbols,
  ]);

  useEffect(() => {
    setDataForm((prevData) => ({
      ...prevData,
      passwordLength:
        prevData.passwordLength > combination.length
          ? combination.length
          : prevData.passwordLength,
    }));
  }, [combination]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setDataForm((prevData) => ({
      ...prevData,
      [name]: name.startsWith("include") ? checked : value,
    }));
  };

  const canGenerate = Object.values(dataForm).some((key) => key === true);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let functionCombination = combination;
    let newPassword = "";
    for (let i = 0; i < dataForm.passwordLength; i++) {
      console.log(i);
      const randomNumber = Math.floor(
        Math.random() * functionCombination.length
      );
      newPassword = newPassword + functionCombination.at(randomNumber);
      functionCombination =
        functionCombination.slice(0, randomNumber) +
        functionCombination.slice(randomNumber + 1);
    }
    setPassword(newPassword);
  };

  return (
    <StyledContainer>
      <PasswordLength>
        <h2>Password length</h2>
        <span>{dataForm.passwordLength}</span>
      </PasswordLength>
      <StyledForm onSubmit={handleSubmit}>
        <Slider
          name="passwordLength"
          type="range"
          min="8"
          max={combination.length}
          value={dataForm.passwordLength}
          onChange={handleChange}
          step="1"
        />
        <input
          type="checkbox"
          checked={dataForm.includeUpper}
          name="includeUpper"
          onChange={handleChange}
        />
        <label htmlFor="includeUpper">Include Upper Case Letters</label>
        <input
          type="checkbox"
          checked={dataForm.includeLower}
          name="includeLower"
          onChange={handleChange}
        />
        <label htmlFor="includeLower">Include Lower Case Letters</label>
        <input
          type="checkbox"
          checked={dataForm.includeNumbers}
          name="includeNumbers"
          onChange={handleChange}
        />
        <label htmlFor="includeNumbers">Include Numbers</label>
        <input
          type="checkbox"
          checked={dataForm.includeSymbols}
          name="includeSymbols"
          onChange={handleChange}
        />
        <label htmlFor="includeSymbols">Include Symbols</label>
        <StrengthVerifier dataForm={dataForm} />
        <SubmitButton disabled={!canGenerate}>GENERATE PASSWORD</SubmitButton>
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
    transition: all 0.2s;

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
  grid-column: 1/3;
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
