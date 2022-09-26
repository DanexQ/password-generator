import styled from "styled-components";
import GeneratorForm from "./components/GeneratorForm";
import PasswordContainer from "./components/PasswordContainer";
import { DataForm } from "./interfaces/interfaces";
import React, { useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [dataForm, setDataForm] = useState<DataForm>({
    passwordLength: 8,
    includeUpper: false,
    includeLower: false,
    includeNumbers: false,
    includeSymbols: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setDataForm((prevData) => ({
      ...prevData,
      [name]: name.startsWith("include") ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    let letters = "abcdefghijklmnopqrstuvwxyz";
    let newPassword = "";
    for (let i = 0; i < dataForm.passwordLength; i++) {
      const randomNumber = Math.floor(Math.random() * letters.length);
      newPassword = newPassword + letters.at(randomNumber);
      letters =
        letters.slice(0, randomNumber) + letters.slice(randomNumber + 1, -1);
    }
    setPassword(newPassword);
  };

  return (
    <Main>
      <Title>PASSWORD GENERATOR</Title>
      <PasswordContainer password="3$gFid#s2" />
      <GeneratorForm
        dataForm={dataForm}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </Main>
  );
}

export default App;

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  max-width: 100vw;
  height: 100vh;
  background-color: #1b1b1b;
  color: #fff;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
`;
