import { createRouter,  createWebHistory} from 'vue-router';
import AddNew from '../components/AddNew.vue';
import ListItem from '../components/ListItem.vue';
import Edit from '../components/Edit.vue';

const routes = [
    {path: '/add-new', name:'addnew', component:AddNew},
    {path: '/', name:'list', component:ListItem},
    {path: '/edit/:id', name: 'edit', component:Edit},
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;
