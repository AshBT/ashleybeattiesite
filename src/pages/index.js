import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <h1>Hello rld!</h1>
      <p>What a world</p>
      <Link to="/about-css-modules">CSS MODULES</Link>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
      <button className="primary-button">Click Me!</button>
    </Layout>
  )
}
