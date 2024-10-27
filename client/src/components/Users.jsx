import React, { useEffect, useState } from 'react'
import "./styles/Users.css"


let pageBtn = []
const Users = ({ users, data }) => {
  const [page, setPage] = useState(null)
  pageBtn.length = data.length/10
  console.log(pageBtn)
  function handleClick(e) {
    fetch(`http://localhost:3000/page${e.target.value}`)
      .then(res => res.json())
      .then(res => setPage(res))
  }



  return (
    <div className='users'>
      {(page ? page.map((elem) => {
        return <div key={elem._id}>
          <h2>
          {elem.first_name}_{elem.last_name}
          </h2>
          <hr />
        
        </div>
      }) : users.map((elem) => {
        return <div key={elem._id}>
          <h2>
          {elem.first_name}_{elem.last_name}
          </h2>
          <hr />
        
        </div>
      }))}


      <div className="pages">
        {pageBtn.fill(null).map((elem,idx)=>{
          return <button onClick={(e) => handleClick(e)} value={idx+1}>{idx+1}</button>
        })}
      </div>
    </div>


  )
}

export default Users