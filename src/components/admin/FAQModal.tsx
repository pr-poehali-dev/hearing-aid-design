import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

interface FAQModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (faq: FAQ) => void;
  faq?: FAQ | null;
}

const FAQModal = ({ open, onClose, onSave, faq }: FAQModalProps) => {
  const [formData, setFormData] = useState<FAQ>({
    id: 0,
    question: '',
    answer: ''
  });

  useEffect(() => {
    if (faq) {
      setFormData(faq);
    } else {
      setFormData({
        id: Date.now(),
        question: '',
        answer: ''
      });
    }
  }, [faq, open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>
            {faq ? 'Редактировать вопрос' : 'Добавить вопрос'}
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="question">Вопрос</Label>
            <Input
              id="question"
              value={formData.question}
              onChange={(e) => setFormData({ ...formData, question: e.target.value })}
              placeholder="Как понять, что мне нужен слуховой аппарат?"
              required
            />
          </div>

          <div>
            <Label htmlFor="answer">Ответ</Label>
            <Textarea
              id="answer"
              value={formData.answer}
              onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
              placeholder="Если вы замечаете, что переспрашиваете собеседников..."
              rows={6}
              required
            />
          </div>

          <div className="flex gap-2 justify-end pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Отмена
            </Button>
            <Button type="submit" className="bg-primary hover:bg-secondary">
              Сохранить
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FAQModal;
