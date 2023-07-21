import { Header } from '../../components/Header';
import ItemList from '../../components/ItemList';
import background from '../../assets/background.png';
import './style.css';

function App() {
  return (
    <div className="App">
      <Header />
      
      <div className='content'>
        <img src={background} className='background' alt='Imagem do mascote do Github, como background do app' />
        <div className='information'>
          <div className=''>
            <input name='usuario' placeholder='@username' />
            <button>
              Buscar
            </button>
          </div>
          <div className='perfil'>
            <img className='profile' src='https://avatars.githubusercontent.com/u/92702717?v=4' alt='Foto de Gustavo Simão Zamai Sorrindo, usando agasalho cinza' />
            <div>
              <h3>Gustavo Zamai</h3>
              <span>@gussimons</span>
              <p>Description</p>
            </div>
          </div>
          <hr />
          <div>
            <h4 className='repos'>Repositórios</h4>
            <ItemList title='Teste1' description='testando a descrição' />
            <ItemList title='Teste2' description='testando a descrição' />
            <ItemList title='Teste3' description='testando a descrição' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
