import React from 'react'
import { useParams } from "react-router-dom";
import styled from "styled-components";


const DayCard = () => {

  const {area} = useParams();

  console.log("어딨니");
  console.log(area);

  return (
    <h1>아랄ㄹ라라라라라라라{area}</h1>
  )
}

export default DayCard
