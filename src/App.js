import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import routes from './routes';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk),
);

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
                <Provider store={store}>
                    <div className="App">
                        {showRoutes(routes)}
                    </div>
                    <ToastContainer />
                </Provider>
            </BrowserRouter>
        </Elements>
    );
}

export default App;
