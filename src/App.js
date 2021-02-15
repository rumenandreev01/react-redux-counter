import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import {increment, decrement} from './actions/actions';

function App() {
  const counter = useSelector(state=>state.counter);
  const isLogged = useSelector(state=>state.isLogged);
  const dispatch = useDispatch();



  return (
    <div className="App">
      <h1>Counter</h1>
      <div>
        <button type="button" onClick={()=>dispatch(increment(5))}>+</button>
        <button type="button" onClick={()=>dispatch(decrement())}>-</button>
      </div>
      {counter}
      {isLogged && <p>Logged in only info</p>}
    </div>
  );
}

export default App;
