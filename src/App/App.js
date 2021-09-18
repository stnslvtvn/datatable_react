import React, { useState, useEffect } from 'react'
import Datatable from '../Components/Datatable'

import './App.css'

function App() {
  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [directionSorting, setDirectionSorting] =useState(true)

   const [filterBy, setFilterBy] = useState("All")

  useEffect(() => {
    fetch(
      'https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json'
    )
      .then((response) => response.json())
      .then((res) => setData(res))
  }, [])

  const filtredData = data.filter((value) => {
    if (searchTerm === '') {
      return value
    } else if (
      value.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      value.lastName.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return value
    }  
    
  })

  const filtredDataByState = (e) => {
    setFilterBy(e.target.value)
    const selectedState = filtredData.filter((user) => {
      if (user.adress.state === filterBy) {
        return user
      } else if (filterBy === "All") {
       return user
      }
    })
    console.log(selectedState)
    setData(selectedState)
  }

  const sortedData = (field) => {
    let sortData
    if(directionSorting){
      sortData = filtredData.concat().sort((a, b) => {
        return a[field] > b[field] ? 1 : -1
      })
    } else{
      sortData = filtredData.concat().reverse((a, b) => {
        return a[field] > b[field] ? 1 : -1
      })
    }
   
    setData(sortData)
    setDirectionSorting(!directionSorting)
  }

  return (
    <div className='App'>
      <div className='filter-block'>
        <input
          type='text'
          placeholder='Search by firstname or lastname'
          className='search-form'
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select onChange={(e) => filtredDataByState(e)}>
          <option value='All'>Filter by state</option>
          <option value='WI'> WI</option>
          <option value='TN'> TN</option>
          <option value='FL'> FL</option>
          <option value='NE'> NE</option>
        </select>
      </div>

      <Datatable filtredData={filtredData} sortedData={sortedData} />
    </div>
  )
}

export default App
