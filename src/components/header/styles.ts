import styled from "styled-components";

export const HeaderContainer = styled.div`
    background: #fdfdfd;
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: column;
    padding: 1rem;

    div{
        display: flex;
        justify-content: space-between;
    }
    form{
        display: flex;
        width: 35%;
    }
    form input{
        width: 100%;
        border: 1px solid #5586ec;
        padding: .5rem 5px;
    }
    form button{
        background: #5586ec;
        color: #fdfdfd;
        font-size: 15px;
        cursor: pointer;
    }

    .secondLine,.firstLine{
        span{
            cursor: pointer;
        }
        div{
            display: flex;
            gap: 20px;
        }

        
    }
`