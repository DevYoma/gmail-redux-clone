import React from 'react'
import '../Styles/SidebarOption.css';

const SidebarOption = ({ Icon, title, numbers, selected }) => {
    return ( 
        <div className={`sidebarOption ${selected && 'sidebarOption--active'}`}>
            <Icon />
            <h3>{title}</h3>
            <p>{numbers}</p>
        </div>
     );
}
 
export default SidebarOption;