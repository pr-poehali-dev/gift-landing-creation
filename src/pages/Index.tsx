import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(180);

  useEffect(() => {
    if (timeLeft <= 0) return;
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) return 180;
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full neon-glow-cyan">
      <Icon name="Clock" size={20} className="text-white" />
      <span className="text-white font-bold text-lg">
        {minutes}:{seconds.toString().padStart(2, '0')}
      </span>
      <span className="text-white/90 text-sm">— Скидка 20% на первый заказ!</span>
    </div>
  );
};

const ProductCard = ({ 
  image, 
  title, 
  features, 
  price 
}: { 
  image: string; 
  title: string; 
  features: string[]; 
  price: string;
}) => (
  <Card className="group overflow-hidden bg-white border-2 border-gray-100 hover:border-neon-cyan transition-all duration-300 hover:neon-glow-cyan hover:scale-[1.02] relative">
    <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 to-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="aspect-square overflow-hidden bg-gray-50 relative">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
    </div>
    <div className="p-6 space-y-4 relative z-10">
      <h3 className="text-2xl font-bold group-hover:text-neon-purple transition-colors">{title}</h3>
      <ul className="space-y-2">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
            <Icon name="Check" size={16} className="text-neon-cyan mt-0.5 flex-shrink-0 group-hover:scale-125 transition-transform" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="pt-4 border-t border-gray-100">
        <p className="text-3xl font-bold text-neon-purple neon-glow-purple">{price}</p>
        <p className="text-sm text-gray-500 mt-1">Подарочная упаковка в комплекте</p>
      </div>
      <Button 
        className="w-full bg-gradient-to-r from-neon-purple to-neon-cyan text-white hover:opacity-90 transition-opacity text-lg py-6 neon-glow-purple"
        onClick={() => window.open('https://t.me/customLGHT', '_blank')}
      >
        Заказать
      </Button>
    </div>
  </Card>
);

const GalleryImage = ({ src, index }: { src: string; index: number }) => (
  <div 
    className="aspect-square overflow-hidden rounded-lg hover:scale-105 transition-all duration-300 group relative border-2 border-gray-200 hover:border-neon-cyan hover:neon-glow-cyan bg-gray-100"
  >
    <img 
      src={src} 
      alt={`Работа ${index + 1}`}
      className="w-full h-full object-cover"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/0 to-neon-cyan/0 group-hover:from-neon-purple/20 group-hover:to-neon-cyan/20 transition-all duration-300"></div>
  </div>
);

