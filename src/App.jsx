
import './App.css'
import { useLocation } from './hooks/useLocation'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import { useState } from 'react'



function App() {

  const [locationInput, setLocationInput] = useState()


  let location;

  if (locationInput !== undefined) {
    location = useLocation(locationInput)
  }
  else {
    location = useLocation()
  }
 
  const handleSubmit = (e) => {
    e.preventDefault()
    setLocationInput(e.target.inputSearch.value)
  }
  
  return (
    <div className="App">
      <header>
        <h1>Rick and Morty</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" id="inputSearch" />
          <button>Search</button>
        </form>
        < LocationInfo
          location={location}
        />
       </header> 
      <div className='residents-container'>
        {
          location?.residents?.map(url => (
            < ResidentCard url={url} key={url} />
          ))
        }
      </div>
    </div>
  )
}

export default App
