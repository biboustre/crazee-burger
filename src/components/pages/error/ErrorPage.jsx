import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <section>
      <h1>ErrorPage</h1>
      <Link to="/"><button>Retour vers la page d'accueil</button></Link>
    </section>
  )
}
