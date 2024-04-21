import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
const Slider = () => {
    const work = [
        {
            id: "1",
            contentitem1: "• ",
            contentitem2: "• ",
            contentitem3: "• ",
            contentitem4: "• ",
            contentitem5: "•",
            title: "Berlin",
            img: "./src/assets/Berlin.jpg",
        },
        {
            id: "2",
            contentitem1: "•",
            contentitem2: "• ",
            contentitem3: "• ",
            contentitem4: "• ",
            title: "India",
            img: "./src/assets/India.jpg",
        }, {
            id: "3",
            contentitem1: "•  ",
            contentitem2: "• ",
            contentitem3: "•  ",
            contentitem4: "• ",
            title: "London",
            img: "./src/assets/London.jpg",
        }, {
            id: "1",
            contentitem1: "•  ",
            contentitem2: "• ",
            contentitem3: "•",
            contentitem4: "• ",
            contentitem5: "•",
            contentitem6: "• ",
            title: "Mexico",
            img: "./src/assets/Mexico.jpg",
        },
        {
            id: "2",
            contentitem1: "• ",
            contentitem2: "• ",
            contentitem3: "• ",
            contentitem4: "• ",
            /**product */
            title: "Naples",
            img: "./src/assets/Naples.jpg",
        }, {
            id: "3",
            contentitem1: "• ",
            contentitem2: "• ",
            contentitem3: "• ",
            contentitem4: "• ",
            contentitem5: "• ",
            contentitem6: "• ",


            title: "New-york",
            img: "./src/assets/NewYork.jpg",
        }
    ]
  return (
    <>
    <div className="bg-dustyellow">
    <h1 className='text-[2.5rem] text-center font-[system-ui] bg-blue3 font-bold'>Destination's</h1>
          
          <div className=" h-[80vh] overflow-hidden bg-blue3  text-white grid justify-center  items-center px-[7rem] ">
              <div className="w-[80vw]  overflow-hidden cursor-pointer ">
                  <Swiper
                      breakpoints={{
                          876: {
                              slidesPerView: 3,
                          },
                          500: {
                              slidesPerView: 2,
                          },
                      }}
                      spaceBetween={50}

                      onSlideChange={() => console.log('slide change')}
                      loop={true}
                      centeredSlides={true}
                      speed={800}
                      autoplay={
                          {
                              delay: 2500,
                              disableOnInteraction: false,
                              pauseOnMouseEnter: true,
                          }

                      }
                      modules={[Autoplay]}
                  >
                      {
                          work.map(user => (
                              <SwiperSlide key={user.id}><div className="h-200 flex">
                                  <div className={`card2`}>
                                      <div className='flex justify-center items-center font-[Poppins]'>
                                          <div>
                                          <img className='  rounded-md w-[300px] h-[300px]  drop-shadow-xl' src={user.img} alt="image" />
                                     
                                     <h1 className=' p-2  bg-gray-900 text-xl bg-opacity-80 
                    text-center text-white w-full hover:bg-opacity-20 relative rounded-b-md bottom-11 '>{user.title}</h1>
                                          </div>
                                        
                                      </div>

                                      
                                      {/* <ul className=' mt-4 text-black text-[1.1rem] flex-col flex items-start font-[Poppins]'>
                                          <li>{user.contentitem1}</li>
                                          <li>{user.contentitem2}</li>
                                          <li>{user.contentitem3}</li>
                                          <li>{user.contentitem4}</li>
                                      </ul> */}

                                  </div>

                              </div></SwiperSlide>
                          ))


                      }

                  </Swiper>
              </div>
          </div>
    </div>
     
    </>
  )
}

export default Slider