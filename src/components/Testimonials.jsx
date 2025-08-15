import { content } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useState, useEffect, useRef } from "react";
// import { useFeedbackStore } from '../../store/feedbackStore';
import YandexMapsReviews from '../components/YandexMapsReviews';

const Testimonials = () => {
  const { Testimonials } = content;
  const [activeIndex, setActiveIndex] = useState(0);
  // const { feedbackData, loading, error, fetchFeedback } = useFeedbackStore();
  const widgetInitialized = useRef(false);

  // useEffect(() => {
  //   fetchFeedback();
  // }, [fetchFeedback]);

  // Эффект для загрузки виджета отзывов
  useEffect(() => {
    // Проверяем что скрипт еще не был загружен и компонент монтирован
    if (widgetInitialized.current) return;
    
    const scriptSrc = "https://web-widgets.ru/reviews/yandexrumaps/org/laviti/219698325861/reviews/?ll=39.583596%2C55.603516&z=8mtc1nta5ntc2mja1oq.js";
    

    // Проверяем не загружен ли скрипт ранее
    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const script = document.createElement('script');
      script.src = scriptSrc;
      script.async = true;
      script.type = 'text/javascript';
      
      document.body.appendChild(script);
      widgetInitialized.current = true;
      
      // Очистка при демонтаже компонента
      return () => {
        const widgetScript = document.querySelector(`script[src="${scriptSrc}"]`);
        if (widgetScript) {
          document.body.removeChild(widgetScript);
        }
      };
    }
  }, []);

  // if (loading) return <div>Загрузка...</div>;
  // if (error) return <div>Ошибка: {error}</div>;
  
  // if (!feedbackData || feedbackData.length === 0) {
  //   return <div>Нет данных отзывов</div>;
  // }
  
  return (
    <section>
      <div className="md:container px-5 pt-14">
        <h2 className="title" data-aos="fade-down">
          {Testimonials.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Testimonials.subtitle}
        </h4>
        <br />
        
        {/* <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          data-aos="fade-up"
          loop={true}
          spaceBetween={40}
          slidesPerView={1.7}
          onSlideChange={(e) => {
            setActiveIndex(e.realIndex);
          }}
          modules={[Pagination]}
          className="md:h-96 h-[40rem] max-w-3xl"
        >
          {feedbackData.map((feedback, i) => (
            <SwiperSlide key={i}>
              <div
                className={`duration-500 bg-bg_light_primary mx-8 border-2 
                p-8 h-full rounded-2xl flex items-center gap-6
                border-slate-200 md:flex-row flex-col
                ${activeIndex !== i && "scale-75 blur-sm"}`}
              >
                <img 
                  src={feedback.imageUrl} 
                  alt={`Фото ${feedback.author}`} 
                  className="h-24 rounded-full object-cover"
                />
                <div>
                  <p className="sm:text-base text-sm">{feedback.text}</p>
                  <br />
                  <h6>{feedback.author}</h6>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper> */}

        {/* Контейнер для виджета */}
        <div className="mb-10 flex justify-center" data-aos="fade-up">
          <YandexMapsReviews />

          </div>
      </div>
    </section>
  );
};

export default Testimonials;