import { Title, Content, StyledNavLink } from '../styles'

function NotFoundPage() {

    return (
        <Content>
            <Title>
                Page Not Found
            </Title>
            <StyledNavLink to="/">
                Return to Home page...
            </StyledNavLink>
        </Content>
    )
}

export default NotFoundPage;