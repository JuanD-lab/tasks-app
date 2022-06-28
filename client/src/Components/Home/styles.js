import styled from "styled-components";

export const TaskGridContainer = styled.div`
    /* display: grid; */
    position: relative;
    grid-template-columns: repeat(3, 1fr);
    /* grid-template-rows: repeat(4, 1fr); */
    grid-column-gap: 3.2rem;
    grid-row-gap: 3.2rem;
`
export const TaskWrapper = styled.div`
    /* max-width: 80vw;
    margin: auto; */
    width: 100%;
    padding: 0px 3rem;
`

export const TopBar = styled.div`
    display: flex;
    justify-content: space-between;
    /* margin: 3rem 0; */
`

export const Title = styled.h1`
    font-size: 30px;
    /* font-family: 'Helvetica Neue'; */
    margin: 0
`