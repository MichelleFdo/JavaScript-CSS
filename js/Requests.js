import React from 'react'
import Sidebar from "../AdminSidebar";
import RequestTabScreen  from '../SubComponents/Request/RequestTabScreen'

const Requests = () => {
    return (
        <div>
            <div><Sidebar/></div>
            <div className="container tab-screen"><RequestTabScreen /></div>

        </div>
    )
}

export default Requests
