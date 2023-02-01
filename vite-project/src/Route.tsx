import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Friends from './Pages/friends/friends'
import Home from './Pages/home/home'
import LayoutDefault from './Pages/LayoutDefault/layoutDefault'
import Notifications from './Pages/notifications/notify'
import Saved from './Pages/saved/saved'

export default function Routing() {

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LayoutDefault/>}>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/notifications' element={<Notifications/>}/>
                    <Route path='/saved' element={<Saved/>}/>
                    <Route path='/friends' element={<Friends/>}/>
                    <Route path='/contact' element={<Friends/>}/>
                    <Route path='/aboutUs' element={<Friends/>}/>
                    <Route path='/definitions' element={<Friends/>}/>

                </Route>
            </Routes>
       </BrowserRouter>
    )
    
}