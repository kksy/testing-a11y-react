import './App.css'
import RegistrationForm from './RegistrationForm'

function App() {
  const handleSubmit = (event) => {
   console.log(event)
  }
  return (
    <>
      <RegistrationForm submitHandler={handleSubmit} />
    </>
  )
}

export default App
