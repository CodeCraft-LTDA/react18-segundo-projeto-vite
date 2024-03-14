import { Button } from "./components/Button";

const App = () => {
  // function clicou() {
  //   alert('Clicou');
  // 

  const handleClick = (value: string) => {
    alert(value);
  }

  return (
    <div>
      <h1>React 18</h1>
      <p>Segundo projeto com Vite</p>
      {/* <button onClick={clicou}>Clique aqui</button> */}
      <button onClick={() => alert("clicou aqui")}>Aula 28</button>

      <button onClick={() => handleClick("Teste")}>Aula 29</button>

      <Button label="Aula 30" onClick={() => handleClick("TEste")} />
    </div>
  );
}

export default App;