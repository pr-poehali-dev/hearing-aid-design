import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const ServicesSection = () => {
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

  return (
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
  );
};

export default ServicesSection;
