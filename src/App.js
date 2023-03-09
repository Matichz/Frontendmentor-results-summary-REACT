import './App.css';
import BotonContinue from './Componentes/BotonContinue';
import Categoria from './Componentes/Categoria';

function App() {
  return (
    <div className='contenedor'>
      <div className="contenedor-result-clients">
          <p className='text-your-result'>Your Result</p>
          <div className='contenedor-circle-number'>
            <span className='number-result'>76</span>
            <p className='number-limit'>of 100</p>
          </div>
          <h2 className='text-great'>Great</h2>
          <p className='description-tests'>You scored higher than 65% of the people who have taken these tests.</p>
      </div>
      <div className='contenedor-summary'>
          <h2 className='text-summary'>Summary</h2>
          <Categoria
            imagen='reaction'
            titulo='Reaction'
            resultado='80'
            colorTitulo='hsl(0, 100%, 67%)'
            colorBackground='hsla(0, 100%, 67%, 0.094)'
          />
          <Categoria
            imagen='memory'
            titulo='Memory'
            resultado='92'
            colorTitulo='hsl(39, 100%, 56%)'
            colorBackground='hsla(39, 100%, 56%, 0.094)'
          />
          <Categoria
            imagen='verbal'
            titulo='Verbal'
            resultado='61'
            colorTitulo='hsl(166, 100%, 37%)'
            colorBackground='hsla(166, 100%, 37%, 0.094)'
          />
          <Categoria
            imagen='visual'
            titulo='Visual'
            resultado='72'
            colorTitulo='hsl(234, 85%, 45%)'
            colorBackground='hsla(234, 85%, 45%, 0.094)'
          />
          <BotonContinue/>
      </div>
    </div>
  );
}

export default App;
