import { createRouter, createWebHistory } from "vue-router";
import dashboard from '../pages/master/dashboard'
import accountCreation from '../pages/accountCreation'
import userDetails from '../pages/userDetails'
const routes = [
     {
        name: 'Dashboard',
        path: '/',
        component: dashboard,

     children: [
     {
        name: 'accountCreation',
        path: '/accountCreation',
        component: accountCreation
     },
     {
        name: 'userDetails',
        path: '/userDetails',
        component: userDetails
     }
    ],
 }
];

const router = Router();
export default router;
function Router() {
        const router = new createRouter({
        history: createWebHistory(),
        routes,
    });
    return router;
}