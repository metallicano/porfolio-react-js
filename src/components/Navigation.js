import React from 'react';
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { changeBanner } from '../redux/portafolioDucks';

const NavigationStyled = styled.div`

.navigation{
    position: fixed;
    top: 0;
    right: -300px;
    width: 300px;
    height: 100%;
    background: #40c3ff;
    z-index: 1;
    display: grid;
    place-items: center;
    transition: 0.5s;
}

.navigation-active{
    right: 0;
}

.navigation ul{
    position: relative;
    display: flex;
    flex-direction: column;
}

.navigation ul li{
    list-style: none;

}

.navigation ul li a{
    color: #fff;
    text-decoration: none;
    display: inline-block;
    font-size: 2em;
    font-weight: 600;
    text-transform: uppercase;
}

@media (max-width: 767px){
    
    .navigation{
        width: 250px;
    }

    .navigation ul li a{
        font-size: 1.5em;
        margin: 5px 0;
    }


}

`

export default function Navigation() {
    const dispatch = useDispatch()
    const banner = useSelector(store => store.portafolio.banner)

    return (
        <NavigationStyled>
            <div className={banner === false ? "navigation" : "navigation navigation-active"}>
                <ul>
                    <li><a href="/" onClick={()=>dispatch(changeBanner())}>HOME</a></li>
                    <li><a href="#about" onClick={()=>dispatch(changeBanner())}>ABOUT</a></li>
                    <li><a href="#projects" onClick={()=>dispatch(changeBanner())}>PROJECTS</a></li>
                    <li><a href="#contact" onClick={()=>dispatch(changeBanner())}>CONTACT</a></li>
                </ul>

            </div>
        </NavigationStyled>
    )
}