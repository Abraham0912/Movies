import { MoviesGrid } from "./components/MoviesGrid";
import styles from "./App.module.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Destructuring } from "./destructuring/Destructuring";

export function App() {
  return (
      <div>
        <Router>
      <header>
        <h1 className={styles.title}>Movies</h1>
        <Link to="/movies">Peliculas</Link>
        <br />
        <Link to="/destructuring">Destructuracion</Link>
      </header>
      <main>
      
      <Switch>
          <Route path="/destructuring">
            <Destructuring title="Soy el titulo" content="soy contenido see!"/>
          </Route>
          <Route path="/movies">
            <MoviesGrid />
          </Route>
          <Route path="/">
            <h1>SOY HOME</h1>
          </Route>
      </Switch>
      </main>
      </Router>
      
    </div>
  );
}