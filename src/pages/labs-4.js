import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Labs4 = () => (
    <Layout>
        <SEO title="Labs 4" />
        <h1>Labs 4 - </h1>
        <div className="content">
            <h2>Accomplishments</h2>
            <p>
                <h3>Authentication</h3>
            I started off the sprint cycle making sure that authentication was in place through all the routes that needed protection.
            <br />
            I setup JWT checks on the frontend which would redirect if it wasn't found. On the backend I setup middleware to authenticate
            the token through all routes which are asking for sensitive information from the database. 
            <br />
            I also stored the user's ID inside the token subject so I can pull it out and use that after authenticating the token to look stuff up
            attached to the user instead of sending user information from the frontend.
                <h3>PDF upload and inserting invoices.</h3>
            Henry had the file upload to AWS pretty much setup. I just did a bit of cleanup to the code after creating my own version of the multer
            and multerA3 storage to get a better feel of what was going on. I then deleted that since Henry's code was more fleshed out for it.
            <br />
            I then figured out how to get the invoice data through to the backend by JSON.stringify'ing the object and then parsing it on the backend.
            <br />
            Now the invoice insert properly attaches the invoice url from the AWS upload to the database and all of the invoice information.
                <h3>More invoice wrap-up</h3>
            I have wrapped up the last items of creating a new invoice, which will create a new client if needed and attached the invoice url to the
            pdf link on the invoice list for the frontend. Now a user can automatically create new clients if there are no clients with the name that is
            sent from the invoice post. 
            <br />
                <h3>Problems</h3>
            I was having a problem with multer initially until I found out that there was another req.body parser which was interferring with it.
            <br />
            After that it was figuring out how to get all the invoice data through to the backend.
            <br />
                <h3>Team</h3>
            The team is still struggling with communication. We all still seem to mainly be doing our own things.
            <br />
            Considering bringing back weekly zoom sessions.
            </p>
        </div>
    <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default Labs4