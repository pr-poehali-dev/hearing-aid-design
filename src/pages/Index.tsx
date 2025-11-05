import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const services = [
    {
      icon: 'Stethoscope',
      title: 'Диагностика слуха',
      description: 'Комплексное обследование на современном оборудовании с детальным анализом результатов',
      features: ['Аудиометрия', 'Тимпанометрия', 'Речевая аудиометрия']
    },
    {
      icon: 'Headphones',
      title: 'Подбор аппаратов',
      description: 'Индивидуальный подбор слуховых аппаратов с учётом особенностей вашего слуха',
      features: ['Бесплатная примерка', 'Настройка под вас', 'Гарантия результата']
    },
    {
      icon: 'Settings',
      title: 'Настройка и ремонт',
      description: 'Профессиональная настройка и ремонт слуховых аппаратов любых производителей',
      features: ['Точная настройка', 'Диагностика', 'Гарантийный ремонт']
    },
    {
      icon: 'UserCheck',
      title: 'Консультации',
      description: 'Консультации опытных сурдологов и слухопротезистов по всем вопросам',
      features: ['Онлайн-консультации', 'Выезд на дом', 'Поддержка 24/7']
    }
  ];

  const specialists = [
    {
      name: 'Иванова Елена Петровна',
      role: 'Врач-сурдолог',
      experience: '15 лет опыта',
      description: 'Кандидат медицинских наук, специалист по детской сурдологии'
    },
    {
      name: 'Смирнов Алексей Викторович',
      role: 'Слухопротезист',
      experience: '12 лет опыта',
      description: 'Сертифицированный специалист по настройке цифровых аппаратов'
    },
    {
      name: 'Петрова Мария Сергеевна',
      role: 'Врач-сурдолог',
      experience: '10 лет опыта',
      description: 'Эксперт по имплантации и реабилитации слуха'
    }
  ];

  const devices = [
    {
      type: 'Заушные',
      description: 'Универсальные и мощные аппараты для любой степени потери слуха',
      price: 'от 15 000 ₽',
      features: ['Высокая мощность', 'Длительная работа', 'Простота использования']
    },
    {
      type: 'Внутриушные',
      description: 'Незаметные аппараты, изготовленные по индивидуальному слепку',
      price: 'от 25 000 ₽',
      features: ['Невидимы снаружи', 'Комфорт 24/7', 'Премиум качество']
    },
    {
      type: 'Внутриканальные',
      description: 'Миниатюрные устройства для лёгкой и средней степени потери слуха',
      price: 'от 20 000 ₽',
      features: ['Максимальная незаметность', 'Естественный звук', 'Премиум дизайн']
    },
    {
      type: 'С Bluetooth',
      description: 'Современные цифровые аппараты с подключением к смартфону',
      price: 'от 35 000 ₽',
      features: ['Беспроводная связь', 'Управление со смартфона', 'Hi-Fi звук']
    }
  ];

  const reviews = [
    {
      name: 'Анна Михайловна',
      age: 68,
      text: 'Спасибо огромное! Наконец-то я снова слышу пение птиц и голоса внуков. Специалисты очень внимательные.',
      rating: 5
    },
    {
      name: 'Виктор Иванович',
      age: 72,
      text: 'Отличный центр! Быстро подобрали аппарат, всё объяснили и настроили. Уже месяц пользуюсь — очень доволен.',
      rating: 5
    },
    {
      name: 'Светлана К.',
      age: 55,
      text: 'Современное оборудование, профессиональные врачи. Диагностика прошла быстро, результаты подробно объяснили.',
      rating: 5
    }
  ];

  const faqs = [
    {
      question: 'Как понять, что мне нужен слуховой аппарат?',
      answer: 'Если вы замечаете, что переспрашиваете собеседников, увеличиваете громкость телевизора, с трудом слышите в шумных местах — это повод обратиться к специалисту. Запишитесь на бесплатную диагностику слуха.'
    },
    {
      question: 'Сколько стоит слуховой аппарат?',
      answer: 'Стоимость зависит от типа и функционала аппарата. У нас есть модели от 15 000 рублей. Мы подберём оптимальный вариант под ваш бюджет и потребности. Действует рассрочка и программа trade-in.'
    },
    {
      question: 'Как долго длится привыкание к аппарату?',
      answer: 'Обычно адаптация занимает 2-4 недели. Мы предоставляем бесплатный период тестирования 14 дней и проводим повторные настройки до достижения комфорта. Наши специалисты всегда на связи для консультаций.'
    },
    {
      question: 'Можно ли носить аппарат постоянно?',
      answer: 'Да, современные слуховые аппараты предназначены для ежедневного использования. Они комфортны, незаметны и защищены от влаги и пыли. Мы рекомендуем носить их весь день для лучшей адаптации.'
    },
    {
      question: 'Какая гарантия на аппараты?',
      answer: 'Все аппараты имеют официальную гарантию производителя от 1 до 5 лет. Мы также предоставляем бесплатное сервисное обслуживание и консультации в течение всего срока использования.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-accent">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/a88686e0-19a6-44d5-9ab2-3834a3b1e09d.png" 
                alt="Ясный слух" 
                className="h-12 w-12 object-contain"
              />
              <div>
                <h1 className="text-2xl font-bold text-primary">Ясный слух</h1>
                <p className="text-xs text-muted-foreground">Центр слухопротезирования</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              {['Главная', 'Услуги', 'Специалисты', 'Аппараты', 'Отзывы', 'FAQ', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>

            <Button onClick={() => scrollToSection('контакты')} className="bg-primary hover:bg-secondary">
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="главная" className="pt-32 pb-20 px-4 animate-fade-in">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                ✨ Профессиональный центр слухопротезирования
              </Badge>
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                Мир звуков <span className="text-primary">снова с вами</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Современная диагностика, индивидуальный подбор слуховых аппаратов и профессиональная поддержка. 
                Более 5000 пациентов вернули радость слышать.
              </p>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => scrollToSection('контакты')} className="bg-primary hover:bg-secondary">
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Записаться на приём
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('услуги')}>
                  Узнать больше
                </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div>
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">5000+</div>
                  <div className="text-sm text-muted-foreground">пациентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">довольных клиентов</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/files/a88686e0-19a6-44d5-9ab2-3834a3b1e09d.png" 
                alt="Ясный слух" 
                className="relative z-10 w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="услуги" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Наши услуги
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Комплексная забота о вашем слухе</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг от диагностики до постоянной поддержки
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover-scale border-2 hover:border-primary/50 transition-all">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <Icon name={service.icon} className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" className="text-primary" size={16} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="специалисты" className="py-20 px-4 bg-accent/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Наша команда
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Опытные специалисты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Сертифицированные врачи с многолетним стажем
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {specialists.map((specialist, index) => (
              <Card key={index} className="hover-scale text-center">
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Icon name="UserRound" className="text-white" size={40} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{specialist.name}</h3>
                  <p className="text-primary font-medium mb-1">{specialist.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{specialist.experience}</p>
                  <p className="text-sm">{specialist.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="аппараты" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Слуховые аппараты
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Современные решения для любого случая</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Широкий выбор аппаратов от ведущих мировых производителей
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {devices.map((device, index) => (
              <Card key={index} className="hover-scale border-2 hover:border-primary/50 transition-all">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name="Headphones" className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{device.type}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{device.description}</p>
                  <div className="text-2xl font-bold text-primary mb-4">{device.price}</div>
                  <div className="space-y-2">
                    {device.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs">
                        <Icon name="Check" className="text-primary flex-shrink-0 mt-0.5" size={14} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" onClick={() => scrollToSection('контакты')} className="bg-primary hover:bg-secondary">
              Подобрать аппарат
            </Button>
          </div>
        </div>
      </section>

      <section id="отзывы" className="py-20 px-4 bg-accent/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Отзывы пациентов
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Что говорят наши пациенты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Реальные истории людей, вернувших радость слышать
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="hover-scale">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={18} />
                    ))}
                  </div>
                  <p className="text-sm mb-6 italic">"{review.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="User" className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold">{review.name}</div>
                      <div className="text-xs text-muted-foreground">{review.age} лет</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Частые вопросы
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Ответы на популярные вопросы</h2>
            <p className="text-lg text-muted-foreground">
              Всё, что нужно знать о слухопротезировании
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-2 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="контакты" className="py-20 px-4 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Запишитесь на бесплатную консультацию</h2>
              <p className="text-lg mb-8 text-white/90">
                Первичная диагностика слуха бесплатно. Мы поможем вам вернуть радость общения и ясность звуков.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Адрес</div>
                    <div className="text-white/90">г. Москва, ул. Примерная, д. 123</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Телефон</div>
                    <div className="text-white/90">+7 (495) 123-45-67</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <div className="text-white/90">info@yasniy-sluh.ru</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Режим работы</div>
                    <div className="text-white/90">Пн-Пт: 9:00 - 20:00</div>
                    <div className="text-white/90">Сб-Вс: 10:00 - 18:00</div>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Записаться на приём</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Ваше имя</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border-2 border-input focus:border-primary outline-none transition-colors"
                      placeholder="Иван Иванов"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Телефон</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 rounded-lg border-2 border-input focus:border-primary outline-none transition-colors"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-lg border-2 border-input focus:border-primary outline-none transition-colors"
                      placeholder="your@email.ru"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Комментарий</label>
                    <textarea 
                      className="w-full px-4 py-3 rounded-lg border-2 border-input focus:border-primary outline-none transition-colors resize-none"
                      rows={4}
                      placeholder="Опишите вашу проблему или вопрос..."
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-secondary text-white">
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/a88686e0-19a6-44d5-9ab2-3834a3b1e09d.png" 
                  alt="Ясный слух" 
                  className="h-10 w-10 object-contain brightness-0 invert"
                />
                <div className="font-bold text-lg">Ясный слух</div>
              </div>
              <p className="text-sm text-white/70">
                Профессиональный центр слухопротезирования в Москве
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Диагностика слуха</li>
                <li>Подбор аппаратов</li>
                <li>Настройка и ремонт</li>
                <li>Консультации</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>О центре</li>
                <li>Специалисты</li>
                <li>Цены</li>
                <li>Контакты</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>+7 (495) 123-45-67</li>
                <li>info@yasniy-sluh.ru</li>
                <li>г. Москва, ул. Примерная, 123</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/70">
            <p>© 2024 Ясный слух. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
