import React from 'react'
import Logo from '../assets/images/faunaLogo-1.png';
import { ImSearch } from "react-icons/im";
import {
    NavbarWrapper,
    NavUL,
    NavLogo,
    ListContainer,
    ListWrapper,
    NavLI,
    SearchIcon,
    Language,
    NavItemsRight
} from './Navbar.styling'
import { Btn } from '../sharedComponents';

const Navbar = () => {
    return (
        <>
            <NavbarWrapper>
                <NavUL>
                    <NavLogo src={Logo} alt="logo" />
                    <ListContainer>
                        <ListWrapper>
                            <NavLI>about</NavLI>
                            <NavLI>projects</NavLI>
                            <NavLI>get involved</NavLI>
                        </ListWrapper>
                        <NavItemsRight>
                            <Btn>donate</Btn>
                            <SearchIcon>
                                <ImSearch />
                            </SearchIcon>
                            <Language>en / nl</Language>
                        </NavItemsRight>
                    </ListContainer>
                </NavUL>
            </NavbarWrapper>
        </>
    )
}

export default Navbar
