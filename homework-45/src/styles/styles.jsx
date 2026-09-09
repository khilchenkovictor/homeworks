import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Title = styled.h2`
    font-size: 24px;
    font-weight: 600;
    color: var(--text-color);
    margin-bottom: 16px;
`;

export const Description = styled.p`
    font-size: 16px;
    line-height: 1.6;
    color: var(--nav-link-color);
`;

export const Content = styled.div`
    max-width: 700px;
    margin: 40px auto;
    padding: 30px;
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

export const StyledNavLink = styled(NavLink)`
    color: var(--nav-link-color);
    text-decoration: none;
    font-size: 16px;

    &:hover {
        color: var(--nav-link-hover);
    }
`;

export const ThemeButton = styled.button`
    font-size: 10px;
    padding: 8px 12px;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    background: var(--card-bg);
    color: var(--text-color);
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        background: var(--border-color);
    }
`;

export const ThemeBlock = styled.div`
    display: flex;
    gap: 8px;
`;

export const UserDataContainer = styled.div`
    padding: 20px;
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    margin-bottom: 20px;
`;

export const UserInfo = styled.div`
    margin-bottom: 16px;
`;

export const UserInfoText = styled.p`
    margin: 8px 0;
    color: var(--text-color);
    font-size: 14px;
`;

export const UpdateUserDataContainer = styled.div`
    padding: 20px;
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 8px;
`;

export const Input = styled.input`
    display: block;
    width: 100%;
    padding: 10px;
    margin-bottom: 12px;
    border: 1px solid var(--border-color);
    border-radius: 6px;
    background: var(--bg-color);
    color: var(--text-color);
    font-size: 14px;

    &:focus {
        outline: none;
        border-color: var(--nav-link-hover);
    }
`;

export const Button = styled.button`
    padding: 10px 20px;
    margin-right: 10px;
    border: 1px solid var(--border-color);
    border-radius: 6px;
    background: var(--card-bg);
    color: var(--text-color);
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        background: var(--border-color);
    }
`;