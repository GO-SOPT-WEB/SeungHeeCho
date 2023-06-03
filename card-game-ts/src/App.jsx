import { useState } from 'react';
import { ThemeProvider } from "styled-components";
import FindMonkey from './pages/findMonkey';
import ResetButton from './components/ResetButton';
import GlobalStyle from "./styles/globalStyle";
import theme from "./styles/theme";
import { RecoilRoot } from "recoil";

function App() {
  const [correct, setCorrect] = useState(0); 

  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <FindMonkey correct={correct} setCorrect={setCorrect} />
        <ResetButton setCorrect={setCorrect}/>
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default App


