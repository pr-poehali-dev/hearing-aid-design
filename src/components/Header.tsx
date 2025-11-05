import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

const Header = ({ scrollToSection }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/a88686e0-19a6-44d5-9ab2-3834a3b1e09d.png" 
              alt="Ясный слух" 
              className="h-12 w-12 object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold text-primary">Ясный слух</h1>
              <p className="text-xs text-muted-foreground">Центр слухопротезирования</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            {['Главная', 'Услуги', 'Специалисты', 'Аппараты', 'Отзывы', 'FAQ', 'Контакты'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button onClick={() => scrollToSection('контакты')} className="hidden md:flex bg-primary hover:bg-secondary">
              Записаться
            </Button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-accent rounded-lg transition-colors"
            >
              <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} className="text-primary" />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 animate-fade-in">
            {['Главная', 'Услуги', 'Специалисты', 'Аппараты', 'Отзывы', 'FAQ', 'Контакты'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item.toLowerCase());
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-accent rounded-lg transition-colors"
              >
                {item}
              </button>
            ))}
            <Button 
              onClick={() => {
                scrollToSection('контакты');
                setMobileMenuOpen(false);
              }} 
              className="w-full bg-primary hover:bg-secondary"
            >
              Записаться
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
