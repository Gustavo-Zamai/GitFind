import { Header } from '../../components/Header';
import background from '../../assets/background.png'
import './style.css'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='content'> 
        <img src ={background} className='background' alt='Imagem do mascote do Github, como background do app'/>
      <div className='information'>
        <div className=''>
          <input name='usuario' placeholder='@username' />
          <button>
            Buscar
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
