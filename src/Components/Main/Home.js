import { IoIosArrowDropdownCircle, IoIosArrowUp} from 'react-icons/io';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../slide1.jpg';
import image3 from '../../slide3.jpg';
import image4 from '../../slide4.jpg';
import image5 from '../../slide5.jpg';

function Home({showTopBtn, setShowTopBtn, goToTop }) {

  
  return (
    <div>
      <div className="home">
        <div className="bgc">
          <div className="titleDiv">
            <h1 className="title">Ежедневники для мусульман</h1>
            <a href="./shop"> <button className="moreBtn">ЗАКАЗАТЬ </button></a>
          </div>
        </div>
        <span className="arrowDown">
<a href="#home"><IoIosArrowDropdownCircle className='icomArrowDown'/></a>
        </span>
      </div>
      <div className="homeIntro" id="home">
        <p className='textIntro'>
          Фисабиль а переводес арабского означает "на пути". Каждый из нас
          совершает путью И каким он будет, зависит от нас самих.
        </p>
        <h2>Ежедневники Фисабиль помогут пройти этот путь</h2>
      </div>

      <div className='arrowUp'  style={{display: showTopBtn ? 'inline' : 'none'}}  onClick={goToTop}><IoIosArrowUp className='iconArrowUp'/></div>

<div className="slidesDiv">
<Carousel fade  variant="dark">
        <Carousel.Item  interval={1500}>
           <div className="slideOne slide">
              <img src={image1} alt="slide1" className="slideImg" />
          <div className="slideText">
            <h2>Аксессуары на заказ</h2>
            <p>
              Изготовление ежедневников по индивидуальному дизайну гарантирует
              сохранение фирменного стиля вашей компании.
            </p>
          </div>
           </div>
          
        </Carousel.Item>

        <Carousel.Item  interval={1500}>
           <div className="slideTwo slide">
              <img src={image3} alt="slide3" className="slideImg" />
          <div className="slideText">
            <h2>Новинка</h2>
            <p>
              Персональный органайзер Фисабиль. Это новый инструмент
              планированияю
            </p>
          </div>
           </div>
          
        </Carousel.Item>

        <Carousel.Item  interval={1500}>
           <div className="slideThree slide">
              <img src={image4} alt="slide4" className="slideImg" />
          <div className="slideText">
            <h2>Новинка</h2>
            <p>
              Дарим открытку при покупке двух органайзеров "мужского и
              женского".
            </p>
          </div>
           </div>
          
        </Carousel.Item>

        <Carousel.Item>
           <div className="slideFour slide">
              <img src={image5} alt="slide5" className="slideImg" />
          <div className="slideText">
            <h2>РОСПИСЬ ОБЛОЖЕК НА ЗАКАЗ</h2>
          </div>
           </div>
          
        </Carousel.Item>
      </Carousel>
</div>
      
    </div>
  );
}

export default Home;
