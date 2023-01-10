import React from 'react';
import ReactDOM from "react-dom/client";
import Body from './Components/Body';
import Footer from './Components/Footer';
import Title from './Components/Title';

const Header =()=>{
    return <>
        <Title />
        <Body />
        <Footer />
    </>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);