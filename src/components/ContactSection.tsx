import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ContactSection = () => {
  return (
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
  );
};

export default ContactSection;
