import Vue from 'vue'
import Router from 'vue-router'
import store from '@/vuex/store'
import Vuex from 'vuex'
import Home from '@/components/Home'

import Config from '@/pages/config/Config'
import Area from '@/pages/infor/Area'
import Bed from '@/pages/infor/Bed'
import Department from '@/pages/infor/Department'
import Ward from '@/pages/infor/Ward'
import Equipment from '@/pages/treatment/Equipment'
import Frequency from '@/pages/treatment/Frequency'
import Method from '@/pages/treatment/method'
import Parts from '@/pages/treatment/parts'
import Pay from '@/pages/treatment/Pay'
import Room from '@/pages/treatment/Room'
import Treatment from '@/pages/treatment/Treatment'
import Rights from '@/pages/user/Rights'
import Roles from '@/pages/user/Roles'
import User from '@/pages/user/User'
//import Area from '@/pages/infor/rea'

Vue.use(Router)
export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: Home,
			children: [
	            { path: '/rights', component: Rights, name: 'Rights' },
	            { path: '/user', component: User, name: 'User' },
	            { path: '/roles', component: Roles, name: 'Roles' },
	            { path: '/treatment', component: Treatment, name: 'Treatment' },
	            { path: '/room', component: Room, name: 'Room' },
	            { path: '/parts', component: Parts, name: 'Parts' },
	            { path: '/pay', component: Pay, name: 'Pay' },
	            { path: '/method', component: Method, name: 'Method' },
	            { path: '/frequency', component: Frequency, name: 'Frequency' },
	            { path: '/equipment', component: Equipment, name: 'Equipment' },
	            { path: '/ward', component: Ward, name: 'Ward' },
	            { path: '/department', component: Department, name: 'Department' },
	            { path: '/bed', component: Bed, name: 'Bed' },
	            { path: '/config', component: Config, name: 'Config' },
	            { path: '/area', component: Config, name: 'Area' },
	        ]
		},
		{
	        path: '*',
	        hidden: true,
	        redirect: { path: '/404' }
	    }
	]
})
