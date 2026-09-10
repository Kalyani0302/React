import { useEffect, useRef, useState } from 'react'
import './Task6.css'

const apiUrl = 'https://jsonplaceholder.typicode.com/users'

function Task6() {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')
  const [imagePreview, setImagePreview] = useState('')
  const fileInputRef = useRef(null)

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(apiUrl)
        if (!response.ok) throw new Error('Unable to load user data.')
        setUsers(await response.json())
      } catch (error) {
        setErrorMessage(error.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchUsers()
  }, [])

  function handleUploadClick() {
    fileInputRef.current?.click()
  }

  function handleImageChange(event) {
    const selectedFile = event.target.files?.[0]
    if (!selectedFile || !selectedFile.type.startsWith('image/')) return

    const imageUrl = URL.createObjectURL(selectedFile)
    setImagePreview((previousUrl) => {
      if (previousUrl) URL.revokeObjectURL(previousUrl)
      return imageUrl
    })
  }

  return (
    <main className="task6-page">
      <section className="task6-container">
        <header className="task6-header">
          <span className="task6-label">Task 6</span>
          <h1>API Integration &amp; Image Upload</h1>
          <p>Using useEffect, useRef, useState, and conditional rendering</p>
        </header>
        <div className="task6-layout">
          <section className="upload-panel">
            <div className="section-heading"><span className="section-number">01</span><div><h2>Image Upload</h2><p>Select an image and preview it instantly.</p></div></div>
            <div className={`image-preview ${imagePreview ? 'has-image' : ''}`}>
              {imagePreview ? <img src={imagePreview} alt="Selected preview" /> : <><span className="upload-icon">+</span><strong>No image selected</strong><span>PNG, JPG, or WEBP</span></>}
            </div>
            <input ref={fileInputRef} className="hidden-file-input" type="file" accept="image/*" onChange={handleImageChange} />
            <button type="button" className="upload-button" onClick={handleUploadClick}>{imagePreview ? 'Choose Another Image' : 'Choose Image'}</button>
            <p className="upload-note">The custom button opens the hidden file input through useRef.</p>
          </section>
          <section className="users-panel">
            <div className="section-heading"><span className="section-number">02</span><div><h2>Directory Users</h2><p>Fetched from JSONPlaceholder with useEffect.</p></div></div>
            {isLoading && <p className="state-message loading-message">Loading users...</p>}
            {errorMessage && <p className="state-message error-message">{errorMessage}</p>}
            {!isLoading && !errorMessage && <div className="user-list">{users.map((user) => <article className="api-user-card" key={user.id}><div className="user-card-topline"><span className="user-avatar">{user.name.charAt(0)}</span><div><h3>{user.name}</h3><span>@{user.username}</span></div></div><div className="user-info"><p><strong>Email</strong>{user.email}</p><p><strong>Phone</strong>{user.phone}</p><p><strong>Website</strong>{user.website}</p><p><strong>Company</strong>{user.company.name}</p></div></article>)}</div>}
          </section>
        </div>
      </section>
    </main>
  )
}

export default Task6
