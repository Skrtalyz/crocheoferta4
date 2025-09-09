
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
  Award,
  BookHeart,
  Store,
  Users
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
                Transforme sua paixão em lucro! Aprenda a fazer e vender as peças de crochê mais lucrativas do mercado e fature até <span className="text-primary">R$3.000 por mês</span>.
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Receba uma coleção completa, com aulas simples e passo a passo, criadas para guiar até mesmo quem nunca pegou em uma agulha.
              </p>
              <div className="flex justify-center">
                <a href="#planos">
                  <Button
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg h-auto py-4 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 whitespace-normal"
                  >
                    QUERO COMEÇAR A LUCRAR AGORA
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-b from-secondary to-background">
          <div className="max-w-4xl mx-auto px-5">
            <h2 className="text-3xl md:text-4xl font-headline font-black text-center mb-10">O que você vai RECEBER:</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { emoji: '🎥', text: 'Mais de 40 aulas em vídeo com receitas passo a passo das peças que mais vendem.' },
                { emoji: '♾️', text: 'Acesso Vitalício para ver e rever as aulas quando e quantas vezes quiser.' },
                { emoji: '📚', text: 'Todos os módulos: Aprenda a fazer tapetes, sousplats, roupas, bolsas e itens de decoração.' },
                { emoji: '🎁', text: 'Bônus Exclusivo: O módulo completo de Amigurumi, para você criar e vender os bichinhos de crochê que são febre no mercado.' },
                { emoji: '💬', text: 'Suporte VIP: Tire todas as suas dúvidas rapidamente para não travar suas criações.' },
                { emoji: '💰', text: 'NOVO Módulo de Vendas: Aprenda a precificar e a vender seu trabalho com segurança e alta lucratividade.' },
                { emoji: '👩‍👩‍👧‍👧', text: 'Acesso à Comunidade VIP: Faça parte de um grupo exclusivo de artesãs para trocar experiências e se inspirar.' },
              ].map((item, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-card via-muted to-card">
                  <CardContent className="p-6 flex items-start gap-4">
                    <span className="text-3xl mt-1">{item.emoji}</span>
                    <p className="text-base md:text-lg">{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary">
          <div className="max-w-4xl mx-auto px-5">
            <h2 className="text-3xl md:text-4xl font-headline font-black text-center mb-10">BÔNUS EXCLUSIVOS:</h2>
            <div className="space-y-6">
                <Card className="shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-card via-muted to-card">
                    <CardContent className="p-6 flex items-start gap-4">
                        <Gift className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-bold text-lg">Módulo de Amigurumi</h3>
                            <p className="text-base md:text-lg text-muted-foreground">Aprenda a fazer bichinhos e bonequinhos de crochê que são um sucesso de vendas como presente e decoração.</p>
                        </div>
                    </CardContent>
                </Card>
                <Card className="shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-card via-muted to-card">
                    <CardContent className="p-6 flex items-start gap-4">
                        <Store className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-bold text-lg">Módulo NOVO de Precificação e Vendas</h3>
                            <p className="text-base md:text-lg text-muted-foreground">O segredo para você saber exatamente quanto cobrar por cada peça e vender com segurança e alta margem de lucro.</p>
                        </div>
                    </CardContent>
                </Card>
                <Card className="shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-card via-muted to-card">
                    <CardContent className="p-6 flex items-start gap-4">
                        <MessageCircle className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-bold text-lg">Suporte VIP para Dúvidas</h3>
                            <p className="text-base md:text-lg text-muted-foreground">Conte com o nosso suporte exclusivo para tirar todas as suas dúvidas rapidamente e continuar avançando sem travar.</p>
                        </div>
                    </CardContent>
                </Card>
                <Card className="shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-card via-muted to-card">
                    <CardContent className="p-6 flex items-start gap-4">
                        <Users className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-bold text-lg">Acesso à Comunidade VIP de Alunas</h3>
                            <p className="text-base md:text-lg text-muted-foreground">Faça parte de um grupo exclusivo de artesãs para compartilhar suas criações, trocar experiências e se inspirar.</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-b from-secondary to-background">
          <div className="max-w-6xl mx-auto px-5 text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-black text-center mb-12">Veja o que minhas alunas estão dizendo sobre:</h2>
            <div className="max-w-sm mx-auto">
              <div className="overflow-hidden rounded-lg shadow-2xl">
                <CustomVideoPlayer src="https://www.dropbox.com/scl/fi/ocym0rgadl8tnsopaupxh/video-novo-do-depoimento-do-site-Feito-com-o-Clipchamp-1.mp4?rlkey=g03vp1rf9irmcf8t5wrco2lrr&st=tpsxrs7v&raw=1" />
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
              <Card className="relative flex flex-col border-4 border-primary p-6 rounded-2xl shadow-2xl bg-gradient-to-br from-card via-muted to-card">
                <Badge className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground font-bold px-4 py-1">ESCOLHA DE QUEM VENDE MAIS</Badge>
                <h3 className="text-2xl font-bold font-headline text-primary">Plano Completo</h3>
                <p className="text-muted-foreground mb-4">Acesso total para lucrar de verdade</p>
                <p className="text-4xl font-black my-4"><span className="text-green-500">R$27</span><span className="text-lg font-medium text-muted-foreground">/pagamento único</span></p>
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

    