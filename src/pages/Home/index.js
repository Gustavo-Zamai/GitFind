import { useState } from 'react';
import { Header } from '../../components/Header';
import ItemList from '../../components/ItemList';
import background from '../../assets/background.png';
import './style.css';

function App() {

  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setReps] = useState(null);

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();

    if (newUser.name) {
      const { avatar_url, name, bio, login } = newUser;

      setCurrentUser({ avatar_url, name, bio, login });

      const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
      const newRepos = await reposData.json();

      if (newRepos.length) {
        setReps(newRepos);
      }
    }
  }


  return (
    <div className="App">
      <Header />

      <div className='content'>
        <img src={background} className='background' alt='Imagem do mascote do Github, como background do app' />
        <div className='information'>
          <div className=''>
            <input name='usuario'
              value={user}
              onChange={event => setUser(event.target.value)}
              placeholder='@username' />
            <button onClick={handleGetData}>
              Buscar
            </button>
          </div>
          {currentUser?.name ? (<>
            <div className='perfil'>
              <img className='profile' src={currentUser.avatar_url} alt={currentUser.name} />
              <div>
                <h3>{currentUser.name}</h3>
                <span>@{currentUser.login}</span>
                <p>{currentUser.bio}</p>
              </div>
            </div>
            <hr />
          </>) : null}
          {repos?.length ? (
            <>
          <div>
            <h4 className='repos'>Repositórios</h4>
            {repos.map((repo) => (
              <ItemList title={repo.name} description={repo.description} />
            ))}
          </div>  
          </>) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
