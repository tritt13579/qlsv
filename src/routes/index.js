import Home from '~/Page/Home';
import TtinSV from '~/Page/TtinSV';
import TtinGV from '~/Page/TtinGV';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/ttinSV', component: TtinSV },
    { path: '/ttinGV', component: TtinGV },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
