import React from 'react'
import {Link} from "react-router-dom";

 const  Menu=()=> {
    return (
        <div>
            <Link to="/from"><button >Fromularz</button></Link>
            <Link to="/stats"><button >Statystyki</button></Link>
        </div>
    )
}
export default Menu