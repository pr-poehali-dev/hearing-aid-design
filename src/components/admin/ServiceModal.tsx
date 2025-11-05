import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

interface ServiceModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (service: Service) => void;
  service?: Service | null;
}

const ServiceModal = ({ open, onClose, onSave, service }: ServiceModalProps) => {
  const [formData, setFormData] = useState<Service>({
    id: 0,
    icon: 'Stethoscope',
    title: '',
    description: '',
    features: ['']
  });

  useEffect(() => {
    if (service) {
      setFormData(service);
    } else {
      setFormData({
        id: Date.now(),
        icon: 'Stethoscope',
        title: '',
        description: '',
        features: ['']
      });
    }
  }, [service, open]);

  const handleAddFeature = () => {
    setFormData({ ...formData, features: [...formData.features, ''] });
  };

  const handleRemoveFeature = (index: number) => {
    setFormData({ 
      ...formData, 
      features: formData.features.filter((_, i) => i !== index) 
    });
  };

  const handleFeatureChange = (index: number, value: string) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = value;
    setFormData({ ...formData, features: newFeatures });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {service ? 'Редактировать услугу' : 'Добавить услугу'}
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="icon">Иконка</Label>
            <Input
              id="icon"
              value={formData.icon}
              onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
              placeholder="Stethoscope, Headphones, Settings..."
              required
            />
          </div>

          <div>
            <Label htmlFor="title">Название</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Диагностика слуха"
              required
            />
          </div>

          <div>
            <Label htmlFor="description">Описание</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Комплексное обследование..."
              rows={3}
              required
            />
          </div>

          <div>
            <Label>Особенности</Label>
            <div className="space-y-2 mt-2">
              {formData.features.map((feature, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    value={feature}
                    onChange={(e) => handleFeatureChange(index, e.target.value)}
                    placeholder="Особенность услуги"
                    required
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => handleRemoveFeature(index)}
                  >
                    <Icon name="X" size={16} />
                  </Button>
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleAddFeature}
                className="w-full"
              >
                <Icon name="Plus" className="mr-2" size={16} />
                Добавить особенность
              </Button>
            </div>
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

export default ServiceModal;
