import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const SpecialistsSection = () => {
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

  return (
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
  );
};

export default SpecialistsSection;
