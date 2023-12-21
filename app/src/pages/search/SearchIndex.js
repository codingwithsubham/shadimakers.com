import React from 'react'
import FilterSearch from './FilterSearch'
import FindMatches from './FindMatches'

const SearchIndex = () => {
  return (
    <div className='srch-wrap insta-an'>
        <FilterSearch />
        <FindMatches />
    </div>
  )
}

export default SearchIndex