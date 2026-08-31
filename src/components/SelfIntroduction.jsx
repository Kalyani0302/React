const profile = {
  name: 'Kalyani',
  role: 'Full Stack Developer',
  education: 'B.Tech',
  experience: '2 years of experience building web applications and user-focused solutions',
  skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Java'],
  hobbies: ['Reading books'],
  goal: 'To grow as a skilled full stack developer, build impactful applications, and continuously learn new technologies to solve real-world problems.'
}

function SelfIntroduction() {
  return (
    <main className="profile-page">
      <section className="profile-card">
        <div className="profile-header">
          <div className="avatar">AS</div>
          <div className="profile-title-wrap">
            <p className="eyebrow">Profile</p>
            <h1>{profile.name}</h1>
            <p className="role">{profile.role}</p>
          </div>
        </div>

        <div className="info-grid">
          <div className="info-item">
            <span className="label">Education</span>
            <p>{profile.education}</p>
          </div>

          <div className="info-item">
            <span className="label">Experience</span>
            <p>{profile.experience}</p>
          </div>
        </div>

        <div className="content-grid">
          <div className="panel">
            <h2>Skills</h2>
            <div className="tag-list">
              {profile.skills.map((skill) => (
                <span key={skill} className="tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="panel">
            <h2>Interests</h2>
            <div className="tag-list">
              {profile.hobbies.map((hobby) => (
                <span key={hobby} className="tag soft">
                  {hobby}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="goal-box">
          <h2>Career Goal</h2>
          <p>{profile.goal}</p>
        </div>
      </section>
    </main>
  )
}

export default SelfIntroduction
