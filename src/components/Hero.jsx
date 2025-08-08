// import content
// import { useEffect } from "react";
import { content } from "../Content";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { useState } from "react";
import { FaTelegram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Hero = () => {
  const { hero } = content;
  const [openModal, setOpenModal] = useState(false);
  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div className="absolute top-[18px] left-10 flex gap-3">
          <div className="block
                          text-[20px]  
                          md:hidden"><FaTelegram />
          </div>
          <div className="block
                          text-[23px]  
                          md:hidden"><IoLogoWhatsapp />
          </div> 
        </div>
          
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
           <h1 className="absolute 
                          w-2/3
                          text-center
                          top-2 
                          right-10 
                          text-[#EAF2FA] 
                          text-[20px]            // Мобильные стили (20px)
                          transform rotate-0     // Начальное положение
                          transition-transform duration-300 // Плавная анимация
                          md:w-4/5
                          md:top-40 
                          md:text-[40px]         // 30px на десктопах"
            >
            {hero.firstName}{" "}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
            <div className="absolute 
                            w-2/3
                            text-center
                            top-10 
                            right-10 
                            text-[20px]            // Мобильные стили (20px)
                            transform rotate-0     // Начальное положение
                            transition-transform duration-300 // Плавная анимация
                            md:flex
                            md:flex-col 
                            md:gap-[15px] 
                            md:items-center
                            md:justify-center
                            md:w-4/5
                            md:top-[14rem] 
                            md:text-[40px]         // 30px на десктопах">

              <div className="text-[13px]            // Мобильные стили (20px)
                              transform rotate-0     // Начальное положение
                              transition-transform duration-300 // Плавная анимация
                              md:text-[18px]         // 30px на десктопах">
                  +7(937)376-42-70
              </div>
              <div className="text-[13px]            // Мобильные стили (20px)
                              transform rotate-0     // Начальное положение
                              transition-transform duration-300 // Плавная анимация
                              md:text-[18px]         // 30px на десктопах">
                  texnozombi25@yandex.ru
              </div>
              <div className="hidden
                              transform rotate-0     // Начальное положение
                              transition-transform duration-300 // Плавная анимация
                              md:block
                              md:text-[40px]         // 30px на десктопах"><FaTelegram />
              </div>
              <div className="hidden
                              transform rotate-0     // Начальное положение
                              transition-transform duration-300 // Плавная анимация
                              md:block
                              md:text-[45px]         // 30px на десктопах"><IoLogoWhatsapp />
              </div> 

            </div>
        </div>
          

        {/* first col */}
        {/* <div className="pb-20 px-6 pt-5" data-aos="fade-down"> */}
        <div className="absolute top-[235px] w-[87%] text-center left-auto md:max-w-[540px] md:left-10 md:top-[10rem] md:pl-2 backdrop-blur-md bg-white/30 rounded-lg border border-white/10 shadow-lg md:shadow-none" data-aos="fade-down">
          <h2 className="text-[28px] md:text-[40px]">{hero.title}</h2>
          {/* <div className="flex justify-end">
            <button className="btn">{hero.btnText}</button>
          </div> */}


          <div className="flex flex-col items-center">
            {/* {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5
                ${i === 1 && " flex-row-reverse text-right"}  `}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))} */}

            <p className="mt-[10px] text-[19px]"><em>Индивидуальный подход – гарантированный результат</em></p>
            <p className="text-[16px]">Доверьте обработку звонков профессионалам и сосредоточьтесь на юридической практике. Мы работаем 24/7, чтобы вы могли развивать бизнес без лишней нагрузки.</p>
            

            <Button onClick={() => setOpenModal(true)}
                    className="w-[170px] mt-3 text-white bg-[#06223f] rounded-[30px] hover:bg-gradient-to-bl focus:outline-none focus:ring-0 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >Оставить заявку</Button>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
              <ModalHeader>Terms of Service</ModalHeader>
              <ModalBody>
                <div className="space-y-6">
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
                    companies around the world are updating their terms of service agreements to comply.
                  </p>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
                    to ensure a common set of data rights in the European Union. It requires organizations to notify users as
                    soon as possible of high-risk data breaches that could personally affect them.
                  </p>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button onClick={() => setOpenModal(false)}>I accept</Button>
                <Button color="alternative" onClick={() => setOpenModal(false)}>
                  Decline
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </div>

        {/* sec col */}
        <div className="h-[10rem] mt-[-18rem] md:h-[24rem] md:mt-0">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
