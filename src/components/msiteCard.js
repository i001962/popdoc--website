/* eslint-disable no-alert */
// import React, { useState } from 'react'
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
// import ExternalLink from './ExternalLink'
// import moment from 'moment'
// import ReactCardFlip from 'react-card-flip'

function ListItems (tile) {
  console.log(tile)
  return (
    <div className='col-12 col-md-4'>
      <div className='card blog-card index-shadow index-card'>
        <div className='card-img' style={{ backgroundImage: `url('${tile.value.image}')` }} />
        <div className='card-body px-3'>
          <div className='title'>{tile.value.title}</div>
          <div className='row'>
            <div className='col-7'>
              <span className='details mr-4'>by {tile.value.user._id.name}</span>
            </div>
            <div className='col-5 text-right'>
              <span className='details'>{tile.value.lastModified}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default () => {
  const data = useStaticQuery(
    graphql` query 
        {
            msiteCard: allMemphisCollections(filter: {user: {_id: {name: {eq: "i001962"}}}, image: {regex: "////"}, public: {}}, limit: 3) {
              edges {
                node {
                  id
                  _id
                  title
                  image
                  user {
                    _id {
                      md5
                      name
                    }
                  }
                  lastModified(fromNow: true)
                }
              }
            }
        }
    `)
  console.log(data.msiteCard.edges)
  const listitems = data.msiteCard.edges.map(edge =>
    <ListItems key={edge.node._id.toString()} value={edge.node} />
  )

  return (
    <div className='row'>
      { listitems }
    </div>
  )
}
