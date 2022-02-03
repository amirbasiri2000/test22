import { CustomBreadCrumb } from "../../components";
import { Box } from '@mui/material';
import './home.css';
import { HomeSpecification } from "../../components/home/Specification";
import { HomeDetailsPage } from "../../components/home/details";
import { HomeOthers } from "../../components/home/homeOthers/HomeOthers";
import { Comments } from '../../components/home/comments/Comments';


export const HomePage = () =>{

    return(
        <div>
            <CustomBreadCrumb/>
            <div>
                <Box className="home-specify">
                    <HomeSpecification/>
                    <HomeDetailsPage />
                    <HomeOthers/>
                    <Comments/>
                </Box>
            </div>
        </div>
    )
}