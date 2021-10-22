import styles from "./App.module.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
//Import components
import { Destructuring } from "./destructuring/Destructuring";
import { MoviesDetails } from "./pages/MoviesDetails";
import { LandinPages } from "./pages/LandinPages";

export function App() {
  return (
    <Router>
      <header>
        <Link to="/"><h1 className={styles.title}>Movies</h1></Link>
        <br />
        <Link to="/destructuring">Destructuracion</Link>
        <br />
        <Link to="/">HOME</Link>
        <br />
        <Link to="/movies/455">Detalles de una pelicula harcode 455</Link>
        <br />
        <Link to="/ruta_desconocida">Componente 404</Link>
      </header>
      <main>
      <Switch>
          <Route path="/destructuring">
            <Destructuring title="Soy el titulo" content="soy contenido see!"/>
          </Route>
          <Route exact path="/">
            {/* <MoviesGrid /> */}
            <LandinPages/>
          </Route>
          <Route exact path="/movies/:id">
            <MoviesDetails />
          </Route>
          <Route path="">
            <h1>404 NOT FOUND PAGE</h1>
            <img width={600} src="404.jpg" alt="404_img" />
          </Route>
      </Switch>
      </main>
    </Router>
  );
}