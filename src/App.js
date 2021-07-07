import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './routes';

const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_KEY}`);

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
        <Elements stripe={stripePromise}>
            <BrowserRouter>
                <div className="App">
                    {showRoutes(routes)}
                </div>
            </BrowserRouter>
        </Elements>
    );
}

export default App;
