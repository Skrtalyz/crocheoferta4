import React from 'react';
import Image from 'next/image';
import {
  ArrowDown,
  BadgeCheck,
  CheckCircle,
  CreditCard,
  DollarSign,
  Gift,
  GraduationCap,
  Heart,
  Home,
  Lock,
  MessageCircle,
  Percent,
  PiggyBank,
  ShoppingCart,
  Star,
  TrendingUp,
  Users,
  AlertTriangle,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Countdown from '@/components/countdown';

const testimonials = [
  {
    name: 'Juliana S.',
    quote: 'R$850 no primeiro mês! Técnicas incríveis.',
    avatar: 'https://placehold.co/80x80.png',
    "data-ai-hint": 'woman portrait'
  },
  {
    name: 'Ivone P.',
    quote: 'R$3.200 em dezembro! Recorde!',
    avatar: 'https://placehold.co/80x80.png',
    "data-ai-hint": 'woman portrait'
  },
  {
    name: 'Maria Santos',
    quote: 'Consegui R$1.200 no primeiro mês!',
    avatar: 'https://placehold.co/80x80.png',
    "data-ai-hint": 'woman portrait'
  },
];

const CTAButton = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <Button
    size="lg"
    className={`w-full max-w-md mx-auto h-auto py-4 px-6 text-lg md:text-xl font-bold bg-accent text-accent-foreground shadow-lg hover:bg-accent/90 transform hover:scale-105 transition-transform duration-300 ${className}`}
  >
    {children}
  </Button>
);

