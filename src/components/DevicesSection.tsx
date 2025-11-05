import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface DevicesSectionProps {
  scrollToSection: (id: string) => void;
}

const DevicesSection = ({ scrollToSection }: DevicesSectionProps) => {
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

  return (
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
  );
};

export default DevicesSection;
