import Home from './pages/client/Home';
import DetailProduct from './pages/client/DetailProduct';
import Checkout from './pages/client/Checkout';
import DetailOrder from './pages/client/DetailOrder';
import Orders from './pages/client/Orders';
import UserProfile from './pages/client/UserProfile';
import { url } from './constants/config';

const routes = [
    {
        path: `${url.home}`,
        exact: true,
        main: () => <Home />,
    },
    {
        path: `${url.detailProduct}`,
        exact: true,
        main: () => <DetailProduct />,
    },
    {
        path: `${url.checkout}`,
        exact: true,
        main: () => <Checkout />,
    },
    {
        path: `${url.detailOrder}`,
        exact: true,
        main: () => <DetailOrder />,
    },
    {
        path: `${url.orders}`,
        exact: true,
        main: () => <Orders />,
    },
    {
        path: `${url.profile}`,
        exact: true,
        main: () => <UserProfile />,
    },
];

export default routes;
