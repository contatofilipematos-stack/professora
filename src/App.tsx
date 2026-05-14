/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, Pencil, BookOpen, Download, ArrowRight, Sparkles, Search, Frown, Clock, BookX, CheckCircle2, GraduationCap, CalendarCheck, Layers, TrendingUp, Palette, FileText, Book, Printer, Smile, ClipboardCheck, BarChart3, CalendarDays, BookOpenCheck, FileEdit, Gift, Lock, ShieldCheck, ChevronDown, Shield } from "lucide-react";

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Como recebo o material?",
      answer: "O acesso é imediato! Assim que o seu pagamento for confirmado, você receberá um e-mail com o link para download de todos os arquivos em PDF. Você também terá acesso à nossa área de membros exclusiva."
    },
    {
      question: "Precisa de impressora especial?",
      answer: "Não! Os arquivos foram otimizados para funcionar em qualquer impressora doméstica ou profissional. Você pode imprimir colorido para um resultado vibrante ou em preto e branco para economizar tinta — as atividades continuam lindas e legíveis."
    },
    {
      question: "Por quanto tempo tenho acesso?",
      answer: "O seu acesso é vitalício! Uma vez adquirido, o material é seu para sempre. Você pode baixar e imprimir quantas vezes precisar ao longo dos anos, para diferentes turmas."
    },
    {
      question: "Posso usar em mais de uma turma?",
      answer: "Sim! O material foi desenvolvido para ser flexível e atender do 1º ao 5º ano do Ensino Fundamental. Você pode adaptar as atividades conforme o nível de cada turma ou aluno individualmente."
    }
  ];

  return (
    <div id="hero-container" className="min-h-screen bg-soft-rose bg-dots selection:bg-brand-pink/30 font-sans overflow-x-hidden relative text-text-dark pb-20">
      {/* Decorative Floating Elements */}
      <div className="absolute top-12 left-8 text-brand-amber/40 rotate-12 opacity-30 hidden lg:block select-none">
        <Pencil size={56} />
      </div>
      <div className="absolute top-12 right-12 text-brand-amber/40 -rotate-12 opacity-30 hidden lg:block select-none">
        <Star size={52} fill="currentColor" />
      </div>
      <div className="absolute bottom-40 left-12 text-brand-indigo/30 rotate-12 opacity-20 hidden lg:block select-none">
        <BookOpen size={48} />
      </div>
      <div className="absolute bottom-40 right-16 text-brand-pink/30 -rotate-6 opacity-20 hidden lg:block select-none">
        <Pencil size={40} />
      </div>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-16 md:pt-24 pb-20 flex flex-col items-center text-center border-b border-brand-pink/5">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full shadow-sm mb-12 border border-brand-pink/10"
        >
          <Sparkles size={18} className="text-brand-pink" />
          <span className="text-xs md:text-sm font-bold text-brand-pink uppercase tracking-[0.15em] font-sans">
            +500 professoras já baixaram
          </span>
        </motion.div>

        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-10 max-w-4xl"
        >
          <h1 className="text-4xl md:text-7xl font-black text-text-dark leading-[1.1] md:leading-[1.1] mb-8 tracking-tight">
            267+ atividades de interpretação e produção de texto
          </h1>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-1.5 bg-brand-pink rounded-full mb-8 opacity-50" />
            
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <span className="text-4xl md:text-7xl font-black text-brand-pink relative leading-none">
                do 1º ao 5º
                <span className="absolute -bottom-2 md:-bottom-3 left-0 w-full h-3 md:h-5 bg-brand-pink/10 -z-10 rounded-sm" />
              </span>
              <span className="text-4xl md:text-7xl font-black text-text-dark leading-none">
                ano
              </span>
              
              {/* Stack of Icons/Books */}
              <div className="flex items-center ml-2 space-x-[-12px]">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-brand-teal rounded-xl shadow-lg transform -rotate-12 border-2 border-white flex items-center justify-center">
                  <BookOpen className="text-white opacity-60" size={20} />
                </div>
                <div className="w-10 h-10 md:w-14 md:h-14 bg-brand-pink rounded-xl shadow-lg border-2 border-white flex items-center justify-center relative z-10 scale-110">
                   <Star size={20} className="text-white fill-white" />
                </div>
                <div className="w-10 h-10 md:w-14 md:h-14 bg-brand-indigo rounded-xl shadow-lg transform rotate-12 border-2 border-white flex items-center justify-center">
                   <Download className="text-white opacity-60" size={20} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-2xl text-text-muted max-w-3xl mb-16 leading-relaxed font-medium font-inter"
        >
          Material pronto para imprimir, cheio de textos que prendem e atividades que fazem os alunos pensar de verdade.
        </motion.p>

        {/* Main Image Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative w-full max-w-3xl px-4 mb-20 group"
        >
          <div className="bg-white p-2 md:p-3 rounded-[3rem] md:rounded-[4rem] shadow-[0_40px_100px_rgba(255,107,139,0.15)] border border-brand-pink/5 relative z-10">
            <div className="overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] bg-soft-rose">
              <img
                src="https://i.ibb.co/6c6r8sV2/criadora-D8-HSYWBF.jpg"
                alt="Professora segurando atividades"
                className="w-full h-auto object-contain transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          {/* Floating Element */}
          <div className="absolute -bottom-6 -right-1 z-20 bg-brand-indigo text-white p-6 rounded-[2.5rem] rotate-6 shadow-2xl hidden lg:flex items-center justify-center border-4 border-white transition-transform hover:rotate-0 hover:scale-110">
            <Download size={32} />
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col items-center gap-8 w-full max-w-2xl px-4"
        >
          <button className="w-full md:w-auto bg-brand-pink hover:bg-brand-pink/90 active:scale-95 text-white px-8 md:px-14 py-5 md:py-7 rounded-[2rem] font-black text-xl md:text-3xl shadow-[0_20px_60px_rgba(255,107,139,0.3)] hover:shadow-[0_25px_80px_rgba(255,107,139,0.4)] transition-all flex items-center justify-center gap-4 cursor-pointer group tracking-tight">
            Quero meu kit por R$17,90
            <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform shrink-0" />
          </button>
          
          <div className="flex flex-col items-center gap-4">
             <div className="flex items-center gap-2 text-text-muted font-bold text-base md:text-xl">
              <Download size={20} className="text-brand-pink animate-bounce" />
              <span>Download imediato após a compra</span>
            </div>
            <div className="flex items-center gap-2 bg-white/60 px-5 py-2 rounded-full backdrop-blur-sm border border-brand-pink/5">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" className="text-brand-amber" />
                ))}
              </div>
              <span className="text-[10px] md:text-xs font-black text-text-dark uppercase tracking-widest">+8.500 professoras amaram</span>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Second Section: The Pain Points */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-black text-text-dark text-center mb-16 tracking-tight"
        >
          Por que encontrar atividades virou um desafio? 😫
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {[
            {
              title: "Textos genéricos",
              text: "Você perde horas procurando e ainda não acha nada com qualidade pedagógica real.",
              color: "bg-soft-rose",
              icon: Search,
              iconColor: "bg-brand-pink"
            },
            {
              title: "Atividades que não engajam",
              text: "Os alunos fazem por obrigação. Não há interpretação real, só cópia de trechos.",
              color: "bg-soft-lavender",
              icon: Frown,
              iconColor: "bg-brand-indigo"
            },
            {
              title: "Do zero toda semana",
              text: "Montar atividade do zero consome a energia que você precisava para estar com a turma.",
              color: "bg-soft-peach",
              icon: Clock,
              iconColor: "bg-brand-amber"
            },
            {
              title: "Fora da BNCC",
              text: "Material solto sem alinhamento curricular gera insegurança na hora de aplicar.",
              color: "bg-soft-sage",
              icon: BookX,
              iconColor: "bg-brand-teal"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`${item.color} p-8 md:p-10 rounded-[2.5rem] flex items-start gap-6 shadow-sm border border-white hover:shadow-xl transition-all group`}
            >
              <div className={`${item.iconColor} p-4 rounded-2xl shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                <item.icon className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-black text-text-dark mb-2">{item.title}</h3>
                <p className="text-text-muted leading-relaxed font-medium font-inter">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Third Section: Who is it for? */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-20 bg-white/50 backdrop-blur-md mt-20 rounded-[3rem] border border-white/60">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-black text-text-dark text-center mb-16 tracking-tight"
        >
          Esse kit foi feito para você se... 🎯
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {[
            "Quer atividades prontas sem gastar horas pesquisando no Google",
            "Deseja que seus alunos desenvolvam leitura crítica de verdade",
            "Precisa de material 100% alinhado à BNCC e organizado",
            "Atende do 1º ao 5º ano e quer ter tudo em um só lugar",
            "Está cansada de improvisar na véspera da aula",
            "Busca economizar tempo com qualidade pedagógica impecável"
          ].map((text, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/80 p-6 rounded-2xl md:rounded-3xl flex items-center gap-4 shadow-sm border-l-4 border-brand-pink border-t border-r border-b border-white"
            >
              <div className="bg-brand-teal/10 p-2 rounded-full shrink-0">
                <CheckCircle2 className="text-brand-teal" size={24} />
              </div>
              <p className="text-text-dark font-bold text-base md:text-xl leading-snug font-inter">
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Fourth Section: Freedom/Benefits */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-black text-text-dark text-center mb-16 tracking-tight"
        >
          Não é só material. É a sua liberdade de volta. 🕊️
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "267+ atividades prontas",
              desc: "Interpretação e produção de texto para o ano inteiro — sem improvisar.",
              color: "bg-soft-sage",
              icon: GraduationCap,
              iconColor: "bg-brand-teal"
            },
            {
              title: "Textos que prendem",
              desc: "Selecionados para cada faixa etária, com perguntas que desenvolvem o raciocínio.",
              color: "bg-soft-peach",
              icon: CalendarCheck,
              iconColor: "bg-brand-amber"
            },
            {
              title: "Do 1º ao 5º ano",
              desc: "Material completo para quem atende mais de uma turma ou quer ter tudo em mãos.",
              color: "bg-soft-rose",
              icon: Layers,
              iconColor: "bg-brand-pink"
            },
            {
              title: "Pronto para imprimir",
              desc: "PDF editável, funciona em qualquer impressora, colorido ou preto e branco.",
              color: "bg-soft-lavender",
              icon: TrendingUp,
              iconColor: "bg-brand-indigo"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`${item.color} p-8 rounded-[2.5rem] flex items-start gap-6 shadow-sm border border-white group hover:shadow-xl transition-all`}
            >
              <div className={`${item.iconColor} p-4 rounded-2xl shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                <item.icon className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-black text-text-dark mb-2">{item.title}</h3>
                <p className="text-text-muted leading-relaxed font-semibold font-inter">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Fifth Section: Specific Kits */}
      <section className="relative z-10 py-24 bg-soft-peach bg-stars">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-black text-text-dark text-center mb-16 tracking-tight"
          >
            Um kit completo para cada nível ✏️
          </motion.h2>

          <div className="flex flex-col gap-6">
            {[
              { title: "Kit 1º Ano", text: "Textos curtos com questões de interpretação e produção para quem está começando a ler.", color: "text-brand-indigo", bg: "bg-soft-lavender", icon: Book },
              { title: "Kit 2º Ano", text: "Atividades de compreensão mais elaboradas e escrita criativa com suporte visual.", color: "text-brand-teal", bg: "bg-soft-sage", icon: Book },
              { title: "Kit 3º Ano", text: "Interpretação aprofundada, produção argumentativa e desafios de escrita.", color: "text-brand-amber", bg: "bg-soft-peach", icon: Book },
              { title: "Kit 4º Ano", text: "Textos mais longos, inferência e produção textual com começo, meio e fim.", color: "text-brand-pink", bg: "bg-soft-rose", icon: Book },
              { title: "Kit 5º Ano", text: "Interpretação avançada, gêneros variados e produção argumentativa.", color: "text-indigo-600", bg: "bg-indigo-50", icon: Book },
              { title: "Visual Encantador", text: "Ilustrações que engajam e motivam — pronto para imprimir e aplicar.", color: "text-rose-500", bg: "bg-rose-50", icon: Palette },
              { title: "PDF Inteligente", text: "Personalize se quiser, ou imprima direto do jeito que está.", color: "text-slate-500", bg: "bg-slate-50", icon: FileText }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${item.bg} p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] flex items-center gap-6 shadow-sm border border-white group hover:shadow-xl transition-all`}
              >
                <div className={`${item.color} p-4 rounded-xl md:rounded-2xl shrink-0 group-hover:scale-110 transition-transform bg-white/80`}>
                  <item.icon size={32} className="relative z-10" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg md:text-2xl font-black text-text-dark mb-1">{item.title}</h3>
                  <p className="text-text-muted text-sm md:text-base leading-relaxed font-semibold font-inter">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sixth Section: Preview/Carousel */}
      <section className="relative z-10 py-24 overflow-hidden bg-white">
        <div className="max-w-6xl mx-auto px-6 mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-brand-teal/10 text-brand-teal px-6 py-2 rounded-full font-black text-sm mb-6 uppercase tracking-widest"
          >
            Amostras Reais
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-black text-text-dark tracking-tight"
          >
            Dá uma espiadinha no material 👀
          </motion.h2>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full max-w-7xl mx-auto px-4 md:px-12 py-16 bg-soft-sage rounded-[3rem] md:rounded-[5rem] shadow-inner mb-12">
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-4 bg-brand-pink p-5 rounded-full shadow-lg rotate-12 z-20 border-4 border-white lg:block hidden">
             <Star className="text-white fill-white" size={32} />
          </div>
          <div className="absolute -bottom-10 -left-4 bg-brand-amber p-5 rounded-2xl shadow-xl -rotate-12 z-20 border-4 border-white lg:block hidden">
             <Pencil size={32} className="text-white" />
          </div>

          <div className="relative overflow-hidden">
            <motion.div 
              className="flex gap-4 md:gap-10"
              animate={{ x: [0, "-50%"] }}
              transition={{ duration: 30, ease: "linear", repeat: Infinity }}
              style={{ width: "fit-content" }}
            >
              {[
                "https://i.ibb.co/v4MpVCyN/amostra-1-Bb7-Emq4-H.png",
                "https://i.ibb.co/Z6cpC5wC/amostra-2-DCxhnge-K.png",
                "https://i.ibb.co/60VCxxZq/amostra-3-9l1116-Mc.png",
                "https://i.ibb.co/dJm2H94V/amostra-4-Dy-R6x8un.png",
                "https://i.ibb.co/BktMGVb/amostra-5-Bk62-Jw-BK.png",
                "https://i.ibb.co/GfYNwBXB/amostra-6-C9-SVogpo.png",
                "https://i.ibb.co/tPkW3NZP/amostra-7-B3-Pm-XLAg.png",
                "https://i.ibb.co/v4MpVCyN/amostra-1-Bb7-Emq4-H.png",
                "https://i.ibb.co/Z6cpC5wC/amostra-2-DCxhnge-K.png",
                "https://i.ibb.co/60VCxxZq/amostra-3-9l1116-Mc.png",
                "https://i.ibb.co/dJm2H94V/amostra-4-Dy-R6x8un.png",
                "https://i.ibb.co/BktMGVb/amostra-5-Bk62-Jw-BK.png"
              ].map((url, i) => (
                <div key={i} className="flex-shrink-0 w-[260px] md:w-[480px] bg-white p-2 md:p-4 rounded-[2rem] md:rounded-[3rem] shadow-2xl border-4 border-white relative group transition-transform hover:-translate-y-4">
                  <div className="bg-soft-rose rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden aspect-[3/4.2] flex items-center justify-center">
                    <img
                      src={url}
                      alt={`Amostra ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="text-center mt-12 px-6">
          <p className="text-text-muted font-bold text-xl md:text-3xl flex items-center justify-center gap-4">
            Essas são só algumas páginas do kit! 📖
          </p>
        </div>
      </section>

      {/* Seventh Section: 3 Steps */}
      <section className="relative z-10 py-24 bg-soft-rose/30">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-black text-text-dark text-center mb-16 tracking-tight"
          >
            Sua aula pronta em 3 passos 🚀
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { num: "1", title: "Comprou", text: "Acesso imediato ao arquivo digital após a confirmação.", icon: Download, color: "bg-brand-pink" },
              { num: "2", title: "Imprimiu", text: "Funciona em qualquer impressora. Colorido ou P&B.", icon: Printer, color: "bg-brand-teal" },
              { num: "3", title: "Aplicou", text: "Material pronto para brilhar na sala de aula agora mesmo.", icon: Smile, color: "bg-brand-indigo" }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/80 backdrop-blur-sm p-10 rounded-[3rem] flex flex-col items-center text-center shadow-lg border border-white group hover:shadow-xl transition-all"
              >
                <span className="text-6xl md:text-8xl font-black text-brand-pink/10 absolute -top-4 left-6 select-none leading-none">
                  {step.num}
                </span>
                <div className={`${step.color} p-5 rounded-2xl mb-8 shadow-xl group-hover:scale-110 transition-transform`}>
                  <step.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-text-dark mb-4">{step.title}</h3>
                <p className="text-text-muted font-semibold leading-relaxed font-inter">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eighth Section: Bonuses */}
      <section className="relative z-10 py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-black text-text-dark mb-4 tracking-tight">
              Presentes Exclusivos 🎁
            </h2>
            <p className="text-xl text-text-muted font-medium font-inter">Quem compra hoje leva o dobro de valor</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { title: "Gabarito Completo", desc: "Todas as respostas organizadas para sua correção rápida.", price: "R$9,90", icon: ClipboardCheck, color: "bg-soft-rose", accent: "text-brand-pink" },
              { title: "Ficha de Progresso", desc: "Acompanhe a evolução de cada aluno individualmente.", price: "R$7,90", icon: BarChart3, color: "bg-soft-lavender", accent: "text-brand-indigo" },
              { title: "Sequência Didática", desc: "Como usar o material passo a passo no seu ano letivo.", price: "R$12,90", icon: CalendarDays, color: "bg-soft-peach", accent: "text-brand-amber" }
            ].map((bonus, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`${bonus.color} p-8 rounded-[3rem] flex flex-col items-center text-center shadow-lg border border-white relative group`}
              >
                <div className="absolute -top-3 right-8 bg-brand-pink text-white text-[10px] font-black px-4 py-1 rounded-full shadow-lg z-10 uppercase tracking-widest">
                  Grátis hoje
                </div>
                <div className="bg-white/80 p-5 rounded-2xl mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <bonus.icon className={bonus.accent} size={36} />
                </div>
                <h3 className="text-2xl font-black text-text-dark mb-2">{bonus.title}</h3>
                <p className="text-text-muted font-semibold mb-6 flex-grow font-inter">{bonus.desc}</p>
                <div className="text-xs font-bold text-brand-pink line-through opacity-60">Valor regular: {bonus.price}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Fluência Leitora", desc: "Sequências de leitura progressiva para entonação e compreensão oral.", price: "R$14,90", icon: BookOpenCheck, bg: "bg-soft-sage", accent: "text-brand-teal" },
              { title: "Gêneros Textuais", desc: "Atividades por gênero: fábula, notícia, carta, tirinha e mais.", price: "R$19,90", icon: FileEdit, bg: "bg-soft-rose", accent: "text-brand-pink" }
            ].map((excl, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className={`${excl.bg} p-8 rounded-[3rem] flex flex-col items-center text-center shadow-lg border border-white relative group h-full`}
              >
                <div className="absolute -top-3 right-8 bg-brand-indigo text-white text-[10px] font-black px-4 py-1 rounded-full shadow-lg z-10 uppercase tracking-widest">
                  Exclusivo Premium
                </div>
                <div className="bg-white/80 p-5 rounded-2xl mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <excl.icon className={excl.accent} size={36} />
                </div>
                <h3 className="text-2xl font-black text-text-dark mb-2">{excl.title}</h3>
                <p className="text-text-muted font-semibold mb-6 leading-relaxed font-inter">{excl.desc}</p>
                <div className="text-xs font-bold text-brand-pink line-through opacity-60 italic">Incluso no Kit Premium</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ninth Section: High-Impact Quote */}
      <section className="relative z-10 py-32 bg-brand-pink overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-stars opacity-10" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Sparkles className="text-white w-12 h-12 mx-auto opacity-50" />
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-white leading-tight mb-12 tracking-tight"
          >
            "Minha turma evoluiu muito em leitura. As atividades são bem elaboradas e os alunos realmente interpretam."
          </motion.blockquote>

          <div className="flex flex-col items-center gap-2">
            <p className="text-white text-xl md:text-2xl font-black">
              — Professora Ana, 2º ano 👩‍🏫
            </p>
          </div>
        </div>
      </section>

      {/* Tenth Section: Testimonials Grid */}
      <section id="depoimentos" className="relative z-10 py-24 bg-soft-rose/20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-text-dark text-center mb-16 tracking-tight"
          >
            Professoras que transformaram suas salas 🗨️
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                text: "Minhas alunas amaram as atividades! O material é lindo e economizei muito tempo no meu planejamento.",
                name: "Ana Paula",
                city: "São Paulo, SP",
                color: "bg-white"
              },
              {
                text: "Melhor investimento que fiz! Os textos são perfeitos para a faixa etária e muito envolventes.",
                name: "Carla Souza",
                city: "Belo Horizonte, MG",
                color: "bg-white"
              },
              {
                text: "Recomendo demais! Material completo e prático. Meus alunos pedem para fazer as atividades.",
                name: "Juliana Mendes",
                city: "Curitiba, PR",
                color: "bg-white"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`${item.color} p-10 rounded-[3rem] shadow-xl border border-soft-rose flex flex-col h-full group hover:-translate-y-2 transition-all`}
              >
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={18} className="fill-brand-amber text-brand-amber" />
                  ))}
                </div>
                <p className="text-text-dark font-semibold italic text-lg leading-relaxed mb-10 flex-grow font-inter">
                  "{item.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-soft-rose rounded-full flex items-center justify-center text-2xl shadow-inner border-2 border-white">
                    👩‍🏫
                  </div>
                  <div className="text-left">
                    <h4 className="font-black text-text-dark text-lg">{item.name}</h4>
                    <p className="text-text-muted text-xs font-bold uppercase tracking-widest">{item.city}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eleventh Section: Pricing/Kits */}
      <section id="planos" className="relative z-10 py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight"
            >
              Escolha o seu kit ✨
            </motion.h2>
            <p className="text-slate-600 text-xl font-bold">
              Comece com o essencial ou leve tudo de uma vez
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Kit Essencial */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[4rem] p-8 md:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-soft-rose flex flex-col h-full relative group hover:shadow-xl transition-all"
            >
              <div className="text-center mb-10">
                <h3 className="text-3xl md:text-4xl font-black text-text-dark mb-4 group-hover:text-brand-pink transition-colors">Kit Essencial</h3>
                <div className="flex flex-col items-center gap-1">
                  <p className="text-text-muted line-through font-bold text-lg">De R$59,90</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-black text-text-dark">R$</span>
                    <span className="text-6xl md:text-8xl font-black text-brand-pink tracking-tighter">17,90</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-5 mb-12 flex-grow">
                {[
                  "267+ atividades de interpretação e produção",
                  "Material do 1º ao 5º ano completo",
                  "PDF pronto para imprimir e editável",
                  "Bônus: Gabarito completo de todas as questões",
                  "Bônus: Ficha de acompanhamento de leitura",
                  "Acesso vitalício ao material"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-text-dark font-bold text-base md:text-lg">
                    <div className="bg-brand-teal rounded-full p-1 mt-1 flex-shrink-0 shadow-sm">
                      <CheckCircle2 className="text-white w-4 h-4" />
                    </div>
                    <span className="font-inter">{item}</span>
                  </li>
                ))}
                {[
                  "Atividades de Leitura Fluente (Exclusivo Premium)",
                  "Pack Gêneros Textuais (Exclusivo Premium)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-text-muted/40 font-bold select-none italic text-sm md:text-base">
                    <Lock className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span className="line-through">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-4">
                <button className="w-full bg-brand-teal hover:bg-brand-teal/90 text-white py-6 md:py-8 rounded-[2.5rem] text-xl md:text-2xl font-black shadow-lg hover:shadow-xl transition-all active:scale-95 cursor-pointer">
                  Quero o Kit Essencial
                </button>
              </div>
            </motion.div>

            {/* Kit Premium */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Highlight Badge */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-30 bg-brand-indigo text-white px-8 py-3 rounded-full font-black text-sm flex items-center gap-2 shadow-2xl animate-pulse whitespace-nowrap">
                <Star className="w-4 h-4 fill-brand-amber text-brand-amber" />
                OFERTA MAIS ESCOLHIDA
              </div>

              <div className="bg-white rounded-[4rem] p-8 md:p-14 shadow-[0_40px_100px_rgba(99,102,241,0.2)] border-4 border-brand-indigo flex flex-col h-full bg-[radial-gradient(circle_at_top_right,_#F5F3FF_0%,_transparent_50%)] from-indigo-50 overflow-hidden relative">
                <div className="text-center mb-10">
                   <div className="mb-12 flex justify-center">
                      <div className="relative w-48 h-48 md:w-64 md:h-64 group">
                         <div className="absolute inset-0 bg-brand-indigo/10 rounded-full blur-3xl group-hover:bg-brand-indigo/20 transition-colors"></div>
                         <img 
                            src="https://i.ibb.co/v4MpVCyN/amostra-1-Bb7-Emq4-H.png" 
                            alt="Premium" 
                            className="relative z-10 w-full h-full object-contain rotate-2 drop-shadow-2xl transition-transform group-hover:rotate-0 duration-500"
                         />
                         <div className="absolute -top-4 -right-4 bg-brand-amber text-white p-4 rounded-2xl shadow-xl rotate-12 font-black text-lg border-2 border-white">
                            +2 BÔNUS
                         </div>
                      </div>
                   </div>
                   <h3 className="text-4xl md:text-5xl font-black text-text-dark mb-4">Mestre do Texto</h3>
                   <p className="text-brand-indigo font-black text-sm tracking-[0.2em] uppercase mb-8">O Combo Definitivo</p>
                   
                   <div className="flex flex-col items-center gap-2 mb-10">
                      <p className="text-text-muted line-through font-bold text-xl opacity-60">De R$97,00</p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-black text-text-dark">R$</span>
                        <span className="text-7xl md:text-9xl font-black text-brand-indigo tracking-tighter">26,90</span>
                      </div>
                      <div className="bg-brand-amber/20 text-brand-amber px-6 py-2 rounded-full text-sm font-black shadow-sm border border-brand-amber/10 mt-4">
                        Economia real de R$70,10
                      </div>
                   </div>
                </div>

                <ul className="space-y-5 mb-14 flex-grow">
                  <li className="flex items-start gap-4 text-text-dark font-black text-lg md:text-xl">
                    <div className="bg-brand-indigo rounded-full p-1 mt-1 flex-shrink-0 shadow-sm">
                      <CheckCircle2 className="text-white w-4 h-4" />
                    </div>
                    <span className="font-inter">Tudo do Kit Essencial</span>
                  </li>
                  {[
                    "✨ Pack Exclusivo: Fluência Leitora (1º ao 5º ano)",
                    "✨ Pack Exclusivo: Gêneros Textuais BNCC (1º ao 5º ano)",
                    "Material de Produção Argumentativa Avançada"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-brand-indigo font-black italic text-base md:text-lg">
                      <div className="bg-brand-indigo rounded-full p-1 mt-1 flex-shrink-0 shadow-sm">
                        <CheckCircle2 className="text-white w-4 h-4" />
                      </div>
                      <span className="font-inter">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-6">
                  <button className="w-full bg-brand-indigo hover:bg-brand-indigo/90 text-white py-8 md:py-10 rounded-[3rem] text-xl md:text-3xl font-black shadow-[0_20px_50px_rgba(99,102,241,0.4)] hover:shadow-[0_25px_70px_rgba(99,102,241,0.5)] transition-all active:scale-95 flex items-center justify-center gap-4 cursor-pointer">
                    🎯 Quero o Combo Completo
                  </button>
                  <p className="flex items-center justify-center gap-3 text-text-muted text-sm font-black text-center uppercase tracking-widest opacity-60">
                    <ShieldCheck className="w-5 h-5 text-brand-teal" />
                    Compra 100% Segura · 7 Dias de Garantia
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Twelfth Section: Guarantee & FAQ */}
      <section className="relative z-10 py-32 px-6 bg-soft-rose/20">
        <div className="max-w-4xl mx-auto">
          {/* Guarantee */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center mb-32 bg-white p-12 md:p-20 rounded-[4rem] shadow-2xl border border-white"
          >
            <div className="inline-flex items-center justify-center bg-brand-teal p-6 rounded-[2rem] mb-10 shadow-[0_20px_40px_rgba(54,186,152,0.3)] text-white">
              <ShieldCheck size={64} />
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-text-dark mb-8 tracking-tight">
              Satisfação Garantida 🛡️
            </h2>
            <p className="text-text-muted text-xl md:text-2xl font-semibold leading-relaxed font-inter max-w-2xl mx-auto">
              Teste por 7 dias. Se você não sentir que o material transformou suas aulas, devolvemos cada centavo. Sem perguntas.
            </p>
          </motion.div>

          {/* FAQ */}
          <div id="faq" className="space-y-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-text-dark text-center mb-20 tracking-tight"
            >
              Perguntas Frequentes 😉
            </motion.h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-[2.5rem] border border-soft-rose shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-8 md:px-12 py-8 flex items-center justify-between text-left hover:bg-soft-rose/10 transition-colors"
                  >
                    <span className="text-xl md:text-2xl font-black text-text-dark tracking-tight">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-brand-pink"
                    >
                      <ChevronDown size={32} strokeWidth={3} />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "circOut" }}
                      >
                        <div className="px-8 md:px-12 pb-10 text-text-muted font-semibold leading-relaxed text-lg md:text-xl font-inter">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Confetti */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 4}px`,
              height: `${Math.random() * 10 + 4}px`,
              backgroundColor: ['#FF6B8B', '#36BA98', '#6366F1', '#F59E0B'][Math.floor(Math.random() * 4)],
              opacity: Math.random() * 0.3 + 0.1,
            }}
          />
        ))}
      </div>
      
      {/* Footer Branding */}
      <footer className="relative z-10 py-12 text-center text-text-muted/60 font-black text-xs uppercase tracking-[0.3em]">
        © 2024 Combo Mestre do Texto · Feito com ❤️ para professoras
      </footer>
    </div>
  );
}
