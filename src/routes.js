import React from 'react'

const SignIn = React.lazy(() => import('./pages/SignIn/SignIn'))
const Home = React.lazy(() => import('./pages/Home/Home'))
const SignUpMentee = React.lazy(()=> import('./pages/SignUpMentee/SignUpMentee')) 

const routes = [
    {path: '/sign-in', exact: false, name: 'SignIn', component: <SignIn/>},
    {path: '/sign-up-mentee', exact: false, name: 'SignUpMentee', component: <SignUpMentee/>},
    {path: '/', exact: true, name: 'Home', component: <Home/>},
]

export default routes;