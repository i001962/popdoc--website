import React from 'react'
// import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faAppStoreIos } from '@fortawesome/free-brands-svg-icons'
import { faFileExcel } from '@fortawesome/free-solid-svg-icons'

import Head from '../components/Head'
import ExternalLink from '../components/ExternalLink'

// const latestVersion = '0.4.2'
const welcomeUrl = '/welcome'
// const macDownloadUrl = '#'
// const windowsDownloadUrl = '#'
// the first argument in track() becomes the google analytics 'Action' property after passing through segment
const handleDownloadClick = (os) => {
  window.analytics.track('Signup', {
    category: 'popdoc webapp',
    label: `Signup - ${os}`
  })
}

const FeaturesPage = () => (
  <>
    <Head data={{
      title: 'Features',
      description: 'Try popdoc webapp today!'
    }} >
      {/* <script src='/js/download.js' /> */}
    </Head>
    <div id="splash" className="windows">
      <div>
        <div className="container text-center">
          <div className="row">
            <div className="logo">
              <img className="img-fluid" src="/img/graphics/qri_data_snuggle_icon.png"/>
            </div>
          </div>
          <div className="row pb-3">
            <div className="col-12">
              <h1 className="mb-4">Introducing popdoc webapp</h1>
              <p className="col-md-8 mx-auto mb-4">
              popdoc is both a productivity tool and a community of contributors and info maniacs - many of whom share knowledge, ideas, help find the truth.
              </p>
              <ExternalLink to={welcomeUrl} onClick={() => { handleDownloadClick('webapp') }}>
                <button
                  className="mx-1 my-3 btn btn-qri btn-qri-magenta btn-qri-big"
                  data-os="webapp"
                >
                  Try it now!
                </button>
              </ExternalLink>
              {/*  <ExternalLink to={macDownloadUrl} onClick={() => { handleDownloadClick('mac') }}>
                <button
                  className="mx-1 my-3 btn btn-qri btn-qri-magenta btn-qri-big"
                  data-os="mac"
                >
                  Apple AppStore - Comming soon!
                </button>
              </ExternalLink>
              <p data-os="mac">
                <small>
                  <ExternalLink to={windowsDownloadUrl} onClick={() => { handleDownloadClick('windows') }}>
                    Install on Andriod - coming soon
                  </ExternalLink>
                </small>
              </p>
              <ExternalLink to={windowsDownloadUrl} onClick={() => { handleDownloadClick('windows') }}>
                <button className="mx-1 my-3 btn btn-qri btn-qri-magenta btn-qri-big" data-os="windows">
                 Install on Andriod - coming soon
                </button>
              </ExternalLink>
              <p data-os="windows">
                <small>
                  <ExternalLink to={macDownloadUrl} onClick={() => { handleDownloadClick('mac') }}>
                    Apple App Store - coming soon
                  </ExternalLink>
                </small>
              </p> */}
            </div>
          </div>
          <div className="row mb-5">
            {/* <div className="col-12">
            Once you&apos;ve downloaded Qri Desktop, take a look at our <Link to="/docs/getting-started/qri-desktop-quickstart">Quickstart Documentation</Link>.
            </div> */}
          </div>
          <div className="row">
            <div className="col-12">
              <img className="screenshot img-fluid" src="/img/homepage/desktop_screenshot.png" style={{ borderRadius: '5px' }}/>
            </div>
          </div>
        </div>
      </div>
      <div className="triptych">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-5 text-center text-md-left">
              <h4>Feature 1</h4>
              <p>Craft new versions with visual feedback on how your dataset has changed</p>
            </div>
            <div className="col-md-4 mb-5 text-center text-md-left">
              <h4>Feature 2</h4>
              <p>Don&apos;t <i>guess</i> what changed, <i>Know</i> what changed, and who changed it.</p>
            </div>
            <div className="col-md-4 mb-5 text-center text-md-left">
              <h4>Feature 3</h4>
              <p>Our knowledge discovery and collaboration service...Lorem elit do irure voluptate sunt consequat ipsum reprehenderit pariatur.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="container">
          <div className="row  align-items-center">
            <div className="col-md-6 col-sm-12 p-4 text-center text-md-right">
              <img className="img-fluid" style={{
                borderRadius: '5px',
                boxShadow: '0 10px 20px #00000090'
              }} src="/img/screenshots/commit_section.png"/>
            </div>
            <div className="col-md-6 col-sm-12 p-4 text-center text-md-left">
              <h3>Goodbye, Filename Versioning</h3>
              <div className="d-flex filename justify-content-center">
                <div className="align-self-center"><FontAwesomeIcon icon={faFileExcel} size='2x'/></div>
                <div className="align-self-center"><pre> report_data_final_FINAL.xlsx</pre></div>
              </div>
              <p>File versioning means knowing who made changes, what they changed, and when. With popdoc, you can bring order to the chaos of many people editing a common document.</p>
            </div>
          </div>
          <div className="row d-md-flex flex-items-center flex-md-row-reverse align-items-center">
            <div className="flex-auto col-md-6 col-sm-12 p-4 text-center text-md-left">
              <img className="img-fluid" src="/img/graphics/getting_started/cloud.png"/>
            </div>
            <div className="flex-auto col-md-6 col-sm-12 p-4 text-center text-md-left">
              <h3>One Click Publishing</h3>
              <p>popdoc webapp lets you to easily publish your work for colleages, friends and fans to see. Go from idea to published µSite in under a minute.</p>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6 col-sm-12 p-4 text-center text-md-right">
              <img className="img-fluid" src="/img/diagrams/data_exchange_2.svg"/>
            </div>
            <div className="col-md-6 col-sm-12 p-4 text-center text-md-left">
              <h4>Distributed Data is Healthy Data</h4>
              <p>Our knowledge discovery and collaboration service. Mollit incididunt id deserunt officia non Lorem enim mollit laborum.</p>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-12 text-center my-5">
              <ExternalLink to='https://github.com/qri-io/desktop'>
                <button className="btn btn-qri-dark-blue text-white">
                  <FontAwesomeIcon icon={faAppStoreIos} />&nbsp; Follow Qri Desktop on Github
                </button>
              </ExternalLink>
            </div>
            <div className="row d-md-flex flex-items-center flex-md-row-reverse">
            </div>
          </div> */}
        </div>
      </div>
    </div>
  </>
)

export default FeaturesPage
