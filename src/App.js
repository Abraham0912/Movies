import styles from "./App.module.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Destructuring } from "./destructuring/Destructuring";
import { MoviesDetails } from "./pages/MoviesDetails";
import { MoviesGrid } from "./components/MoviesGrid";

export function App() {
  return (
      <div>
        <Router>
      <header>
      <Link to="/"><h1 className={styles.title}>Movies</h1></Link>
        <Link to="/movies">Detalle de pelicula</Link>
        <br />
        <Link to="/destructuring">Destructuracion</Link>
        <br />
        <Link to="/">HOME</Link>
      </header>
      <main>
      
      <Switch>
          <Route path="/destructuring">
            <Destructuring title="Soy el titulo" content="soy contenido see!"/>
          </Route>
          <Route exact path="/">
            <MoviesGrid />
          </Route>
          <Route exact path="/movies/:id">
            <MoviesDetails />
          </Route>
          <Route path="/">
            <h1>404 NOT FOUND PAGE</h1>
          </Route>
      </Switch>
      </main>
      </Router>
      
    </div>
  );
}