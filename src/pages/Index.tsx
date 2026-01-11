import { useState } from 'react';
import Navigation from '@/components/Navigation';
import MusicPlayer from '@/components/MusicPlayer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />

      <main className="pt-20 pb-12">
        {activeSection === 'home' && (
          <section className="container mx-auto px-4 py-20 animate-fade-in">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="text-6xl md:text-8xl font-heading font-bold gradient-text animate-float">
                Барсагян Гиорги Владимирович
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                Исследуя границы творчества через слово, музыку и визуальное искусство
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform"
                  onClick={() => setActiveSection('creativity')}
                >
                  <Icon name="Sparkles" size={20} className="mr-2" />
                  Моё Творчество
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary hover:bg-primary/20"
                  onClick={() => setActiveSection('music')}
                >
                  <Icon name="Music" size={20} className="mr-2" />
                  Послушать Музыку
                </Button>
              </div>
            </div>

            <div className="max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: 'Feather', title: 'Поэзия', desc: 'Стихи о жизни, любви и мечтах' },
                { icon: 'Music', title: 'Музыка', desc: 'Оригинальные композиции и DJ сеты' },
                { icon: 'Mic', title: 'Подкасты', desc: 'Разговоры о творчестве и культуре' },
              ].map((item, i) => (
                <Card
                  key={i}
                  className="p-8 backdrop-blur-lg bg-card/50 border-primary/20 hover:border-primary/40 transition-all hover:-translate-y-2"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <Icon name={item.icon as any} size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </Card>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'creativity' && (
          <section className="container mx-auto px-4 animate-fade-in">
            <h2 className="text-5xl font-heading font-bold gradient-text text-center mb-12">
              Моё Творчество
            </h2>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Сборник "Голос Ночи"', type: 'Поэзия', year: '2025' },
                { title: 'Роман "Звёзды Города"', type: 'Проза', year: '2024' },
                { title: 'Эссе о современном искусстве', type: 'Публицистика', year: '2025' },
                { title: 'Переводы зарубежной поэзии', type: 'Перевод', year: '2024' },
              ].map((work, i) => (
                <Card
                  key={i}
                  className="p-6 backdrop-blur-lg bg-card/50 border-border/50 hover:border-primary/40 transition-all cursor-pointer group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon name="BookOpen" size={24} className="text-white" />
                    </div>
                    <span className="text-sm text-muted-foreground">{work.year}</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2">{work.title}</h3>
                  <p className="text-muted-foreground">{work.type}</p>
                </Card>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'music' && (
          <section className="container mx-auto px-4 animate-fade-in">
            <h2 className="text-5xl font-heading font-bold gradient-text text-center mb-12">
              Музыка
            </h2>
            <MusicPlayer />
          </section>
        )}

        {activeSection === 'publications' && (
          <section className="container mx-auto px-4 animate-fade-in">
            <h2 className="text-5xl font-heading font-bold gradient-text text-center mb-12">
              Публикации
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  title: 'Метафора в современной поэзии',
                  publication: 'Литературный журнал',
                  date: '15 января 2026',
                  link: '#',
                },
                {
                  title: 'Звук и смысл: синтез в искусстве',
                  publication: 'Культурный портал',
                  date: '8 января 2026',
                  link: '#',
                },
                {
                  title: 'Интервью о творческом процессе',
                  publication: 'Музыкальный блог',
                  date: '1 января 2026',
                  link: '#',
                },
              ].map((pub, i) => (
                <Card
                  key={i}
                  className="p-6 backdrop-blur-lg bg-card/50 border-border/50 hover:border-primary/40 transition-all cursor-pointer group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon name="FileText" size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-heading font-bold mb-1 group-hover:text-primary transition-colors">
                        {pub.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-1">{pub.publication}</p>
                      <p className="text-xs text-muted-foreground">{pub.date}</p>
                    </div>
                    <Icon name="ExternalLink" size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </Card>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'media' && (
          <section className="container mx-auto px-4 animate-fade-in">
            <h2 className="text-5xl font-heading font-bold gradient-text text-center mb-12">
              Медиа
            </h2>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { type: 'Видео', title: 'Поэтический перформанс', duration: '8:45' },
                { type: 'Подкаст', title: 'О творчестве и вдохновении', duration: '25:30' },
                { type: 'Live', title: 'DJ сет в арт-пространстве', duration: '1:15:00' },
                { type: 'Интервью', title: 'Разговор о современной поэзии', duration: '18:20' },
              ].map((media, i) => (
                <Card
                  key={i}
                  className="relative overflow-hidden group cursor-pointer"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon name="Play" size={32} className="text-white ml-1" />
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-xs text-primary font-semibold mb-1">{media.type}</div>
                    <h3 className="font-heading font-bold mb-2">{media.title}</h3>
                    <p className="text-sm text-muted-foreground">{media.duration}</p>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'contacts' && (
          <section className="container mx-auto px-4 animate-fade-in">
            <h2 className="text-5xl font-heading font-bold gradient-text text-center mb-12">
              Контакты
            </h2>
            <div className="max-w-2xl mx-auto">
              <Card className="p-8 backdrop-blur-lg bg-card/50 border-primary/20">
                <div className="text-center mb-8">
                  <p className="text-xl text-muted-foreground">
                    Открыт для сотрудничества, выступлений и творческих проектов
                  </p>
                </div>
                <div className="space-y-4">
                  {[
                    { icon: 'Mail', label: 'Email', value: 'contact@example.com' },
                    { icon: 'Phone', label: 'Телефон', value: '+7 (900) 123-45-67' },
                    { icon: 'Instagram', label: 'Instagram', value: '@creative_artist' },
                    { icon: 'Youtube', label: 'YouTube', value: 'youtube.com/channel' },
                  ].map((contact, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <Icon name={contact.icon as any} size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{contact.label}</p>
                        <p className="font-semibold">{contact.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </section>
        )}
      </main>

      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2026 Творец. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}