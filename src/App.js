import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/Navbar/NavBar";
import Liste from "./Pages/Liste/Liste";
import StateAnim from "./Pages/StateAnim/StateAnim";
import Scroll from "./Pages/Scroll/Scroll";

function App() {
    return (
        <Router>
          <div className="global-container">
            <NavBar />
            <Switch>
              <Route path='/' exact component={Liste}/>
              <Route path='/StateAnim' exact component={StateAnim}/>
              <Route path='/Scroll' exact component={Scroll}/>              
            </Switch>            
          </div>
        </Router>
    );
}

export default App;
