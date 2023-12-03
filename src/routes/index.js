import Home from '~/Page/Home';
import Student from '~/Page/Student';
import Teacher from '~/Page/Teacher';
import Class from '~/Page/Class';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/student', component: Student },
    { path: '/teacher', component: Teacher },
    { path: '/class', component: Class },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
