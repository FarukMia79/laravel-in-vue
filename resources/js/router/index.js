import { createRouter,  createWebHistory} from 'vue-router';
import AddNew from '../components/AddNew.vue';
import ListItem from '../components/ListItem.vue';

const routes = [
    {path: '/add-new', name:'addnew', component:AddNew},
    {path: '/', name:'list', component:ListItem},
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;
