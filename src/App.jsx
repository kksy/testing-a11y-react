import './App.css'

function App({ submitHandler }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target) 
    submitHandler(Object.fromEntries(formData))
  }
  return (
    <>
      <h1>Event registration</h1>
      <form onSubmit={handleSubmit}>
        <div className="input">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name"/>
        </div>
        
        <div className="input">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email"/>
        </div>
        
        <button className="submit-btn" type="submit">Submit</button>
      </form>
    </>
  )
}

export default App
