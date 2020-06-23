import React from 'react';
import styled from 'styled-components'
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


const AboutStyled = styled.div`
margin-top: 30px;
padding: 100px;
 /*border: 1px solid red;*/
background: black;
.about{
    display: grid;
    /*grid-template-columns: 1fr 1fr 1fr;*/
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 25px;
    margin: 10px 0;
    /*rder: 1px solid red;*/
}
.me{
    /*border: 1px solid red;*/
    
    
    
}

.likes{
    /*border: 1px solid red;*/
    text-align: center;
    

}

.likes-area{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin: 10px;
    padding: 10px;
    background: #0F0F0F;
    border-radius: 15px;
}

.likes-card1{
    /*border: 1px solid red;*/
    display: flex;
    justify-content: center;
    align-items: center;
}
.likes-card2{
    /*border: 1px solid red;*/
    
}

.skills{
    /*border: 1px solid red;*/
    text-align: center;
    
    
}

.league-icon{
    width:100px;
    height: 100px;
    
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 15px 5px;
  grid-template-areas: ". . . ." ". . . .";
  padding: 10px;
  background: #0F0F0F;
  border-radius: 15px;
}

.programs{
    /*border: 1px solid red;*/
    display: flex;
    align-items: center;
    justify-content: center;
    
}
.programas-img{
    width:50px;
    height: 50px;
}
.programas-img-css{
    width:64px;
    height: 64px;
}

h1{
    text-align: center;
    color: white;
    margin-bottom: 20px;
    border-bottom: 2px solid #40c3ff;;
}

p{
    color: white;
}

.aboutme{
    color:white;
    padding: 10px;
    background: #0F0F0F;
    border-radius: 15px;
}

i{
    font-size: 40px;
    color: white;
    margin: 10px;
}
li{
    list-style: none;
}

li span{
    color: white;
}


`

export default function About() {

    return (
        <AboutStyled id="about">
            <div className="about">
                <div className="me">
                    <h1>About <span>me</span></h1>
                    <p className = "aboutme">
                    A lo largo de mi carrera me interese por el area del internet de las cosas debido a que combina 2 areas interesantes,
                    las cuales son software y hardware, mi curiosidad en el software me llevo al aprendizaje del desarrollo web el cual es
                    He realizado mis proyectos usando tecnologias 
                    del frontend como react y complementandolos con herramientas del backend como node.js y mongodb.
                    </p>
                </div>
                <div className="likes">
                    <h1><span>Hobbies</span></h1>
                    <div className="likes-area">
                        <div className="likes-card1">
                            <ul>
                                <li>
                                    <i className="fas fa-biking"></i>
                                    <span> Cycling</span>

                                </li>
                                
                                <li>
                                    <i className="fas fa-heartbeat"></i>
                                    <span> Exercice</span>
                                </li>
                                <li>
                                    <i className="fas fa-laptop-code"></i>
                                    <span> Code</span>
                                </li>

                            </ul>
                        </div>
                        <div className="likes-card2">
                            <p>play League of Legends</p>
                            <img className="league-icon" src={league2} alt="" />



                        </div>
                    </div>


                </div>
                <div className="skills">
                    <h1><span>Skills</span></h1>
                    <div className="grid-container">
                        <div className="programs"><img className="programas-img" src={html} alt="" /></div>
                        <div className="programs"><img className="programas-img-css" src={css} alt="" /></div>
                        <div className="programs"><img className="programas-img" src={js} alt="" /></div>
                        <div className="programs"><img className="programas-img" src={node} alt="" /></div>
                        <div className="programs"><img className="programas-img" src={react} alt="" /></div>
                        <div className="programs"><img className="programas-img" src={python} alt="" /></div>
                        <div className="programs"><img className="programas-img" src={rasp} alt="" /></div>
                        <div className="programs"><img className="programas-img" src={iot} alt="" /></div>
                        <div className="programs"><img className="programas-img" src={ps} alt="" /></div>
                        <div className="programs"><img className="programas-img" src={mongo} alt="" /></div>
                        <div className="programs"><img className="programas-img" src={bootstrap} alt="" /></div>
                        <div className="programs"><img className="programas-img" src={redux} alt="" /></div>
                    </div>

                </div>
            </div>
        </AboutStyled>
    )
}