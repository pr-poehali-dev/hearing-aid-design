import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';
import ServiceModal from '@/components/admin/ServiceModal';
import SpecialistModal from '@/components/admin/SpecialistModal';
import DeviceModal from '@/components/admin/DeviceModal';
import ReviewModal from '@/components/admin/ReviewModal';
import FAQModal from '@/components/admin/FAQModal';
import ServicesTab from '@/components/admin/ServicesTab';
import SpecialistsTab from '@/components/admin/SpecialistsTab';
import DevicesTab from '@/components/admin/DevicesTab';
import ReviewsTab from '@/components/admin/ReviewsTab';
import FAQsTab from '@/components/admin/FAQsTab';

interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

interface Specialist {
  id: number;
  name: string;
  role: string;
  experience: string;
  description: string;
}

interface Device {
  id: number;
  type: string;
  description: string;
  price: string;
  features: string[];
}

interface Review {
  id: number;
  name: string;
  age: number;
  text: string;
  rating: number;
}

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const Admin = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('services');

  const [serviceModalOpen, setServiceModalOpen] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  
  const [specialistModalOpen, setSpecialistModalOpen] = useState(false);
  const [editingSpecialist, setEditingSpecialist] = useState<Specialist | null>(null);
  
  const [deviceModalOpen, setDeviceModalOpen] = useState(false);
  const [editingDevice, setEditingDevice] = useState<Device | null>(null);
  
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [editingReview, setEditingReview] = useState<Review | null>(null);
  
  const [faqModalOpen, setFaqModalOpen] = useState(false);
  const [editingFaq, setEditingFaq] = useState<FAQ | null>(null);

  const [services, setServices] = useState<Service[]>([
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

  const [specialists, setSpecialists] = useState<Specialist[]>([
    {
      id: 1,
      name: 'Иванова Елена Петровна',
      role: 'Врач-сурдолог',
      experience: '15 лет опыта',
      description: 'Кандидат медицинских наук'
    }
  ]);

  const [devices, setDevices] = useState<Device[]>([
    {
      id: 1,
      type: 'Заушные',
      description: 'Универсальные и мощные аппараты',
      price: 'от 15 000 ₽',
      features: ['Высокая мощность', 'Длительная работа']
    }
  ]);

  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      name: 'Анна Михайловна',
      age: 68,
      text: 'Спасибо огромное! Наконец-то я снова слышу пение птиц.',
      rating: 5
    }
  ]);

  const [faqs, setFaqs] = useState<FAQ[]>([
    {
      id: 1,
      question: 'Как понять, что мне нужен слуховой аппарат?',
      answer: 'Если вы замечаете, что переспрашиваете собеседников...'
    }
  ]);

  const handleSaveService = (service: Service) => {
    const exists = services.find(s => s.id === service.id);
    if (exists) {
      setServices(services.map(s => s.id === service.id ? service : s));
    } else {
      setServices([...services, service]);
    }
  };

  const handleEditService = (service: Service) => {
    setEditingService(service);
    setServiceModalOpen(true);
  };

  const handleDeleteService = (id: number) => {
    setServices(services.filter(s => s.id !== id));
  };

  const handleSaveSpecialist = (specialist: Specialist) => {
    const exists = specialists.find(s => s.id === specialist.id);
    if (exists) {
      setSpecialists(specialists.map(s => s.id === specialist.id ? specialist : s));
    } else {
      setSpecialists([...specialists, specialist]);
    }
  };

  const handleEditSpecialist = (specialist: Specialist) => {
    setEditingSpecialist(specialist);
    setSpecialistModalOpen(true);
  };

  const handleDeleteSpecialist = (id: number) => {
    setSpecialists(specialists.filter(s => s.id !== id));
  };

  const handleSaveDevice = (device: Device) => {
    const exists = devices.find(d => d.id === device.id);
    if (exists) {
      setDevices(devices.map(d => d.id === device.id ? device : d));
    } else {
      setDevices([...devices, device]);
    }
  };

  const handleEditDevice = (device: Device) => {
    setEditingDevice(device);
    setDeviceModalOpen(true);
  };

  const handleDeleteDevice = (id: number) => {
    setDevices(devices.filter(d => d.id !== id));
  };

  const handleSaveReview = (review: Review) => {
    const exists = reviews.find(r => r.id === review.id);
    if (exists) {
      setReviews(reviews.map(r => r.id === review.id ? review : r));
    } else {
      setReviews([...reviews, review]);
    }
  };

  const handleEditReview = (review: Review) => {
    setEditingReview(review);
    setReviewModalOpen(true);
  };

  const handleDeleteReview = (id: number) => {
    setReviews(reviews.filter(r => r.id !== id));
  };

  const handleSaveFaq = (faq: FAQ) => {
    const exists = faqs.find(f => f.id === faq.id);
    if (exists) {
      setFaqs(faqs.map(f => f.id === faq.id ? faq : f));
    } else {
      setFaqs([...faqs, faq]);
    }
  };

  const handleEditFaq = (faq: FAQ) => {
    setEditingFaq(faq);
    setFaqModalOpen(true);
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
              <ServicesTab
                services={services}
                onAdd={() => {
                  setEditingService(null);
                  setServiceModalOpen(true);
                }}
                onEdit={handleEditService}
                onDelete={handleDeleteService}
              />
            </TabsContent>

            <TabsContent value="specialists" className="space-y-6">
              <SpecialistsTab
                specialists={specialists}
                onAdd={() => {
                  setEditingSpecialist(null);
                  setSpecialistModalOpen(true);
                }}
                onEdit={handleEditSpecialist}
                onDelete={handleDeleteSpecialist}
              />
            </TabsContent>

            <TabsContent value="devices" className="space-y-6">
              <DevicesTab
                devices={devices}
                onAdd={() => {
                  setEditingDevice(null);
                  setDeviceModalOpen(true);
                }}
                onEdit={handleEditDevice}
                onDelete={handleDeleteDevice}
              />
            </TabsContent>

            <TabsContent value="reviews" className="space-y-6">
              <ReviewsTab
                reviews={reviews}
                onAdd={() => {
                  setEditingReview(null);
                  setReviewModalOpen(true);
                }}
                onEdit={handleEditReview}
                onDelete={handleDeleteReview}
              />
            </TabsContent>

            <TabsContent value="faqs" className="space-y-6">
              <FAQsTab
                faqs={faqs}
                onAdd={() => {
                  setEditingFaq(null);
                  setFaqModalOpen(true);
                }}
                onEdit={handleEditFaq}
                onDelete={handleDeleteFaq}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <ServiceModal
        open={serviceModalOpen}
        onClose={() => {
          setServiceModalOpen(false);
          setEditingService(null);
        }}
        onSave={handleSaveService}
        service={editingService}
      />

      <SpecialistModal
        open={specialistModalOpen}
        onClose={() => {
          setSpecialistModalOpen(false);
          setEditingSpecialist(null);
        }}
        onSave={handleSaveSpecialist}
        specialist={editingSpecialist}
      />

      <DeviceModal
        open={deviceModalOpen}
        onClose={() => {
          setDeviceModalOpen(false);
          setEditingDevice(null);
        }}
        onSave={handleSaveDevice}
        device={editingDevice}
      />

      <ReviewModal
        open={reviewModalOpen}
        onClose={() => {
          setReviewModalOpen(false);
          setEditingReview(null);
        }}
        onSave={handleSaveReview}
        review={editingReview}
      />

      <FAQModal
        open={faqModalOpen}
        onClose={() => {
          setFaqModalOpen(false);
          setEditingFaq(null);
        }}
        onSave={handleSaveFaq}
        faq={editingFaq}
      />
    </div>
  );
};

export default Admin;
