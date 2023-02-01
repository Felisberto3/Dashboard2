import { useState,ChangeEvent} from 'react'
import { NavLink } from 'react-router-dom'
import { FaInstagram, FaBars, FaHome, FaArchive, FaPhone,FaSignOutAlt, FaBell, FaCog, FaCamera, FaPowerOff, FaBullhorn} from 'react-icons/fa'
import { SideBarContainer,SidebarHeader,ListNavegate } from './style'

export default function SideBar() {

    const [ lastPhoto, setLastPhot]= useState<any >(localStorage.getItem('@dasbord-GoncaHomeWork:Photo')!)
    console.log(lastPhoto);
    

    const [ isDisplay, setIsDisplay ]= useState('') 

    function handleCloseSideBar() {
        
        if (isDisplay==='') {

            setIsDisplay('none')

            return
        }
        setIsDisplay('')
    }

    function getPhotoUrl(e:ChangeEvent<HTMLInputElement>) {
        let url = e.target.files[0]
        const reader = new FileReader()

        reader.onload= () =>{
        url = reader.result
        localStorage.setItem('@dasbord-GoncaHomeWork:Photo', reader.result)
        setLastPhot(url);
        

        }

        if (url) {
            reader.readAsDataURL(url)
        }
        
    }

    return(
        <SideBarContainer isDisplay={ isDisplay } >
            <SidebarHeader >
               <div style={{display:isDisplay}} > <label htmlFor="photo"><FaInstagram/></label> </div>
               <input type="file" id="photo" style={{display:'none'}} onChange={ getPhotoUrl } />
                <div className='bar'><FaBars onClick={ handleCloseSideBar }/></div>
            </SidebarHeader>
            <div className="profile" style={{display:isDisplay}}>
                <img src={lastPhoto} alt="" />
            </div>
            <ListNavegate>
                <NavLink to={'/'}><FaHome/> <span style={{display:isDisplay}}>Home </span> </NavLink>
                <NavLink to={'/notifications'}><FaBell/>  <span style={{display:isDisplay}}>Notifications </span> </NavLink>
                <NavLink to={'/saved'}><FaArchive/>  <span style={{display:isDisplay}}>Saved </span> </NavLink>
                <NavLink to={'/friends'}><FaBullhorn/> <span style={{display:isDisplay}}> Divulgue </span> </NavLink>
                <NavLink to={'/contact'}> <FaCamera/> <span style={{display:isDisplay}}>Codagem </span> </NavLink>
                <NavLink to={'/aboutUs'}><FaArchive/>  <span style={{display:isDisplay}}>About Us </span> </NavLink>
                <NavLink to={'/definitions'}> <FaCog/> <span style={{display:isDisplay}}> Definitions </span> </NavLink>
            </ListNavegate>
            <div className="footer">
                <FaSignOutAlt className='signOut'/>  <span style={{display:isDisplay}} >Sair da aplicação</span> 
            </div>
        </SideBarContainer>
    )
    
}