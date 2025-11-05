import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Review {
  id: number;
  name: string;
  age: number;
  text: string;
  rating: number;
}

interface ReviewsTabProps {
  reviews: Review[];
  onAdd: () => void;
  onEdit: (review: Review) => void;
  onDelete: (id: number) => void;
}

const ReviewsTab = ({ reviews, onAdd, onEdit, onDelete }: ReviewsTabProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Управление отзывами</span>
          <Button size="sm" className="bg-primary hover:bg-secondary" onClick={onAdd}>
            <Icon name="Plus" className="mr-2" size={16} />
            Добавить отзыв
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id} className="border-2">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                    ))}
                  </div>
                  <p className="text-sm italic mb-4">"{review.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="User" className="text-primary" size={20} />
                    </div>
                    <div>
                      <div className="font-semibold">{review.name}</div>
                      <div className="text-xs text-muted-foreground">{review.age} лет</div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 ml-4">
                  <Button size="sm" variant="outline" onClick={() => onEdit(review)}>
                    <Icon name="Pencil" size={16} />
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => onDelete(review.id)}>
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

export default ReviewsTab;
