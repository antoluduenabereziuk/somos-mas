import React, { useState, useEffect } from 'react'
import Slider from '../components/Slider/Slider'
import { LastNovelties } from '../components/LastNovelties'
import { LastTestimonials } from '../components/LastTestimonials'
import Prueba from '../components/prueba'

export const Home = () => {
  
  const [ data, setData ] = useState({
    loading: true,
    title: "Cargando...",
    novelties: [
      {
        title: "cargando...",
        img_url: "url"
      },
      {
        title: "cargando...",
        img_url: "url"
      },
      {
        title: "cargando...",
        img_url: "url"
      },
      {
        title: "cargado...",
        img_url: "url"
      }
    ]
  })

  const { title, novelties, testimonials } = data

  useEffect(() => {

    // Inside this hook, we have to declare 

    setTimeout(() => {
      setData({
        loading: false,
        title: "Título de bienvenida",
        novelties: [
          {
            title: "Hola mundo",
            img_url: "https://picsum.photos/id/237/300",
            alt_text: "Hola mundo"
          },
          {
            title: "Meme",
            img_url: "https://picsum.photos/id/237/300",
            alt_text: "Hola mundo"
          },
          {
            title: "Somos Más",
            img_url: "https://picsum.photos/id/237/300",
            alt_text: "Hola mundo"
          },
          {
            title: "Gente de todos",
            img_url: "https://picsum.photos/id/238/300",
            alt_text: "Hola mundo"
          }
        ]
      })
    }, 5000)
  }, [])

  return (
    <div>
        { !data.loading  
        ?
        <div>
          <Slider /> 
          <h1>{ title }</h1>
          <LastNovelties novelties={ novelties } />
        </div>
        :
        <div>
          <Slider /> 
          <h1>{ title }</h1>
          <LastNovelties novelties={ novelties } />
        </div>
        }
    </div>
  )
}
