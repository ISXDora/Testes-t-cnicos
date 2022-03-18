import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
:root {
    --background: #F7FAFC;
    --gradient: linear-gradient(180deg, #1482FC 0%, #9513FB 100%)
    --text-heading: #27272E;
    --title-form-default:#425466; 
    --color-primary-button: #3754DB;
    --color-seconday-button: #E1E8FF;

}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    @media(max-width: 1080px){
        font-size: 93.75%; //15px
    }
    @media(max-width: 720px){
        font-size: 87.5% //14px
    }
}

body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
}

body, input, button {
    font: 'Inter', sans-serif;
}

h1{
    font-weight: 700;
}

h2, button {
    font-weight: 600;
}

button {
    cursor: pointer;
    [disable]{
        opacity: 0.5;
        cursor: not-allowed;
    }
}

`