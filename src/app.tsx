import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { Switch, Route } from "wouter/preact/index";
import Navigation from "./Molecules/Navigation";

const FallbackCard = () => "Loading...";

const HomePage = lazy(() => import("./Pages/HomePage"));
const AboutPage = lazy(() => import("./Pages/AboutPage"));
const NotFoundPage = lazy(() => import("./Pages/NotFoundPage"));

const App = () => {
  return (
    <>
      <header>
        <h1 class="layout-note">header</h1>
      </header>
      <nav>
        <h2 class="layout-note">nav</h2>
        <Navigation />
      </nav>
      <main>
        <h2 class="layout-note">main</h2>
        <Suspense fallback={FallbackCard}>
          <Switch>
            <Route path="/">
              <HomePage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/:rest*">
              <NotFoundPage />
            </Route>
          </Switch>
        </Suspense>
      </main>
      <footer>
        <h2 class="layout-note">footer</h2>
      </footer>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
