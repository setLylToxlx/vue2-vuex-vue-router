import App from '../App'

export default [{
    path: '/',
    component: App,
    children: [{
        path: '/',
        component: r => require.ensure([], () => r(require('../page/count')), 'count')
    },{
        path: '/second',
        component: r => require.ensure([], () => r(require('../page/second')), 'second')
    }]
}]