
function ProfileCard() {
  const student = {
    name: "Nguyen Hoang Gia",
    className: "Cong nghe thong tin",
    hobbies: ["Lap trinh", "Cong nghe AI", "Nghe nhac"],
    github: "https://github.com/hoanggia776123-svg"
  };

  return (
    <div className="profile-card">
      <div className="avatar">G</div>

      <h1>{student.name}</h1>
      <p className="class-name">{student.className}</p>

      <h2>So thich</h2>
      <ul>
        {student.hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>

      <a href={student.github} target="_blank" rel="noreferrer">
        Visit my GitHub
      </a>
    </div>
  );
}

export default ProfileCard;
