import React, { useState } from 'react'
import Pagination from './Pagination'
import Modal from './Modal'

function Datatable({ filtredData, sortedData }) {
  const [currentPage, setCurrentPage] = useState(1)
  const [usersPerPage] = useState(20)
  const [detailsUser, setDetailsUser] = useState('')
  const [modalActive, setModalActive] = useState(false)

  const indexOfLastUser = currentPage * usersPerPage
  const indexOfFirstUser = indexOfLastUser - usersPerPage
  const currentUsers = filtredData.slice(indexOfFirstUser, indexOfLastUser)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const generateKey = (pre) => {
    return `${pre}_${new Date().getTime()}`
  }

  const detailUser = (value) => {
    setModalActive(true)
    setDetailsUser(value)
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>
              Id
              <button
                className='arrow arrow-up'
                onClick={() => sortedData('id')}
              ></button>
            </th>
            <th>
              Firstname
              <button
                className='arrow arrow-up'
                onClick={() => sortedData('firstName')}
              ></button>
            </th>
            <th>
              Lastname
              <button
                className='arrow arrow-up'
                onClick={() => sortedData('lastName')}
              ></button>
            </th>
            <th>
              Email
              <button
                className='arrow arrow-up'
                onClick={() => sortedData('email')}
              ></button>
            </th>
            <th>
              Phone
              <button
                className='arrow arrow-up'
                onClick={() => sortedData('phone')}
              ></button>
            </th>
            <th>
              Streetaddress
              <button
                className='arrow arrow-up'
                onClick={() => sortedData('streetAddress')}
              ></button>
            </th>
            <th>
              City
              <button
                className='arrow arrow-up'
                onClick={() => sortedData('city')}
              ></button>
            </th>
            <th>
              State
              <button
                className='arrow arrow-up'
                onClick={() => sortedData('state')}
              ></button>
            </th>
            <th>
              Zip
              <button
                className='arrow arrow-up'
                onClick={() => sortedData('zip')}
              ></button>
            </th>
            <th>
              Description
              <button
                className='arrow arrow-up'
                onClick={() => sortedData('description')}
              ></button>
            </th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr key={generateKey(user.phone)} onClick={() => detailUser(user)}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.adress.streetAddress}</td>
              <td>{user.adress.city}</td>
              <td>{user.adress.state}</td>
              <td>{user.adress.zip}</td>
              <td>{user.description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={filtredData.length}
        paginate={paginate}
      />

      <Modal detailUser={detailsUser} active={modalActive} />
    </>
  )
}

export default Datatable
