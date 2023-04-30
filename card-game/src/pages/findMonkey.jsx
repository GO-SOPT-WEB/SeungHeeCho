import styled from 'styled-components';

import { useState } from 'react';
import CardSectionLayout from '../components/CardSectionLayout';
import HeaderLayout from '../components/HeaderLayout';

export default function FindMonkey({correct, setCorrect}) {
    const [all, setAll] = useState(7);

  return (
    <MainBox>
        <HeaderLayout correct={correct} all={all}/>
        <CardSectionLayout all={all}/>
    </MainBox>
  )
}

const MainBox = styled.main`
  display:flex;
  flex-direction: column;

  position: absolute;
  
  width: 100%;
  
`