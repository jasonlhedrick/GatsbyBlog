import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Labs 1" />
    <h1>Labs 1 - Start Up</h1>
    <div className="content">
      <h2>Accomplishments</h2>
      <p>
        <h3>TDD</h3>
        During week one Kendra and I worked closely to ensure the TDD was filled out and completed on time.<br />
        I led the team on getting started on the TDD and started by laying out the framework for the idea portion. And the initial user journey.<br />
        I laid out the Architectural Recommendations portion of the TDD and researched how our competitors handle their solutions in the field.<br />
        <h3>Front End</h3>  
        I setup the AddInvoice.js component. It is a class based component, to handle its internal state, centered around form elements.
        <h3>Back End</h3>
        I built out the basic server requirements to get it listening for requests. I then broke out the routes for the various API endpoints. <br />
        Setup the helper files to allow getting all the users. Built it out so it attaches the membership plan, clients and their invoices to the user object.<br />
        Changed the knex table selection field so it doesn't return the passwords with the user. Built the routes to get all users and users by ID.<br />
        <h3>Deployment</h3>
        Deployed the backend to <a href="https://sleepy-coast-80160.herokuapp.com/">Heroku</a><br />
        Deployed the frontend to <a href="https://keen-mestorf-44ec10.netlify.com/">Netlify</a>
      </p>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
