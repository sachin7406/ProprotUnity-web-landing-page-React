import React from 'react'
import Carousel from './Carousel'
import ig2 from './../../image/apartment-living-room-design-photos-luxury-design-with-best-home-interior-design-modern-living-room-interior-of-apartment-on-living-room 1.jpg'
import ig1 from './../../image/R (39) 1.jpg'
import ig3 from './../../image/Luxury homes  interior decoration living room designs ideas 1.jpg'
import lg4 from './../../image/Living-room-interior-design-display-interior-exterior-plan 1.jpg'
import lg5 from './../../image/R (40) 1.jpg'
export default function Gallery() {
  const data = [
    {
      image:
        ig1
    },
    {
      image:
        ig2
    },
    {
      image:
        ig3
    },
    {
      image:
      lg4
    },
    {
      image:
        lg5
    },
    {
      image:
      ig1
    },
    {
      image:
        lg5
    },
    {
      image:
        ig2
    },
    {
      image:
        ig3
    },
    {
      image:
        lg4
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div className="container-fluid carousel p-2">
      <div style={{ textAlign: "center" }}>
        <h1 className="text-warning py-3 m-2" >Gallery</h1>
        <div
          className=''
        >
          <Carousel
            data={data}
            time={2500}
            width="900px"
            height="500px"
            radius="8px"
        
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            // thumbnailWidth="100px"
            showNavBtn={true}
            style={{
              textAlign: "center",
              maxWidth: "1200px",
              margin: " auto",
            }}
          />
        </div>
      </div>
    </div>
  );


}
