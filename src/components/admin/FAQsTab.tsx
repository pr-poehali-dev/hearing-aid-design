import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

interface FAQsTabProps {
  faqs: FAQ[];
  onAdd: () => void;
  onEdit: (faq: FAQ) => void;
  onDelete: (id: number) => void;
}

const FAQsTab = ({ faqs, onAdd, onEdit, onDelete }: FAQsTabProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Управление FAQ</span>
          <Button size="sm" className="bg-primary hover:bg-secondary" onClick={onAdd}>
            <Icon name="Plus" className="mr-2" size={16} />
            Добавить вопрос
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {faqs.map((faq) => (
          <Card key={faq.id} className="border-2">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </div>
                <div className="flex gap-2 ml-4">
                  <Button size="sm" variant="outline" onClick={() => onEdit(faq)}>
                    <Icon name="Pencil" size={16} />
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => onDelete(faq.id)}>
                    <Icon name="Trash2" size={16} />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
};

export default FAQsTab;
