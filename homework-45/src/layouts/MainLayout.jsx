import { Outlet } from 'react-router-dom';
import {
    Shell,
    Header,
    HeaderTitle,
    Nav,
    Main,
    StyledNavLink
} from './layout-styles';
import ToggleTheme from '../components/ToggleTheme';

function MainLayout() {
    return (
        <Shell>
            <Header>
                <HeaderTitle>React Router Boilerplate</HeaderTitle>

                <ToggleTheme />

                <Nav>
                    <StyledNavLink to="/">
                        Home
                    </StyledNavLink>

                    <StyledNavLink to="/about">
                        About
                    </StyledNavLink>

                    <StyledNavLink to="/contacts">
                        Contact
                    </StyledNavLink>
                </Nav>
            </Header>

            <Main>
                <Outlet />
            </Main>
        </Shell>
    );
}

export default MainLayout;