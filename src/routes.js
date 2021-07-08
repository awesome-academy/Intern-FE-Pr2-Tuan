import Home from './pages/client/Home';
import DetailProduct from './pages/client/DetailProduct';
import Checkout from './pages/client/Checkout';
import DetailOrder from './pages/client/DetailOrder';

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
];

export default routes;
