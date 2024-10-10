import "./App.scss";
import FooterComponent from "./components/structure/FooterComponent";
import HeaderComponent from "./components/structure/HeaderComponent";
import HomeBackgroundComponent from "./components/structure/HomeBackgroundComponent";

function App() {
  return (
    <>
      <HeaderComponent />
      <HomeBackgroundComponent />
      <FooterComponent />
    </>
  );
}

export default App;
