import './App.css'
import Navbar from './Components/Navbar/navbar'

function App() {

  return (
    <>
    < Navbar/>
    <div className="landing-container">
      <div className="landing-content">
        <h1>Welcome to the Employee Management System</h1>
        <p>Manage your employees efficiently and effectively.</p>
        <button className="primary-button">Get Started</button>
      </div>
    </div>
    </>
  )
}

export default App
