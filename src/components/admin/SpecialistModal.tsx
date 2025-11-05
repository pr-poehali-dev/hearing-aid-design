import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface Specialist {
  id: number;
  name: string;
  role: string;
  experience: string;
  description: string;
}

interface SpecialistModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (specialist: Specialist) => void;
  specialist?: Specialist | null;
}

const SpecialistModal = ({ open, onClose, onSave, specialist }: SpecialistModalProps) => {
  const [formData, setFormData] = useState<Specialist>({
    id: 0,
    name: '',
    role: '',
    experience: '',
    description: ''
  });

  useEffect(() => {
    if (specialist) {
      setFormData(specialist);
    } else {
      setFormData({
        id: Date.now(),
        name: '',
        role: '',
        experience: '',
        description: ''
      });
    }
  }, [specialist, open]);

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
            {specialist ? 'Редактировать специалиста' : 'Добавить специалиста'}
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">ФИО</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Иванова Елена Петровна"
              required
            />
          </div>

          <div>
            <Label htmlFor="role">Должность</Label>
            <Input
              id="role"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              placeholder="Врач-сурдолог"
              required
            />
          </div>

          <div>
            <Label htmlFor="experience">Опыт работы</Label>
            <Input
              id="experience"
              value={formData.experience}
              onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
              placeholder="15 лет опыта"
              required
            />
          </div>

          <div>
            <Label htmlFor="description">Описание</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Кандидат медицинских наук, специалист..."
              rows={3}
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

export default SpecialistModal;
