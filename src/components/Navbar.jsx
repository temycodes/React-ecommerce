import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    color: #1f4037;
    height: 60px;
    margin-bottom: 30px;
    display:flex;
    align-items:center
`
const Left = styled.div`
    flex:3;
    padding-left:80px;
`
const Right = styled.div`
    flex:7;
    padding-right:80px;
    display:flex;
    justify-content:flex-end;
`

const NavbarContainer = styled.div`

`

const NavbarLink = styled(NavLink)`
    text-decoration:none;
    font-size:1rem;
    color:#1f4037;
    margin:2px;
    padding:0 10px;

    @media screen and (max-width:900px) {
        display:none;        
    }

`

const Nav = styled.a`
    margin:2px;
    padding:0 10px;

    @media screen and (max-width:900px) {
        display:none;      
    }


    .fas.fa-cart-plus {
        color: #1f4037;
    }
`
const Button = styled.button `
    font-size:1rem;
    padding: 08px;
    background: inherit;
    border: 1px solid #1f4037;
    border-radius: 5px;
    color: #1f4037;
`

const Logo = styled.h1`

`

const NavButton = styled.button `
    width: 40px;
    height: 50px;
    border:none;
    background: none;
    color: #1f4037;
    cursor:pointer;
    font-size:40px;
    vertical-align:middle;

    @media screen and (min-width:900px){
        display:none;
    }
`
const NavbarExtendedContainer = styled.div`
    position: absolute;
    top:60px;
    left:0;
    height: calc(100vh - 60px);
    width: 100%;
    background: #1f4037;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color:white;
`

const NavbarLinkExtend = styled(NavLink)`
    text-decoration:none;
    font-size:2rem;
    color:white;
    margin:10px;
    margin-bottom:20px;
`

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = () => {
        setMenuOpen((curr)=> !curr);
    }
    return (
        <Container>
            <Left>
                <Logo>Logo</Logo>
            </Left>
            <Right>
                <NavbarContainer>
                    <NavbarLink to="/">Home</NavbarLink>
                    <NavbarLink to="/pricelist">pricelist</NavbarLink>
                    <NavbarLink to="/benefit">benefit</NavbarLink>
                    <NavbarLink to="/learn">learn</NavbarLink>
                    <Nav href="#"><Button  className='btn' >Become a seller</Button></Nav>
                    <Nav href="#"><i className="fas fa-cart-plus"></i></Nav>
                    <Nav>
                        <img className="imgbtn" src={'https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png'} alt="" /><i class="fas fa-sort-down"></i>
                    </Nav>
                    <NavButton onClick={handleClick}>
                        {menuOpen ? <>&#127829;</>:<>&#127828;</>}
                    </NavButton>
                </NavbarContainer>
            </Right>

            {menuOpen && (
                <NavbarExtendedContainer>
                    <NavbarLinkExtend to="/" onClick={handleClick}>Home</NavbarLinkExtend>
                    <NavbarLinkExtend to="/pricelist" onClick={handleClick}>pricelist</NavbarLinkExtend>
                    <NavbarLinkExtend to="/benefit" onClick={handleClick}>benefit</NavbarLinkExtend>
                    <NavbarLinkExtend to="/learn" onClick={handleClick}>learn</NavbarLinkExtend>
                </NavbarExtendedContainer>
            )}
        </Container>
    )
}

export default Navbar
