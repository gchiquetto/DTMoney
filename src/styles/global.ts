import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;        
    }

    :focus{
        outline: none;
        box-shadow: 0 0 0 2px ${(props) => props.theme['green-300']};
    }

    body{
        background-color: ${(props) => props.theme['gray-800']};
        -webkit-font-smoothing: antialiased;
        color: ${(props) => props.theme['gray-100']};
    }

    body, input, button, textarea{
        font: 400 1rem 'Roboto', sans-serif;        
        line-height: 160%;
    }

    @media (max-width: 656px){
        html{
            font-size: 82.5%;
        }
    }


`
