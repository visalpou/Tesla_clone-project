import React from 'react';
import styled from 'styled-components';

function Header() {
  return(
    <Navbar>
        <a href='#'><img src='/img/logo.svg' /></a>      
        <Link>
            <li>Model S</li>
            <li>Model 3</li>
            <li>Model X</li>
            <li>Model Y</li>
            <li>Solar Roof</li>
            <li>Solar Panels</li>
        </Link>    
        <RightNavbar>
            <a href='#'>Shop</a>
            <a href='#'>Account</a>
        </RightNavbar>  
    </Navbar>
  )
}

export default Header;
const Navbar = styled.div`
    position:fixed;
    display:flex;
    align-items:center;
    right:0;
    left:0;
    top:0;
    img{
      padding: 15px 25px;
    }
`
const Link = styled.div`
    list-style:none;
    width:100%;
    display:flex;
    justify-content:center;
    li{
      font-weight:600;
      padding: 0px 10px;
    }
`
const RightNavbar = styled.div`
    right:0;
    display:flex;
    align-items:center;
    a{
      font-weight:600;
      padding: 0px 10px;
      text-decoration:none;
      cursor:pointer;
    }
`
