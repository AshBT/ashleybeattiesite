import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default function About() {
  return (
    <Layout>
      <Link to="/contact">Contact</Link>
      <Header headerText="About MEEEE!" />
      <Header headerText="About ME@#@#!" />
      <p>such wow.</p>
    </Layout>
  )
}