export default function CrochetLandingPage() {
  return (
    <div className="bg-background text-foreground">
      <header className="bg-accent text-accent-foreground text-center p-3 font-bold text-sm md:text-base animate-pulse">
        <div className="container mx-auto flex flex-wrap items-center justify-center gap-x-2">
          <span>CUPOM DE DESCONTO APLICADO — VÁLIDO ATÉ HOJE 07/08/2025 🔥</span>
          <span className="hidden md:inline">|</span>
          <div className="flex items-center gap-2">
            <span>OFERTA ACABA EM</span>
            <Countdown />
          </div>
        </div>
      </header>

      <main>
        <section className="py-16 md:py-24 text-center container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold mb-4 leading-tight">
            Transforme crochê em até <span className="uppercase font-bold text-glow-gold">R$3.000 por mês</span> com peças charmosas e rápidas de fazer!
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl mb-8">
            O curso definitivo para mulheres que querem transformar sua paixão por crochê em uma fonte de renda estável e prazerosa — mesmo que nunca tenham vendido antes!
          </p>
          <div className="my-8">
            <p className="font-bold text-xl uppercase mb-2">ASSISTA O VÍDEO ABAIXO COMPLETO E DESCUBRA COMO!</p>
            <ArrowDown className="w-8 h-8 mx-auto animate-bounce text-primary" />
          </div>
          <div className="my-8 aspect-video bg-muted max-w-4xl mx-auto rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">Seu vídeo (VSL) aqui</p>
          </div>
          <CTAButton>
            👉 QUERO RECEBER O CURSO POR R$12,90
          </CTAButton>
        </section>

        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">O que você vai conquistar com a Coleção Lucre com Charme</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
              {[
                { icon: <DollarSign className="w-10 h-10 text-primary icon-metallic animate-float" />, text: 'Lucro de até R$3.000/mês com peças rápidas de crochê' },
                { icon: <Home className="w-10 h-10 text-primary icon-metallic animate-float" />, text: 'Prontas em menos de 1 hora, sem sair de casa ou pegar peso' },
                { icon: <ShoppingCart className="w-10 h-10 text-primary icon-metallic animate-float" />, text: 'Materiais baratos e fáceis de encontrar' },
                { icon: <Users className="w-10 h-10 text-primary icon-metallic animate-float" />, text: 'Receitas testadas por mais de 14 mil artesãs' },
                { icon: <MessageCircle className="w-10 h-10 text-primary icon-metallic animate-float" />, text: 'Suporte exclusivo para tirar dúvidas' },
                { icon: <Gift className="w-10 h-10 text-primary icon-metallic animate-float" />, text: 'Bônus: 10 ideias para embalar e vender mais' },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-4">
                  {item.icon}
                  <p className="text-lg font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">6 Motivos para Investir na Coleção Lucre com Charme</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <GraduationCap />, title: 'Aprenda mesmo sendo iniciante', description: 'Aulas passo a passo, perfeitas para quem está começando do zero.' },
              { icon: <PiggyBank />, title: 'Comece com baixo investimento', description: 'Você não precisa de materiais caros para criar peças incríveis e lucrativas.' },
              { icon: <TrendingUp />, title: 'Peças com alta procura', description: 'Nossas receitas são focadas em produtos que vendem o ano todo.' },
              { icon: <Percent />, title: 'Margem de lucro de até 300%', description: 'Aprenda a precificar corretamente e a valorizar seu trabalho manual.' },
              { icon: <Heart />, title: 'Satisfação pessoal e terapia criativa', description: 'Redescubra o prazer de criar com as mãos e alivie o estresse do dia a dia.' },
              { icon: <BadgeCheck />, title: 'Técnicas validadas por profissionais', description: 'Métodos testados que garantem peças com acabamento profissional.' },
            ].map((item, index) => (
              <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                    {React.cloneElement(item.icon, { className: 'w-8 h-8 text-primary icon-metallic animate-float' })}
                  </div>
                  <CardTitle className="font-headline">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-12">O que você vai aprender</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: '🧶 Tapetes, Sousplats, Flores e Itens de Decoração',
                  image: 'https://placehold.co/600x400.png',
                  'data-ai-hint': 'crochet decor',
                },
                {
                  title: '👗 Roupas e Acessórios com Acabamento Profissional',
                  image: 'https://placehold.co/600x400.png',
                  'data-ai-hint': 'crochet clothes',
                },
                {
                  title: '⚡ Técnicas Rápidas de Produção e Fio Econômico',
                  image: 'https://placehold.co/600x400.png',
                  'data-ai-hint': 'crochet techniques',
                },
                {
                  title: '🎁 Peças Temáticas para Natal, Dia das Mães e mais',
                  image: 'https://placehold.co/600x400.png',
                  'data-ai-hint': 'crochet gifts',
                },
              ].map((item, index) => (
                <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                    data-ai-hint={item['data-ai-hint']}
                  />
                  <CardContent className="p-4 pt-4">
                    <p className="font-semibold text-lg">{item.title}</p>
                  </CardContent>
                </Card>
              ))}

              <Card className="md:col-span-2 lg:col-span-3 bg-primary text-primary-foreground p-8 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-6">
                <div className='flex-shrink-0'>
                  <Image
                    src="https://placehold.co/400x400.png"
                    alt="Bônus Amigurumi"
                    width={150}
                    height={150}
                    className="rounded-lg object-cover"
                    data-ai-hint="amigurumi crochet"
                  />
                </div>
                <div className='text-center md:text-left'>
                  <h3 className="font-bold text-2xl mb-2">BÔNUS: Inicie no Amigurumi!</h3>
                  <p>Aprenda a fazer bichinhos e bonequinhos de crochê — um sucesso de vendas como presente e decoração.</p>
                </div>
              </Card>

            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-b from-orange-500 to-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto bg-white/10 border-2 border-dashed border-white/50 p-6 rounded-2xl relative">
              <div className="absolute -top-3 -left-3 text-2xl animate-pulse">⚠️</div>
              <div className="absolute -bottom-3 -left-3 text-2xl animate-pulse delay-500">⚠️</div>
              <div className="absolute -top-3 -right-3 text-2xl animate-pulse delay-300">⚠️</div>
              <div className="absolute -bottom-3 -right-3 text-2xl animate-pulse delay-700">⚠️</div>

              <h2 className="text-3xl font-bold flex items-center justify-center gap-2">
                <AlertTriangle className="w-8 h-8" />
                VAGAS LIMITADAS!
              </h2>
              <p className="text-lg font-semibold mt-4">
                Liberamos apenas 10 acessos promocionais por semana para garantir a qualidade no suporte.
              </p>
              <div className="mt-4 bg-white/20 py-2 px-4 rounded-md">
                <p className="font-bold">Após isso, o valor volta ao preço original.</p>
              </div>
            </div>
            <div className="mt-8">
              <CTAButton className="bg-green-600 hover:bg-green-700 text-white">
                SIM! QUERO A COLEÇÃO LUCRE COM CHARME POR R$12,90
              </CTAButton>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-white/80">
                <div className="flex flex-col items-center gap-2">
                  <CheckCircle className="w-8 h-8 text-white"/>
                  <span className="font-semibold">Garantia de 7 dias</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Lock className="w-8 h-8 text-white"/>
                  <span className="font-semibold">Pagamento 100% seguro</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <MessageCircle className="w-8 h-8 text-white"/>
                  <span className="font-semibold">Suporte via WhatsApp</span>
                </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-4">Mais de 14.000 alunas satisfeitas com nota 5 estrelas</h2>
            <div className="flex justify-center items-center gap-1 mb-12 text-primary">
              <Star fill="currentColor" className="w-6 h-6" />
              <Star fill="currentColor" className="w-6 h-6" />
              <Star fill="currentColor" className="w-6 h-6" />
              <Star fill="currentColor" className="w-6 h-6" />
              <Star fill="currentColor" className="w-6 h-6" />
            </div>
            <Carousel
              opts={{ align: "start", loop: true }}
              className="w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                      <Card className="flex flex-col justify-between h-full shadow-md">
                        <CardContent className="p-6 flex flex-col items-center text-center">
                          <Image
                            src={testimonial.avatar}
                            alt={`Avatar de ${testimonial.name}`}
                            width={80}
                            height={80}
                            className="rounded-full mb-4 border-2 border-primary"
                            data-ai-hint={testimonial['data-ai-hint']}
                          />
                          <p className="italic">"{testimonial.quote}"</p>
                          <p className="font-bold mt-4 text-primary">- {testimonial.name}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Oferta especial de hoje inclui um módulo extra de Amigurumi!</h2>
            <div className="my-8">
              <p className="text-2xl line-through opacity-70">De R$20</p>
              <p className="text-6xl md:text-7xl font-bold text-accent-foreground drop-shadow-lg bg-accent rounded-lg inline-block px-4 py-2">R$12,90</p>
              <p className="text-xl mt-2 font-semibold">Pagamento único, acesso vitalício</p>
            </div>
            <CTAButton className="bg-white text-primary hover:bg-white/90">
              QUERO COMEÇAR AGORA POR R$12,90
            </CTAButton>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-2"><CreditCard /> Pagamento 100% seguro</div>
              <div className="flex items-center justify-center gap-2">❖ PIX disponível</div>
              <div className="flex items-center justify-center gap-2"><Lock /> Ambiente protegido</div>
              <div className="flex items-center justify-center gap-2"><CheckCircle /> Garantia de satisfação</div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 bg-card text-center">
        <div className="container mx-auto px-4">
          <p className="font-bold font-headline text-lg">Coleção Lucre com Charme – Transforme seu hobby em renda</p>
          <p className="text-sm mt-2">&copy; 2025 Coleção Lucre com Charme. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
