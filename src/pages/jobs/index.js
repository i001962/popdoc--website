import React from 'react'
import { StaticQuery } from 'gatsby'

import JobRow from '../../components/JobRow'
import Head from '../../components/Head'
import ExternalLink from '../../components/ExternalLink'

const JobsPage = () => (
  <div className='container jobs-page'>
    <Head data={{
      title: 'Jobs at The Memphis Project',
      description: 'A running list of job openings at The Memphis Project. Join our team!'
    }} />

    <h1>Jobs</h1>

    <p>A running list of job openings at The Memphis Project. Join our team!</p>

    <StaticQuery
      query={graphql`
      query {
        allMdx(filter: {fileAbsolutePath: {regex: "\\/jobs/job-/"}}) {
          edges {
            node {
              fields {
                slug
                weight
                jobTitle
                jobLocation
              }
            }
          }
        }
      }
    `}
      render={({ allMdx }) => {
        if (allMdx.edges.length) {
          return (
            <ul className='sideBarUL py-5'>
              {allMdx.edges.map((edge) => {
                const { slug, jobTitle, jobLocation } = edge.node.fields
                return (
                  <JobRow
                    key={slug}
                    title={jobTitle}
                    location={jobLocation}
                    team=''
                    link={slug}
                  />
                )
              })}
            </ul>
          )
        }

        return (
          <div className="alert alert-info py-3 my-5" role="alert">
            <strong>The Memphis Project has no (defined) open positions at this time</strong>
            <br/>
            <br/>
            We’re always looking for great talent, if you’re interested in a position, please jump in <ExternalLink to='#'>our Slack</ExternalLink>.
          </div>
        )
      }}
    />
  </div>
)

export default JobsPage
