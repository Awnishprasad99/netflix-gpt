import "./App.css";
import Body from "./Components/Body";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";
import { SpeedInsights } from "@vercel/speed-insights/react"



function App() {
  return (
    <div className="container">
      <Provider store={appStore}>
        <Body />
        <SpeedInsights />

      
      </Provider>

   
    </div>
  );
}

export default App;
