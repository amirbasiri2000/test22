import { Button, Divider, Grid, IconButton, Typography } from '@mui/material';
import HomeSpedifyImage from '../../assets/images/home/beams.jpg';
import { HomeTitle } from './HomeTitle';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { SpecificationLeftSide } from './leftSideSpecify';




export const HomeSpecification = () =>{

    const data = [
        {
            name: 'سایز',
            value: '12',
        },
        {
            name: 'وزن(kg)',
            value: '155',
        },
        {
            name: 'تعداد شاخه در هر بسته',
            value: '36',
        },
        {
            name: 'محل بارکیری',
            value: 'کارخانه',
        },
        {
            name: 'واحد',
            value: 'کیلوگرم',
        },
        {
            name: 'ضخامت',
            value: 'تیرآهن',
        },
        {
            name: 'طول',
            value: '6',
        },
        {
            name: 'وزن',
            value: '11.2',
        },
        {
            name: 'دسته بندی',
            value: 'تیرآهن',
        }
    ]


    return(
        <Grid container>
            <Grid sx={{alignItems:'center'}} container item lg={8} md={12} xs={12} className="home-right-specify">
                <Grid item xs={12}>
                    <HomeTitle/>
                </Grid>
                <Grid item lg={6} md={6} xs={12} className="home-right-specification-main">
                    <div className="home-specify-img">
                        <img src={HomeSpedifyImage} alt="specification" />
                    </div>
                </Grid>
                <Grid item lg={6} md={6} xs={12} sx={{marginBottom: '1rem !important'}}>
                    <div className="home-specify-features-content">
                        {
                            data.map((item,index) =>{
                                return(
                                    <div className="home-specify-features" key={index}>
                                        <div className="features-name">
                                            <Typography>{item.name}</Typography>
                                        </div>
                                        <div className="features-value">
                                            <Typography>{item.value}</Typography>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <Button color="secondary" className="home-add-to-cart" variant="contained" startIcon={<LocalGroceryStoreIcon />}><Typography> افزودن به فاکتور استعلام</Typography></Button>
                    </div>
                </Grid>
            </Grid>
            <Grid item lg={4} md={12} xs={12} >
                <SpecificationLeftSide />
            </Grid>
        </Grid>
    )
}