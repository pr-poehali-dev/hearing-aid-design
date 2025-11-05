const Footer = () => {
  return (
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
  );
};

export default Footer;
