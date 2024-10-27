import React, { useEffect , useState} from 'react'
import Users from './components/Users'

const App = () => {

  const [users, setUsers] = useState([])
  const [data, setData] = useState([])
  useEffect(()=>{
      fetch("http://localhost:3000/page1")
      .then(res=>res.json())
      .then(res=>setUsers(res))

      fetch("http://localhost:3000")
      .then(res=>res.json())
      .then(res=>setData(res))

    },[])
  return (
    <Users users={users} data={data}/>
  )
}

export default App