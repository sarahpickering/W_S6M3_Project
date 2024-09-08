import React from 'react'
import Figure from './Figure'
import styled from 'styled-components'

const StyledCard = styled.div`
  border: 1px solid maroon;
  border-radius: 12px;
  padding: 2rem;
  background-color: whitesmoke;
  

  h2 {
    color: navy;
    font-size: 3em;
    margin: 0 0 1rem 0;
  }

  p {
    background-color: whitesmoke;
    margin: 0 0 1rem 0;

    &::first-line {
      font-size: 1.5em;
    }
  }
  `;

export default function Card({ title, text, imageURL, date }) {
    return (
      <StyledCard $color="lime" className='card'>
          <h2>{title}</h2>
          <p>{text}</p>
          <Figure
            imageURL={imageURL}
            caption={date}
            />
          </StyledCard>
    )
  }