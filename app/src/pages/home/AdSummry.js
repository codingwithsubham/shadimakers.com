import React from 'react'
import { Link } from 'react-router-dom'

const AdSummry = () => {
  return (
    <div className="ad-smry">
      <div className="row">
        <div className="col s12 m12 l12">
          <div className="card light-blue darken-1">
              <div className="card-content white-text">
                <span className="card-title">
                  Boost Profile
                </span>
                <p>
                  To get more profile reach, you can create an Ad an run through out the entire application. It's super easy process.
                </p>
              </div>
              <div className="card-action">
                <Link to="/upgrade">Create Now</Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdSummry