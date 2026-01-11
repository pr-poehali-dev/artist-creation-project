import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const sections = [
  { id: 'home', label: 'Главная', icon: 'Home' },
  { id: 'creativity', label: 'Творчество', icon: 'Sparkles' },
  { id: 'music', label: 'Музыка', icon: 'Music' },
  { id: 'publications', label: 'Публикации', icon: 'BookOpen' },
  { id: 'media', label: 'Медиа', icon: 'Video' },
  { id: 'contacts', label: 'Контакты', icon: 'Mail' },
];

export default function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-heading font-bold gradient-text">
              Творец
            </div>

            <div className="hidden md:flex items-center gap-1">
              {sections.map((section) => (
                <Button
                  key={section.id}
                  variant={activeSection === section.id ? 'default' : 'ghost'}
                  onClick={() => onSectionChange(section.id)}
                  className={`transition-all ${
                    activeSection === section.id
                      ? 'bg-gradient-to-r from-primary to-secondary'
                      : 'hover:bg-primary/20'
                  }`}
                >
                  <Icon name={section.icon as any} size={18} className="mr-2" />
                  {section.label}
                </Button>
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
            </Button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-background/95 backdrop-blur-lg"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="absolute top-16 left-0 right-0 p-4 space-y-2 animate-slide-in">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant={activeSection === section.id ? 'default' : 'outline'}
                onClick={() => {
                  onSectionChange(section.id);
                  setIsMenuOpen(false);
                }}
                className={`w-full justify-start ${
                  activeSection === section.id
                    ? 'bg-gradient-to-r from-primary to-secondary'
                    : ''
                }`}
              >
                <Icon name={section.icon as any} size={20} className="mr-3" />
                {section.label}
              </Button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
