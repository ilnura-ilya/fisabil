function ContactUs() {
  return (
    <div>
      <div className="contactDiv">
        <h2>CONTACT US</h2>
        <div className="businessDiv">
          <div>
            <h5>+7(916)845-64-31</h5>
            <h5>sales@fisabil.ru</h5>
          </div>
          <div>
            <form>
              <input className="form" placeholder="Ваше телефон" />
              <textarea
                className="form"
                placeholder="Сообщение"
                rows="7"
                cols="30"
              ></textarea>
              <button className="submit" type="submit">
                ОТПРАВИТЬ
              </button>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
