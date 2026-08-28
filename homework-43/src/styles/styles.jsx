import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Title = styled.h2`
    font-size: 24px;
    font-weight: 600;
    color: black;
    margin-bottom: 16px;
`;

export const Description = styled.p`
    font-size: 16px;
    line-height: 1.6;
    color: gray;
`;

export const Content = styled.div`
    max-width: 700px;
    margin: 40px auto;
    padding: 30px;
    background: white;
    border: 1px solid lightgray;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

export const StyledNavLink = styled(NavLink)`
    color: gray;
    text-decoration: none;
    font-size: 16px;

    &:hover {
        color: black;
    }
`;