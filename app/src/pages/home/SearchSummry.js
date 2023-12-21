import React from 'react'
import { Link } from 'react-router-dom'

const SearchSummry = () => {
  return (
    <div className="srch-smry">
      <div className="row">
        <div className="col s12 m12 l12">
          <div className="card purple darken-1">
              <div className="card-content white-text">
                <span className="card-title">
                 Find Your Match Now
                </span>
                <p>
                  Shadi<b>makers.com</b>, helps you to choose more reliable data, that is suibtable for your purpose. Let's start finding a match now.
                </p>
              </div>
              <div className="card-action">
                <Link to="/upgrade">Find Now</Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchSummry