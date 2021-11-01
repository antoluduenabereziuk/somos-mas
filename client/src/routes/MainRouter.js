import React from 'react'
import { Switch, Route } from 'react-router'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import { About } from '../pages/About'
import { Activities } from '../pages/Activities'
import { Contacts } from '../pages/Contacts'
import { Contribute } from '../pages/Contribute'
import { Home } from '../pages/Home'
import { News } from '../pages/News'
import { NotFound } from '../pages/NotFound'
import { Novelties } from '../pages/Novelties'
import { Testimonials } from '../pages/Testimonials'
import { User } from '../pages/User'

export const MainRouter = () => {
    return (
        <div>
            <Header />
                <Switch>
                    <Route 
                    exact 
                    path="/" 
                    component={Home} /
                    >

                    <Route 
                    exact 
                    path="/about" 
                    component={About} 
                    />

                    <Route 
                    exact 
                    path="/activities" 
                    component={Activities} 
                    />

                    <Route 
                    exact 
                    path="/news" 
                    component={News} 
                    />

                    <Route 
                    exact 
                    path="/novelties" 
                    component={Novelties} 
                    />

                    <Route 
                    exact 
                    path="/testimonials" 
                    component={Testimonials} 
                    />

                    <Route 
                    exact 
                    path="/contacts" 
                    component={Contacts} 
                    />

                    <Route 
                    exact 
                    path="/contribute" 
                    component={Contribute} 
                    />

                    <Route 
                    exact 
                    path="/user" 
                    component={User} 
                    />

                    <Route 
                    path="*" 
                    component={NotFound} 
                    />

                </Switch>
            <Footer />
        </div>
    )
}
