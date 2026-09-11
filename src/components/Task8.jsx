import { ThemeProvider, useTheme } from '../context/ThemeContext'
import './Task8.css'

function GrandChild() {
  const { theme, user } = useTheme()

  return (
    <article className="context-user-card">
      <div className="context-avatar">{user.name.charAt(0)}</div>
      <div>
        <span className="context-card-label">GrandChild received context</span>
        <h3>{user.name}</h3>
        <p>{user.role}</p>
      </div>
      <div className="user-details">
        <span><strong>Email</strong>{user.email}</span>
        <span><strong>City</strong>{user.city}</span>
        <span><strong>Theme</strong>{theme} mode</span>
      </div>
    </article>
  )
}

function Child() {
  return (
    <section className="nested-level child-level">
      <span className="level-label">Child</span>
      <h3>Shared data travels through Context</h3>
      <p>This component receives no user or theme props.</p>
      <GrandChild />
    </section>
  )
}

function Parent() {
  const { theme, toggleTheme } = useTheme()

  return (
    <section className="nested-level parent-level">
      <div className="parent-heading">
        <div>
          <span className="level-label">Parent</span>
          <h2>Context Provider Dashboard</h2>
        </div>
        <button type="button" className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}
        </button>
      </div>
      <div className="theme-status">Current theme: <strong>{theme}</strong></div>
      <Child />
    </section>
  )
}

function Task8Content() {
  const { theme } = useTheme()

  return (
    <main className={`task8-page ${theme}-theme`}>
      <section className="task8-container">
        <header className="task8-header">
          <span className="task8-label">Task 8</span>
          <h1>useContext Hook Implementation</h1>
          <p>Share theme and user data across nested components without prop drilling.</p>
        </header>
        <div className="flow-indicator">
          <span>App</span><i>→</i><span>Parent</span><i>→</i><span>Child</span><i>→</i><span>GrandChild</span>
        </div>
        <Parent />
      </section>
    </main>
  )
}

function Task8() {
  return (
    <ThemeProvider>
      <Task8Content />
    </ThemeProvider>
  )
}

export default Task8
