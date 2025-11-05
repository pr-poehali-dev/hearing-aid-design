import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('services');

  const [services, setServices] = useState([
    {
      id: 1,
      icon: 'Stethoscope',
      title: 'Диагностика слуха',
      description: 'Комплексное обследование на современном оборудовании',
      features: ['Аудиометрия', 'Тимпанометрия', 'Речевая аудиометрия']
    },
    {
      id: 2,
      icon: 'Headphones',
      title: 'Подбор аппаратов',
      description: 'Индивидуальный подбор слуховых аппаратов',
      features: ['Бесплатная примерка', 'Настройка под вас', 'Гарантия результата']
    }
  ]);

  const [specialists, setSpecialists] = useState([
    {
      id: 1,
      name: 'Иванова Елена Петровна',
      role: 'Врач-сурдолог',
      experience: '15 лет опыта',
      description: 'Кандидат медицинских наук'
    }
  ]);

  const [devices, setDevices] = useState([
    {
      id: 1,
      type: 'Заушные',
      description: 'Универсальные и мощные аппараты',
      price: 'от 15 000 ₽',
      features: ['Высокая мощность', 'Длительная работа']
    }
  ]);

  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: 'Анна Михайловна',
      age: 68,
      text: 'Спасибо огромное! Наконец-то я снова слышу пение птиц.',
      rating: 5
    }
  ]);

  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: 'Как понять, что мне нужен слуховой аппарат?',
      answer: 'Если вы замечаете, что переспрашиваете собеседников...'
    }
  ]);

  const handleDeleteService = (id: number) => {
    setServices(services.filter(s => s.id !== id));
  };

  const handleDeleteSpecialist = (id: number) => {
    setSpecialists(specialists.filter(s => s.id !== id));
  };

  const handleDeleteDevice = (id: number) => {
    setDevices(devices.filter(d => d.id !== id));
  };

  const handleDeleteReview = (id: number) => {
    setReviews(reviews.filter(r => r.id !== id));
  };

  const handleDeleteFaq = (id: number) => {
    setFaqs(faqs.filter(f => f.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-accent">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Settings" className="text-primary" size={32} />
              <div>
                <h1 className="text-2xl font-bold text-primary">Админ-панель</h1>
                <p className="text-xs text-muted-foreground">Управление контентом</p>
              </div>
            </div>
            
            <Button onClick={() => navigate('/')} variant="outline">
              <Icon name="Home" className="mr-2" size={20} />
              На главную
            </Button>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8">
            <h2 className="text-4xl font-bold mb-2">Панель управления</h2>
            <p className="text-muted-foreground">Редактируйте контент сайта центра слухопротезирования</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="services">Услуги</TabsTrigger>
              <TabsTrigger value="specialists">Специалисты</TabsTrigger>
              <TabsTrigger value="devices">Аппараты</TabsTrigger>
              <TabsTrigger value="reviews">Отзывы</TabsTrigger>
              <TabsTrigger value="faqs">FAQ</TabsTrigger>
            </TabsList>

            <TabsContent value="services" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Управление услугами</span>
                    <Button size="sm" className="bg-primary hover:bg-secondary">
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
                            <Button size="sm" variant="outline">
                              <Icon name="Pencil" size={16} />
                            </Button>
                            <Button 
                              size="sm" 
                              variant="destructive"
                              onClick={() => handleDeleteService(service.id)}
                            >
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
            </TabsContent>

            <TabsContent value="specialists" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Управление специалистами</span>
                    <Button size="sm" className="bg-primary hover:bg-secondary">
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
                            <Button size="sm" variant="outline">
                              <Icon name="Pencil" size={16} />
                            </Button>
                            <Button 
                              size="sm" 
                              variant="destructive"
                              onClick={() => handleDeleteSpecialist(specialist.id)}
                            >
                              <Icon name="Trash2" size={16} />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="devices" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Управление аппаратами</span>
                    <Button size="sm" className="bg-primary hover:bg-secondary">
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
                            <Button size="sm" variant="outline">
                              <Icon name="Pencil" size={16} />
                            </Button>
                            <Button 
                              size="sm" 
                              variant="destructive"
                              onClick={() => handleDeleteDevice(device.id)}
                            >
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
            </TabsContent>

            <TabsContent value="reviews" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Управление отзывами</span>
                    <Button size="sm" className="bg-primary hover:bg-secondary">
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
                            <Button size="sm" variant="outline">
                              <Icon name="Pencil" size={16} />
                            </Button>
                            <Button 
                              size="sm" 
                              variant="destructive"
                              onClick={() => handleDeleteReview(review.id)}
                            >
                              <Icon name="Trash2" size={16} />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="faqs" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Управление FAQ</span>
                    <Button size="sm" className="bg-primary hover:bg-secondary">
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
                            <Button size="sm" variant="outline">
                              <Icon name="Pencil" size={16} />
                            </Button>
                            <Button 
                              size="sm" 
                              variant="destructive"
                              onClick={() => handleDeleteFaq(faq.id)}
                            >
                              <Icon name="Trash2" size={16} />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Admin;
