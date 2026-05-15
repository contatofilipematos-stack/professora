/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Star, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Download, 
  ShieldCheck, 
  ChevronDown, 
  Clock, 
  BookOpen, 
  Smile, 
  Zap, 
  Users,
  Shield,
  Award,
  Files,
  Gift,
  CalendarDays,
  ClipboardCheck,
  Palette,
  Pencil,
  FileText,
  BookCheck
} from "lucide-react";
import { saveUTMs, appendUTMs } from "./lib/utm";

const testimonials = [
  {
    name: "Profa. Ana Márcia",
    role: "Fundamental I",
    image: "https://i.ibb.co/B2dpP09b/images.jpg",
    text: "Material de extrema qualidade. As atividades são inteligentes e realmente prendem a atenção dos pequenos. Recomendo muito!"
  },
  {
    name: "Juliana Ribeiro",
    role: "2º e 3º Ano",
    image: "https://i.ibb.co/cc9BTc0b/download.jpg",
    text: "Meus domingos voltaram a ser de lazer. É só abrir o PDF, escolher e imprimir. O alinhamento com a BNCC facilita tudo na escola."
  },
  {
    name: "Sandra G. Lira",
    role: "Ensino Fundamental",
    image: "https://i.ibb.co/JFSYDBkF/36eac3c82596adfab2a9f4ce6a35345f.jpg",
    text: "Os alunos adoraram os textos. São temas atuais que geram interesse imediato. Melhor investimento que fiz para minhas aulas este ano."
  }
];

const faqs = [
  {
    question: "Como recebo o material?",
    answer: "O acesso é imediato! Assim que o pagamento for confirmado, você receberá um e-mail com o link para baixar tudo em PDF. Rápido e prático."
  },
  {
    question: "O material está atualizado com a BNCC?",
    answer: "Sim, 100%. Todas as atividades foram desenvolvidas seguindo rigorosamente as competências e habilidades da BNCC para o Ensino Fundamental."
  },
  {
    question: "Posso imprimir quantas vezes quiser?",
    answer: "Sim! O acesso é vitalício. Você baixa o arquivo e ele é seu para sempre, podendo usar com diferentes turmas ao longo dos anos."
  },
  {
    question: "Serve para qual série?",
    answer: "O material é completo e abrange do 1º ao 5º ano do Ensino Fundamental, com níveis de dificuldade progressivos."
  }
];

const bonusItems = [
  {
    title: "Fluência Leitora",
    tag: "BÔNUS 1",
    desc: "Um pack focado em acelerar a velocidade e compreensão de leitura dos seus alunos com exercícios dinâmicos.",
    iconName: "BookOpen"
  },
  {
    title: "Gêneros Textuais BNCC",
    tag: "BÔNUS 2",
    desc: "Atividades específicas para trabalhar todos os gêneros exigidos pela BNCC, do 1º ao 5º ano.",
    iconName: "FileText"
  },
  {
    title: "Escrita Criativa",
    tag: "BÔNUS 3",
    desc: "Estimule a imaginação com propostas de redação e produção textual que os alunos adoram fazer.",
    iconName: "Pencil"
  }
];

const insideItems = [
  { title: "267+ Atividades", iconName: "Files", desc: "Interpretação e produção de texto." },
  { title: "Gabarito Incluso", iconName: "CheckCircle2", desc: "Para correção rápida e sem erros." },
  { title: "Download em PDF", iconName: "Download", desc: "Arquivo organizado e pronto para imprimir." },
  { title: "Acesso Vitalício", iconName: "Award", desc: "O material é seu para sempre." },
  { title: "Envio Imediato", iconName: "Zap", desc: "Receba tudo no seu e-mail agora." },
];

