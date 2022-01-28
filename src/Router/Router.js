import { Routes , Route } from 'react-router-dom';
import { AboutUsPage, ContactUsPage, EncyclopediaPage, HomePage, PodcastPage, ProductsPage, VideosPage } from '../pages';



export const RoutesConfig = () =>{

    return(
        <Routes>
            <Route path="/products" element={<ProductsPage/>} />
            <Route path="/about-us" element={<AboutUsPage/>} />
            <Route path="/contact-us" element={<ContactUsPage/>} />
            <Route path="/encyclopedia" element={<EncyclopediaPage/>} />
            <Route path="/podcast" element={<PodcastPage/>} />
            <Route path="/videos" element={<VideosPage/>} />
            <Route exact path="/" element={<HomePage/>} />
        </Routes>
    )
}