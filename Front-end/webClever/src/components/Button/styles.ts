import styled from 'styled-components'

interface ButtonHoursSelectedProps {
    isActive?: boolean;
}

export const ButtonSelectedHours = styled.button<ButtonHoursSelectedProps>`

        border: 1px solid #E5E5E5;
        border-radius: 0.37rem;
        background: ${(props) => props.isActive ? '#3962FC' : '#F7FAFC'};
        font-size: 1rem;
        line-height: 1.56rem;
        color: ${(props) => props.isActive ? '#fff' : '#5B5B5B'};

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9);
        }

`;