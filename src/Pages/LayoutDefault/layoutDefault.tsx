
import Header from '../../components/header/header'
import SideBar from './../../components/sideBar/sideBar'
import { LayoutDefaultStyled,Container } from './styles'
import { Outlet} from 'react-router-dom'
import { useState } from 'react'
export default function LayoutDefault() {
    const [isSideBarOpen, setIsSideBarOpen]= useState(false)
   
    return(
        <LayoutDefaultStyled>
                <SideBar />
            <Container>
                <Header/>
                <Outlet/>
            </Container>

        </LayoutDefaultStyled>
    )
    
}