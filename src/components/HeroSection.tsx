import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
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
  );
};

export default HeroSection;
