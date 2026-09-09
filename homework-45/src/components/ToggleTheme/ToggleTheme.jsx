import { useDispatch } from 'react-redux';
import { setTheme } from '../../redux/themeSlice';
import { ThemeButton, ThemeBlock } from '../../styles';

function ToggleTheme() {

    const dispatch = useDispatch();

    return (
        <ThemeBlock>
            <ThemeButton
                type="button"
                onClick={() => dispatch(setTheme('light'))}
            >
                ☀️
            </ThemeButton>
            <ThemeButton
                type="button"
                onClick={() => dispatch(setTheme('dark'))}
            >
                🌑
            </ThemeButton>
        </ThemeBlock>
    )
}

export default ToggleTheme;