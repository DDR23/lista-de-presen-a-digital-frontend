import './styles.scss';
import { useState, useEffect } from 'react';
import { Card, CardProps } from '../../components/Card';

interface UserResponse {
  name: string
  avatar_url: string
}

interface User {
  name: string
  avatar: string
}

export function Home() {
  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState<CardProps[]>([]);
  const [user, setUser] = useState<User>({} as User);

  function handleAddStudent() {
    if (!studentName) {
      alert('Por favor, digite seu nome!')
      return
    }

    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    };

    setStudents(prevState => [...prevState, newStudent]);
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.github.com/users/DDR23');
      const data = await response.json() as UserResponse;

      setUser({
        name: data.name,
        avatar: data.avatar_url,
      });
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="home">
        <div className="home__header">
          <h1>Lista de Presença</h1>
        </div>
        <div className="home__main">
          <input
            type="text"
            placeholder="Digite o nome..."
            onChange={e => setStudentName(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                handleAddStudent()
              }
            }}
          />
          <button type="button" onClick={handleAddStudent}>Adicionar</button>
        </div>
        <div className="home__content">
          {students.map((student, index) => (
            <Card
              key={index}
              name={student.name}
              time={student.time}
            />
          ))}
        </div>
        <div className="home__credits">
          <div>
            <p>Desenvolvido por</p>
            <p>{user.name}</p>
          </div>
          <a href="https://github.com/DDR23" target='_blank'><img src={user.avatar} alt="Foto de perfil" /></a>
        </div>
      </div>
    </>
  )
}