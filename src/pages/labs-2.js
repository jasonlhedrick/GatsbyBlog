import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Labs2 = () => (
    <Layout>
        <SEO title="Labs 2" />
        <h1>Labs 1 - Start Up</h1>
        <div className="content">
            <h2>Accomplishments</h2>
            <p>
                <h3>oAuth and APIs</h3>
                I spent the last two weeks building out the authentication for local accounts and Google oAuth using Passportjs
                as middleware.<br />
                <h3>Local Authentication</h3>
                For the local account's login. I checked to make sure the object being passed to the server had all the required fields.
                If it did I hashed the password and set the hash to the password field. I then checked the usersHelper file to find
                that account by username. If the user object didn't have any fields added to it or the hashed password mismatched then
                password on the found account I sent a res.status(401) with the error 'Invalid username or password'.
                Otherwise I created a new JWT off the user ID. Made a second call to the database to pull all the data associated with that
                user account and sent the collected user object and JWT back to the client.<br />
                For the local account's signup. I again checked the object for correct fields. Hashed the password and checked if trying to insert
                the user object into the database threw any errors. Otherwise I pull all the user data associated with the account and send it
                and a JWT back to the client.<br />
                <h3>Google oAuth</h3>
                For the Google oAuth I setup the required boilerplate to get the Passportjs middleware to send the request to Google with the
                correct Google secret, app client and callback. I then sent a redirect from the server to the client attaching the JWT
                to the address (for now.)<br />
                <h3>Struggles</h3>
                The local account was fairly easy to code out but I did have to spend Saturday and Sunday (the 16th and 17th) fixing a critical error
                with the usersHelper insert function where if it ran into a SQLite unique constraint error the old code would crash out the
                server. I learned a lot about promise chaining dealing with this error.<br /><br />
                I had a huge issue with oAuth becoming a problem when the server and client are on seperate hosts. Because of the redirects
                that occur server side with oAuth and because we're using our local database to store the user information I had difficulties
                working out how to get any of the information back to the client. I finally settled on the server doing a redirect to a client side
                path and attaching the JWT to the params... However I don't feel like this is the best option. I eventually came across an article
                that mentioned needing to use sockets to do this properly but I haven't had time to re-implement it yet.
                <h3>Team</h3>
                The team works; but needs work. We all tend to get wrapped up in what we're doing and then stop communicating except for some sparse
                updates on what we're doing / have done.<br />
                I'm sure I could be doing more to help get the team communicating more I'm just not sure what at the moment.
            </p>
        </div>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default Labs2
