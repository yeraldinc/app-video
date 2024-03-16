
import './App.css';
import Categorias from './Categorias';






function App() {
  return (
    <div className="App">
      <h1>CATEGORIAS</h1>
      <div className='container'>
        <Categorias title="categoria" description="descripcion" />
        <Categorias />
        <Categorias />
        <Categorias />
        <Categorias />
        <Categorias />
        <Categorias />
        <Categorias />

      </div>
      
    </div>
  );
}

export default App;
