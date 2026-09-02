function UserCard({ user }) {
  return (
    <article className="user-card">
      <div className="user-header">
        <div className="user-avatar">{user.name.charAt(0).toUpperCase()}</div>
        <div>
          <h3>{user.name}</h3>
          <p>{user.occupation}</p>
        </div>
      </div>

      <div className="user-details">
        <div className="detail-row">
          <span>Age</span>
          <strong>{user.age}</strong>
        </div>
        <div className="detail-row">
          <span>City</span>
          <strong>{user.city}</strong>
        </div>
        <div className="detail-row">
          <span>Email</span>
          <strong>{user.email}</strong>
        </div>
        <div className="detail-row">
          <span>Mobile</span>
          <strong>{user.mobile}</strong>
        </div>
        <div className="detail-row">
          <span>Occupation</span>
          <strong>{user.occupation}</strong>
        </div>
        <div className="detail-row address-row">
          <span>Address</span>
          <strong>{user.address}</strong>
        </div>
      </div>
    </article>
  )
}

export default UserCard
