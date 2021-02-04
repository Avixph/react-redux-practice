import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import PostsPage from "./pages/PostsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={DashboardPage} />
          <Route exact path="/posts" component={PostsPage} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
