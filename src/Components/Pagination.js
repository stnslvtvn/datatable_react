import React from 'react'

function Pagination({ usersPerPage, totalUsers, paginate }) {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      <div className='pagination'>
        {pageNumbers.map((number) => (
          <button
            key={number}
            className='page-item'
            onClick={() => paginate(number)}
          >
            {number}
          </button>
        ))}
      </div>
    </nav>
  )
}

export default Pagination
