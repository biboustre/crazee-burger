import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function OrderPage() {
  // state (état, données)
  const { username } = useParams();
  // Comportement (fonctions, effets)


  // affichage (render)
  return (
    <section>
      <h1>Bienvenue, {username} !</h1>
      <Link to="/"><button>Deconnexion</button></Link>
    </section>
  )
}
