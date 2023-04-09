import logo from './logo.svg';
import './App.css';
import './scss/style.scss';
import React, {Suspense} from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import routes from './routes';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

function App() {
  return (
    <HashRouter>
      <Suspense fallback={loading}>
        <Routes>
          {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                element={route.component}
              />
            ))}
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default App;
