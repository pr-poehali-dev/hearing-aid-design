import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Specialist {
  id: number;
  name: string;
  role: string;
  experience: string;
  description: string;
}

interface SpecialistsTabProps {
  specialists: Specialist[];
  onAdd: () => void;
  onEdit: (specialist: Specialist) => void;
  onDelete: (id: number) => void;
}

const SpecialistsTab = ({ specialists, onAdd, onEdit, onDelete }: SpecialistsTabProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Управление специалистами</span>
          <Button size="sm" className="bg-primary hover:bg-secondary" onClick={onAdd}>
            <Icon name="Plus" className="mr-2" size={16} />
            Добавить специалиста
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {specialists.map((specialist) => (
          <Card key={specialist.id} className="border-2">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <Icon name="UserRound" className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{specialist.name}</h3>
                    <p className="text-primary font-medium">{specialist.role}</p>
                    <p className="text-sm text-muted-foreground">{specialist.experience}</p>
                    <p className="text-sm mt-2">{specialist.description}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => onEdit(specialist)}>
                    <Icon name="Pencil" size={16} />
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => onDelete(specialist.id)}>
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

export default SpecialistsTab;
