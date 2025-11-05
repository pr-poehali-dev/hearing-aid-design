import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

interface ServicesTabProps {
  services: Service[];
  onAdd: () => void;
  onEdit: (service: Service) => void;
  onDelete: (id: number) => void;
}

const ServicesTab = ({ services, onAdd, onEdit, onDelete }: ServicesTabProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Управление услугами</span>
          <Button size="sm" className="bg-primary hover:bg-secondary" onClick={onAdd}>
            <Icon name="Plus" className="mr-2" size={16} />
            Добавить услугу
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {services.map((service) => (
          <Card key={service.id} className="border-2">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name={service.icon} className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => onEdit(service)}>
                    <Icon name="Pencil" size={16} />
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => onDelete(service.id)}>
                    <Icon name="Trash2" size={16} />
                  </Button>
                </div>
              </div>
              <div className="flex gap-2 flex-wrap">
                {service.features.map((feature, i) => (
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

export default ServicesTab;
