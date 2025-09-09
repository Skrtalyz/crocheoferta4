
'use client';

import React from 'react';
import Image from 'next/image';
import {
  BadgeCheck,
  Check,
  Sparkles,
  GraduationCap,
  PiggyBank,
  TrendingUp,
  Percent,
  Heart,
  AlertTriangle,
  CheckCircle,
  Lock,
  MessageCircle,
  Gift,
  Award
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import CustomVideoPlayer from '@/components/custom-video-player';


const studentComments = [
    { name: 'Carla M.', quote: 'Primeiro sousplat em 45min! Já vendi 3 por R$25 cada.' },
    { name: 'Fernanda C.', quote: '15 peças vendidas rapidinho no Instagram!' },
    { name: 'Juliana S.', quote: 'R$850 no primeiro mês! Técnicas incríveis.' },
    { name: 'Roberta L.', quote: 'Lista de espera em 2 semanas!' },
    { name: 'Amanda S.', quote: 'Iniciante total e consegui! Já encomendaram mais 5.' },
    { name: 'Luciana R.', quote: 'Bolsa por R$45, custou R$8. Lucro garantido!' },
    { name: 'Patrícia M.', quote: 'R$1.200 no primeiro mês trabalhando de casa!' },
    { name: 'Mariana F.', quote: 'Clientes fixos que sempre encomendam!' },
    { name: 'Beatriz A.', quote: 'Tapete vendido por R$80 em 1 dia!' },
    { name: 'Camila T.', quote: 'Receitas claras, resultados rápidos!' },
    { name: 'Renata B.', quote: 'R$2.500 em 2 meses! Mudou minha vida.' },
    { name: 'Daniela K.', quote: 'Flores de crochê são sucesso total!' },
    { name: 'Vanessa P.', quote: 'R$600 na primeira semana! Incrível!' },
    { name: 'Cristina L.', quote: 'Sousplats vendendo como água!' },
    { name: 'Mônica R.', quote: 'Técnicas fáceis, lucro garantido!' },
    { name: 'Silvia M.', quote: 'R$1.800 em 6 semanas trabalhando em casa!' },
    { name: 'Eliane C.', quote: 'Bolsas de praia são hit do verão!' },
    { name: 'Rosana F.', quote: 'Lista de espera com 20 clientes!' },
    { name: 'Tatiana B.', quote: 'R$2.200 no segundo mês! Vida mudou!' },
    { name: 'Adriana S.', quote: 'Tapetes saindo de R$60 a R$120!' },
    { name: 'Luciene A.', quote: 'Receitas claríssimas, sucesso total!' },
    { name: 'Simone D.', quote: 'Flores decorativas vendendo muito!' },
    { name: 'Regina T.', quote: 'R$950 primeira quinzena! Fantástico!' },
    { name: 'Cláudia V.', quote: 'Encomendas não param de chegar!' },
    { name: 'Vera L.', quote: 'Aposentada e ganhando R$1.500/mês!' },
    { name: 'Neusa M.', quote: 'Sousplats de Natal esgotaram!' },
    { name: 'Ivone P.', quote: 'R$3.200 em dezembro! Recorde!' },
];


const AnimatedGiftIcon = () => (
  <div className="relative inline-block animate-gift-bounce">
    <Gift className="w-10 h-10 text-white" />
    <span className="absolute top-0 left-0 w-full h-full animate-confetti-1">🎊</span>
    <span className="absolute top-0 left-0 w-full h-full animate-confetti-2">✨</span>
    <span className="absolute top-0 left-0 w-full h-full animate-confetti-3">🎉</span>
  </div>
);


export default function CrochetLandingPage() {
  const checkoutUrlCompleto = "https://www.ggcheckout.com/checkout/v2/jRiQJtpwd5vgbl9aqA9m";
  const checkoutUrlBasico = "https://www.ggcheckout.com/checkout/v2/vKlK889o7aTDZGgpBLOb?split=10";

  return (
    <div className="text-foreground font-body">
      <main>
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary">
          <div className="max-w-6xl mx-auto px-5">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-headline font-black uppercase leading-tight mb-4 text-foreground">
                Transforme crochê em até <span className="text-primary">R$3.000 por mês</span> com peças charmosas e rápidas de fazer!
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Receba uma coleção completa com as peças mais vendidas, explicadas em vídeo-aulas curtas e passo a passo, criadas para quem é totalmente iniciante.
              </p>
              <div className="flex justify-center">
                <a href="#planos">
                  <Button
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg h-auto py-4 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 whitespace-normal"
                  >
                    QUERO ESCOLHER MEU PLANO
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-b from-secondary to-background">
          <div className="max-w-4xl mx-auto px-5">
            <h2 className="text-3xl md:text-4xl font-headline font-black text-center mb-4">O que você vai RECEBER:</h2>
            <p className="text-lg text-muted-foreground text-center mb-10">
              Ao garantir seu acesso, você vai receber tudo que precisa para transformar sua paixão em um negócio lucrativo. Dentro da área de alunas, você encontrará:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {[
                "Mais de 40 aulas em vídeo com receitas passo a passo das peças que mais vendem.",
                "Acesso Vitalício para ver e rever as aulas quando e quantas vezes quiser.",
                "Todos os módulos: Aprenda a fazer tapetes, sousplats, roupas, bolsas e itens de decoração.",
                "Bônus Exclusivo: O módulo completo de Amigurumi, para você criar e vender os bichinhos de crochê que são febre no mercado.",
                "Suporte VIP: Tire todas as suas dúvidas rapidamente para não travar suas criações.",
                "NOVO Módulo de Vendas: Aprenda a precificar e a vender seu trabalho com segurança e alta lucratividade.",
                "Acesso à Comunidade VIP: Faça parte de um grupo exclusivo de artesãs para trocar experiências e se inspirar.",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-base md:text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary">
          <div className="max-w-6xl mx-auto px-5">
            <h2 className="text-3xl md:text-4xl font-headline font-black text-center mb-12">O que você vai conquistar com o <span className="text-primary">Plano Completo</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
              {[
                { emoji: '💰', text: 'Potencial de Lucro de até R$3.000/mês' },
                { emoji: '🏠', text: 'Trabalhe sem sair de casa ou pegar peso' },
                { emoji: '🛒', text: 'Domine a arte de precificar e vender online' },
                { emoji: '👍', text: 'Receitas testadas por mais de 14 mil artesãs' },
                { emoji: '💬', text: 'Suporte VIP para tirar dúvidas rapidamente' },
                { emoji: '🎁', text: 'Bônus exclusivos que aceleram seus resultados' },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-4">
                  <span className="text-4xl">{item.emoji}</span>
                  <p className="text-lg font-medium">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 flex justify-center">
               <a href="#planos">
                  <Button
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg h-auto py-4 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 whitespace-normal"
                  >
                    QUERO O PLANO COMPLETO
                  </Button>
                </a>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-b from-secondary to-background">
          <div className="max-w-6xl mx-auto px-5">
            <h2 className="text-3xl md:text-4xl font-headline font-black text-center mb-12">6 Motivos para Investir no Plano Completo</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: <GraduationCap />, title: 'Aprenda mesmo sendo iniciante', description: 'Aulas passo a passo, perfeitas para quem está começando do zero.' },
                { icon: <PiggyBank />, title: 'Comece com baixo investimento', description: 'Você não precisa de materiais caros para criar peças incríveis e lucrativas.' },
                { icon: <TrendingUp />, title: 'Peças com alta procura', description: 'Nossas receitas são focadas em produtos que vendem o ano todo.' },
                { icon: <Percent />, title: 'Margem de lucro de até 300%', description: 'Aprenda a precificar corretamente e a valorizar seu trabalho manual.' },
                { icon: <Heart />, title: 'Satisfação pessoal e terapia criativa', description: 'Redescubra o prazer de criar com as mãos e alivie o estresse do dia a dia.' },
                { icon: <BadgeCheck />, title: 'Técnicas validadas por profissionais', description: 'Métodos testados que garantem peças com acabamento profissional.' },
              ].map((item, index) => (
                <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow bg-card">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                      {React.cloneElement(item.icon, { className: 'w-8 h-8 text-primary icon-metallic animate-float' })}
                    </div>
                    <CardTitle className="font-headline font-bold">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-12 flex justify-center">
              <a href="#planos">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg h-auto py-4 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 whitespace-normal"
                >
                  QUERO APRENDER
                </Button>
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary">
          <div className="max-w-6xl mx-auto px-5 text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-black text-center mb-12">O que você vai aprender no Acesso Completo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: '🧶 Tapetes, Sousplats, Flores e Itens de Decoração',
                  image: 'https://i.postimg.cc/m2HkrcdB/1.png',
                  'data-ai-hint': 'crochet decor',
                },
                {
                  title: '👗 Roupas e Acessórios com Acabamento Profissional',
                  image: 'https://i.postimg.cc/hGdhXX49/2.png',
                  'data-ai-hint': 'crochet clothes',
                },
                {
                  title: '⚡ Técnicas Rápidas de Produção e Fio Econômico',
                  image: 'https://i.postimg.cc/YSYqpT8R/3.png',
                  'data-ai-hint': 'crochet techniques',
                },
                {
                  title: '🎁 Peças Temáticas para Natal, Dia das Mães e mais',
                  image: 'https://i.postimg.cc/8CRN8MPn/4.png',
                  'data-ai-hint': 'crochet gifts',
                },
              ].map((item, index) => (
                <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-card">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={313}
                    height={313}
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
                    src="https://i.postimg.cc/tCctZJpK/minibundel3-compressed.webp"
                    alt="Bônus Amigurumi"
                    width={100}
                    height={100}
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
             <div className="mt-12 flex justify-center">
               <a href="#planos">
                  <Button
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg h-auto py-4 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 whitespace-normal"
                  >
                    QUERO OS BÔNUS
                  </Button>
                </a>
            </div>
          </div>
        </section>
        
        <section className="bg-orange-500 text-white py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-5 text-center">
            <div className="max-w-3xl mx-auto bg-white/10 border-2 border-dashed border-white/50 p-6 rounded-2xl relative">
              <div className="absolute -top-3 -left-3 text-2xl animate-pulse">⚠️</div>
              <div className="absolute -bottom-3 -left-3 text-2xl animate-pulse delay-500">⚠️</div>
              <div className="absolute -top-3 -right-3 text-2xl animate-pulse delay-300">⚠️</div>
              <div className="absolute -bottom-3 -right-3 text-2xl animate-pulse delay-700">⚠️</div>

              <h2 className="text-3xl font-black flex items-center justify-center gap-2">
                <AlertTriangle className="w-8 h-8" />
                VAGAS LIMITADAS!
              </h2>
              <p className="text-lg font-semibold mt-4">
                Liberamos apenas 10 acessos promocionais por semana para garantir a qualidade no suporte.
              </p>
              <div className="mt-4 bg-white/20 py-2 px-4 rounded-md">
                <div className="w-full max-w-sm mx-auto">
                    <p className="text-sm font-bold text-center mb-1">VAGAS PREENCHENDO</p>
                    <Progress value={85} className="bg-white/30 h-3 [&>div]:bg-yellow-400"/>
                </div>
                <p className="font-bold mt-2">Após isso, o valor volta ao preço original.</p>
              </div>
            </div>
            <div className="mt-8">
              <a href="#planos" className="w-full max-w-md mx-auto block">
                <Button size="lg" className="w-full h-auto py-4 px-6 text-lg md:text-xl font-bold bg-green-600 hover:bg-green-700 text-white shadow-lg hover:bg-accent/90 transform hover:scale-105 transition-transform duration-300 whitespace-normal">
                  SIM! QUERO GARANTIR MINHA VAGA
                </Button>
              </a>
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

        <section className="py-16 md:py-24 bg-gradient-to-b from-secondary to-background">
          <div className="max-w-6xl mx-auto px-5 text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-black text-center mb-12">Veja o que minhas alunas estão dizendo sobre:</h2>
            <div className="max-w-2xl mx-auto">
              <div className="overflow-hidden rounded-lg shadow-2xl">
                <CustomVideoPlayer src="https://www.dropbox.com/scl/fi/y2m4gpjhpbgoi46fggvw2/Depoimentos-24-90-Feito-com-o-Clipchamp-3.mp4?rlkey=oipxlrt3lojq7ek7jyd04ew9j&st=x9ab4gpn&raw=1" />
              </div>
            </div>
            <div className="mt-12 flex justify-center">
               <a href="#planos">
                  <Button
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg h-auto py-4 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 whitespace-normal"
                  >
                    QUERO SER A PRÓXIMA
                  </Button>
                </a>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-secondary overflow-hidden">
          <div className="max-w-full mx-auto">
            <div className="relative flex overflow-x-hidden group">
              <div className="flex animate-marquee group-hover:pause">
                {[...studentComments, ...studentComments].map((comment, index) => (
                  <div key={index} className="flex-shrink-0 w-80 mx-4">
                    <Card className="flex flex-col justify-between h-full shadow-md bg-card">
                      <CardContent className="p-6">
                        <p className="italic">"{comment.quote}"</p>
                        <p className="font-bold mt-4">- {comment.name}</p>
                        <Badge variant="secondary" className="mt-2 gap-1.5 pl-1.5">
                          <Award className="w-3.5 h-3.5 text-primary" />
                          Aluna Verificada
                        </Badge>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <section id="planos" className="py-16 md:py-24 bg-gradient-to-b from-secondary to-background">
          <div className="max-w-6xl mx-auto px-5 text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-black text-center mb-12">Escolha o plano ideal para você começar a lucrar</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
              {/* Plano Básico */}
              <Card className="flex flex-col border-2 border-border p-6 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold font-headline">Plano Básico</h3>
                <p className="text-4xl font-black my-4">R$10<span className="text-lg font-medium">/pagamento único</span></p>
                <ul className="space-y-3 text-left my-6 flex-grow">
                  <li className="flex items-center gap-2"><Check className="w-5 h-5 text-green-600" /> 20 Aulas Passo a Passo</li>
                  <li className="flex items-center gap-2"><Check className="w-5 h-5 text-green-600" /> Acesso por 6 meses</li>
                  <li className="flex items-center gap-2"><Check className="w-5 h-5 text-green-600" /> Aulas de Peças Rápidas</li>
                  <li className="flex items-center gap-2"><Check className="w-5 h-5 text-green-600" /> Receitas de Flores Decorativas</li>
                </ul>
                <a href={checkoutUrlBasico} className="w-full mt-auto">
                  <Button size="lg" variant="outline" className="w-full text-lg h-auto py-4">
                    Começar com o Básico
                  </Button>
                </a>
              </Card>

              {/* Plano Completo */}
              <Card className="relative flex flex-col border-4 border-primary p-6 rounded-2xl shadow-2xl bg-card">
                <Badge className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground font-bold px-4 py-1">ESCOLHA DE QUEM VENDE MAIS</Badge>
                <h3 className="text-2xl font-bold font-headline text-primary">Plano Completo</h3>
                <p className="text-muted-foreground mb-4">Acesso total para lucrar de verdade</p>
                <p className="text-4xl font-black my-4"><span className="text-yellow-500">R$27</span><span className="text-lg font-medium text-muted-foreground">/pagamento único</span></p>
                <ul className="space-y-3 text-left my-6 flex-grow">
                  <li className="flex items-center gap-2 font-semibold"><Sparkles className="w-5 h-5 text-yellow-500" /> Tudo do Plano Básico +</li>
                  <li className="flex items-center gap-2"><Check className="w-5 h-5 text-green-600" /> Mais de 40 aulas em vídeo</li>
                  <li className="flex items-center gap-2"><Check className="w-5 h-5 text-green-600" /> Acesso Vitalício</li>
                  <li className="flex items-center gap-2"><Check className="w-5 h-5 text-green-600" /> Todas as Receitas (Tapetes, Roupas, Bolsas, Sousplats...)</li>
                  <li className="flex items-center gap-2"><Check className="w-5 h-5 text-green-600" /> Bônus: Módulo de Amigurumi</li>
                  <li className="flex items-center gap-2"><Check className="w-5 h-5 text-green-600" /> Suporte Exclusivo para Dúvidas</li>
                  <li className="flex items-center gap-2 font-bold text-primary"><Sparkles className="w-5 h-5 text-primary" /> NOVO: Módulo de Precificação e Vendas</li>
                  <li className="flex items-center gap-2 font-bold text-primary"><Sparkles className="w-5 h-5 text-primary" /> NOVO: Acesso à Comunidade VIP</li>
                </ul>
                <a href={checkoutUrlCompleto} className="w-full mt-auto">
                  <Button size="lg" className="w-full text-lg h-auto py-4 bg-green-600 hover:bg-green-700 text-white animate-pulse">
                    Quero o Acesso Completo!
                  </Button>
                </a>
              </Card>
            </div>
          </div>
        </section>

        <section id="oferta-final" className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="max-w-6xl mx-auto px-5 text-center">
             <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center justify-center gap-4">
              <AnimatedGiftIcon />
              <span>Ainda em dúvida? Escolha seu plano e comece hoje!</span>
            </h2>
            <p className="text-xl mt-2 mb-8 font-semibold">Pagamento único, acesso vitalício e resultados rápidos.</p>
            <div className="flex justify-center">
               <a href="#planos">
                  <Button
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg h-auto py-4 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 whitespace-normal"
                  >
                    ESCOLHER MEU PLANO AGORA
                  </Button>
                </a>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary">
          <div className="max-w-3xl mx-auto px-5 text-center">
            <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-6">
                <BadgeCheck className="w-12 h-12 text-pink-300 icon-metallic animate-shake" />
            </div>
            <h2 className="text-3xl md:text-4xl font-headline font-black mb-4">Garantia de 7 dias ou seu dinheiro de volta</h2>
            <p className="text-lg text-muted-foreground mb-6">Garanta seu acesso sem risco. Se não gostar, devolvemos seu dinheiro.</p>
            <p className="text-muted-foreground">Você tem 7 dias para testar todo o material. Se não ficar satisfeita, basta enviar um e-mail e devolvemos 100% do seu investimento, sem perguntas.</p>
          </div>
        </section>
      </main>

      <footer className="py-8 bg-background text-center">
        <div className="max-w-6xl mx-auto px-5">
          <p className="font-bold font-headline text-lg">Coleção Lucre com Charme – Transforme seu hobby em renda</p>
          <p className="text-sm mt-2">&copy; 2025 Coleção Lucre com Charme. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
