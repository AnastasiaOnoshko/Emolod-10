
import './App.css'
import FooterPart from './components/FooterPart/index'

function App() {


  return (
    <>
        <header className="header">
            <nav className="top-nav">
                <div className="nav-links">
                    <a href="#" className="nav-item">ГОЛОВНА</a>
                    <a href="https://foodhacker.com.ua/about-us/" className="nav-item">ПРО НАС</a>
                    <a href="https://foodhacker.com.ua/nutrition-programs/" className="nav-item">НАШІ ПРОГРАМИ</a>
                    <a href="https://foodhacker.com.ua/blog/" className="nav-item">БЛОГ</a>
                    <a href=":)" className="nav-item active">Кондитерська</a>
                </div>
                <div className="contact-info">
                    <span className="flags">🇺🇦 🇺🇦🇺🇲</span>
                    <span className="phone-number">(063) 020-26-99</span>
                    <a href="#" className="order-button">ЗРОБИТИ ЗАМОВЛЕННЯ</a>     
                </div>
            </nav>   
        </header>



          <div className="hero-section">
            <div className="overlay"></div>
            <div className="hero-content">
              <div>
                <img src="https://foodhacker.com.ua/wp-content/uploads/2022/02/291x254xlogo.png.pagespeed.ic.DNKXTJpT_i.png" alt="logo" />
            </div>
                <h1>РОЗУМНА ЇЖА ДЛЯ РОЗУМНИХ ЛЮДЕЙ</h1>
            </div>
        </div>


        <section className="features-section">
    <div className="features-container">
        <h2 className="section-title">FOODHACKER - ДОСТАВКА ПРАВИЛЬНОГО ХАРЧУВАННЯ У ЧЕРКАСАХ</h2>
        <div className="feature-grid">
            <div className="feature-item">
                <div className="icon-container">
                    <img src="https://foodhacker.com.ua/wp-content/uploads/2021/07/vegetarian-food.svg" alt="Обрати раціон" />
                </div>
                <h3>Обрати раціон</h3>
                <p>Це можна зробити на день, тиждень чи місяць. Доставляємо замовлення у будь-який куточок Черкас у зручний для вас час.</p>
            </div>
            <div className="feature-item">
                <div className="icon-container">
                    <img src="https://foodhacker.com.ua/wp-content/uploads/2021/07/sports-nutrition.svg" alt="Смачно поїсти" />
                </div>
                <h3>Смачно поїсти</h3>
                <p>Ніколи відриватися від роботи на обід? Не біда! Доставимо поживний бізнес-ланч просто в офіс, після чого ваша продуктивність зросте вдвічі.</p>
            </div>
            <div className="feature-item">
                <div className="icon-container">
                  <img src="https://foodhacker.com.ua/wp-content/uploads/2021/07/purification.svg" alt="Смачно поїсти" />  
                </div>
                <h3>Замовити будь-яку страву</h3>
                <p>Наші кухарі приготують для вас смачну та корисну їжу зі свіжих продуктів! Готуємо на замовлення окремі страви, організовуємо святкові бенкети.</p>
            </div>
            <div className="feature-item">
                <div className="icon-container">
                    <img src="https://foodhacker.com.ua/wp-content/uploads/2021/07/weight-loss.svg" alt="Побічні ефекти" />
                </div>
                <h3>Побічні ефекти</h3>
                <p>Схуднення або набір ваги без стресів і зривів, привабливий зовнішній вигляд, поліпшення самопочуття, більше енергії, економія часу та грошей.</p>
            </div>
        </div>
    </div>
</section>



<section className="programs-section">
            <h2 className="section-title-alt">ПРОГРАМИ ЗДОРОВОГО ХАРЧУВАННЯ</h2>
            <div className="program-grid">
                <div className="program-item">
                    <img src="https://foodhacker.com.ua/wp-content/uploads/2021/07/weight-loss.svg" alt="Зниження ваги" />
                    <h4>Зниження ваги</h4>
                    <p>“FoodHacker for you”</p>
                </div>
                <div className="program-item">
                    <img src="https://foodhacker.com.ua/wp-content/uploads/2021/07/balanced-nutrition.svg" alt="Збалансоване харчування" />
                    <h4>Збалансоване харчування</h4>
                    <p></p>
                </div>
                <div className="program-item">
                    <img src="https://foodhacker.com.ua/wp-content/uploads/2021/07/sports-nutrition.svg" alt="Спортивне харчування" />
                    <h4>Спортивне харчування</h4>
                    <p></p>
                </div>
                <div className="program-item">
                    <img src="https://foodhacker.com.ua/wp-content/uploads/2021/07/vegetarian-food.svg" alt="Вегетаріанське та пісне харчування" />
                    <h4>Вегетаріанське та пісне харчування</h4>
                    <p></p>
                </div>
                <div className="program-item">
                    <img src="https://foodhacker.com.ua/wp-content/uploads/2021/07/purification.svg" alt="Детокс та антивікове харчування" />
                    <h4>Детокс та антивікове харчування</h4>
                    <p></p>
                </div>
                <div className="program-item">
                    <img src="https://foodhacker.com.ua/wp-content/uploads/2021/07/vegetarian-food.svg" alt="Кето програма" />
                    <h4>Кето програма</h4>
                    <p></p>
                </div>
                <div className="program-item">
                    <img src="https://foodhacker.com.ua/wp-content/uploads/2021/07/balanced-nutrition.svg" alt="Лікувальне харчування" />
                    <h4>Лікувальне харчування</h4>
                    <p></p>
                </div>
                <div className="program-item">
                    <img src="https://foodhacker.com.ua/wp-content/uploads/2021/07/sports-nutrition.svg" alt="Індивідуальна програма" />
                    <h4>Індивідуальна програма</h4>
                    <p></p>
                </div>
                <div className="program-item">
                    <img src="https://foodhacker.com.ua/wp-content/uploads/2021/07/vegetarian-food.svg" alt="Бізнес-ланчі в офіс" />
                    <h4>Бізнес-ланчі в офіс</h4>
                    <p></p>
                </div>
                <div className="program-item">
                    <img src="https://foodhacker.com.ua/wp-content/uploads/2021/07/purification.svg" alt="Дитяче харчування" />
                    <h4>Дитяче харчування</h4>
                    <p></p>
                </div>
                <div className="program-item">
                    <img src="https://foodhacker.com.ua/wp-content/uploads/2021/07/weight-loss.svg" alt="Подарункові карти" />
                    <h4>Подарункові карти</h4>
                    <p></p>
                </div>
                <div className="program-item">
                    <img src="https://foodhacker.com.ua/wp-content/uploads/2021/07/sports-nutrition.svg" alt="Кейтеринг" />
                    <h4>Кейтеринг</h4>
                    <p></p>
                </div>
            </div>
        </section>
        



          <section className="features-section">
    <div className="features-container">
        <h2 className="section-title">Як ми працюємо</h2>
        <div className="feature-grid">
            <div className="feature-item">
                <div className="icon-container">
                    <img src="https://foodhacker.com.ua/wp-content/uploads/2021/07/vegetarian-food.svg" alt="Обрати раціон" />
                </div>
                <h3>Сформуйте замовлення</h3>
                <p>Оберіть раціон та залиште заявку. Наш консультант зв’яжеться з вами, щоб уточнити ваші індивідуальні особливості та побажання. За необхідності запланує консультацію з дієтологом.</p>
            </div>
            <div className="feature-item">
                <div className="icon-container">
                    <img src="https://foodhacker.com.ua/wp-content/uploads/2021/07/sports-nutrition.svg" alt="Смачно поїсти" />
                </div>
                <h3>Ми все приготуємо</h3>
                <p>Наші кухарі приготують раціон з урахуванням вашого віку, стану здоров’я, наявності харчової алергії, рівня фізичної активності та, звісно ж, смакових уподобань і харчових звичок.</p>
            </div>
            <div className="feature-item">
                <div className="icon-container">
                  <img src="https://foodhacker.com.ua/wp-content/uploads/2021/07/purification.svg" alt="Смачно поїсти" />  
                </div>
                <h3>І доставимо</h3>
                <p>Доставляємо раціон на день у зручний для вас проміжок часу: у будні – з 7:30 до 10:30 ранку, увечері – з 19:30 до 22:00. Ланчі підвозимо з 12:00 до 13:30 дня. На вихідних – з 8:30 до 10:00.</p>
            </div>
            <div className="feature-item">
                <div className="icon-container">
                    <img src="https://foodhacker.com.ua/wp-content/uploads/2021/07/weight-loss.svg" alt="Побічні ефекти" />
                </div>
                <h3>Побічні ефекти</h3>
                <p>Схуднення або набір ваги без шкоди для організму, покращення самопочуття, профілактика захворювань, гарний настрій, більше енергії, персональна підтримка дієтолога під час програми.</p>
            </div>
        </div>
    </div>
</section>

 <section className="features-section">
    <div className="features-container">
        <h2 className="section-title">Для кого</h2>
        <div className="feature-grid">
            <div className="feature-item">
                <div className="icon-containerі">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnFduwyvu8QRa8BE1TBMVGfJvDkjWim2MUjXWLgn3uK0CvGvggoLfcD_KbdpIZfcMuJ50&usqp=CAU" alt="Обрати раціон" />
                </div>
                <h3>Люблю смачно поїсти, але хочу схуднути</h3>
            </div>
            <div className="feature-item">
                <div className="icon-containerі">
                    <img src="https://napensii.ua/wp-content/uploads/molodezh.jpeg" alt="Смачно поїсти" />
                </div>
                
                <h3>Хочу набрати масу і стати кремезним, як бодібілдер</h3>
            </div>
            <div className="feature-item">
                <div className="icon-containerі">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_hIuerKtBWkixsADxEBH8pBy4EZUUSlslKv8pVhAdCh_AxUPtZRkB4WMnKAWDrXuJ7dg&usqp=CAU" alt="Смачно поїсти" />  
                </div>
                
                <h3>Хочу за допомогою харчування дбати про здоров'я</h3>
            </div>
            <div className="feature-item">
                <div className="icon-containerі">
                    <img src="https://ru.childdevelop.com.ua/doc/images/news/65/6509/11131_max_i.jpg" alt="Побічні ефекти" />
                </div>
                
                <h3>Не встигаю готувати, але нормально харчуватися хочу</h3>
            </div>
             <div className="feature-item">
                <div className="icon-containerі">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwbpRr2PyOhC6IiHdc9LDPaDSuS0IKIsyzt-lXiF0_AmjIyjznLSBa4e9Bs4X2kDsjVzw&usqp=CAU" alt="Побічні ефекти" />
                </div>
                <h3>Хочу і можу собі дозволити! Економлю час та гроші</h3>
            </div>
             <div className="feature-item">
                <div className="icon-containerі">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqRpRCKKkJWp0v29brKc-n8-_0iWRyA3yDuhK__Jxzdhv1jlBCIa3YO8thkKf0gc0Bico&usqp=CAU" alt="Побічні ефекти" />
                </div>
                <h3>Я вагітна, турбуюсь про здоров'я своє та дитини</h3>
            </div>
             <div className="feature-item">
                <div className="icon-containerі">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWPYzQFvmM8YJi1EOgp4o9C2mIrsSWq-xgnMzV-bHxQli7DbQqcQZfl01cKEVsIbvoPs8&usqp=CAU" alt="Побічні ефекти" />
                </div>
                <h3>Не знаю, з чого почати правильне харчування</h3>
            </div>
             <div className="feature-item">
                <div className="icon-containerі">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvyiJvGMrH0TuSY6kwXUibfpHo3T5_vh0-Gw&s" alt="Побічні ефекти" />
                </div>
                <h3>Займаюся в тренажерці, хочу кращих результатів</h3>
            </div>
        </div>
    </div>
</section>

  <div className='footer-wrapper'>
            
            <div className='footer-container'>
              <FooterPart title="Корисні рекомендації від дієтолога">  
                <form>
                  <input type="email" placeholder='Введіть ваш email' />
                  <button type='submit'>Надіслати</button>  
                </form>  
                <a href='/privacy'>Політика конфіденційності</a>
              </FooterPart>
              <FooterPart title="Контакти">
                <p>м. Черкаси, вул. Гоголя 224,<br />Будівля “Райффайзен банк Аваль” Офісний центр,<br /> 4-й поверх</p>
                <p>ПН – ПТ: 10:00 – 18:00</p>
              </FooterPart>
              <FooterPart title="Написати нам">
                <a href='www.facebook.com'>Facebook</a>
                <br />
                <a href='www.instagram.com'>Instagram</a>
              </FooterPart>
            </div>
        </div>
    </>
  )
}

export default App
