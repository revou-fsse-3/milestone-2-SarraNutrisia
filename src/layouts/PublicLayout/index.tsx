import { Outlet } from "react-router-dom"
import { Navbar } from "../../components"


const PublicLayout = () => {

    return (
        <div>
            <div>
                <Navbar/>
            </div>
           <Outlet/> 
        </div>
    )
}

export default PublicLayout