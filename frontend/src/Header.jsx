import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


function Header() {
  return (
  <>
    <Carousel slide={false}>
      <Carousel.Item>
        < img src="https://cdn.fishry.com/themes/Website-Banner-2-8bb0bbb-hubbulhijab-e938b32-hubbulhijab.jpg" alt="Slide 1"  className='img-fluid' style={{ width: "100%" }} />
      </Carousel.Item>
      <Carousel.Item>
        < img src="https://hijwa.id/cdn/shop/files/Paris_Tokyo.png?v=1686280475&width=3200" alt="Slide 2" className='img-fluid' style={{ width: "100%" }} />
      </Carousel.Item>
    </Carousel>
  
  </>
  )
}

export default Header
