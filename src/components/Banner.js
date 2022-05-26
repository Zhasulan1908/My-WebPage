import React from "react"
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'

export default function Banner() {
    const bannerUrls = [
        'http://rockyfacepark.com/wp-content/uploads/2014/08/enjoy-camping-slider.jpg',
        'https://www.minuteschool.com/wp-content/uploads/2019/07/blog_campping.jpeg',
        'http://res.cloudinary.com/simpleview/image/upload/v1612993307/clients/texas/03_TX_MustangIsland_Horizontal_5479and5431th_2_RGB_461a6777-3285-46f3-b8c6-174d4e8ac4a1.jpg'
    ]
    const bannerItems = bannerUrls.map((bannerUrl) =>
        <li>{bannerUrl}</li>
);
    let widthBanner = 800
    let heightBanner = 500
    return(
        <div>
            <Carousel interval={4000}>                           
                {bannerUrls.map(item => {
                    return (
                    <Carousel.Item>
                        <img 
                            className="d-block w-100"
                            src={item} 
                            alt="" width={widthBanner} 
                            height={heightBanner}
                        />
                    </Carousel.Item>);
                })}
                        
            </Carousel>
        </div>
)};