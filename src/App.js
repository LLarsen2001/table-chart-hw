import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TableShow from './components/TableShow';
import AxiosCallHook from './components/AxiosCallHook';


function App() {
  return (
    <div className="App">
      <TableShow />
      <AxiosCallHook />
    </div>
  );
}

export default App;
