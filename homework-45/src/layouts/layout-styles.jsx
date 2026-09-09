import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Shell = styled.div`
    min-height: 100vh;
    background: var(--bg-color);
    color: var(--text-color);
`;

export const Header = styled.header`
    padding: 20px 40px;
    background: var(--header-bg);
    border-bottom: 1px solid var(--border-color);

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const HeaderTitle = styled.h1`
    font-size: 24px;
    font-weight: 600;
    color: var(--text-color);
`;

export const Nav = styled.nav`
    display: flex;
    gap: 24px;
`;

export const Main = styled.main`
    padding: 20px 40px;
`;

export const StyledNavLink = styled(NavLink)`
    color: var(--nav-link-color);
    text-decoration: none;
    font-size: 16px;

    &:hover {
        color: var(--nav-link-hover);
    }

    &.active {
        color: var(--nav-link-hover);
        font-weight: 600;
    }
`;