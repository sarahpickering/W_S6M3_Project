import React from 'react'

export default function Figure({ imageURL, caption }) {
    return  (
      <figure>
            <img src={imageURL} />
            <figcaption>Look at this incredible photo taken on {caption}</figcaption>
          </figure>
    )
  }