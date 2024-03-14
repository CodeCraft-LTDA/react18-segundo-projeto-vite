import { Button } from "./components/Button";

const App = () => {
  // function clicou() {
  //   alert('Clicou');
  // 

  const handleClick = (value: string) => {
    alert(value);
  }

  const handleClick2 = (e: MouseEvent) => {
    //Interromper a propagação do evento
    e.stopPropagation();
    alert("e.clientX");
  }

  return (
    <div>
      <h1>React 18</h1>
      <p>Segundo projeto com Vite</p>
      {/* <button onClick={clicou}>Clique aqui</button> */}
      <button onClick={() => alert("clicou aqui")}>Aula 28</button>

      <button onClick={() => handleClick("Teste")}>Aula 29</button>

      <Button label="Aula 30" onClick={() => handleClick("TEste")} />


      <div onClick={() => alert("clique div")} style={{border: "1px solid red"}}>
        <button onClick={() => alert("clique botao")}>
          texto botao
        </button>
      </div>

      <div onClickCapture={() => alert("clique div")} style={{border: "1px solid red"}}>
        <button onClick={()=>handleClick2}>
          texto botao
        </button>
      </div>
    </div>
  );
}

export default App;