import { Container, CssBaseline } from "@mui/material"
import { SearchBar, TopNavBar } from "../components"
import { RoutesConfig } from "../Router/Router"
import { Footer } from '../components/footer/Footer';


export const LayoutPage = () =>{

    return(
        <div>
            <CssBaseline/>
            <div className="header">
                <SearchBar/>
                <TopNavBar/>
            </div>
            <div className="feed">
                    <RoutesConfig />
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}