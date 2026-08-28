import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Shell = styled.div`
    min-height: 100vh;
    background: whitesmoke;
`;

export const Header = styled.header`
    padding: 20px 40px;
    background: white;
    border-bottom: 1px solid lightgray;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const HeaderTitle = styled.h1`
    font-size: 24px;
    font-weight: 600;
    color: black;
`;

export const Nav = styled.nav`
    display: flex;
    gap: 24px;
`;

export const Main = styled.main`
    padding: 20px 40px;
`;

export const StyledNavLink = styled(NavLink)`
    color: gray;
    text-decoration: none;
    font-size: 16px;

    &:hover {
        color: black;
    }

    &.active {
        color: black;
        font-weight: 600;
    }
`;