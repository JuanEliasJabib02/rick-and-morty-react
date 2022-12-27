
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
      <header className='header'>
        <h1 className='header__title'>Rick and Morty <span>Wiki</span></h1>
        <form className='header__form' onSubmit={handleSubmit}>
          <input placeholder='Search for location id' className="header__form-input"type="text" id="inputSearch" />
          <button className='header__form-button'>Search</button>
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
