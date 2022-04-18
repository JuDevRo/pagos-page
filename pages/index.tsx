import React from 'react'
import Pay from '../components/Pay/Pay'

import estilo from '../styles/index.module.css'

const Home = () => {
    return(
        <div className={estilo.c}>
        <div className={estilo.container}>
            <div className={estilo.containerH}>
                <h1 className={estilo.h1}>Realizar cobro express</h1>
                <button className={estilo.servicbutton}><span className={estilo.servic}>SERVICIOS</span></button>
                <span className={estilo.items}>ITEMS PRECARGADOS</span>
            </div>
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400&display=swap');
            </style>
            <Pay/>
        </div>
        </div>
    )
}

export default Home