import { useState } from 'react'
import './App.css'

const employeeList = [
  {
    id: 1,
    name: 'Ananya',
    age: 25,
    city: 'Mumbai',
    email: 'ananya@gmail.com',
    role: 'Frontend Developer'
  },
  {
    id: 2,
    name: 'Vikram',
    age: 28,
    city: 'Pune',
    email: 'vikram@gmail.com',
    role: 'Backend Developer'
  },
  {
    id: 3,
    name: 'Meera',
    age: 24,
    city: 'Chennai',
    email: 'meera@gmail.com',
    role: 'UI Designer'
  },
  {
    id: 4,
    name: 'Rahul',
    age: 27,
    city: 'Delhi',
    email: 'rahul@gmail.com',
    role: 'Project Manager'
  },
  {
    id: 5,
    name: 'Sai',
    age: 23,
    city: 'Hyderabad',
    email: 'sai@gmail.com',
    role: 'QA Engineer'
  }
]

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  return (
    <main className="task3-page">
      <section className="task3-container">
        <header className="task3-header">
          <span className="task3-label">Task 3</span>
          <h1>Conditional Rendering &amp; List Rendering</h1>
        </header>

        <div className="status-panel">
          {isLoggedIn ? (
            <div className="status-box welcome-box">
              <h2>Welcome Back!</h2>
              <p>You are logged in successfully.</p>
            </div>
          ) : (
            <div className="status-box login-box">
              <h2>Please Login</h2>
              <p>Please sign in to continue.</p>
            </div>
          )}

          <button type="button" className="toggle-button" onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? 'Logout' : 'Login'}
          </button>
        </div>

        <div className="employee-section">
          <h3>Employee List</h3>
          <div className="employee-list">
            {employeeList.map((employee) => (
              <div key={employee.id} className="employee-card">
                <h4>{employee.name}</h4>
                <p>
                  <strong>Age:</strong> {employee.age}
                </p>
                <p>
                  <strong>City:</strong> {employee.city}
                </p>
                <p>
                  <strong>Email:</strong> {employee.email}
                </p>
                <p>
                  <strong>Role:</strong> {employee.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
