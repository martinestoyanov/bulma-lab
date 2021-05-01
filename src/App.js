import "./App.css";
import "bulma/css/bulma.css";
import Navbar from "./navbar/navbar";
import Formfield from "./formfield/formfield";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Formfield label="Name" type="text" placeholder="e.g Alex Smith" />
      <Formfield label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    </div>
  );
}



export default App;
