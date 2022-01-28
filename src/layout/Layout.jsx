import { Container, CssBaseline } from "@mui/material"
import { SearchBar, TopNavBar } from "../components"
import { RoutesConfig } from "../Router/Router"


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
            <div className="footer"></div>
        </div>
    )
}