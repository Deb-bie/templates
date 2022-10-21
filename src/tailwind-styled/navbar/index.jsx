import React,{useState} from 'react'
import styled from "styled-components";
import tw from "twin.macro";
import {Link} from "react-router-dom"
import {MdFavoriteBorder, MdOutlineShoppingCart, MdClose} from "react-icons/md"
import {FaBars} from "react-icons/fa"


const Nav = styled.nav`
${tw`
    flex flex-row h-[100px] bg-green-500 3xs:overflow-hidden overflow-scroll
`};
`;

const NavContainer = styled.div`
${tw`
    flex flex-row justify-around items-center content-center h-[100px] w-full
`};
`;

const LogoContainer = styled.div`
${tw`
    flex flex-row justify-center
`};
`;

const Logo = styled.div`
${tw`
    flex justify-center text-3xl
`};
`;

const NavMenu = styled.div`
${tw`
    lg:flex flex-row hidden w-1/2
`};
`;

const NavList = styled.ul`
${tw`
    hidden lg:flex flex-row justify-evenly items-center content-center h-auto w-full
`};
`;

const MobileNavMenu = styled.div`
${tw`
    flex flex-col h-[30vh]
`};
`;

const MobileNavList = styled.ul`
${tw`
    flex flex-col justify-evenly items-center content-start h-full
`};
`;

const ListItem = styled(Link)`
${tw`
    flex
`};
`;

const IconsContainer = styled.nav`
${tw`
    hidden lg:flex flex-row justify-evenly items-center content-center w-1/5
`};
`;

const MobileIconsContainer = styled.nav`
${tw`
    lg:hidden flex flex-row justify-start items-start content-center pr-[10px]
`};
`;


const FavoriteIcon = styled.div`
${tw`
    flex pr-2
`};
`;

const ShoppingCartIcon = styled.div`
${tw`
    flex
`};
`;


const Bars = styled.div`
${tw`
    lg:hidden flex flex-row justify-end pl-[15px]
`};
`;


const MenuList = styled.div`
${tw`
    lg:hidden fixed h-screen sm:w-1/3 4xs:w-full top-[100px] right-0 4xs:overflow-hidden flex flex-col justify-start content-center items-stretch bg-blue-200
`};
`;


const MenuListContainer = styled.div`
${tw`
    flex flex-col justify-center content-center items-center
`};
`;


const TailwindAndStyledComponentsNavbar = () => {
    const [mobile, setMobile] = useState(false);

    const handleMobile = () => {
        setMobile(!mobile)
        // (mobile) ? setMobile(mobile) : setMobile(!mobile)
    }


  return (
    <Nav>
        <NavContainer>
            <MobileIconsContainer>
                <FavoriteIcon>
                    <MdFavoriteBorder />
                </FavoriteIcon>

                <ShoppingCartIcon>
                    <MdOutlineShoppingCart />
                </ShoppingCartIcon>
            </MobileIconsContainer>

            <LogoContainer>
                <Logo>MyLoGo</Logo>
            </LogoContainer>

            <NavMenu>
                <NavList>
                    <ListItem to="#">Home</ListItem>
                    <ListItem to="#">About Us</ListItem>
                    <ListItem to="#">Services</ListItem>
                    <ListItem to="#">Contact Us</ListItem>
                </NavList>
            </NavMenu>

            <IconsContainer>
                <FavoriteIcon>
                    <MdFavoriteBorder />
                </FavoriteIcon>

                <ShoppingCartIcon>
                    <MdOutlineShoppingCart />
                </ShoppingCartIcon>
            </IconsContainer>

            <Bars onClick={handleMobile}>
                {
                    (mobile) ? <MdClose /> : <FaBars />
                }
            </Bars>

            {
                (mobile) 
                ?
                <MenuList>
                    <MenuListContainer>
                        <MobileNavMenu>
                            <MobileNavList>
                                <ListItem to="#">Home</ListItem>
                                <ListItem to="#">About Us</ListItem>
                                <ListItem to="#">Services</ListItem>
                                <ListItem to="#">Contact Us</ListItem>
                            </MobileNavList>
                        </MobileNavMenu>
                    </MenuListContainer>
                </MenuList>
                : ""
            }


        </NavContainer>
    </Nav>
  )
}

export default TailwindAndStyledComponentsNavbar