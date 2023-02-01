import { css } from "styled-components";
import styled from "styled-components";

interface sideBarContainerProps{
    isDisplay:string
}

export const SideBarContainer = styled.div<sideBarContainerProps>`
    width: 16%;
    height: 100vh;
    background: #ec272e;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5%;
    transition: all .5s ease-in-out;

    img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

   ${props=>props.isDisplay === 'none' && css`
    &{
        width: 5rem;
        transition: all .5s ease-in-out;
    }

   ul{
        display:flex;
        flex-direction: column;
        align-items: center;
        font-size: 25px;
    }
    .signOut{
       font-size:35px ;
       cursor: pointer;
    }
`}
    
   

    .profile{
        width: 75%;
        height: 24%;
        background: #fff;
        border-radius: 50%;
    }

    .footer{
        display: flex;
        flex-wrap: wrap;
        position: absolute;
        bottom: 2px;
        font-size: 18px;
        gap: 10px;
        color: #fff;
    }
`
export const SidebarHeader= styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    
    div{
        width: 10vw;
        font-size: 25px;
        text-align: center;
        color: #fff;
    }
    .bar{
        cursor: pointer;
    }
`

export const ListNavegate = styled.nav`
    color: #f2f2f2;
    font-size: 18px;
    width: 100%;
    overflow-x: hidden;
    
    a.active{
            color: #fff;
        }
    a{
        cursor: pointer;
        display: flex;
        align-items: center;
        font-size: 25px;
        gap: 20px;
        padding: .5rem 1rem;
        color: #fff;
        text-decoration: none;
        border-top: 3px solid transparent;
        border-bottom: 3px solid transparent;

       
            &.active{
                color: #e8eb62;
            background: #da8b80;
            }

        span{
            font-size: 17px;
        }

        &:hover{
            background: #e07f7f;
            color: #fff;
            width: 100%;
            border-bottom: 3px solid red;
        }
    }

`