import './index.css';
import Carousel from "./components/Carousel";

function App() {
  return (
    <div className="App">
      <Carousel>
          <img className="d-block w-100" src="./image/до-70_сайт_укр_1552х570-копия-3.png" alt=""/>
          <img className="d-block w-100" src="./image/до-70_сайт_укр_1552х570-копия-4.png" alt=""/>
          <img className="d-block w-100" src="./image/до-70_сайт_укр_1552х570-копия-5.png" alt=""/>
      </Carousel>
    </div>
  );
}

export default App;
