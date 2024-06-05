import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from './components/HomeComponent.vue';
import AdminComponent from './components/AdminComponent.vue';
import DailyComponent from './components/DailyComponent.vue';
import IncomeExpenditureComponent from './components/IncomeExpenditureComponent.vue';
import NoteComponent from './components/NoteComponent.vue';
import SchoolTableComponent from './components/SchoolTableComponent.vue';
import PlanComponent from './components/PlanComponent.vue';
import PrintNoteComponent from './components/PrintNoteComponent.vue';
import PrintIncomeComponent from './components/PrintIncomeComponent.vue';
import PrintExpenditureComponent from './components/PrintExpenditureComponent.vue';
import PlanSuccessComponent from './components/PlanSuccessComponent.vue';
import PlanNotYetSuccessComponent from './components/PlanNotYetSuccessComponent.vue';

const routes = [
    {
      path: '/dashboard',
      name: 'HomeComponent',
      component: HomeComponent,
      meta: { requiresAuth: true }
    },
    {
      path: '/admin',
      name: 'AdminComponent',
      component: AdminComponent,
      meta: { requiresAuth: true }
    },
    {
      path: '/daily',
      name: 'DailyComponent',
      component: DailyComponent,
      meta: { requiresAuth: true }
    },
    {
      path: '/income_expenditure',
      name: 'IncomeExpenditureComponent',
      component: IncomeExpenditureComponent,
      meta: { requiresAuth: true }
    },
    {
      path: '/note',
      name: 'NoteComponent',
      component: NoteComponent,
      meta: { requiresAuth: true }
    },
    {
      path: '/school_table',
      name: 'SchoolTableComponent',
      component: SchoolTableComponent,
      meta: { requiresAuth: true }
    },
    {
      path: '/plan',
      name: 'PlanComponent',
      component: PlanComponent,
      meta: { requiresAuth: true }
    },
    {
      path: '/print_note',
      name: 'PrintNoteComponent',
      component: PrintNoteComponent,
      meta: { requiresAuth: true }
    },
    {
      path: '/print_income',
      name: 'PrintIncomeComponent',
      component: PrintIncomeComponent,
      meta: { requiresAuth: true }
    },
    {
      path: '/print_expenditure',
      name: 'PrintExpenditureComponent',
      component: PrintExpenditureComponent,
      meta: { requiresAuth: true }
    },
    {
      path: '/plan_success',
      name: 'PlanSuccessComponent',
      component: PlanSuccessComponent,
      meta: { requiresAuth: true }
    },
    {
      path: '/plan_not_yet_success',
      name: 'PlanNotYetSuccessComponent',
      component: PlanNotYetSuccessComponent,
      meta: { requiresAuth: true }
    }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;