import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"


export const useLocation = (locationId) => {

  const [location, setLocation] = useState({})

  useEffect(() => {

    const randomLocation = Math.floor(Math.random() * 126) + 1

    let id;
    if (locationId) {
      id = locationId
    }
    else {
      id = randomLocation;
    }
    const URL = `https://rickandmortyapi.com/api/location/${id}`
    axios.get(URL)
      .then(res => setLocation(res.data))
      .catch(err => console.log(err))
  }, [locationId])

  return location

}
