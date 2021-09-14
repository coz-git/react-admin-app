import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Karyawan from './view/Karyawan'
import Home from './view/Home'
import Email from './view/Email'

function App() {
  return (
    <Router>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Navbar />
            <Switch>
              <Route path="/email">
                <Email />
              </Route>
              <Route path="/karyawan">
                <Karyawan />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
