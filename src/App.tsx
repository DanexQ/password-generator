import styled from "styled-components";
import GeneratorForm from "./components/GeneratorForm";
import PasswordContainer from "./components/PasswordContainer";
import { useState } from "react";

function App() {
  const [password, setPassword] = useState("");

  return (
    <Main>
      <Title>PASSWORD GENERATOR</Title>
      <PasswordContainer password={password} />
      <GeneratorForm setPassword={setPassword} />
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
