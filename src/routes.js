import React from 'react'

const SignIn = React.lazy(() => import('./pages/SignIn/SignIn'))
const Home = React.lazy(() => import('./pages/Home/Home'))

const routes = [
    {path: '/sign-in', exact: false, name: 'SignIn', component: <SignIn/>},
    {path: '/', exact: true, name: 'Home', component: <Home/>},
]

export default routes;