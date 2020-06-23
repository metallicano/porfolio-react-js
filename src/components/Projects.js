import React from 'react';
import styled from 'styled-components'
import pokemon from '../images/pokemon.jpg'
import js from '../images/js2.svg'
import league2 from '../images/lol5.png'
import css from '../images/css.png'
import html from '../images/html2.png'
import iot from '../images/iot3.png'
import node from '../images/node3.png'
import ps from '../images/ps.png'
import python from '../images/python2.jpg'
import rasp from '../images/rasp3.png'
import react from '../images/react.png'
import mongo from '../images/mongo2.png'
import redux from '../images/redux.png'
import bootstrap from '../images/bot2.png'
import github from '../images/github.png'
import books from '../images/book3.jpg'
import weather from '../images/weather.png'



const ProjectsStyled = styled.div`
display: grid;
padding: 100px;

color: white;
box-sizing: border-box;

.project{
    display: grid;
    
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    column-gap: 15px;
    
}

.card{
    
    border-radius: 15px;
    overflow: hidden;
    background: #0F0F0F;
    margin-bottom: 15px;
}

.card-header{
    

}

.card-header img{
    width: 100%;
    height: 200px;
    

}

.card-body{
    
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 20px;
    min-height:200px;

}

.card-body h1{
    
}

.contenido{
    
    margin: 20px 0;
}

.herramientas{
    flex: 1;
   
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 7px;
    
}
.icon{
    
}
.icon img{
    width: 30px;
    height: 30px;
}

.cabecera{
    margin-bottom: 20px;
}

span{
    color: #40c3ff;
}

a{
    color: #40c3ff;
    text-decoration: none;
}
`

export default function Projects() {

    return (
        <ProjectsStyled id="projects">
            <div className="cabecera">
            <h1>projects</h1>
            <p>Estos son algunos de los proyectos que he realizado para mejorar mis habilidades en el desarollo web, todos mis proyectos se encuentran en <span><a href="/">mi github</a></span></p>
            </div>
            <div className="project">
                <div className="card">
                    <div className="card-header">
                        <img src={github} alt="" />
                    </div>
                    <div className="card-body">
                        <h1>Github Clone</h1>
                        <div className="contenido">
                            <p>Este proyecto te permite buscar los repositorios de codigo de los usuarios de github, consumiendo su api</p>
                        </div>
                        <div className="herramientas">
                            <div className="icon"><img src={js} alt="" /> </div>
                            <div className="icon"><img src={bootstrap} alt="" /></div>
                            <div className="icon"><img src={html} alt="" /></div>
                            
                        </div>
                    </div>
                </div>
                <div className="card">
                <div className="card-header">
                        <img src={pokemon} alt="" />
                    </div>
                    <div className="card-body">
                        <h1>Pokedex</h1>
                        <div className="contenido">
                            <p>Esta applicacion te permite buscar cualquier pokemon y obtener informacion de sus estadisicas base, gracias a la PokeApi</p>
                        </div>
                        <div className="herramientas">
                            <div className="icon"><img src={react} alt="" /> </div>
                            <div className="icon"><img src={redux} alt="" /></div>
                            <div className="icon"><img src={bootstrap} alt="" /></div>
                            <div className="icon"><img src={js} alt="" /></div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <img src={books} alt="" />
                    </div>
                    <div className="card-body">
                        <h1>Books App</h1>
                        <div className="contenido">
                            <p>Aplicaion full stack de javascript que te permite guardar tus libros favoritos en una base de datos</p>
                        </div>
                        <div className="herramientas">
                            <div className="icon"><img src={html} alt="" /> </div>
                            <div className="icon"><img src={js} alt="" /></div>
                            <div className="icon"><img src={bootstrap} alt="" /></div>
                            <div className="icon"><img src={node} alt="" /></div>
                            <div className="icon"><img src={mongo} alt="" /></div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <img src={weather} alt="" />
                    </div>
                    <div className="card-body">
                        <h1>Weather App</h1>
                        <div className="contenido">
                            <p>Encuentra los datos climaticos de cualquier parte del mundo. Esta aplicacion te plasma los datos en una grafica realizada con chart.js que cambia en tiempo real, </p>
                        </div>
                        <div className="herramientas">
                            <div className="icon"><img src={js} alt="" /> </div>
                            <div className="icon"><img src={bootstrap} alt="" /></div>
                            <div className="icon"><img src={react} alt="" /></div>
                            
                        </div>
                    </div>
                </div>
            </div>

        </ProjectsStyled>
    )
}