import VueRouter from 'vue-router'
import UserRegister from '../pages/UserRegister.vue'
import TimetableWrapper from '../pages/TimetableWrapper.vue'
import Order from '../pages/Order.vue'
import SingleDay from '../pages/SingleDay.vue'
import OrderConfirmation from '../pages//OrderConfirmation.vue'
import OrderView from '../pages/OrderView.vue'
import SingleOrder from '../pages/SingleOrder.vue'
import SingleBooking from '../pages/SingleBooking.vue'
import EditBooking from '../pages/EditBooking.vue'
import * as dayjs from 'dayjs'
import 'dayjs/locale/ru'
const router =  new VueRouter({
    // mode: 'history',
    routes: [
        {
            name: 'registerUser',
            path: '/register',
            component: UserRegister,
            props: (route)=>({...route.params})
        },
        {
            path: '/order',
            name: 'order',
            component: Order,
            props: (route)=>({...route.params})
        },
        {
            path: '/day/:id',
            name: 'day',
            component: SingleDay
        },
        {
            path: '/confirmation',
            name: 'confirmation',
            component: OrderConfirmation,
            props: (route)=>({...route.params})
        },
        {
            path: '/allTime',
            name: 'main',
            component: TimetableWrapper
        },
        {
            path: '/orders',
            name: 'orders',
            component: OrderView
        },
        {
            path: '/order/:id',
            name: 'singleOrder',
            component: SingleOrder,
        },
        {
            path: '/order/:id/:id',
            name:'singleBooking',
            component: SingleBooking
        },
        {
            path: '/order/:id/:id/edit',
            name: 'edit',
            component: EditBooking
        },
        {
            path: '/',
            redirect: `day/${dayjs().format('DD-MM-YYYY')}`,
        },
    
    ]
})
export default router