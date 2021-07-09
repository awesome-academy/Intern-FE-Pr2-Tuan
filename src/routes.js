import Home from './pages/client/Home';
import DetailProduct from './pages/client/DetailProduct';
import Checkout from './pages/client/Checkout';
import DetailOrder from './pages/client/DetailOrder';
import Orders from './pages/client/Orders';
import UserProfile from './pages/client/UserProfile';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home />,
    },
    {
        path: '/detail',
        exact: true,
        main: () => <DetailProduct />,
    },
    {
        path: '/checkout',
        exact: true,
        main: () => <Checkout />,
    },
    {
        path: '/detail-order',
        exact: true,
        main: () => <DetailOrder />,
    },
    {
        path: '/orders',
        exact: true,
        main: () => <Orders />,
    },
    {
        path: '/profile',
        exact: true,
        main: () => <UserProfile />,
    },
];

export default routes;
