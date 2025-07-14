import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const sectors = [
    {
      id: 'mo',
      title: 'МО',
      description: 'Министерство обороны',
      fullDescription: 'Взаимодействие с Министерством обороны РФ для разработки и внедрения передовых военных технологий. Координация государственных программ развития оборонно-промышленного комплекса.',
      icon: 'Shield',
      color: 'from-slate-700 to-slate-800'
    },
    {
      id: 'ir',
      title: 'ИР',
      description: 'Исследования и разработки',
      fullDescription: 'Фундаментальные и прикладные исследования в области военных технологий. Разработка инновационных решений для повышения обороноспособности страны.',
      icon: 'Microscope',
      color: 'from-emerald-600 to-emerald-700'
    },
    {
      id: 'teams',
      title: 'КОМАНДЫ',
      description: 'Проектные команды',
      fullDescription: 'Формирование и поддержка высокопрофессиональных команд разработчиков, инженеров и исследователей. Создание эффективной экосистемы для военно-технических проектов.',
      icon: 'Users',
      color: 'from-red-600 to-red-700'
    },
    {
      id: 'admin',
      title: 'АДМИН',
      description: 'Администрирование',
      fullDescription: 'Административное управление проектами фонда, координация деятельности подразделений, контроль исполнения программ и обеспечение соответствия регулятивным требованиям.',
      icon: 'Settings',
      color: 'from-slate-600 to-slate-700'
    },
    {
      id: 'stalker',
      title: 'СТАЛКЕР',
      description: 'Мониторинг технологий',
      fullDescription: 'Система непрерывного мониторинга и анализа развития военных технологий в мире. Отслеживание трендов, оценка угроз и возможностей в сфере обороны.',
      icon: 'Radar',
      color: 'from-amber-600 to-amber-700'
    },
    {
      id: 'enablers',
      title: 'ЭНЕЙБЛЕРЫ',
      description: 'Технологические катализаторы',
      fullDescription: 'Ключевые технологии и решения, обеспечивающие прорывное развитие военной техники. Создание платформ для ускорения внедрения инноваций.',
      icon: 'Zap',
      color: 'from-violet-600 to-violet-700'
    },
    {
      id: 'opk',
      title: 'ОПК',
      description: 'Оборонно-промышленный комплекс',
      fullDescription: 'Взаимодействие с предприятиями ОПК, поддержка модернизации производственных мощностей, внедрение современных технологий в оборонную промышленность.',
      icon: 'Factory',
      color: 'from-slate-700 to-slate-800'
    },
    {
      id: 'fiopits',
      title: 'ФИОПИЦ',
      description: 'Финансово-инвестиционное планирование',
      fullDescription: 'Фонд инвестиций в оборонные проекты и инновационные технологии. Стратегическое планирование финансирования приоритетных направлений.',
      icon: 'TrendingUp',
      color: 'from-emerald-600 to-emerald-700'
    },
    {
      id: 'finance',
      title: 'ФИНАНСЫ',
      description: 'Финансовое управление',
      fullDescription: 'Управление финансовыми ресурсами фонда, обеспечение прозрачности расходования средств, контроль эффективности инвестиций в военно-технические проекты.',
      icon: 'DollarSign',
      color: 'from-green-600 to-green-700'
    }
  ];

  if (selectedCard) {
    const sector = sectors.find(s => s.id === selectedCard);
    if (!sector) return null;

    return (
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <Button 
            variant="outline" 
            onClick={() => setSelectedCard(null)}
            className="mb-6 border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
          >
            <Icon name="ArrowLeft" size={16} className="mr-2" />
            Назад
          </Button>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className={`p-4 rounded-lg bg-gradient-to-br ${sector.color}`}>
                <Icon name={sector.icon as any} size={32} className="text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-2">{sector.title}</h1>
                <p className="text-xl text-slate-300">{sector.description}</p>
              </div>
            </div>
            
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Описание направления</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-lg leading-relaxed">
                  {sector.fullDescription}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-red-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3e%3cpath d="M20 20h60v60H20z" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="0.5"/%3e%3c/svg%3e')] opacity-20"></div>
        
        <div className="relative container mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-3 bg-red-600 rounded-lg">
              <Icon name="Shield" size={32} className="text-white" />
            </div>
            <Badge variant="outline" className="border-red-600 text-red-400 text-lg px-4 py-2">
              Военные технологии
            </Badge>
          </div>
          
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-white via-slate-200 to-red-200 bg-clip-text text-transparent">
            СУВОРОВТЕХ
          </h1>
          
          <p className="text-2xl text-red-400 font-semibold mb-8 tracking-wide">
            ТЕХНОЛОГИИ ПОБЕДЫ
          </p>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Фонд содействия развитию военных технологий. 
            Объединяем науку, промышленность и оборону для создания технологий будущего.
          </p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Направления деятельности</h2>
          <p className="text-slate-400 text-lg">Выберите направление для получения подробной информации</p>
        </div>

        <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
          {sectors.map((sector) => (
            <Card 
              key={sector.id}
              className="bg-slate-800 border-slate-700 hover:border-red-600 transition-all duration-300 cursor-pointer group hover:scale-105 hover:shadow-xl hover:shadow-red-600/20"
              onClick={() => setSelectedCard(sector.id)}
            >
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto mb-4 p-4 rounded-lg bg-gradient-to-br ${sector.color} w-fit group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={sector.icon as any} size={24} className="text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                  {sector.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-slate-300 group-hover:text-slate-200 transition-colors">
                  {sector.description}
                </CardDescription>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Icon name="ChevronRight" size={16} className="mx-auto text-red-400" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-800 border-t border-slate-700 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Icon name="Shield" size={20} className="text-red-400" />
            <span className="text-lg font-semibold">СУВОРОВТЕХ</span>
          </div>
          <p className="text-slate-400">
            © 2025 Фонд содействия развитию военных технологий. Технологии победы.
          </p>
        </div>
      </footer>
    </div>
  );
}