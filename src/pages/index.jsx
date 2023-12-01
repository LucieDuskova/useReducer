// import { render } from '@czechitas/render';
// import '../global.css';
// import './index.css';
// import { ReducerKomponenta } from '../components/ReducerKomponenta';


// document.querySelector('#root').innerHTML = render(



//   <div className="container">
//     <header>
//       <h1>Zkouším useReducer</h1>
//     </header>
//     <main>
//     <ReducerKomponenta/>
//     </main>

//   </div>
// );





import ReactDOM from 'react-dom/client';
import { ReducerKomponenta } from '../components/ReducerKomponenta';
import '../global.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ReducerKomponenta />);
