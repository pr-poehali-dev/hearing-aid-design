import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

interface Device {
  id: number;
  type: string;
  description: string;
  price: string;
  features: string[];
}

interface DeviceModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (device: Device) => void;
  device?: Device | null;
}

const DeviceModal = ({ open, onClose, onSave, device }: DeviceModalProps) => {
  const [formData, setFormData] = useState<Device>({
    id: 0,
    type: '',
    description: '',
    price: '',
    features: ['']
  });

  useEffect(() => {
    if (device) {
      setFormData(device);
    } else {
      setFormData({
        id: Date.now(),
        type: '',
        description: '',
        price: '',
        features: ['']
      });
    }
  }, [device, open]);

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
            {device ? 'Редактировать аппарат' : 'Добавить аппарат'}
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="type">Тип аппарата</Label>
            <Input
              id="type"
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              placeholder="Заушные"
              required
            />
          </div>

          <div>
            <Label htmlFor="description">Описание</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Универсальные и мощные аппараты..."
              rows={3}
              required
            />
          </div>

          <div>
            <Label htmlFor="price">Цена</Label>
            <Input
              id="price"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              placeholder="от 15 000 ₽"
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
                    placeholder="Особенность аппарата"
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

export default DeviceModal;
