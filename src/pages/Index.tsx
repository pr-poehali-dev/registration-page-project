import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const CONFERENCE_DATE = new Date('2025-12-19T10:00:00');

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const distance = CONFERENCE_DATE.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="https://cdn.poehali.dev/files/fba65bfc-7e41-47aa-8baf-c60e3108326a.jpeg" alt="РПА" className="h-12 w-auto" />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('program')} className="text-sm hover:text-primary transition-colors">
              Программа
            </button>
            <button onClick={() => scrollToSection('speakers')} className="text-sm hover:text-primary transition-colors">
              Спикеры
            </button>
            <button onClick={() => scrollToSection('venue')} className="text-sm hover:text-primary transition-colors">
              Место
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-sm hover:text-primary transition-colors">
              Стоимость
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-sm hover:text-primary transition-colors">
              Вопросы
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-sm hover:text-primary transition-colors">
              Контакты
            </button>
          </nav>
          <Button onClick={() => scrollToSection('registration')}>Оплатить 2 000 ₽</Button>
        </div>
      </header>

      <section className="py-20 bg-gradient-to-br from-primary/5 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Конференция для специалистов помогающих профессий
            </h1>
            <p className="text-xl mb-8 text-muted-foreground">
              19 декабря 2025 · Москва · очный формат
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button size="lg" onClick={() => scrollToSection('registration')}>
                Зарегистрироваться
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('registration')}>
                Оплатить 2 000 ₽
              </Button>
            </div>
            <p className="text-base mb-8 text-foreground/80">
              Специалистам: психологам, психиатрам, психотерапевтам.
            </p>
            
            <div className="flex justify-center gap-4 md:gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">{timeLeft.days}</div>
                <div className="text-sm text-muted-foreground">дней</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">{timeLeft.hours}</div>
                <div className="text-sm text-muted-foreground">часов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">{timeLeft.minutes}</div>
                <div className="text-sm text-muted-foreground">минут</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">{timeLeft.seconds}</div>
                <div className="text-sm text-muted-foreground">секунд</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">О конференции</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-1" size={24} />
                <p className="text-base">Обмен опытом между специалистами помогающих профессий</p>
              </div>
              <div className="flex gap-4">
                <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-1" size={24} />
                <p className="text-base">Актуальные методы работы в психотерапии и психиатрии</p>
              </div>
              <div className="flex gap-4">
                <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-1" size={24} />
                <p className="text-base">Практические кейсы из клинической практики</p>
              </div>
              <div className="flex gap-4">
                <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-1" size={24} />
                <p className="text-base">Нетворкинг с коллегами из разных регионов</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="program" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Программа</h2>
            <div className="space-y-4 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <div className="text-primary font-bold text-lg">10:00</div>
                    <div>
                      <h3 className="font-bold mb-2">Регистрация участников</h3>
                      <p className="text-sm text-muted-foreground">Приветственный кофе</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <div className="text-primary font-bold text-lg">11:00</div>
                    <div>
                      <h3 className="font-bold mb-2">Открытие конференции</h3>
                      <p className="text-sm text-muted-foreground">Приветственное слово организаторов</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <div className="text-primary font-bold text-lg">11:30</div>
                    <div>
                      <h3 className="font-bold mb-2">Современные подходы в психотерапии</h3>
                      <p className="text-sm text-muted-foreground">Основной доклад</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <div className="text-primary font-bold text-lg">13:00</div>
                    <div>
                      <h3 className="font-bold mb-2">Обеденный перерыв</h3>
                      <p className="text-sm text-muted-foreground">Нетворкинг</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <div className="text-primary font-bold text-lg">14:30</div>
                    <div>
                      <h3 className="font-bold mb-2">Панельная дискуссия</h3>
                      <p className="text-sm text-muted-foreground">Сложные случаи из практики</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <div className="text-primary font-bold text-lg">16:00</div>
                    <div>
                      <h3 className="font-bold mb-2">Мастер-классы</h3>
                      <p className="text-sm text-muted-foreground">Параллельные секции</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <div className="text-primary font-bold text-lg">17:30</div>
                    <div>
                      <h3 className="font-bold mb-2">Закрытие конференции</h3>
                      <p className="text-sm text-muted-foreground">Вручение сертификатов</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="text-center">
              <Button variant="outline">
                <Icon name="Download" className="mr-2" size={18} />
                Скачать PDF-программу
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="speakers" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Спикеры</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={48} className="text-muted-foreground" />
                  </div>
                  <h3 className="font-bold text-lg mb-1">Иванов Иван Иванович</h3>
                  <p className="text-sm text-muted-foreground mb-3">Доктор медицинских наук</p>
                  <p className="text-sm">Руководитель отделения психотерапии</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={48} className="text-muted-foreground" />
                  </div>
                  <h3 className="font-bold text-lg mb-1">Петрова Мария Сергеевна</h3>
                  <p className="text-sm text-muted-foreground mb-3">Кандидат психологических наук</p>
                  <p className="text-sm">Практикующий психотерапевт</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={48} className="text-muted-foreground" />
                  </div>
                  <h3 className="font-bold text-lg mb-1">Сидоров Петр Александрович</h3>
                  <p className="text-sm text-muted-foreground mb-3">Врач-психиатр высшей категории</p>
                  <p className="text-sm">Главный врач клиники</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="venue" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Место проведения</h2>
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-6">
                  <Icon name="MapPin" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-bold mb-2">Адрес</h3>
                    <p className="text-base">Москва, ул. Примерная, д. 1</p>
                  </div>
                </div>
                <div className="bg-muted h-64 rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Карта Яндекс.Карты</p>
                </div>
              </CardContent>
            </Card>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <Icon name="Train" className="text-primary mb-3" size={32} />
                  <h3 className="font-bold mb-2">Метро</h3>
                  <p className="text-sm text-muted-foreground">Станция «Примерная», 5 минут пешком</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Icon name="Car" className="text-primary mb-3" size={32} />
                  <h3 className="font-bold mb-2">Парковка</h3>
                  <p className="text-sm text-muted-foreground">Подземная парковка для участников</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Icon name="Clock" className="text-primary mb-3" size={32} />
                  <h3 className="font-bold mb-2">Время</h3>
                  <p className="text-sm text-muted-foreground">10:00 - 18:00</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Стоимость</h2>
            <Card className="mb-8">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold text-primary mb-4">2 000 ₽</div>
                <p className="text-lg mb-8">Оплата — 2 000 ₽. Включает участие и материалы.</p>
                <div className="space-y-3 mb-8 text-left max-w-md mx-auto">
                  <div className="flex gap-3">
                    <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span>Участие в конференции</span>
                  </div>
                  <div className="flex gap-3">
                    <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span>Раздаточные материалы</span>
                  </div>
                  <div className="flex gap-3">
                    <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span>Сертификат участия</span>
                  </div>
                  <div className="flex gap-3">
                    <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span>Кофе-брейки</span>
                  </div>
                </div>
                <Button size="lg" onClick={() => scrollToSection('registration')}>
                  Оплатить 2 000 ₽
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Вопросы</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white px-6 rounded-lg border">
                <AccordionTrigger className="text-left">Можно ли вернуть оплату?</AccordionTrigger>
                <AccordionContent>
                  Да, за 7 дней до даты мероприятия. Напишите на support@example.com.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white px-6 rounded-lg border">
                <AccordionTrigger className="text-left">Можно ли перенести участие?</AccordionTrigger>
                <AccordionContent>
                  Да, вы можете передать билет другому специалисту. Сообщите новые данные на support@example.com.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white px-6 rounded-lg border">
                <AccordionTrigger className="text-left">Будут ли материалы после конференции?</AccordionTrigger>
                <AccordionContent>
                  Да, все зарегистрированные участники получат презентации на электронную почту в течение 3 дней.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white px-6 rounded-lg border">
                <AccordionTrigger className="text-left">Выдается ли сертификат?</AccordionTrigger>
                <AccordionContent>
                  Да, сертификат участия выдается всем, кто посетил конференцию. Получение в конце мероприятия.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="bg-white px-6 rounded-lg border">
                <AccordionTrigger className="text-left">Есть ли требования к участникам?</AccordionTrigger>
                <AccordionContent>
                  Конференция для практикующих специалистов: психологов, психиатров, психотерапевтов.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="bg-white px-6 rounded-lg border">
                <AccordionTrigger className="text-left">Как связаться с организаторами?</AccordionTrigger>
                <AccordionContent>
                  E-mail: support@example.com, телефон: +7 (495) 123-45-67.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section id="registration" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Регистрация</h2>
            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <Label htmlFor="fullName">ФИО *</Label>
                    <Input id="fullName" placeholder="Иванов Иван Иванович" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="specialty">Специальность *</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите специальность" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="psychologist">Психолог</SelectItem>
                        <SelectItem value="psychiatrist">Психиатр</SelectItem>
                        <SelectItem value="psychotherapist">Психотерапевт</SelectItem>
                        <SelectItem value="other">Другое</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="organization">Организация</Label>
                    <Input id="organization" placeholder="Название организации" />
                  </div>

                  <div>
                    <Label htmlFor="position">Должность</Label>
                    <Input id="position" placeholder="Ваша должность" />
                  </div>

                  <div>
                    <Label htmlFor="city">Город</Label>
                    <Input id="city" placeholder="Москва" />
                  </div>

                  <div>
                    <Label htmlFor="email">E-mail *</Label>
                    <Input id="email" type="email" placeholder="example@email.com" required />
                  </div>

                  <div>
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" required />
                  </div>

                  <div>
                    <Label htmlFor="certificate">Нужен сертификат участия?</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Да</SelectItem>
                        <SelectItem value="no">Нет</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4 pt-4">
                    <div className="flex items-start gap-2">
                      <Checkbox id="gdpr" required />
                      <Label htmlFor="gdpr" className="text-sm leading-tight cursor-pointer">
                        Согласен на обработку персональных данных по 152-ФЗ *
                      </Label>
                    </div>
                    <div className="flex items-start gap-2">
                      <Checkbox id="newsletter" />
                      <Label htmlFor="newsletter" className="text-sm leading-tight cursor-pointer">
                        Хочу получать информационные письма
                      </Label>
                    </div>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Зарегистрироваться
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Контакты</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <Icon name="Mail" className="text-primary mb-3" size={32} />
                  <h3 className="font-bold mb-2">E-mail</h3>
                  <p className="text-sm">support@example.com</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Icon name="Phone" className="text-primary mb-3" size={32} />
                  <h3 className="font-bold mb-2">Телефон</h3>
                  <p className="text-sm">+7 (495) 123-45-67</p>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center gap-4 mt-8">
              <Button variant="outline">
                <Icon name="MessageCircle" className="mr-2" size={18} />
                Написать в WhatsApp
              </Button>
              <Button variant="outline">
                <Icon name="Send" className="mr-2" size={18} />
                Написать в Telegram
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-foreground text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <img src="https://cdn.poehali.dev/files/fba65bfc-7e41-47aa-8baf-c60e3108326a.jpeg" alt="РПА" className="h-16 w-auto" />
                </div>
                <p className="text-sm text-white/70">
                  Российская психотерапевтическая ассоциация
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-3">Документы</h3>
                <div className="space-y-2 text-sm">
                  <a href="#" className="block text-white/70 hover:text-white transition-colors">
                    Пользовательское соглашение
                  </a>
                  <a href="#" className="block text-white/70 hover:text-white transition-colors">
                    Политика обработки данных
                  </a>
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-3">Социальные сети</h3>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                    <Icon name="Facebook" size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                    <Icon name="Twitter" size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                    <Icon name="Instagram" size={20} />
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8 border-t border-white/10 text-center text-sm text-white/50">
              © 2025 РПА. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;