const Index = () => {
  const products = [
    {
      image: 'https://i.imgur.com/5Gnxgll.jpeg',
      title: 'Акриловые 3D ночники',
      features: ['16 цветов свечения', 'Пульт в комплекте', 'Размер 15×20 см'],
      price: 'до 1990 ₽'
    },
    {
      image: 'https://i.imgur.com/RanEL4d.jpeg',
      title: 'Акриловые фигурки с УФ-печатью',
      features: ['Размер 15×20 см', 'УФ-печать высокого качества', 'Любой дизайн'],
      price: 'до 299 ₽'
    },
    {
      image: 'https://i.imgur.com/85SSWMM.png',
      title: 'Тафтинг-ковры',
      features: ['Ручная работа', 'Размер 80×80 см', 'Индивидуальный дизайн'],
      price: 'от 2190 ₽'
    },
    {
      image: 'https://i.imgur.com/4ZF6i5h.png',
      title: 'Кулоны с гравировкой',
      features: ['Любая надпись', 'Цепочка в комплекте', 'Премиум качество'],
      price: '490 ₽'
    },
    {
      image: 'https://i.imgur.com/sZzfEOU.jpeg',
      title: 'Акриловые топперы',
      features: ['Любой дизайн', 'Для торта или декора', 'Быстрое изготовление'],
      price: '299 ₽'
    }
  ];

  const galleryImages = [
    'https://i.imgur.com/Vsgj6Le.png',
    'https://i.imgur.com/qtQfzKm.png',
    'https://i.imgur.com/BsYvZbj.png',
    'https://i.imgur.com/6QAYZVq.png',
    'https://i.imgur.com/mOWPtNK.png',
    'https://i.imgur.com/klvqKn1.jpeg',
    'https://i.imgur.com/UnX017M.jpeg',
    'https://i.imgur.com/SqYdnOc.jpeg',
    'https://i.imgur.com/bOzrpkx.jpeg',
    'https://i.imgur.com/qHC5pAX.jpeg',
    'https://i.imgur.com/c8xdpqI.jpeg',
    'https://i.imgur.com/RtBfhlS.jpeg',
    'https://i.imgur.com/veCinrr.jpeg',
    'https://i.imgur.com/6EbC3Yk.jpeg',
    'https://i.imgur.com/rQ4IeCx.jpeg',
    'https://i.imgur.com/G28J96C.jpeg'
  ];

  const advantages = [
    { icon: 'Sparkles', title: 'Индивидуальный дизайн', desc: 'Создаём по вашим эскизам' },
    { icon: 'Zap', title: 'Быстрое производство', desc: 'Готово за 1–3 дня' },
    { icon: 'Gift', title: 'Премиум упаковка', desc: 'Крафтовая коробка в подарок' },
    { icon: 'Truck', title: 'Доставка по РФ', desc: 'От 200 ₽ через Яндекс' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple rounded-full blur-[120px] animate-pulse"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up text-left">
              <Badge className="bg-neon-cyan text-black text-sm px-4 py-2 neon-glow-cyan inline-block">
                ILDAMN — Индивидуальные подарки
              </Badge>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Создаём персональные подарки,{' '}
                <span className="text-neon-cyan neon-glow-cyan">которые запоминаются</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90">
                Индивидуальные подарки ручной работы с вашим дизайном
              </p>
              
              <div className="flex flex-col items-start gap-6 pt-4">
                <CountdownTimer />
                
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-neon-purple to-neon-cyan text-white hover:opacity-90 transition-opacity text-xl px-12 py-8 neon-glow-purple"
                  onClick={() => window.open('https://t.me/customLGHT', '_blank')}
                >
                  Сделать индивидуальный заказ
                </Button>
                
                <p className="text-white/70 text-sm">
                  Напиши нашему менеджеру — <span className="text-neon-cyan font-semibold neon-glow-cyan">@customLGHT</span>
                </p>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple to-neon-cyan rounded-3xl blur-2xl opacity-50 neon-glow-cyan"></div>
              <img 
                src="https://i.imgur.com/rQ4IeCx.jpeg" 
                alt="Hero product"
                className="relative w-full h-auto rounded-3xl border-4 border-neon-cyan neon-glow-cyan shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-neon-purple rounded-full blur-[100px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-neon-cyan rounded-full blur-[100px] opacity-20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Каталог <span className="text-neon-purple neon-glow-purple">товаров</span></h2>
            <p className="text-xl text-gray-600">Выбери свой идеальный подарок</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {products.map((product, idx) => (
              <div key={idx} className="animate-scale-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <CountdownTimer />
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-dark relative overflow-hidden">
        <div className="absolute top-1/3 left-10 w-80 h-80 bg-neon-cyan rounded-full blur-[120px] opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-10 w-80 h-80 bg-neon-purple rounded-full blur-[120px] opacity-30 animate-pulse"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Почему выбирают <span className="text-neon-cyan neon-glow-cyan">ILDAMN</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((adv, idx) => (
              <Card key={idx} className="p-8 bg-gray-900 border-2 border-gray-800 hover:border-neon-cyan transition-all duration-300 hover:neon-glow-cyan text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-neon-purple to-neon-cyan rounded-full flex items-center justify-center mx-auto neon-glow-cyan">
                  <Icon name={adv.icon as any} size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{adv.title}</h3>
                <p className="text-gray-400">{adv.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-white relative overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-neon-purple rounded-full blur-[100px] opacity-15"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-neon-cyan rounded-full blur-[100px] opacity-15"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Как сделать <span className="text-neon-cyan neon-glow-cyan">заказ</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { num: '01', title: 'Оставьте заявку', desc: 'Напишите @customLGHT или оставьте заявку на сайте', icon: 'MessageCircle' },
              { num: '02', title: 'Создаём дизайн', desc: 'Разрабатываем ваш индивидуальный дизайн', icon: 'Palette' },
              { num: '03', title: 'Производство и доставка', desc: 'Производим и доставляем в подарочной коробке', icon: 'Package' }
            ].map((step, idx) => (
              <Card key={idx} className="p-8 border-2 border-gray-100 hover:border-neon-purple transition-all duration-300 hover:neon-glow-purple relative overflow-hidden group">
                <div className="absolute top-0 right-0 text-[120px] font-bold text-gray-50 group-hover:text-neon-cyan/10 transition-colors">
                  {step.num}
                </div>
                <div className="relative space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-neon-purple to-neon-cyan rounded-full flex items-center justify-center neon-glow-cyan">
                    <Icon name={step.icon as any} size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <CountdownTimer />
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-neon-cyan rounded-full blur-[100px] opacity-10"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-neon-purple rounded-full blur-[100px] opacity-10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Галерея <span className="text-neon-purple neon-glow-purple">наших работ</span></h2>
            <p className="text-xl text-gray-600">Более 20 000 проданных товаров</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, idx) => (
              <GalleryImage key={idx} src={img} index={idx} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-dark relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full blur-[150px] opacity-20"></div>
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Есть <span className="text-neon-cyan neon-glow-cyan">вопросы?</span>
          </h2>
          <p className="text-xl text-gray-300">
            Нужна консультация или хотите обсудить индивидуальный заказ?
          </p>
          
          <div className="flex flex-col items-center gap-6 pt-8">
            <CountdownTimer />
            
            <Button 
              size="lg"
              className="bg-gradient-to-r from-neon-purple to-neon-cyan text-white hover:opacity-90 transition-opacity text-xl px-12 py-8 neon-glow-purple"
              onClick={() => window.open('https://t.me/customLGHT', '_blank')}
            >
              Написать менеджеру @customLGHT
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-neon-cyan rounded-full blur-[120px] opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-purple rounded-full blur-[120px] opacity-10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Нам <span className="text-neon-purple neon-glow-purple">доверяют</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: 'Award', value: '3+ года', label: 'На рынке' },
              { icon: 'ShoppingBag', value: '20 000+', label: 'Проданных товаров' },
              { icon: 'Star', value: '4.7/5', label: 'Средняя оценка' },
              { icon: 'Users', value: '15 000+', label: 'Довольных клиентов' }
            ].map((stat, idx) => (
              <Card key={idx} className="p-8 text-center border-2 border-gray-100 hover:border-neon-cyan transition-all duration-300 hover:neon-glow-cyan space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-neon-purple to-neon-cyan rounded-full flex items-center justify-center mx-auto neon-glow-cyan">
                  <Icon name={stat.icon as any} size={32} className="text-white" />
                </div>
                <p className="text-4xl font-bold text-neon-purple">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-white transition-all text-lg px-8 py-6 hover:neon-glow-cyan"
              onClick={() => window.open('https://www.wildberries.ru/brands/310698810-ildamn', '_blank')}
            >
              Мы на Wildberries / Ozon
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-dark py-12 px-4 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-32 bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-purple blur-[80px] opacity-30"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-neon-cyan">ILDAMN</h3>
              <p className="text-gray-400">Индивидуальные подарки ручной работы</p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Контакты</h4>
              <div className="space-y-2">
                <a 
                  href="https://t.me/customLGHT" 
                  target="_blank"
                  className="flex items-center gap-2 text-gray-400 hover:text-neon-cyan transition-colors"
                >
                  <Icon name="Send" size={16} />
                  <span>Telegram: @customLGHT</span>
                </a>
                <a 
                  href="https://www.wildberries.ru/brands/310698810-ildamn" 
                  target="_blank"
                  className="flex items-center gap-2 text-gray-400 hover:text-neon-cyan transition-colors"
                >
                  <Icon name="ShoppingCart" size={16} />
                  <span>Wildberries / Ozon</span>
                </a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Информация</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-neon-cyan transition-colors">
                  Политика конфиденциальности
                </a>
                <p className="text-gray-500 text-sm">© 2025 ILDAMN. Все права защищены</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              Сделано с ❤️ для тех, кто ценит индивидуальность
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;