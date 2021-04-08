import './App.css';
import Sidebar from './sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dash from './dasboard';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

function App() {

  let [userlist, setUserlist] = useState([]);

  useEffect(async () => {
    let users = await axios.get("http://localhost:8080/batch");
    setUserlist(users.data);
  }, [])
  return (
    <>
      <Router>
        <div id="wrapper">
          <Sidebar></Sidebar>
          <div class="container-fluid">
            <Switch>
              <Route>
                <div className="row">
                  {
                    userlist.map((item) => {
                      return <Dash user={item}></Dash>
                    })
                  }
                </div>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
