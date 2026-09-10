import { useState } from 'react'
import './MiniChat.css'

function MiniChat() {
  const [messageInput, setMessageInput] = useState('')
  const [messages, setMessages] = useState([])

  function handleSubmit(event) {
    event.preventDefault()
    const trimmedMessage = messageInput.trim()
    if (!trimmedMessage) return

    setMessages((currentMessages) => [...currentMessages, trimmedMessage])
    setMessageInput('')
  }

  return (
    <main className="chat-page">
      <section className="chat-container">
        <header className="chat-header">
          <span className="chat-label">React Practice</span>
          <h1>Mini Chat Application</h1>
          <p>Send a message and watch it appear instantly with useState.</p>
        </header>

        <div className="chat-window">
          <div className="chat-window-heading">
            <div className="online-dot"></div>
            <div>
              <h2>Chat Room</h2>
              <span>Messages appear in the order they are sent</span>
            </div>
          </div>

          <div className="message-list" aria-live="polite">
            {messages.length === 0 ? (
              <div className="empty-chat">
                <span className="empty-icon">...</span>
                <strong>No messages yet</strong>
                <span>Start the conversation below.</span>
              </div>
            ) : (
              messages.map((message, index) => (
                <div className="message-bubble" key={`${message}-${index}`}>
                  <span className="message-number">{index + 1}</span>
                  <p>{message}</p>
                </div>
              ))
            )}
          </div>

          <form className="message-form" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="message">Type a message</label>
            <input
              id="message"
              value={messageInput}
              onChange={(event) => setMessageInput(event.target.value)}
              placeholder="Type your message..."
              autoComplete="off"
            />
            <button type="submit">Send Message</button>
          </form>
        </div>

        <footer className="chat-footer">
          <span>{messages.length} {messages.length === 1 ? 'message' : 'messages'} sent</span>
          <span>Powered by React useState</span>
        </footer>
      </section>
    </main>
  )
}

export default MiniChat
