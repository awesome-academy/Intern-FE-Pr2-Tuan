import Home from './pages/client/Home';
import DetailProduct from './pages/client/DetailProduct';

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
];

export default routes;
