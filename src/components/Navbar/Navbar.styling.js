import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
        height: 8rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000;
`;

export const NavUL = styled.ul`
    height: 100%;
    width: 100%;
    max-width: 116rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 3rem;
`;

export const NavLogo = styled.img`
@media screen and(min-width: 700px){
     height: 6rem;
}
   
`;

export const ListContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.4rem;
    letter-spacing: .1rem;
    color: #f1f1f1;
    text-transform: uppercase;
@media screen and (min-width:950px){    
    width: 60%;    
}
    
`;

export const ListWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
    margin: auto;
    padding: 0 1rem;
@media screen and (min-width: 750px){
    width: 50%;
    margin-right: 4rem;
}    
`;

export const NavItemsRight = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
min-width: 20rem;  
`;

export const NavLI = styled.li`
`;

export const SearchIcon = styled.div`
`;

export const Language = styled.li`
display: flex;
`;

