import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card'

const api_key = 'DEMO_KEY'
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`



function App() {
  const [apod, setApod] = useState()
  useEffect(() => {
    function fetchPhoto() {
      axios.get(URL)
        .then(res => {
          console.log(res.data)
          setApod(res.data)
        })
        .catch(err => {
          console.log(err.message)
        })
    }
    //fetchPhoto()
    setApod({
      "date": "2024-09-07",
      "explanation": "Mars has two tiny moons, Phobos and Deimos, named for the figures in Greek mythology Fear and Panic. Detailed surface views of smaller moon Deimos are shown in both these panels. The images were taken in 2009, by the HiRISE camera on board the Mars Reconnaissance Orbiter spacecraft, NASA's long-lived interplanetary internet satellite. The outermost of the two Martian moons, Deimos is one of the smallest known moons in the Solar System, measuring only about 15 kilometers across.  Both Martian moo...",
      "hdurl": "https://apod.nasa.gov/apod/image/2409/PIA11826.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Small Moon Deimos",
      "url": "https://apod.nasa.gov/apod/image/2409/PIA11826_c.jpg"
    })
  }, [])
  if (!apod) return 'Fetching Photo of the Day...'
  

  return (
    <section>
      <Card
        title={apod.title} 
        text={apod.explanation} 
        imageURL={apod.url} 
        date={apod.date}
      />
        </section>
  )
}

export default App
