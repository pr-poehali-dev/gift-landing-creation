import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import CountdownTimer from '@/components/CountdownTimer';

export default function Index() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const products = [
    {
      title: 'Акриловые 3D ночники',
      image: 'https://i.imgur.com/6QAYZVq.png',
      price: 'от 1590 ₽',
      features: ['16 цветов свечения', 'Пульт в комплекте', 'Размер 15×20 см', 'Упаковка: крафтовая коробка — 0 ₽']
    },
    {
      title: 'Акриловые фигурки с УФ-печатью',
      image: 'https://i.imgur.com/SqYdnOc.jpeg',
      price: 'до 299 ₽',
      features: ['Размер 15×20 см', 'УФ-печать высокого качества']
    },
    {
      title: 'Тафтинг-ковры ручного изготовления',
      image: 'https://i.imgur.com/bOzrpkx.jpeg',
      price: 'от 2190 ₽',
      features: ['Ручная работа', 'Размер 80×80 см']
    },
    {
      title: 'Кулоны с гравировкой',
      image: 'https://i.imgur.com/UnX017M.jpeg',
      price: '490 ₽',
      features: ['Любая надпись', 'Цепочка в комплекте']
    },
    {
      title: 'Акриловые топперы',
      image: 'https://i.imgur.com/sZzfEOU.jpeg',
      price: '299 ₽',
      features: ['Идеально для тортов', 'Любой дизайн']
    }
  ];

  const advantages = [
    { icon: 'Sparkles', title: 'Индивидуальный дизайн', desc: 'Создаём по вашим пожеланиям' },
    { icon: 'Zap', title: 'Быстрое производство', desc: '1–3 дня' },
    { icon: 'Gift', title: 'Подарочная упаковка', desc: 'Бесплатно в комплекте' },
    { icon: 'Truck', title: 'Доставка по РФ', desc: 'От 200 ₽ (Яндекс.Доставка)' }
  ];

  const steps = [
    { num: '01', title: 'Оставьте заявку', desc: 'Напишите @customLGHT или заполните форму' },
    { num: '02', title: 'Создадим дизайн', desc: 'Разработаем индивидуальный макет' },
    { num: '03', title: 'Доставим подарок', desc: 'В красивой подарочной упаковке' }
  ];

  const reviews = [
    'https://i.imgur.com/A6TNgZj.jpeg',
    'https://i.imgur.com/qrCAlu0.jpeg',
    'https://i.imgur.com/bLjnzEC.jpeg',
    'https://i.imgur.com/6kPpVXz.jpeg',
    'https://i.imgur.com/DOlADdG.jpeg',
    'https://i.imgur.com/iQjn6RN.jpeg',
    'https://i.imgur.com/keEl2DP.jpeg',
    'https://i.imgur.com/ZEm2fJA.jpeg',
    'https://i.imgur.com/fCa8AW0.jpeg',
    'https://i.imgur.com/A1PSw6N.jpeg',
    'https://i.imgur.com/ooJGMNB.jpeg',
    'https://i.imgur.com/HF5rLp4.jpeg'
  ];

  const galleryItems = [
    { type: 'image', src: 'https://i.imgur.com/Vsgj6Le.png' },
    { type: 'image', src: 'https://i.imgur.com/qtQfzKm.png' },
    { type: 'image', src: 'https://i.imgur.com/BsYvZbj.png' },
    { type: 'image', src: 'https://i.imgur.com/6QAYZVq.png' },
    { type: 'image', src: 'https://i.imgur.com/mOWPtNK.png' },
    { type: 'image', src: 'https://i.imgur.com/klvqKn1.jpeg' },
    { type: 'image', src: 'https://i.imgur.com/UnX017M.jpeg' },
    { type: 'image', src: 'https://i.imgur.com/SqYdnOc.jpeg' },
    { type: 'image', src: 'https://i.imgur.com/bOzrpkx.jpeg' },
    { type: 'image', src: 'https://i.imgur.com/qHC5pAX.jpeg' },
    { type: 'image', src: 'https://i.imgur.com/c8xdpqI.jpeg' },
    { type: 'image', src: 'https://i.imgur.com/RtBfhlS.jpeg' },
    { type: 'image', src: 'https://i.imgur.com/veCinrr.jpeg' },
    { type: 'image', src: 'https://i.imgur.com/rQ4IeCx.jpeg' },
    { type: 'image', src: 'https://i.imgur.com/G28J96C.jpeg' },
    { type: 'image', src: 'https://i.imgur.com/U7QsPbh.jpeg' },
    { type: 'video', src: 'https://i.imgur.com/hjbUgZK.mp4' },
    { type: 'video', src: 'https://i.imgur.com/zAfY0WA.mp4' },
    { type: 'video', src: 'https://i.imgur.com/6MFBLAu.mp4' },
    { type: 'video', src: 'https://i.imgur.com/AqOg8vi.mp4' },
    { type: 'video', src: 'https://i.imgur.com/lLCxq2f.mp4' },
    { type: 'image', src: 'https://i.imgur.com/JDBdgGO.jpeg' },
    { type: 'image', src: 'https://i.imgur.com/8oCWxp9.jpeg' },
    { type: 'image', src: 'https://i.imgur.com/4tXlu56.jpeg' },
    { type: 'image', src: 'https://i.imgur.com/CPK0ga8.jpeg' },
    { type: 'image', src: 'https://i.imgur.com/Pta2qBS.jpeg' },
    { type: 'image', src: 'https://i.imgur.com/i7wH2q6.jpeg' },
    { type: 'image', src: 'https://i.imgur.com/audfBrS.jpeg' },
    { type: 'image', src: 'https://i.imgur.com/r6XUDUX.jpeg' },
    { type: 'image', src: 'https://i.imgur.com/XiqmHzZ.jpeg' },
    { type: 'image', src: 'https://i.imgur.com/kVcnpWS.jpeg' },
    { type: 'image', src: 'https://i.imgur.com/QkNfJRB.jpeg' },
    { type: 'image', src: 'https://i.imgur.com/6nWatH9.jpeg' },
    { type: 'image', src: 'https://i.imgur.com/0jkLmeZ.jpeg' },
    { type: 'image', src: 'https://i.imgur.com/238sbdA.jpeg' },
    { type: 'image', src: 'https://i.imgur.com/hGYLEvK.jpeg' },
    { type: 'image', src: 'https://i.imgur.com/2NeD79V.jpeg' },
    { type: 'image', src: 'https://i.imgur.com/eeT4YBc.jpeg' },
    { type: 'image', src: 'https://i.imgur.com/6L5T1ia.jpeg' },
    { type: 'image', src: 'https://i.imgur.com/zjhBoE7.jpeg' }
  ];

  const trustImages = [
    'https://i.imgur.com/svj0U9j.jpeg',
    'https://i.imgur.com/IuW6X16.jpeg'
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <img 
            src="https://i.imgur.com/rQ4IeCx.jpeg"
            alt="Hero"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Создаём персональные подарки,<br />которые <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">запоминаются</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Индивидуальные подарки ручной работы с вашим дизайном
          </p>
          
          <div className="flex flex-col items-center gap-6 mb-8">
            <CountdownTimer />
            <p className="text-yellow-400 font-semibold text-lg">
              Скидка 20% на первый заказ до конца таймера!
            </p>
          </div>

          <Button 
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white text-xl px-12 py-6 h-auto neon-glow-purple"
            onClick={() => window.open('https://t.me/customLGHT', '_blank')}
          >
            Сделать индивидуальный заказ
          </Button>
          <p className="text-gray-400 mt-4">
            Напиши нашему менеджеру — <span className="text-cyan-400">@customLGHT</span>
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-black">
            Каталог товаров
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg">
            Индивидуальные подарки на любой вкус
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <div 
                key={idx}
                className="animate-on-scroll bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-purple-500 group"
              >
                <div className="relative overflow-hidden h-80">
                  <img 
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-black">{product.title}</h3>
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500 mb-4">
                    {product.price}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <Icon name="Check" size={20} className="text-cyan-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-col gap-4">
                    <CountdownTimer />
                    <p className="text-yellow-600 font-semibold text-sm">
                      -20% до конца таймера!
                    </p>
                    <Button 
                      className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600"
                      onClick={() => window.open('https://t.me/customLGHT', '_blank')}
                    >
                      Заказать
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-black">
            Наши преимущества
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((item, idx) => (
              <div 
                key={idx}
                className="animate-on-scroll text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <Icon name={item.icon as any} size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-black">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Процесс заказа
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">
            Всего 3 простых шага до вашего уникального подарка
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {steps.map((step, idx) => (
              <div 
                key={idx}
                className="animate-on-scroll text-center p-8 bg-gradient-to-br from-purple-900/30 to-cyan-900/30 rounded-2xl border border-purple-500/30"
              >
                <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 mb-4">
                  {step.num}
                </div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-8">Процесс изготовления</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <video 
                src="https://i.imgur.com/hWDvX6b.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full rounded-xl"
              />
              <video 
                src="https://i.imgur.com/SDiRkf8.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full rounded-xl"
              />
            </div>
          </div>

          <div className="text-center">
            <CountdownTimer />
            <p className="text-yellow-400 font-semibold text-lg mt-4 mb-6">
              Скидка 20% до конца таймера!
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-xl px-12 py-6 h-auto"
              onClick={() => window.open('https://t.me/customLGHT', '_blank')}
            >
              Начать работу
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Отзывы клиентов
            </h2>
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="flex">
                {[1,2,3,4,5].map((star) => (
                  <Icon key={star} name="Star" size={24} className="text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <span className="text-2xl font-bold text-black">4.6/5</span>
            </div>
            <p className="text-xl text-purple-600 font-semibold">
              Более 280 000 проданных товаров
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
            {reviews.map((img, idx) => (
              <div 
                key={idx}
                className="animate-on-scroll rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:scale-105"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <img 
                  src={img}
                  alt={`Отзыв ${idx + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Галерея работ
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">
            Посмотрите, что мы создали для наших клиентов
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryItems.map((item, idx) => (
              <div 
                key={idx}
                className="animate-on-scroll rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                {item.type === 'video' ? (
                  <video 
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-64 object-cover"
                  />
                ) : (
                  <img 
                    src={item.src}
                    alt={`Работа ${idx + 1}`}
                    className="w-full h-64 object-cover"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-purple-900 to-cyan-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Есть вопросы?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Нужна консультация или хотите обсудить индивидуальный заказ?
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <CountdownTimer />
            <p className="text-yellow-300 font-semibold text-lg">
              Скидка 20% до конца таймера!
            </p>
            <Button 
              size="lg"
              className="bg-white text-purple-900 hover:bg-gray-100 text-xl px-12 py-6 h-auto font-bold"
              onClick={() => window.open('https://t.me/customLGHT', '_blank')}
            >
              Написать менеджеру @customLGHT
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-black">
            Нам доверяют
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-cyan-50 rounded-2xl">
              <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500 mb-2">
                3+
              </p>
              <p className="text-xl text-gray-700">Лет на рынке</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-cyan-50 rounded-2xl">
              <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500 mb-2">
                280K+
              </p>
              <p className="text-xl text-gray-700">Проданных товаров</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-cyan-50 rounded-2xl">
              <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500 mb-2">
                4.6/5
              </p>
              <p className="text-xl text-gray-700">Средняя оценка</p>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-8 text-black">
              Продажи на маркетплейсах
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {trustImages.map((img, idx) => (
                <img 
                  key={idx}
                  src={img}
                  alt={`Статистика ${idx + 1}`}
                  className="w-full rounded-xl shadow-lg"
                />
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl text-gray-700 mb-6">Мы продаём на:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                variant="outline"
                size="lg"
                className="text-lg"
                onClick={() => window.open('https://www.wildberries.ru/brands/310698810-ildamn', '_blank')}
              >
                <Icon name="Store" className="mr-2" />
                Wildberries (ildamn)
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="text-lg"
                onClick={() => window.open('https://www.wildberries.ru/seller/1204459', '_blank')}
              >
                <Icon name="Store" className="mr-2" />
                Wildberries (Продавец)
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="text-lg"
                onClick={() => window.open('https://www.ozon.ru/seller/infane-1627082/', '_blank')}
              >
                <Icon name="ShoppingBag" className="mr-2" />
                Ozon
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 mb-4">
                infane
              </h3>
              <p className="text-gray-400">
                Создаём персональные подарки, которые запоминаются
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center gap-2">
                  <Icon name="Send" size={18} />
                  Telegram: <a href="https://t.me/customLGHT" className="text-cyan-400 hover:underline">@customLGHT</a>
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Маркетплейсы</h4>
              <div className="space-y-2 text-gray-400">
                <a href="https://www.wildberries.ru/brands/310698810-ildamn" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400">
                  Wildberries
                </a>
                <a href="https://www.ozon.ru/seller/infane-1627082/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400">
                  Ozon
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>© 2024 infane. Все права защищены.</p>
            <p className="mt-2">Политика конфиденциальности</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
