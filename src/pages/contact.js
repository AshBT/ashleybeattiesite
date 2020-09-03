import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default function Contact() {
  return (
    <Layout>
      <Link to="/">Home</Link>
      <Header headerText="Contact" />
      <p>
        <a href="mailto: ashley.beattie@gmail.com">ashley.beattie@gmail.com</a>
      </p>
    </Layout>
  )
}
