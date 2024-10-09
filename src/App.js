import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
    return (
        <>
            <Header />
            <About />
            <Skills />
            <Projects />
            <Footer />
        </>
    );
}
