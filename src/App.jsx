import "./App.css";

import Displayer from "./components/Displayer";

function App() {
  return (
    <>
      <h1>Buttons</h1>
      <Displayer title="Button" />
      <Displayer title='Button variant="outline"' />
      <Displayer title='Button variant="text"' />
      <Displayer title="Button disableShadow" />
      <Displayer title='Button startIcon="local_grocery_store"' />
    </>
  );
}

export default App;
