import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Review {
  id: number;
  name: string;
  age: number;
  text: string;
  rating: number;
}

interface ReviewModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (review: Review) => void;
  review?: Review | null;
}

const ReviewModal = ({ open, onClose, onSave, review }: ReviewModalProps) => {
  const [formData, setFormData] = useState<Review>({
    id: 0,
    name: '',
    age: 0,
    text: '',
    rating: 5
  });

  useEffect(() => {
    if (review) {
      setFormData(review);
    } else {
      setFormData({
        id: Date.now(),
        name: '',
        age: 0,
        text: '',
        rating: 5
      });
    }
  }, [review, open]);

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
            {review ? 'Редактировать отзыв' : 'Добавить отзыв'}
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Имя пациента</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Анна Михайловна"
              required
            />
          </div>

          <div>
            <Label htmlFor="age">Возраст</Label>
            <Input
              id="age"
              type="number"
              value={formData.age || ''}
              onChange={(e) => setFormData({ ...formData, age: parseInt(e.target.value) })}
              placeholder="68"
              required
            />
          </div>

          <div>
            <Label htmlFor="rating">Оценка</Label>
            <Select 
              value={formData.rating.toString()} 
              onValueChange={(value) => setFormData({ ...formData, rating: parseInt(value) })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Выберите оценку" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">⭐⭐⭐⭐⭐ (5)</SelectItem>
                <SelectItem value="4">⭐⭐⭐⭐ (4)</SelectItem>
                <SelectItem value="3">⭐⭐⭐ (3)</SelectItem>
                <SelectItem value="2">⭐⭐ (2)</SelectItem>
                <SelectItem value="1">⭐ (1)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="text">Текст отзыва</Label>
            <Textarea
              id="text"
              value={formData.text}
              onChange={(e) => setFormData({ ...formData, text: e.target.value })}
              placeholder="Спасибо огромное! Наконец-то я снова слышу..."
              rows={4}
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

export default ReviewModal;