const pulseVariants = {
  animate: {
    scale: [1, 1.02, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const benefitItems = [
  {
    iconName: "Clock",
    title: "Economia de Tempo",
    desc: "Planejamento que duraria horas agora é feito em segundos. É só escolher, imprimir e aplicar.",
    color: "bg-blue-50 text-blue-600"
  },
  {
    iconName: "Zap",
    title: "Engajamento Real",
    desc: "Textos selecionados que despertam a curiosidade e fazem os alunos quererem ler de verdade.",
    color: "bg-rose-50 text-rose-600"
  },
  {
    iconName: "ShieldCheck",
    title: "Segurança Pedagógica",
    desc: "Material estruturado, com gabarito e totalmente alinhado às diretrizes da BNCC.",
    color: "bg-emerald-50 text-emerald-600"
  }
];

const profileAvatars = [
  "https://i.ibb.co/B2dpP09b/images.jpg",
  "https://i.ibb.co/cc9BTc0b/download.jpg",
  "https://i.ibb.co/gFQmn1h0/images.jpg",
  "https://i.ibb.co/ZzRNcKM3/download.jpg",
  "https://i.ibb.co/JFSYDBkF/36eac3c82596adfab2a9f4ce6a35345f.jpg"
];

const sampleImages = [
  "https://i.ibb.co/v4MpVCyN/amostra-1-Bb7-Emq4-H.png",
  "https://i.ibb.co/Z6cpC5wC/amostra-2-DCxhnge-K.png",
  "https://i.ibb.co/60VCxxZq/amostra-3-9l1116-Mc.png",
  "https://i.ibb.co/dJm2H94V/amostra-4-Dy-R6x8un.png",
  "https://i.ibb.co/BktMGVb/amostra-5-Bk62-Jw-BK.png",
  "https://i.ibb.co/GfYNwBXB/amostra-6-C9-SVogpo.png",
  "https://i.ibb.co/v4MpVCyN/amostra-1-Bb7-Emq4-H.png",
  "https://i.ibb.co/Z6cpC5wC/amostra-2-DCxhnge-K.png",
];

const IconMap: Record<string, any> = {
  BookOpen,
  FileText,
  Pencil,
  Files,
  CheckCircle2,
  Download,
  Award,
  Zap,
  Clock,
  ShieldCheck,
  Star,
  ArrowRight,
  Sparkles,
  Shield,
  Smile,
  ChevronDown,
  Gift
};

function DynamicIcon({ name, size, className }: { name: string; size?: number; className?: string }) {
  const Icon = IconMap[name];
  if (!Icon) return null;
  return <Icon size={size} className={className} />;
}


export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    saveUTMs();
  }, []);

  const checkoutUrl = appendUTMs("https://pay.lowify.com.br/checkout.php?product_id=ImZoQR");

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-text-dark selection:bg-brand-indigo/10">
      {/* --- 1. HERO SECTION --- */}
      <header className="relative pt-16 pb-24 md:pt-28 md:pb-36 overflow-hidden bg-grid">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#f0f9ff_0%,_transparent_50%)] -z-10" />
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-pink/10 text-brand-pink px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-8">
              <Sparkles size={14} />
              <span>Material Premium para Professores</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight mb-8">
              267+ atividades de interpretação e produção de texto — <span className="text-brand-pink relative inline-block">do 1º ao 5º ano <span className="absolute bottom-1 left-0 w-full h-[6px] bg-brand-amber rounded-full -z-10 opacity-50"></span></span> 📚
            </h1>
            
            <p className="text-xl md:text-2xl text-text-muted mb-12 leading-relaxed font-medium">
              Dê adeus às horas de planejamento. Tenha em mãos <span className="text-text-dark font-bold">267+ atividades</span> de interpretação prontas para imprimir, alinhadas à BNCC.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 items-center">
              <motion.a 
                href="#planos"
                variants={pulseVariants}
                animate="animate"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-brand-indigo hover:bg-brand-indigo/90 text-white px-12 py-6 rounded-full font-black text-xl shadow-premium transition-all flex items-center justify-center text-center"
              >
                QUERO ENSINAR MELHOR
              </motion.a>
              <div className="flex flex-col">
                <div className="flex -space-x-2">
                  {profileAvatars.map((url, i) => (
                    <img 
                      key={i} 
                      src={url} 
                      alt={`Professor ${i + 1}`}
                      className="w-10 h-10 rounded-full border-2 border-white object-cover bg-slate-200 shadow-sm" 
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-text-muted mt-2">+8.500 PROFESSORAS JÁ BAIXARAM</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:block"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-white">
              <img 
                src="https://i.ibb.co/6c6r8sV2/criadora-D8-HSYWBF.jpg" 
                alt="Material Didático" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-8 -left-8 glass p-6 rounded-3xl shadow-premium z-20 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="bg-brand-teal text-white p-3 rounded-2xl">
                  <Award size={32} />
                </div>
                <div>
                  <p className="text-xs font-black text-brand-teal uppercase">Qualidade</p>
                  <p className="text-xl font-black">100% BNCC</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* --- 2. BENEFITS SECTION --- */}
      <section className="py-24 bg-white border-y border-slate-100 bg-dots">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">O que você ganha ao garantir seu acesso hoje</h2>
            <p className="text-xl text-text-muted font-medium">Mais do que atividades, entregamos tempo e tranquilidade para o seu dia a dia.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {benefitItems.map((benefit, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 rounded-[2.5rem] bg-[#fdfdfd] border border-slate-100 shadow-sm hover:shadow-premium transition-all"
              >
                <div className={`${benefit.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm`}>
                  <DynamicIcon name={benefit.iconName} size={32} />
                </div>
                <h3 className="text-2xl font-black mb-4">{benefit.title}</h3>
                <p className="text-text-muted leading-relaxed font-medium">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. SOCIAL PROOF (SNEAK PEEK) --- */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="max-w-2xl">
             <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-left">Dê uma olhada no que te espera...</h2>
             <div className="flex items-center gap-2">
                <div className="flex text-brand-amber">
                   {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <span className="text-sm font-black text-text-muted uppercase tracking-widest">+8.500 Professoras Satisfeitas</span>
             </div>
          </div>
          <div className="flex gap-4">
             <div className="p-4 rounded-full border border-slate-200 text-slate-400 hover:text-brand-indigo hover:border-brand-indigo transition-colors cursor-pointer hidden md:block">
                <ChevronDown className="rotate-90" />
             </div>
             <div className="p-4 rounded-full border border-slate-200 text-slate-400 hover:text-brand-indigo hover:border-brand-indigo transition-colors cursor-pointer hidden md:block">
                <ChevronDown className="-rotate-90" />
             </div>
          </div>
        </div>

        <motion.div 
           className="flex gap-6 px-6"
           animate={{ x: [0, -1000] }}
           transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {sampleImages.map((url, i) => (
            <div key={i} className="flex-shrink-0 w-[300px] h-[420px] bg-white p-3 rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden group">
              <img src={url} className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
          ))}
        </motion.div>
      </section>

      {/* --- 4. WHAT'S INSIDE --- */}
      <section className="py-24 bg-slate-900 text-white rounded-[4rem] mx-4 md:mx-10 my-10 overflow-hidden relative bg-grid-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-indigo opacity-10 blur-3xl rounded-full translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <h2 className="text-3xl md:text-6xl font-black mb-16 tracking-tight">O que você estará baixando agora?</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {insideItems.map((item, i) => (
                <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-left">
                  <div className="text-brand-indigo mb-6">
                  <DynamicIcon name={item.iconName} size={40} />
                </div>
                  <h3 className="text-xl font-black mb-2">{item.title}</h3>
                  <p className="text-slate-400 font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* --- BONUS SECTION --- */}
      <section className="py-24 bg-brand-indigo/5 relative overflow-hidden bg-dots">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-brand-amber text-white px-5 py-2 rounded-full text-sm font-black uppercase tracking-widest mb-6 shadow-lg shadow-amber-200">
              <Gift size={18} />
              <span>Presentes Exclusivos</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">O que você ganha de bônus comprando HOJE</h2>
            <p className="text-xl text-text-muted font-medium">Além das 267 atividades, preparamos recursos extras para facilitar ainda mais sua rotina.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {bonusItems.map((bonus, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-10 rounded-[3rem] shadow-premium relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-4 bg-brand-amber/10 text-brand-amber font-black text-xs rounded-bl-2xl">
                  GRÁTIS
                </div>
                <div className="text-brand-amber mb-6">
                  <DynamicIcon name={bonus.iconName} className="w-10 h-10" />
                </div>
                <p className="text-xs font-black tracking-widest text-brand-amber mb-4 uppercase">{bonus.tag}</p>
                <h3 className="text-2xl font-black mb-4">{bonus.title}</h3>
                <p className="text-text-muted font-medium leading-relaxed">{bonus.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <motion.a 
              href="#planos"
              variants={pulseVariants}
              animate="animate"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex bg-brand-pink hover:bg-brand-pink/90 text-white px-12 py-6 rounded-full font-black text-xl shadow-premium transition-all"
            >
              QUERO TODOS OS BÔNUS AGORA
            </motion.a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* --- TESTIMONIALS SECTION --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">O que dizem as professoras</h2>
            <p className="text-lg text-text-muted font-medium">Quem já baixou e aplica em sala de aula todos os dias.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="p-10 rounded-[3rem] bg-[#fafafa] border border-slate-100 flex flex-col h-full">
                <div className="flex text-brand-amber mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-lg font-medium italic text-text-dark leading-relaxed mb-10 flex-grow">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4 border-t border-slate-200 pt-8">
                  <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover shadow-sm bg-slate-200" referrerPolicy="no-referrer" />
                  <div>
                    <p className="font-black text-text-dark">{t.name}</p>
                    <p className="text-xs font-black uppercase tracking-widest text-text-muted">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. OFFER SECTION (RE-DESIGNED CARDS) --- */}
      <section id="planos" className="py-32 bg-[#fafafa] bg-grid">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Comece agora mesmo</h2>
            <p className="text-xl text-text-muted font-medium">Invista na sua carreira e na qualidade das suas aulas com um valor simbólico.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
            {/* Standard Tier */}
            <motion.div 
               whileHover={{ y: -5 }}
               className="bg-white rounded-[3rem] p-10 md:p-14 border border-slate-200 flex flex-col items-center text-center shadow-sm relative overflow-hidden"
            >
              <div className="mb-10">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4 block">Kit Essencial</span>
                <p className="text-text-muted line-through font-bold text-lg mb-2">De R$19,90</p>
                <div className="flex items-center justify-center gap-1">
                  <span className="text-4xl font-black">R$</span>
                  <span className="text-8xl font-black tracking-tighter">9,90</span>
                </div>
              </div>

              <div className="space-y-4 mb-12 w-full text-left">
                {[
                  "267+ Atividades (1º ao 5º ano)",
                  "PDF Pronto para Imprimir",
                  "Gabarito Completo",
                  "Ficha de Progresso Individual",
                  "Acesso Vitalício"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-brand-teal" />
                    <span className="font-bold text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.a 
                href={checkoutUrl}
                variants={pulseVariants}
                animate="animate"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-slate-900 border-2 border-slate-900 hover:bg-slate-800 text-white py-6 rounded-full font-black text-xl transition-all flex items-center justify-center"
              >
                RECEBER MATERIAL BÁSICO
              </motion.a>
              <p className="mt-6 text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                 <Shield size={14} /> Pagamento 100% Seguro
              </p>
            </motion.div>

            {/* Premium Tier */}
            <motion.div 
               whileHover={{ y: -5 }}
               className="bg-white rounded-[3rem] p-10 md:p-14 border-4 border-brand-indigo flex flex-col items-center text-center shadow-premium relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 bg-brand-indigo text-white px-6 py-2 rounded-bl-3xl font-black text-xs uppercase tracking-widest">
                MAIS ESCOLHIDO
              </div>
              
              <div className="mb-10">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-brand-indigo mb-4 block">Combo Mestre do Texto</span>
                <p className="text-text-muted line-through font-bold text-lg mb-2">De R$29,90</p>
                <div className="flex items-center justify-center gap-1">
                  <span className="text-4xl font-black text-brand-indigo">R$</span>
                  <span className="text-8xl font-black tracking-tighter text-brand-indigo">19,90</span>
                </div>
                <div className="mt-4 inline-block bg-brand-amber/10 text-brand-amber px-4 py-1 rounded-full text-xs font-black">
                   ECONOMIZE R$10,00 HOJE
                </div>
              </div>

              <div className="space-y-4 mb-12 w-full text-left">
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-indigo-50">
                   <div className="p-2 rounded-xl bg-brand-indigo text-white">
                      <Zap size={20} />
                   </div>
                   <span className="font-black text-brand-indigo">Tudo do Kit Essencial +</span>
                </div>
                {[
                  "Pack: Fluência Leitora (Focado)",
                  "Pack: Gêneros Textuais BNCC",
                  "Atividades de Escrita Criativa",
                  "Certificado de Conclusão",
                  "Prioridade no Suporte"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-brand-indigo" />
                    <span className="font-bold text-slate-800">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.a 
                href={checkoutUrl}
                variants={pulseVariants}
                animate="animate"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-brand-indigo hover:bg-brand-indigo/95 text-white py-6 rounded-full font-black text-xl transition-all flex items-center justify-center shadow-lg shadow-indigo-200"
              >
                RECEBER MATERIAL COMPLETO
              </motion.a>
              <div className="mt-6 flex flex-col items-center gap-3">
                 <p className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <ShieldCheck size={14} className="text-brand-teal" /> Garantia de 7 Dias Incondicional
                 </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- 6. FAQ & TRUST --- */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">Ainda com dúvida?</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#fafafa] rounded-2xl border border-slate-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-100/50 transition-colors"
                >
                  <span className="text-lg font-black">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-brand-indigo"
                  >
                    <ChevronDown size={24} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <div className="px-8 pb-6 text-text-muted font-medium pt-2">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* --- 7. FOOTER --- */}
      <footer className="py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs font-black uppercase tracking-[0.4em] text-slate-300">
             © 2024 Combo Mestre do Texto · Feito para quem ama ensinar
          </p>
        </div>
      </footer>
    </div>
  );
}
