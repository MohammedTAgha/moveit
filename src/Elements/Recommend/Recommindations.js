import React from "react";
import styled from "styled-components";

import {HeadTitle} from "../";
import {FilmSlider} from "../";

function Recommendations() {
  const FilmsGroupe = styled.section`
    margin-top: 20px;
    align-items: center;
    width: 90%;
    margin-left: 50px;
  `;
  return (
    <>
      <FilmsGroupe>
        <HeadTitle>Recomminded</HeadTitle>
        <FilmSlider />
      </FilmsGroupe>
    </>
  );
}

export default Recommendations;
