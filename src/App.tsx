import Test from "./components/Test";
import InnerTest from "./components/InnerTest";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Test>
        <InnerTest />
      </Test>
    </div>
  );
}

export default App;
