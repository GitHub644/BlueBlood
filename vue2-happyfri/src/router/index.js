import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
Vue.use(Router)
const routes = [
        {
        path: '/',
        component: r => require.ensure([], () => r(require('../App')), 'App')
        }, 
        {
        path: '/server',
        component: r => require.ensure([], () => r(require('../page/server')), 'server')
        }, 
        {
        path: '/deposite',
        component: r => require.ensure([], () => r(require('../page/deposite')), 'deposite')
        }, 
        {
        path: '/game',
        component: r => require.ensure([], () => r(require('../page/game')), 'game')
        }, 
        {
        path: '/my',
        component: r => require.ensure([], () => r(require('../page/my')), 'my'),
        children:[
                    {
                        path: '', 
                        components:   r => require.ensure([], () => r(require('../page/my/subPage/submy1')), 'submy1'),
                    },
                    {
                        path: '/submy2', 
                        components:   r => require.ensure([], () => r(require('../page/my/subPage/submy2')), 'submy2'),
                    },
                    {
                        path: '/submy3', 
                        components:   r => require.ensure([], () => r(require('../page/my/subPage/submy3')), 'submy3'),
                    },
                    {
                        path: '/submy4', 
                        components:   r => require.ensure([], () => r(require('../page/my/subPage/submy4')), 'submy4'),
                    },
                    {
                        path: '/submy5', 
                        components:   r => require.ensure([], () => r(require('../page/my/subPage/submy5')), 'submy5'),
                    }        
               ]
        }
    
]

export default  new Router({
	routes
})
