import React from 'react'

const SignIn = React.lazy(() => import('./pages/SignIn/SignIn'))
const Home = React.lazy(() => import('./pages/Home/Home'))
const SignUpMentee = React.lazy(()=> import('./pages/SignUpMentee/SignUpMentee')) 
const SignUpMentor = React.lazy(()=> import('./pages/SignUpMentor/SignUpMentor')) 

const routes = [
    {path: '/sign-in', exact: false, name: 'SignIn', component: <SignIn/>},
    {path: '/sign-up-mentee', exact: false, name: 'SignUpMentee', component: <SignUpMentee/>},
    {path: '/sign-up-mentor', exact: false, name: 'SignUpMentor', component: <SignUpMentor/>},
    {path: '/', exact: true, name: 'Home', component: <SignIn/>},
]

export default routes;