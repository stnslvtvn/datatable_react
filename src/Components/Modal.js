import React from 'react'

export default function Modal({ detailUser, active }) {
    const {firstName,lastName,description} = detailUser
  return (
    <div className={active ? 'detail-active' : 'detail'}>
      <h3>Profile Info:</h3>
      <div className='detail-item'>
        Selected profile:
        <span>
          {firstName} {lastName}
        </span>
      </div>
      <div className='detail-item'>
        Description:
        <span> {description}</span>
      </div>
      {/* <div className='detail-item'>
        Adress:
        <span> {streetAddress} </span>
      </div>
      <div className='detail-item'>
        City:
        <span> {city}</span>
      </div>
      <div className='detail-item'>
        State:
        <span> {state}</span>
      </div>
      <div className='detail-item'>
        Index:
        <span> {zip}</span>
      </div> */}
    </div>
  )
}
