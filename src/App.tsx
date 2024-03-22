import "./App.css";
import Accordion from "./components/accordion";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";

function App() {
  return (
    <div className="App">
      {/* Accordion component */}
      <Accordion />
      {/* Random color component */}
      <RandomColor />
      {/* Star rating component */}
      <StarRating />
    </div>
  );
}

export default App;
