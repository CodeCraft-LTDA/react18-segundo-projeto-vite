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
      <button onClick={() => alert("clicou aqui")}>Clique aqui</button>

      <button onClick={() => handleClick("Teste")}>Clique aqui</button>
    </div>
  );
}

export default App;