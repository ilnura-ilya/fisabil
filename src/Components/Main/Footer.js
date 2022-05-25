import  { FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa"


function Footer (){

   return (
      <div className="footer" >
         <div className="email-footer" >
            <h5>Новости и обновления</h5>
            <h6>Подпишитесь, чтобы получать последние новости о товарах и мероприятиях</h6>
            <input type="email" className="input-footer" placeholder="e-mail"></input>
         </div>
         <div className="footer-link">
           

            <div className="social-media">
               <h5>Полезная информация</h5>
              <p className="footer-links">Магазин</p>
              <p className="footer-links">О компании</p>
              <p className="footer-links">Для бизнеса</p>
              <p className="footer-links">Контакты</p>

            </div>

            <div className="social-media">
               <h5>Наши продукты </h5>
              <p className="footer-links">Органайзеры</p>
              <p className="footer-links">Еженедельники</p>
              <p className="footer-links">Ежедневники</p>
              <p className="footer-links">Блокноты</p>
              <p className="footer-links">Культура вежливых напоминаний</p>
            </div>

            <div className="social-media">
               <h5>Контакты </h5>
              <p className="footer-links">+7 (916) 845-64-31</p>
              <p className="footer-links">sales@fisabil.ru</p>
              <div className="icon"> <FaFacebook /> <FaInstagram /> <FaTwitter /> </div>
            </div>
         </div>
         
      </div>
   )
}

export default Footer;