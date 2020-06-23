import React from 'react';
import styled  from 'styled-components'
import ws from '../images/ws2.png'
import insta from '../images/insta2.png'

const FooterStyled = styled.div`
color: white;
padding: 100px;
box-sizing: border-box;


.footer{
    border-bottom: 2px solid #40c3ff;;
    display: flex;
    align-items: center;
    justify-content: center
}

.footer2{
    
    display: flex;
    align-items: center;
    justify-content: center
}

.footer img{
    width: 70px;
    height: 70px;
}

.insta{
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center
}


span{
    color: white;
}

.contacto{
    
    display: grid;
    grid-template-columns: 100px 100px;
    gap:20px;
}
.ws{
    
    display:flex;
    justify-content:center;
    align-items:center;

}
.numero{
    
    display: flex;
    align-items:center;
    justify-content:center;
}

.nick{
    
    display: flex;
    align-items:center;
    justify-content:center;
}
h2{
    letter-spacing: 3px;
    margin-left:30px;
}

.nick h2{
    margin-left:80px;
}
`


export default function Footer(){
    

    return(
        <FooterStyled id="contact">
            <div className="footer">
                <div>
                    <div className="contacto">
                        <div className="ws">
                            <img src={ws} alt=""/>
                        </div>
                        <div className="numero">
                            <h2>32192441222</h2>
                        </div>
                    </div>
                    <div className="contacto">
                        <div className="insta">
                            <img src={insta} alt=""/>
                        </div>
                        <div className="nick">
                            <h2>@metallicano18</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer2">
                &copy; Daniel Giraldo
            </div>
        </FooterStyled>
    )
}