import React from 'react'
import Navigationbar from './components/navigationbar/NavigationBar';
import {Outlet} from 'react-router-dom'



function RootLayout(){
    return(
        <div>
            {/*navigation bar */}
            <Navigationbar/>
            {/* Placeholder */}
            <div className='container'>
            <Outlet/></div>
        </div>
    )

}
export default RootLayout