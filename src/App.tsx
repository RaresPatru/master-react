import "./App.css";
import Accordion from "./components/accordion";
import ImageSlider from "./components/image-slider";
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
      <StarRating numOfStars={10} />
      {/* Image slider component */}
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={10} page={3} />
    </div>
  );
}

export default App;
