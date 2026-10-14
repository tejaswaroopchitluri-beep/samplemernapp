import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Footer from './components/footer'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

  return (
    <div>
    <Header />
    <h1>My first app with react</h1>
    <h2> created by me</h2>
    <Footer />
    </div>
  )
}

export default App
