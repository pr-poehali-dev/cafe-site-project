import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-cafe-lightCream">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-cafe-cream/90 backdrop-blur-sm z-50 border-b border-cafe-sandy/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Coffee" size={24} className="text-cafe-brown" />
              <span className="text-xl font-bold text-cafe-darkBrown">Уютное Кафе</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-cafe-darkBrown hover:text-cafe-brown transition-colors">Главная</a>
              <a href="#menu" className="text-cafe-darkBrown hover:text-cafe-brown transition-colors">Меню</a>
              <a href="#gallery" className="text-cafe-darkBrown hover:text-cafe-brown transition-colors">Галерея</a>
              <a href="#about" className="text-cafe-darkBrown hover:text-cafe-brown transition-colors">О нас</a>
            </div>
            <div className="md:hidden">
              <Icon name="Menu" size={24} className="text-cafe-brown" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold text-cafe-darkBrown mb-6 leading-tight">
                Добро пожаловать в<br />
                <span className="text-cafe-brown">уютное кафе</span>
              </h1>
              <p className="text-xl text-cafe-darkBrown/80 mb-8 leading-relaxed">
                Место, где каждый день начинается с ароматного кофе и домашней атмосферы. 
                Наслаждайтесь моментами уюта в самом сердце города.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-cafe-brown hover:bg-cafe-darkBrown text-white px-8 py-3 rounded-full text-lg transition-all hover:scale-105">
                  Посмотреть меню
                </Button>
                <Button variant="outline" className="border-cafe-brown text-cafe-brown hover:bg-cafe-brown hover:text-white px-8 py-3 rounded-full text-lg transition-all">
                  Забронировать столик
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="/img/b8f5d0ee-674a-41d2-b0af-f7aa6a45d60c.jpg" 
                alt="Уютный интерьер кафе" 
                className="rounded-3xl shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-cafe-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-cafe-darkBrown mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-cafe-darkBrown/70">Создаем атмосферу домашнего уюта каждый день</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-cafe-sandy/20 shadow-lg hover:shadow-xl transition-all hover:scale-105 rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="bg-cafe-sandy/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Heart" size={32} className="text-cafe-brown" />
                </div>
                <h3 className="text-2xl font-bold text-cafe-darkBrown mb-4">Домашняя атмосфера</h3>
                <p className="text-cafe-darkBrown/70 leading-relaxed">
                  Мягкие кресла, теплое освещение и уютные уголки создают ощущение дома
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-cafe-sandy/20 shadow-lg hover:shadow-xl transition-all hover:scale-105 rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="bg-cafe-sandy/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Coffee" size={32} className="text-cafe-brown" />
                </div>
                <h3 className="text-2xl font-bold text-cafe-darkBrown mb-4">Свежий кофе</h3>
                <p className="text-cafe-darkBrown/70 leading-relaxed">
                  Ежедневно обжариваем зерна и готовим кофе с любовью к каждой чашке
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-cafe-sandy/20 shadow-lg hover:shadow-xl transition-all hover:scale-105 rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="bg-cafe-sandy/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Users" size={32} className="text-cafe-brown" />
                </div>
                <h3 className="text-2xl font-bold text-cafe-darkBrown mb-4">Дружелюбный сервис</h3>
                <p className="text-cafe-darkBrown/70 leading-relaxed">
                  Наша команда всегда рада видеть вас и создать особенный опыт
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section id="menu" className="py-20 bg-cafe-lightCream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-cafe-darkBrown mb-4">Наше меню</h2>
            <p className="text-xl text-cafe-darkBrown/70">Популярные позиции нашего кафе</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-cafe-sandy/20 shadow-lg hover:shadow-xl transition-all hover:scale-105 rounded-2xl overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-cafe-sandy to-cafe-brown"></div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-cafe-darkBrown">Капучино</h3>
                  <span className="text-lg font-bold text-cafe-brown">250₽</span>
                </div>
                <p className="text-cafe-darkBrown/70 mb-4">Классический итальянский напиток с нежной молочной пенкой</p>
                <Button className="w-full bg-cafe-brown hover:bg-cafe-darkBrown text-white rounded-full">
                  Заказать
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-white border-cafe-sandy/20 shadow-lg hover:shadow-xl transition-all hover:scale-105 rounded-2xl overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-cafe-cream to-cafe-sandy"></div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-cafe-darkBrown">Круассан</h3>
                  <span className="text-lg font-bold text-cafe-brown">180₽</span>
                </div>
                <p className="text-cafe-darkBrown/70 mb-4">Свежая выпечка с хрустящей корочкой и нежной серединкой</p>
                <Button className="w-full bg-cafe-brown hover:bg-cafe-darkBrown text-white rounded-full">
                  Заказать
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-white border-cafe-sandy/20 shadow-lg hover:shadow-xl transition-all hover:scale-105 rounded-2xl overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-cafe-brown to-cafe-darkBrown"></div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-cafe-darkBrown">Чизкейк</h3>
                  <span className="text-lg font-bold text-cafe-brown">320₽</span>
                </div>
                <p className="text-cafe-darkBrown/70 mb-4">Домашний чизкейк с ягодами и нежным кремом</p>
                <Button className="w-full bg-cafe-brown hover:bg-cafe-darkBrown text-white rounded-full">
                  Заказать
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" className="border-cafe-brown text-cafe-brown hover:bg-cafe-brown hover:text-white px-8 py-3 rounded-full text-lg">
              Посмотреть полное меню
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 bg-cafe-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-cafe-darkBrown mb-4">Галерея</h2>
            <p className="text-xl text-cafe-darkBrown/70">Почувствуйте атмосферу нашего кафе</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <img 
                src="/img/0e877f57-b6ad-41f0-ba03-1befc72b527a.jpg" 
                alt="Кофе и выпечка" 
                className="w-full h-80 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
              />
            </div>
            <div>
              <img 
                src="/img/b672a656-575e-4eaa-8dd0-40dd80cce2f2.jpg" 
                alt="Уютный уголок кафе" 
                className="w-full h-80 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
              />
            </div>
            <div>
              <img 
                src="/img/b8f5d0ee-674a-41d2-b0af-f7aa6a45d60c.jpg" 
                alt="Интерьер кафе" 
                className="w-full h-64 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
              />
            </div>
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-r from-cafe-sandy to-cafe-brown h-64 rounded-2xl flex items-center justify-center shadow-lg">
                <div className="text-center text-white">
                  <Icon name="Camera" size={48} className="mx-auto mb-4" />
                  <p className="text-xl font-semibold">Больше фото в Instagram</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-cafe-lightCream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-cafe-darkBrown mb-6">О нас</h2>
              <p className="text-lg text-cafe-darkBrown/80 mb-6 leading-relaxed">
                Наше кафе было создано с одной простой идеей — дать людям место, где они могут 
                почувствовать себя как дома. Каждая деталь интерьера, каждая чашка кофе 
                создается с любовью и заботой о наших гостях.
              </p>
              <p className="text-lg text-cafe-darkBrown/80 mb-8 leading-relaxed">
                Мы верим, что лучшие моменты рождаются в теплой атмосфере за чашкой 
                хорошего кофе в кругу близких людей. Приходите к нам и станьте частью 
                нашей большой семьи.
              </p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cafe-brown">5+</div>
                  <div className="text-cafe-darkBrown/70">лет работы</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cafe-brown">1000+</div>
                  <div className="text-cafe-darkBrown/70">довольных гостей</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cafe-brown">50+</div>
                  <div className="text-cafe-darkBrown/70">видов напитков</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/img/b672a656-575e-4eaa-8dd0-40dd80cce2f2.jpg" 
                alt="Атмосфера кафе" 
                className="rounded-2xl shadow-lg h-64 object-cover"
              />
              <img 
                src="/img/0e877f57-b6ad-41f0-ba03-1befc72b527a.jpg" 
                alt="Наши напитки" 
                className="rounded-2xl shadow-lg h-64 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cafe-darkBrown text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Icon name="Coffee" size={24} />
                <span className="text-xl font-bold">Уютное Кафе</span>
              </div>
              <p className="text-cafe-cream/80 leading-relaxed">
                Место, где каждый день начинается с ароматного кофе и домашней атмосферы.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6">Контакты</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={18} />
                  <span className="text-cafe-cream/80">ул. Уютная, 123</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={18} />
                  <span className="text-cafe-cream/80">+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={18} />
                  <span className="text-cafe-cream/80">8:00 - 22:00</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6">Социальные сети</h3>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" className="border-cafe-cream/30 text-cafe-cream hover:bg-cafe-cream hover:text-cafe-darkBrown">
                  <Icon name="Instagram" size={18} />
                </Button>
                <Button variant="outline" size="icon" className="border-cafe-cream/30 text-cafe-cream hover:bg-cafe-cream hover:text-cafe-darkBrown">
                  <Icon name="Facebook" size={18} />
                </Button>
                <Button variant="outline" size="icon" className="border-cafe-cream/30 text-cafe-cream hover:bg-cafe-cream hover:text-cafe-darkBrown">
                  <Icon name="MessageCircle" size={18} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-cafe-cream/20 mt-12 pt-8 text-center">
            <p className="text-cafe-cream/60">© 2024 Уютное Кафе. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;