import React from 'react';
import styled from 'styled-components'
import {useDispatch,useSelector} from 'react-redux'
import facebook from '../images/facebook.png'
import linkedin from '../images/linkedin.png'
import twitter from '../images/twitter.png'
import daniel from '../images/daniel5.jpg'
import git from '../images/hub2.png'
import raspberry from '../images/rasp-berry.png'
import { changeBanner } from '../redux/portafolioDucks';

const HeroStyled = styled.div`
header{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 40px 100px;
    z-index: 10000;
    transition: 0.6s;
}

header .logo{
    position: relative;
    font-weight: 700;
    color: #fff;
    text-decoration: none;
    font-size: 2em;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: 0.6s;
}

header .rasp{
    position: relative;
    width: 100px;
    height:40px;
    transition: 0.6s;
    cursor: pointer;
}

 header .toggle{
    position: relative;
    width: 30px;
    height: 30px;
    cursor: pointer;
    
}

 header .toggle::before{
    content: '';
    position: absolute;
    top: 7px;
    width: 100%;
    height: 2px;
    background: #fff;
    
}
 header .toggle::after{
    content: '';
    position: absolute;
    bottom: 7px;
    width: 100%;
    height: 2px;
    background: #fff;
}

.banner-active header .toggle::before{
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%) rotate(45deg);
}

.banner-active header .toggle::after{
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%) rotate(-45deg);
}
.banner{
    position: relative;
    width: 100%;
    min-height: 100vh;
    padding: 100px;
    background: url(${daniel});
    background-size: cover;
    display: flex;
    align-items: center;
    transition: 0.5s;
    z-index: 2;
}

.banner-active{
    transform: translateX(-300px);

}
.content{
    max-width: 600px;
}

.content h2{
    color: #fff;
    font-size: 2.5em;
}

.content h2 span{
    color: #40c3ff;
    font-size: 1.2em;

}

.content p{
    font-size: 1.2em;
    color: #fff;
    font-weight: 300;
}

.content a{
    position: relative;
    display: inline-block;
    margin-top: 20px;
    background: #fff;
    color: #000;
    padding: 10px 30px;
    text-decoration: none;
    font-size: 1.2em;
    font-weight: 600;
}
.sci{
    position: absolute;
    display: flex;
    flex-direction: column;
    right: 100px;
}

.sci li{
    list-style: none;

}


.sci li a{
    position: relative;
    display: grid;
    place-items: center;
    width: 50px;
    height: 50px;
    text-decoration: none;
    border: 1px solid #fff;
    margin: 10px 0 0;
}

.sci li a:hover{
    background: #fff;
}

.sci li a img{
    max-width: 20px;
    filter: invert(1);
    mix-blend-mode: difference;
}

@media (max-width: 767px){
    header {
        padding: 20px 50px;
    }

    .banner{
        
        padding: 100px 50px 150px;
    }

    .banner h2{
        
        font-size: 1.8em;
       
    }
    .banner .content p,
    .banner .content a{
        
        font-size: 1em;
       
    }

    .banner-active{
        transform: translateX(-250px);
    }

    .sci{
        position: absolute;
        bottom: 50px;
        right: initial;
        flex-direction: row;

    }

    .sci li a{
      margin: initial;
      margin-right: 10px;
    }
}

`

export default function Hero() {
    const dispatch = useDispatch()
    const banner = useSelector(store =>store.portafolio.banner)
    



    return (
        <HeroStyled>
            <section className={banner===false?"banner": "banner banner-active"} id="sec">
                <header>
                    
                    <img className="rasp" src={raspberry} alt=""/>
                    <div className="toggle" onClick={()=>dispatch(changeBanner())}></div>
                </header>
                <div className="content">
                    <h2>hello word,<br/>I'm <span>Daniel Giraldo</span></h2>
                    <p>Ingeniero electronico de la universidad industrial de santander, apasionado por el desarrollo de sofware y Internet de las cosas</p>
                    <a href="/"> Know more</a>
                </div>
                <u className="sci">
                    <li><a target="_blank" href="/"><img src={facebook} alt="" /></a></li>
                    <li><a target="_blank" href="/"><img src={linkedin} alt="" /></a></li>
                    <li><a target="_blank" href="/"><img src={git} alt="" /></a></li>
                </u>
            </section>
        </HeroStyled>
    )
}