import React from 'react'
import Brand from './Brands'
import Category from './Category'
import Header from './Header';
import { FaStar } from 'react-icons/fa';
// import Carousel from 'react-bootstrap/Carousel';
// import Header from './Header';


export default function Home() {
  return (
    <>
       <Header />

       <h1 className="HijabVariety">We have beautiful and affordable<br/> hijabs to buy. Choose from a<br/> variety of beautiful styles, colors,<br/> and fabrics.</h1>

            <Category />
            <Brand />

            <section>
  
  <div className="container-fluid ShopNowBnr text-center">
  <div>
    <h1 className="shopnowBnrHeading">Hijabs are  Perfect for it's <br/> Purpose of making you <br/> feel extra special</h1>
    

    <button className="shopnowbtn">Shop now</button>
    </div>
  </div>
</section>

<section className="qualitySec mt-5 mb-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col qualitySec1"></div>
            <div className="col qualitySec2">
              <div>
                <h1 className="qualitySecheading">
                  <b>Looking for a high quality hijab?</b>
                </h1>
                <p className="qualitySecPara">
                  Pick the right hijab that is beautiful and comfortable, and
                  which <br /> meets your needs. Collections of hijabs are sure
                  to take your style <br /> to another level.
                </p>
                <button className="qualitySecBtn">Shop the Collections</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col mt-5 testimonialCol">
              <div className="testimonialImgflex">
                <div className="testimonialImg1"></div>
              </div>
              <p className="text-center testimonialPara">
                I got my hijabs from bloom and I am so impressed by their
                quality.
                The sewing is well done. And the customer service is fast
                and helpful.
              </p>
              <p className="text-center">
                <i>Farwa Hassan</i>
              </p>
              <div className="d-flex justify-content-center">
              <FaStar className="staricon" />
              <FaStar className="staricon" />
              <FaStar className="staricon" />
              <FaStar className="staricon" />
              <FaStar className="staricon" />
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star staroutlineicon" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
</svg>
              </div>
            </div>
            <div className="col  mt-5 testimonialCol">
              <div className="testimonialImgflex">
                <div className="testimonialImg2"></div>
              </div>
              <p className="text-center testimonialPara">
                I got my hijabs from bloom and I am so impressed by their
                quality.
                The sewing is well done. And the customer service is fast
                and helpful.
              </p>
              <p className="text-center">
                <i>Farwa Hassan</i>
              </p>
              <div className="d-flex justify-content-center">
              <FaStar className="staricon" />
              <FaStar className="staricon" />
              <FaStar className="staricon" />
              <FaStar className="staricon" />
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star staroutlineicon" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star staroutlineicon" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
</svg>

              </div>
            </div>
            <div className="col mt-5 testimonialCol">
              <div className="testimonialImgflex">
                <div className="testimonialImg3"></div>
              </div>
              <p className="text-center testimonialPara">
                I got my hijabs from bloom and I am so impressed by their
                quality. 
                The sewing is well done. And the customer service is fast
                and helpful.
                
              </p>
              <p className="text-center">
                <i>Farwa Hassan</i>
              </p>
              <div className="d-flex justify-content-center">
              <FaStar className="staricon" />
              <FaStar className="staricon" />
              <FaStar className="staricon" />
              <FaStar className="staricon" />
              <FaStar className="staricon mb-3" />
              </div>
            </div>
          </div>
        </div>
      </section>
{/* 
            <section className="dart-no-padding">
  <div className="container-fluid img-fluid">
    <div className="row no-gutter">
      <div className="col-lg-6 col-md-6">
        <a href="#">
          <img
            src="https://www.modestforever.com/pub/media/wysiwyg/Embroiderd_hijabs_first_banner_4.jpg"
            width={"100%"}
            className='img-fluid'
            alt="Promo"/>
 
        </a>
      </div>
      <div className="col-lg-6 col-md-6">
        <a href="#">
          <img
            src="https://hijabi.pk/cdn/shop/articles/Choose_an_abaya_style_that_best_suit_the_occasion.jpg?v=1662539611"
             width={"100%"}
             className='img-fluid'
            alt="Promo"/>
 
        </a>
      </div>
    </div>
  </div>
</section> */}








    </>
  );
};



