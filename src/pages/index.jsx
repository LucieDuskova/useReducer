import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { ReducerKomponenta } from '../components/ReducerKomponenta';


document.querySelector('#root').innerHTML = render(



  <div className="container">
    <header>
      <h1>Zkouším useReducer</h1>
    </header>
    <main>
    <ReducerKomponenta/>
    </main>

  </div>
);
