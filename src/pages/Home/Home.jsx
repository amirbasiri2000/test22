import { CustomBreadCrumb } from "../../components";
import { Box } from '@mui/material';
import './home.css';
import { HomeSpecification } from "../../components/home/Specification";



export const HomePage = () =>{

    return(
        <div>
            <CustomBreadCrumb/>
            <div>
                <Box className="home-specify">
                    <HomeSpecification/>
                </Box>
            </div>
        </div>
    )
}