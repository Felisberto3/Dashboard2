import styled from "styled-components";

export const HomeContainer = styled.div`
    background: #ede8e2;
    width: 100%;
    height: 90vh;
    padding: 1rem;

    .card{
        background: #fff;
        width: 80%;
        margin: 1rem auto;
        font-size: 15px;
        height: max-content;

    }

    button{
        background: #93c447;
        /* padding: 1%; */
        color: #fdfdfd;
    }

    .cardHeader{
        display: flex;
        gap: 20px;
        font-weight: 100;
        padding: 1rem ;
        margin-bottom: 1rem;
    }
    p{
        padding: 1rem;
    }
    .lastone{
        border: 3px  dotted #f6f6f6;
        background: #f6f6f6;
        margin-top: -1rem;
        margin-bottom: 1rem;
    }
    .lastCard{
        padding: 1rem;
    }

    .div{
        width: 60rem;
        overflow-x: scroll;
    }


    table{
        width: 100rem;
        height: 10rem;
        overflow-x: scroll;
       
    }
    table tr{
        border: 1px solid green;
    }
    table td{
        height: 2rem;
        width: 20rem;
        border: 1px solid green;
        margin:  2rem;
    }
    table td.numero{
        max-width: 10rem;
    }
`