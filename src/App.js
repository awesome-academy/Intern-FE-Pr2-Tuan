import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import routes from './routes';

function App() {
    const showRoutes = (routes) => {
        let result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
            return  <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
            />;
            });
        }
        return <Switch>{result}</Switch>;
    };
    return (
        <BrowserRouter>
            <div className="App">
                {showRoutes(routes)}
            </div>
        </BrowserRouter>
        
    );
}

export default App;
