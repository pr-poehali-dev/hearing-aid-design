import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Device {
  id: number;
  type: string;
  description: string;
  price: string;
  features: string[];
}

interface DevicesTabProps {
  devices: Device[];
  onAdd: () => void;
  onEdit: (device: Device) => void;
  onDelete: (id: number) => void;
}

const DevicesTab = ({ devices, onAdd, onEdit, onDelete }: DevicesTabProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Управление аппаратами</span>
          <Button size="sm" className="bg-primary hover:bg-secondary" onClick={onAdd}>
            <Icon name="Plus" className="mr-2" size={16} />
            Добавить аппарат
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {devices.map((device) => (
          <Card key={device.id} className="border-2">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Headphones" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{device.type}</h3>
                    <p className="text-sm text-muted-foreground">{device.description}</p>
                    <p className="text-primary font-bold mt-1">{device.price}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => onEdit(device)}>
                    <Icon name="Pencil" size={16} />
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => onDelete(device.id)}>
                    <Icon name="Trash2" size={16} />
                  </Button>
                </div>
              </div>
              <div className="flex gap-2 flex-wrap">
                {device.features.map((feature, i) => (
                  <Badge key={i} variant="secondary">{feature}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
};

export default DevicesTab;
