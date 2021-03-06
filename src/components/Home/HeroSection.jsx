import React from 'react';
import styled from 'styled-components';
import Play from '../../icons/play.png'

const Container = styled.div `
    padding-left:80px;
    padding-right:80px;
    display: flex;

    .text-Container {
        width:50%;
    }
    .smallText {
        margin-top:10px;
    }

    .text-btn {
        background: #FFEAEB;
        border-radius: 20px;
        margin-top:50px;
        color:#FF0944;
        width: 150px;
        padding: 13px;
    }

    .title-header {
        font-size: 4.9rem;
        font-family: 'LibraSansModernRegular'; 
        line-height: 1.2;
        margin-top:40px;
        font-weight:900;
        color:#323232;
    }

    .color {
        color:#FF0041;
    }

    .subtitle {
        color:#595959;
        margin-top: 20px;
        font-size: 1.5rem;
        line-height:1.5;
    }

    .buttons {
        display:flex;
        margin-top: 20px;
        font-size:1.2rem ;
    }

    .playbtn {
        width:20px;
        margin-right: 10px;
    }

    .getStartedbtn {
        background-color: #ED303C;
        color: white;
        width: 150px;
        text-align: center;
        margin-right:20px ;
        padding: 26px;
        border-radius:20px;
        height: 70px;
    }

    .getStartedbtn > a{
        color:white;
        font-weight:bold;
        text-decoration:none;
    }

    .watchVidbtn {
        display: flex;
        justify-content: center;
        align-items: center;
        // background-color: #ED303C;
        color: #595959;
        font-weight: bold;
        width: 160px;
        text-align: center;
        padding: 15px;
        border-radius:20px;
        height: 70px;
        text-decoration:none;
    }

    .watchVidbtn:hover {
        background-color: #555E7B;
        border-radius: 20px;
        text-decoration:none;
        color:white;
        transition: 0.5s ease-in-out;
    }

    .review {
        margin-top: 40px;
        display: flex;
        align-items: center;
    }

    .imageCard {
        width: 50%;
    }

    .playbtn2{
        width:70px;
        position:relative;
        z-index:2;
        right:15px;
        border-radius: 50px;
        height: 70px;
        object-fit: cover;
        border:3px solid white;
    }

    .playbtn3 {
        width:70px;
        position:relative;
        z-index:2;
        right:30px;
        border-radius: 50px;
        height:70px;
        object-fit: cover;
        border:3px solid white;
    }

    .playbtn1 {
        width:70px;
        position:relative;
        z-index:0;
        border-radius: 50px;
        height: 70px;
        object-fit: cover;
        border:3px solid white;
    }

    .textReview {
        font-family: 'TeXGyreAdventorRegular'; 
        font-weight:900;
    }

    .heroImage {
        width:50%;
    }

    .profile {
        width:650px;
        border-radius:50%;
    }

    .timer {
        position:absolute;
        top:200px;
        right:540px;
        font-size:80px;
    }



    .flame {
        position:absolute;
        top:200px;
        right:40px;
        font-size:50px;
        transform:rotate(-30deg);
        animation-duration: 2s;
        animation-iteration-count: infinite;
        transform-origin: bottom;
    }



    .bounce-2 {
        transform:rotate(-30deg);
        animation-name: bounce-2;
        animation-timing-function: ease;
    }
    @keyframes bounce-2 {
        0%   { transform: translateY(0); }
        50%  { transform: translateY(-100px); }
        100% { transform: translateY(0); }
    }
`

const HeroSection = () => {
    return (
        <Container>
            <div className="text-Container">
                <div className="smallText">
                    <div className="text-btn">
                        More than faster <span>&#x1F353;</span>
                    </div>
                    <div className="title">
                        <h1 className="title-header">Be The Fastest In Delivering Your <span className="color">Food</span></h1>
                    </div>
                    <div className="subTitle">
                        <p className="subtitle">Our job is to feel your tummy with delicious food and with fast delivery.</p>
                    </div>
                    <div className="buttons">
                        <div className="getStartedbtn">
                            <a href="#" className="getStartedBtn">Get Started</a>
                        </div>
                        <a className="watchVidbtn" href="#">
                            <img src={Play} alt="watchbtn" className="playbtn"/>
                            <p className="vidText">Watch Video</p>
                        </a>
                    </div>
                    <div className="review">
                        <div className="imageCard">
                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="watchbtn" className="playbtn1"/>
                            <img src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="watchbtn" className="playbtn2"/>
                            <img src="https://p1.pxfuel.com/preview/901/383/654/girl-studio-female-woman-profile-black-and-white-royalty-free-thumbnail.jpg" alt="watchbtn" className="playbtn3"/>
                        </div>
                        <div className="textReview">
                            <div>
                                <h3 className="Reviewtext">Our Happy Customer</h3>
                            </div>
                            <div className="reviewRate">
                                4,8 (12.5k Review)
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="heroImage">
                <span className="timer bounce-2">&#9202;</span>
                <span className="flame bounce-2">&#128293;</span>
                <img src="https://www.pngitem.com/pimgs/m/525-5257403_todoroki-food-hungry-cute-myheroacademia-idfk-hd-png.png" alt="profile" className="profile"/>
            </div>
            
        </Container>
    )
}

export default HeroSection
