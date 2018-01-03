import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/home'
// 我的
import MyCars from '@/views/owner/myCars'
import MyHistorySites from '@/views/owner/myHistorySites'
import MyOwner from '@/views/owner/myOwner'
import MyParkLot from '@/views/owner/myParkLot'
import MyParkRecord from '@/views/owner/myParkRecord'
import MySetUp from '@/views/owner/mySetUp'
import MyWallet from '@/views/owner/myWallet'
// 注册
import AddCar from '@/views/register/addCar'
import Register from '@/views/register/register'
// 钱包
import WBill from '@/views/wallet/wBill'
import WBindAccount from '@/views/wallet/wBindAccount'
import WCoupon from '@/views/wallet/wCoupon'
import WRecharge from '@/views/wallet/wRecharge'
import WTakeInvoice from '@/views/wallet/wTakeInvoice'
import WTakeMoney from '@/views/wallet/wTakeMoney'
import WWallet from '@/views/wallet/wWallet'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    // 我的
    { path: '/myCars', name: 'MyCars', component: MyCars },
    { path: '/myHistorySites', name: 'MyHistorySites', component: MyHistorySites },
    { path: '/myOwner', name: 'MyOwner', component: MyOwner },
    { path: '/myParkLot', name: 'MyParkLot', component: MyParkLot },
    { path: '/myParkRecord', name: 'MyParkRecord', component: MyParkRecord },
    { path: '/mySetUp', name: 'MySetUp', component: MySetUp },
    { path: '/myWallet', name: 'MyWallet', component: MyWallet },
    // 注册
    { path: '/addCar', name: 'AddCar', component: AddCar },
    { path: '/register', name: 'Register', component: Register },
    // 钱包
    { path: '/wBill', name: 'WBill', component: WBill },
    { path: '/wBindAccount', name: 'WBindAccount', component: WBindAccount },
    { path: '/wCoupon', name: 'WCoupon', component: WCoupon },
    { path: '/wRecharge', name: 'WRecharge', component: WRecharge },
    { path: '/wTakeInvoice', name: 'WTakeInvoice', component: WTakeInvoice },
    { path: '/wTakeMoney', name: 'WTakeMoney', component: WTakeMoney },
    { path: '/wWallet', name: 'WWallet', component: WWallet },
  ]
})

export default router
