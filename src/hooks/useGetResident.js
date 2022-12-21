import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"


export const useGetResident = (url) => {


  const [resident, setResident] = useState({})

  useEffect(() => {

    axios.get(url)
      .then(res => console.log(setResident(res.data)))
      .catch(err => console.log(err))
  }, [])


  return resident

}
