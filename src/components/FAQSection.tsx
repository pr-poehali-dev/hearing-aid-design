import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

const FAQSection = () => {
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
  );
};

export default FAQSection;
