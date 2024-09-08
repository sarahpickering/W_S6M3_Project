import React from 'react'
import styled from 'styled-components'

const StyledFigure = styled.figure`
  max-width: 70%;

  figcaption {
    font-style: bold, italic;
  }

`

export default function Figure({ imageURL, caption }) {
    return  (
      <figure>
            <img src={imageURL} />
            <figcaption>Look at this incredible photo taken on {caption}</figcaption>
          </figure>
    )
  }