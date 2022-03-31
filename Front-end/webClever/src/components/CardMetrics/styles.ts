import styled from 'styled-components'

export const ContainerMetrics = styled.div`
    height: 12.12rem;
    border : 1px solid #E7F0FD;
    border-radius: 1rem;
    box-shadow: 0px 3px 8px -1px rgba(50, 50, 71, 0.05);
    filter: drop-shadow(0px 0px 1px rgba(12, 26, 75, 0.24));

    padding: 1.87rem;
`;

export const ContentMetric = styled.div`

    display: flex;
    
    &{
        margin-top: 1rem;
    }

    div {
        font-size: 0.85rem;
        font-weight: 700;
        display: grid;
        grid-template-columns: 2rem 1fr;
        align-items: center;

        
        gap: 0.5rem;
        
    }
`;

export const InputMetrics = styled.input`

    margin-left: 1.12rem;
    width: 8.12rem;
    height: 2.25rem;

    border: transparent;
    background-color: white;
    border-radius: 0.37rem;
    box-shadow: 0px 1px 2px rgba(50, 50, 71, 0.08), 0px 0px 1px rgba(50, 50, 71, 0.2);
    
    font-weight: 500;
    font-size: 0.93rem;

    padding: 0 1.06rem;
`