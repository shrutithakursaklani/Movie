import Slider from "react-slick";

function Cardcomponent10(){
    
        var settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 7,
          spaceBetween: 50,
          slidesToScroll: 4,
          initialSlide: 0,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };
    return(
        <div className="w-100 gap-5 m-auto">
            <div className="pe-5 ps-5 container-fluid">
              <div className="row">
                <div className="col-lg-6"> <h4 className="mt-4 text-light">
                   <a href="#" style={{textDecoration:'none', color:'white'}}>Best Superheroes</a> </h4> </div>
                <div className="col-lg-6"> <h6 className="mt-4 text-light text-end">
                 <a href="#" style={{textDecoration:'none', color:'white'}}>View All </a></h6> </div>
              </div>
           
            <Slider {...settings}>
            {data.map((d)=>(
               <div className=" inner" style={{height:"500px"}}> 
                 <div className="rounded  "> 
                    < img src={d.img} style={{height:"400px",width:"100%"}}></img>
                </div>
                <div> 
                  <p className="text-white">{d.namee}</p>
                  <p className="text-white">{d.review}</p>
                </div>
                {/* <div className="outer mt-5 ">
                 
              <div>
              < img src="m9.webp" style={{height:"100px", width:"70%",alignContent:"center"}}></img>
              </div>

              <div>
              <button type="button" class="btn btn-lg btn-secondary" ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
              </svg> Watch Now</button>

              <button type="button" class="btn btn-secondary btn-lg" ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
              </svg></button>
             </div>
                </div> */}
                </div>
                
            ))}
            </Slider>
            </div>
        </div>
    )
}
const data=[
    {
        img: `images/bs1.webp`,
       
       
    },
    {
      
        img: `images/bs2.webp`,

    },
    {
      
        img: `images/bs3.webp`,

    },
    {
       
        img: `images/bs4.webp`,

    },
    {
      
        img: `images/bs5.webp`,

    },
    {
        img: `images/bs6.webp`,

    },
    {
        img: `images/bs7.webp`,

    },
    {
        img: `images/bs8.webp`,

    },
    {

        img: `images/bs9.webp`,

    },
    {
        img: `images/bs10.webp`,

    }

]

export default Cardcomponent10;