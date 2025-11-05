import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const ReviewsSection = () => {
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

  return (
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
  );
};

export default ReviewsSection;
