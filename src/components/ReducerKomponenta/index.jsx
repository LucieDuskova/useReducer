import './style.css';
import { useReducer } from 'react';




const reducer = (state, action) =>{
  if (action.type === 'ADD_HOLKA') {
    const newTextHolka = 'Už jsi klikla';
    const newCisloHolka = state.cislo.holka + 1
 return { ...state, textHolka: newTextHolka, cislo: { ...state.cislo, holka: newCisloHolka } };
  }

  if (action.type === 'ADD_KLUK') {
    const newTextKluk = 'Už jsi klikl';
    const newCisloKluk = state.cislo.kluk + 1
 return { ...state, textKluk: newTextKluk, cislo: { ...state.cislo, kluk: newCisloKluk } };
  }

  return state;
}


const defaultState = {
  textHolka: 'ahoj, jsem základní text pro holku',
  textKluk: 'ahoj, jsem základní text pro kluka',
  cislo: { holka: 5, kluk: 0 },
};

export const ReducerKomponenta = () => {

  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleClickHolka = () => {
    dispatch({ type: 'ADD_HOLKA' });
  }

  const handleClickKluk = () => {
    dispatch({ type: 'ADD_KLUK' });
  };


   return (
    <>
      <div className="holka">
        <div>{state.textHolka}</div>
        <div>Číslo pro holku je: {state.cislo.holka} </div>
        <button onClick={handleClickHolka}>Pokud jsi holka, tak klikni</button>
      </div>

      <div className="kluk">
        <div>{state.textKluk}</div>
        <div>Číslo pro kluka je: {state.cislo.kluk} </div>
        <button onClick={handleClickKluk}>Pokud jsi kluk, tak klikni</button>
      </div>

      <div className='soucet'>
        Je soušet vyšší než 10?: {state.cislo.holka + state.cislo.kluk > 10 ? 'Je' : 'Není' }
      </div>
    </>
  );
};
