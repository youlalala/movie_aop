import React from "react";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import { HashRouter, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter> 
      <Navigation />
      {/* route 안에는 매우중요한 props가 하나 들어간다. 
      그 prop은 렌더링할 스크린이 들어가고, 다른 prop은 뭘 할지 정해준다*/}
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={ Detail } />
    </HashRouter>
  );
}

export default App;