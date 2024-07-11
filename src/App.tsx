import "./App.css";
import { TerminalContextProvider } from "react-terminal";
import Terminal from "./Terminal";
import { AnimationProvider } from "./AnimationContext";

const App = () => {
  return (
    <div className="App">
      <TerminalContextProvider>
        <AnimationProvider>
          <Terminal />
        </AnimationProvider>
      </TerminalContextProvider>
    </div>
  );
};

export default App;
