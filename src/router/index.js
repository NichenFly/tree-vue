import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Tree from '@/components/Tree'

Vue.use(Router)

export default new Router({
	// mode: 'history',
  	routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
	    {
	      path: '/tree',
	      name: 'Tree',
	      component: Tree
	    }
  ]
})
