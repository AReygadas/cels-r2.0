import React from  "react";
import {Nav} from '../Components/Navbar/Nav'
import {Foother} from '../Components/Foother/foot'

function Layout(props){
    return(
        <div> 
          <Nav />
          {props.children}
          <Foother />
        </div>
    )
}
export default Layout;