import { DataContext } from '../DataContext/DataContext';
import './DataProvider.css';
import { useEffect, useState } from 'react';

export default function DataProvider({ children }) {

  const [usersContents, setUsersContents] = useState('')
  const [userId, setUserId] = useState('')
  const [typeTrain, setTypeTrain] = useState('')
  const [loader, setLoader] = useState(false)
  const [loginValidate, setLoginValidate] = useState(false)
  const [nameUser, setNameUser] = useState('')

  useEffect(() => {
    // Functions that uses GET method to request users in the API
    async function fetchDataTraining() {
      try {
        setLoader(true)
        const res = await fetch("http://localhost:3001/clients")
        const data = await res.json() 
  
        if (!data) {
          throw new Error("Dados inválidos")
  
        } else {
          setUsersContents(data)
          setLoader(false)
  
        }
              
      } catch (error) {
          console.error(error)
  
      }
          
    }
    
    fetchDataTraining()

  }, [])
  
  const value = {
    usersContents, 
    setUsersContents,
    userId, 
    setUserId,
    typeTrain, 
    setTypeTrain,
    loader,
    loginValidate, 
    setLoginValidate,
    nameUser, 
    setNameUser

  }

  return (        
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider> 
  );
}
