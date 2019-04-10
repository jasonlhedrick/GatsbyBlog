import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Labs3 = () => (
    <Layout>
        <SEO title="Labs 1" />
        <h1>Labs 3 - Requirements wrap up.</h1>
        <div className="content">
            <h2>Accomplishments</h2>
            <p>
                <h3>Trello and Database</h3>
                I spent the first week trying to lay out and expand things on Trello a bit more. I also built out database test files and worked
                on building out the helper files more so that the tests would properly clear.
                <h3>Invoice conflict and Authentication.</h3>
                The second week I started looking into handling invoices and trying to figure out where to put invoices so we'd have a link the user
                could access them from but stopped when I found out that Henry was already working on that. I then moved over to building in the JWT
                checks on the frontend, with React Router redirects, and setup a JWT verification middleware for the server.
                <h3>Tests and Authentication</h3>
                I built out Jest .spec.js files for two of the database helper files. I noticed quickly that since Jest tries to run them asynchrously 
                and so you have to invalidate files from a test or you end up with database locking errors. For that I appeneded an underscore to the end of
                the file I wasn't testing currently. <br />
                For authentication I've been using some fairly simple if/else checks on the frontend to check if a JWT is set on localstorage and then setting up a redirect.
                The application will redirect from signup/signin to the dashboard if a JWT is set and it will redirect to signup/signin if you try to access
                a restricted page without a JWT.<br />
                Just need to setup a quick server call to verify the JWT when the component is mounted.<br />
                <h3>Problems</h3>
                I spent far too long stressing out over what was going on with the project due to very poor communication and it interferred with my
                sleep and my work, both at school and at work.<br />
                <h3>Team</h3>
                I don't really know what else to say/do to bring the team together at this point. It seems that the further along we go with the project
                the less communication takes place.<br />
                This has caused me a great deal of stress.
            </p>
        </div>
    </Layout>
)

export default Labs3