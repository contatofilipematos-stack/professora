/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Star, 
  ArrowRight, 
  ArrowDown,
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
  BookCheck,
  Search,
  Frown,
  FileX,
  Target,
  TrendingUp,
  Layers,
  Printer,
  ChevronRight,
  GraduationCap,
  Calendar,
  Check,
  Lock
} from "lucide-react";
import { saveUTMs, appendUTMs } from "./lib/utm";

// Safe JSON.stringify for external scripts (like utmify) that might hit circular structures or cross-origin issues
if (typeof window !== 'undefined') {
  const originalStringify = JSON.stringify;
  JSON.stringify = function (value, replacer, space) {
    try {
      return originalStringify(value, replacer, space);
    } catch (err: any) {
      // Catch circular structures or security errors (from cross-origin access)
      const isCircular = err instanceof TypeError && 
        (err.message.includes('circular structure') || err.message.includes('Converting circular structure'));
      const isSecurity = (err.name === 'SecurityError') || 
        (err.message && (err.message.includes('cross-origin') || err.message.includes('Blocked a frame')));

      if (isCircular || isSecurity) {
        const cache = new Set();
        return originalStringify(value, (key, val) => {
          try {
            if (typeof val === 'object' && val !== null) {
              // Specifically ignore Window and other objects that cause trouble
              if (val === window) return undefined;
              
              if (cache.has(val)) return undefined;
              cache.add(val);
            }
            return typeof replacer === 'function' ? replacer(key, val) : val;
          } catch (e) {
            // If we can't even check the object, it's likely a cross-origin window/object
            return undefined;
          }
        }, space);
      }
      throw err;
    }
  } as any;
}

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






const pulseVariants = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const WaveDivider = ({ fillColor, className = "" }: { fillColor: string; className?: string }) => (
  <div className={`absolute bottom-0 left-0 w-full overflow-hidden leading-[0] pointer-events-none ${className}`}>
    <svg 
      viewBox="0 0 1200 120" 
      preserveAspectRatio="none" 
      className="relative block w-full h-[40px] md:h-[70px]"
    >
      <path 
        d="M0,0 C600,120 1200,0 1200,120 H0 Z" 
        fill={fillColor}
      ></path>
    </svg>
  </div>
);


const bonusCards = [
  {
    title: "Gabarito completo",
    desc: "Todas as respostas organizadas para corrigir rápido e com segurança.",
    price: "GRÁTIS",
    originalPrice: "R$ 9,90",
    color: "bg-[#cdf3ec]",
    badge: "BÔNUS",
    badgeColor: "bg-edu-rose",
    iconName: "ClipboardCheck",
    iconColor: "text-teal-600"
  },
  {
    title: "Ficha de acompanhamento de leitura",
    desc: "Registro simples do progresso de cada aluno em interpretação e escrita.",
    price: "GRÁTIS",
    originalPrice: "R$ 7,90",
    color: "bg-[#ede4f5]",
    badge: "BÔNUS",
    badgeColor: "bg-edu-rose",
    iconName: "TrendingUp",
    iconColor: "text-purple-600"
  },
  {
    title: "Sequência didática sugerida",
    desc: "Como usar as 267+ atividades ao longo do ano sem perder o fio pedagógico.",
    price: "GRÁTIS",
    originalPrice: "R$ 12,90",
    color: "bg-[#fef0c3]",
    badge: "BÔNUS",
    badgeColor: "bg-edu-rose",
    iconName: "Calendar",
    iconColor: "text-amber-600"
  },
  {
    title: "Atividades de Leitura Fluente",
    desc: "Sequências de leitura progressiva para desenvolver fluência, entonação e compreensão oral — do 1º ao 5º ano.",
    price: "GRÁTIS",
    originalPrice: "R$ 14,90",
    color: "bg-[#d9eff8]",
    badge: "Exclusivo Premium",
    badgeColor: "bg-[#7c3aed]",
    iconName: "BookOpen",
    iconColor: "text-sky-600"
  },
  {
    title: "Gêneros Textuais — 1º ao 5º ano",
    desc: "Atividades completas por gênero: fábula, poema, notícia, carta, conto, tirinha, receita e muito mais. Alinhado à BNCC.",
    price: "GRÁTIS",
    originalPrice: "R$ 19,90",
    color: "bg-[#fee2d5]",
    badge: "Exclusivo Premium",
    badgeColor: "bg-[#7c3aed]",
    iconName: "Book",
    iconColor: "text-orange-600"
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
    <div className="min-h-screen bg-soft-blue/30 font-sans text-text-dark selection:bg-edu-blue/10">
      {/* --- 1. HERO SECTION --- */}
      <header className="relative pt-16 pb-32 md:pt-28 md:pb-48 overflow-hidden bg-grid bg-soft-blue/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#e0f2fe_0%,_transparent_50%)] -z-10" />
        <WaveDivider fillColor="#ffffff" />
        <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 bg-edu-rose/10 text-edu-rose px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-8">
              <Sparkles size={14} />
              <span>Material Premium para Professores</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[1.2] tracking-tight mb-8 max-w-4xl">
              <span className="block mb-4">267+ atividades de interpretação e produção de texto</span>
              <span className="text-edu-rose block">Do 1º ao 5º ano 📚</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-text-muted mb-12 leading-relaxed font-medium max-w-2xl">
              Dê adeus às horas de planejamento. Tenha em mãos <span className="text-text-dark font-bold">267+ atividades</span> de interpretação prontas para imprimir, alinhadas à BNCC.
            </p>

            <div className="flex flex-col items-center mb-16">
              <motion.a 
                href="#planos"
                variants={pulseVariants}
                animate="animate"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-edu-rose hover:bg-edu-rose/90 text-white px-8 py-4 rounded-full font-black text-base md:text-lg shadow-lg transition-all flex items-center justify-center text-center tracking-tight whitespace-nowrap"
              >
                QUERO MEU KIT →
              </motion.a>
              
              <div className="mt-4 flex items-center gap-2 text-text-muted font-bold text-sm">
                <div className="flex gap-0.5">
                   <ArrowDown size={14} className="text-edu-rose" />
                   <ArrowDown size={14} className="text-edu-rose" />
                </div>
                Download imediato após a compra
              </div>

              <div className="flex flex-col items-center mt-12">
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
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-4xl"
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
              <div className="flex items-center gap-4 text-left">
                <div className="bg-edu-blue text-white p-3 rounded-2xl">
                  <Award size={32} />
                </div>
                <div>
                  <p className="text-xs font-black text-edu-blue uppercase">Qualidade</p>
                  <p className="text-xl font-black">100% BNCC</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-edu-amber/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </header>

      {/* --- NEW SECTION: PAIN POINTS --- */}
      <section className="py-24 bg-white relative overflow-hidden">
        <WaveDivider fillColor="#fff1f2" />
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10 md:mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-5xl font-black text-slate-900 tracking-tight px-4"
            >
              Por que encontrar bons textos virou um pesadelo? 😫
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-3 md:gap-6">
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#fee2d5] p-4 md:p-8 rounded-[1.5rem] md:rounded-[2rem] flex items-start gap-3 md:gap-6 transition-transform hover:scale-[1.02]"
            >
              <div className="bg-brand-pink text-white p-2 md:p-3 rounded-xl md:rounded-2xl flex-shrink-0 shadow-lg">
                <Search className="w-5 h-5 md:w-7 md:h-7" />
              </div>
              <div>
                <h3 className="text-base md:text-xl font-black mb-0.5 md:mb-2 text-slate-900">Textos genéricos do Google</h3>
                <p className="text-[13px] md:text-base text-slate-600 font-medium leading-relaxed">
                  Você perde horas procurando e ainda não acha nada com qualidade pedagógica de verdade.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#ede4f5] p-4 md:p-8 rounded-[1.5rem] md:rounded-[2rem] flex items-start gap-3 md:gap-6 transition-transform hover:scale-[1.02]"
            >
              <div className="bg-brand-pink text-white p-2 md:p-3 rounded-xl md:rounded-2xl flex-shrink-0 shadow-lg">
                <Frown className="w-5 h-5 md:w-7 md:h-7" />
              </div>
              <div>
                <h3 className="text-base md:text-xl font-black mb-0.5 md:mb-2 text-slate-900">Atividades que não engajam</h3>
                <p className="text-[13px] md:text-base text-slate-600 font-medium leading-relaxed">
                  Os alunos fazem por obrigação. Não há interpretação real, só cópia de trecho.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-[#fef0c3] p-4 md:p-8 rounded-[1.5rem] md:rounded-[2rem] flex items-start gap-3 md:gap-6 transition-transform hover:scale-[1.02]"
            >
              <div className="bg-brand-pink text-white p-2 md:p-3 rounded-xl md:rounded-2xl flex-shrink-0 shadow-lg">
                <Clock className="w-5 h-5 md:w-7 md:h-7" />
              </div>
              <div>
                <h3 className="text-base md:text-xl font-black mb-0.5 md:mb-2 text-slate-900">Do zero toda semana</h3>
                <p className="text-[13px] md:text-base text-slate-600 font-medium leading-relaxed">
                  Montar atividade do zero consome energia que você precisava para ensinar.
                </p>
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-[#cdf3ec] p-4 md:p-8 rounded-[1.5rem] md:rounded-[2rem] flex items-start gap-3 md:gap-6 transition-transform hover:scale-[1.02]"
            >
              <div className="bg-brand-pink text-white p-2 md:p-3 rounded-xl md:rounded-2xl flex-shrink-0 shadow-lg">
                <FileX className="w-5 h-5 md:w-7 md:h-7" />
              </div>
              <div>
                <h3 className="text-base md:text-xl font-black mb-0.5 md:mb-2 text-slate-900">Fora da BNCC</h3>
                <p className="text-[13px] md:text-base text-slate-600 font-medium leading-relaxed">
                  Material bonito mas sem alinhamento curricular deixa você insegura na hora de aplicar.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 text-center">
            <motion.a 
              href="#planos"
              variants={pulseVariants}
              animate="animate"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex bg-brand-indigo hover:bg-brand-indigo/90 text-white px-8 py-3.5 rounded-full font-black text-sm md:text-base shadow-premium transition-all tracking-wide whitespace-nowrap"
            >
              QUERO OS MATERIAIS
            </motion.a>
          </div>
        </div>
      </section>

      {/* --- NEW SECTION: AUDIENCE --- */}
      <section className="py-24 bg-soft-pink bg-dots relative overflow-hidden">
        <WaveDivider fillColor="#fffbeb" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black text-slate-900 mb-4"
            >
              Esse kit foi feito para você se...
            </motion.h2>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg border-2 border-edu-rose/20"
            >
              <Target size={32} className="text-edu-rose" />
            </motion.div>
          </div>

          <div className="space-y-4">
            {[
              "Você quer atividades de interpretação prontas sem gastar horas pesquisando",
              "Quer que seus alunos desenvolvam leitura e escrita de verdade, não só copiem",
              "Precisa de material alinhado à BNCC sem complicação",
              "Atende do 1º ao 5º ano — ou mais de uma turma ao mesmo tempo",
              "Está cansada de improvisar na véspera da aula",
              "Quer economizar tempo sem abrir mão da qualidade pedagógica"
            ].map((text, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-5 md:p-6 rounded-2xl border-l-8 border-edu-rose shadow-sm flex items-center gap-4 group hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0">
                  <CheckCircle2 size={24} className="text-edu-blue" />
                </div>
                <p className="text-slate-700 font-bold text-base md:text-lg leading-tight">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <motion.a 
              href="#planos"
              variants={pulseVariants}
              animate="animate"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex bg-brand-pink hover:bg-brand-pink/90 text-white px-8 py-3.5 rounded-full font-black text-sm md:text-base shadow-premium transition-all tracking-wide whitespace-nowrap"
            >
              QUERO OS MATERIAIS
            </motion.a>
          </div>
        </div>
      </section>

      {/* --- NEW SECTION: LIBERDADE --- */}
      <section className="py-24 bg-soft-cream relative overflow-hidden">
        <WaveDivider fillColor="#f0f9ff" />
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight"
            >
              Não é só material extra. É a sua liberdade de volta. 🕊️
            </motion.h2>
          </div>

          <div className="grid gap-3 md:gap-6">
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-[#cdf3ec] p-4 md:p-8 rounded-[1.25rem] md:rounded-[2.5rem] flex items-start gap-3 md:gap-8 transition-all hover:shadow-lg"
            >
              <div className="bg-edu-blue text-white p-2 md:p-4 rounded-xl md:rounded-2xl flex-shrink-0 shadow-md">
                <GraduationCap className="w-5 h-5 md:w-8 md:h-8" />
              </div>
              <div>
                <h3 className="text-base md:text-2xl font-black mb-0.5 md:mb-2 text-slate-900">267+ atividades prontas</h3>
                <p className="text-[12px] md:text-lg text-slate-700 font-medium leading-relaxed">
                  Interpretação e produção de texto para o ano inteiro — sem improvisar, sem procurar.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#fef0c3] p-4 md:p-8 rounded-[1.25rem] md:rounded-[2.5rem] flex items-start gap-3 md:gap-8 transition-all hover:shadow-lg"
            >
              <div className="bg-edu-blue text-white p-2 md:p-4 rounded-xl md:rounded-2xl flex-shrink-0 shadow-md">
                <Calendar className="w-5 h-5 md:w-8 md:h-8" />
              </div>
              <div>
                <h3 className="text-base md:text-2xl font-black mb-0.5 md:mb-2 text-slate-900">Textos que prendem de verdade</h3>
                <p className="text-[12px] md:text-lg text-slate-700 font-medium leading-relaxed">
                  Selecionados para cada faixa etária, com perguntas que desenvolvem o raciocínio.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#fee2d5] p-4 md:p-8 rounded-[1.25rem] md:rounded-[2.5rem] flex items-start gap-3 md:gap-8 transition-all hover:shadow-lg"
            >
              <div className="bg-edu-blue text-white p-2 md:p-4 rounded-xl md:rounded-2xl flex-shrink-0 shadow-md">
                <Layers className="w-5 h-5 md:w-8 md:h-8" />
              </div>
              <div>
                <h3 className="text-base md:text-2xl font-black mb-0.5 md:mb-2 text-slate-900">Do 1º ao 5º ano na mesma compra</h3>
                <p className="text-[12px] md:text-lg text-slate-700 font-medium leading-relaxed">
                  Material completo para quem atende mais de uma turma ou quer ter tudo em mãos.
                </p>
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-[#ede4f5] p-4 md:p-8 rounded-[1.25rem] md:rounded-[2.5rem] flex items-start gap-3 md:gap-8 transition-all hover:shadow-lg"
            >
              <div className="bg-[#2DD4BF] text-white p-2 md:p-4 rounded-xl md:rounded-2xl flex-shrink-0 shadow-md">
                <TrendingUp className="w-5 h-5 md:w-8 md:h-8" />
              </div>
              <div>
                <h3 className="text-base md:text-2xl font-black mb-0.5 md:mb-2 text-slate-900">Pronto para imprimir agora</h3>
                <p className="text-[12px] md:text-lg text-slate-700 font-medium leading-relaxed">
                  PDF pronto, funciona em qualquer impressora, colorido ou preto e branco.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 text-center">
            <motion.a 
              href="#planos"
              variants={pulseVariants}
              animate="animate"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex bg-brand-indigo hover:bg-brand-indigo/90 text-white px-8 py-3.5 rounded-full font-black text-sm md:text-base shadow-premium transition-all tracking-wide whitespace-nowrap"
            >
              QUERO OS MATERIAIS
            </motion.a>
          </div>
        </div>
      </section>

      {/* --- NEW SECTION: KITS SHOWCASE --- */}
      <section className="py-24 bg-soft-blue relative overflow-hidden">
        <WaveDivider fillColor="#ffffff" />
        {/* Background stars pattern */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none overflow-hidden">
           <div className="flex flex-wrap gap-12 p-8 justify-around">
              {[...Array(60)].map((_, i) => (
                <Star key={i} size={48} fill="currentColor" className="text-edu-amber" />
              ))}
           </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black text-slate-900 mb-4 px-4 leading-tight"
            >
              267+ atividades esperando por você ✏️
            </motion.h2>
          </div>

          <div className="grid gap-3 md:gap-6">
            {[
              { title: "Kit 1º Ano", desc: "Textos curtos com questões de interpretação e propostas de produção para quem está começando a ler.", iconClass: "text-sky-400" },
              { title: "Kit 2º Ano", desc: "Atividades de compreensão mais elaboradas e escrita criativa com suporte visual.", iconClass: "text-lime-500" },
              { title: "Kit 3º Ano", desc: "Interpretação aprofundada, produção argumentativa e desafios de escrita para turmas em consolidação.", iconClass: "text-orange-500" },
              { title: "Kit 4º Ano", desc: "Textos mais longos, inferência e produção textual com começo, meio e fim.", iconClass: "text-rose-500" },
              { title: "Kit 5º Ano", desc: "Interpretação avançada, gêneros variados e produção argumentativa para fechar o ciclo.", iconClass: "text-indigo-600" },
              { title: "Visual colorido", desc: "Ilustrações que engajam e motivam — pronto para imprimir e aplicar.", iconClass: "text-orange-400", isPalette: true },
              { title: "PDF editável", desc: "Personalize se quiser, ou imprima direto do jeito que está.", iconClass: "text-slate-400", isFile: true }
            ].map((kit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white p-4 md:p-8 rounded-[1.25rem] md:rounded-[2.5rem] shadow-sm flex items-center gap-4 md:gap-8 text-left"
              >
                <div className="flex-shrink-0">
                  {kit.isPalette ? (
                    <Palette size={40} className={`${kit.iconClass} md:scale-125`} />
                  ) : kit.isFile ? (
                    <FileText size={40} className={`${kit.iconClass} md:scale-125`} />
                  ) : (
                    <div className={`relative ${kit.iconClass}`}>
                       <BookOpen size={40} className="md:scale-125" />
                       <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-1.5 h-full bg-white/20 absolute left-2 rounded-full" />
                       </div>
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-base md:text-2xl font-black text-slate-900 mb-0.5 md:mb-1">{kit.title}</h3>
                  <p className="text-[12px] md:text-lg text-slate-600 font-medium leading-relaxed">
                    {kit.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <motion.a 
              href="#planos"
              variants={pulseVariants}
              animate="animate"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex bg-edu-rose hover:bg-edu-rose/90 text-white px-8 py-3.5 rounded-full font-black text-sm md:text-base shadow-premium transition-all tracking-wide whitespace-nowrap"
            >
              QUERO OS MATERIAIS
            </motion.a>
          </div>
        </div>
      </section>

      {/* --- 3. SOCIAL PROOF (SNEAK PEEK) --- */}
      <section className="py-24 overflow-hidden relative bg-white">
        <WaveDivider fillColor="#f0fdf4" />
        <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="max-w-2xl">
             <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-left">Dê uma olhada no que te espera...</h2>
             <div className="flex items-center gap-2">
                <div className="flex text-edu-amber">
                   {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <span className="text-sm font-black text-text-muted uppercase tracking-widest">+8.500 Professoras Satisfeitas</span>
             </div>
          </div>
          <div className="flex gap-4">
             <div className="p-4 rounded-full border border-slate-200 text-slate-400 hover:text-edu-rose hover:border-edu-rose transition-colors cursor-pointer hidden md:block">
                <ChevronDown className="rotate-90" />
             </div>
             <div className="p-4 rounded-full border border-slate-200 text-slate-400 hover:text-edu-rose hover:border-edu-rose transition-colors cursor-pointer hidden md:block">
                <ChevronDown className="-rotate-90" />
             </div>
          </div>
        </div>

        <motion.div 
           className="flex gap-6 px-6"
           animate={{ x: [0, -1000] }}
           transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          {sampleImages.map((url, i) => (
            <div key={i} className="flex-shrink-0 w-[300px] h-[420px] bg-white p-3 rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden group">
              <img src={url} className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <motion.a 
            href="#planos"
            variants={pulseVariants}
            animate="animate"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex bg-edu-purple hover:bg-edu-purple/90 text-white px-8 py-3.5 rounded-full font-black text-sm md:text-base shadow-premium transition-all tracking-wide whitespace-nowrap"
          >
            QUERO OS MATERIAIS
          </motion.a>
        </div>
      </section>

      {/* --- NEW SECTION: 3 STEPS --- */}
      <section className="py-24 bg-soft-green relative overflow-hidden">
        <WaveDivider fillColor="#ffffff" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black text-slate-900 mb-4 px-4 leading-tight"
            >
              Sua aula pronta em 3 passos 🚀
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#cdf3ec] p-5 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] flex flex-col items-center text-center group hover:scale-[1.02] transition-transform"
            >
              <span className="text-4xl md:text-6xl font-black text-brand-pink/20 mb-[-1.25rem] md:mb-[-2rem] relative z-0">1</span>
              <div className="bg-edu-rose text-white p-2.5 md:p-3 rounded-2xl shadow-lg relative z-10 mb-4">
                <Download size={24} strokeWidth={2.5} />
              </div>
              <h3 className="text-lg md:text-xl font-black text-slate-900 mb-2">Comprou</h3>
              <p className="text-slate-600 font-medium text-[13px] md:text-sm leading-relaxed">
                Acesso imediato ao arquivo após a confirmação do pagamento.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#fef0c3] p-5 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] flex flex-col items-center text-center group hover:scale-[1.02] transition-transform"
            >
              <span className="text-4xl md:text-6xl font-black text-brand-pink/20 mb-[-1.25rem] md:mb-[-2rem] relative z-0">2</span>
              <div className="bg-edu-rose text-white p-2.5 md:p-3 rounded-2xl shadow-lg relative z-10 mb-4">
                <Printer size={24} strokeWidth={2.5} />
              </div>
              <h3 className="text-lg md:text-xl font-black text-slate-900 mb-2">Imprimiu</h3>
              <p className="text-slate-600 font-medium text-[13px] md:text-sm leading-relaxed">
                Funciona em qualquer impressora. Colorido ou preto e branco, fica lindo.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#fee2d5] p-5 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] flex flex-col items-center text-center group hover:scale-[1.02] transition-transform"
            >
              <span className="text-4xl md:text-6xl font-black text-brand-pink/20 mb-[-1.25rem] md:mb-[-2rem] relative z-0">3</span>
              <div className="bg-edu-rose text-white p-2.5 md:p-3 rounded-2xl shadow-lg relative z-10 mb-4">
                <Smile size={24} strokeWidth={2.5} />
              </div>
              <h3 className="text-lg md:text-xl font-black text-slate-900 mb-2">Aplicou</h3>
              <p className="text-slate-600 font-medium text-[13px] md:text-sm leading-relaxed">
                267+ atividades para trabalhar o ano inteiro sem improvisar.
              </p>
            </motion.div>
          </div>

          <div className="mt-12 text-center">
            <motion.a 
              href="#planos"
              variants={pulseVariants}
              animate="animate"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex bg-edu-rose hover:bg-edu-rose/90 text-white px-8 py-3.5 rounded-full font-black text-sm md:text-base shadow-premium transition-all tracking-wide whitespace-nowrap"
            >
              QUERO OS MATERIAIS
            </motion.a>
          </div>
        </div>
      </section>

      {/* --- NEW SECTION: BONUS --- */}
      <section className="py-24 bg-white relative overflow-hidden">
        <WaveDivider fillColor="#f8fafc" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black text-slate-900 mb-4 px-4 leading-tight"
            >
              Quem compra hoje leva o dobro 🎁
            </motion.h2>
          </div>

          <div className="grid gap-6 md:gap-8">
            {bonusCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`${card.color} p-5 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] relative flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow group`}
              >
                <div className={`absolute top-4 right-4 ${card.badgeColor} text-white text-[9px] md:text-[10px] font-black px-3 py-1 rounded-full tracking-widest leading-none uppercase`}>
                  {card.badge}
                </div>
                
                <div className={`mb-2 ${card.iconColor}`}>
                   <DynamicIcon name={card.iconName} size={32} />
                </div>

                <h3 className="text-[18px] md:text-xl font-black text-slate-900 mb-2">{card.title}</h3>
                <p className="text-slate-600 font-medium text-[13px] md:text-sm leading-relaxed mb-6 max-w-2xl">
                  {card.desc}
                </p>
                <div className="flex flex-col items-center border-t border-edu-rose/10 pt-4 w-full">
                  <span className="text-slate-400 line-through text-xs font-bold mb-1">
                    {card.originalPrice}
                  </span>
                  <span className="text-edu-rose font-black text-xl md:text-2xl">
                    {card.price}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <motion.a 
              href="#planos"
              variants={pulseVariants}
              animate="animate"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex bg-edu-purple hover:bg-edu-purple/90 text-white px-8 py-3.5 rounded-full font-black text-sm md:text-base shadow-premium transition-all tracking-wide whitespace-nowrap"
            >
              QUERO OS MATERIAIS
            </motion.a>
          </div>

          <div className="text-center mt-20">
             <motion.h3
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               className="text-2xl md:text-4xl font-black text-slate-900 flex items-center justify-center gap-3"
             >
               Tudo isso incluso no seu kit hoje ✨
             </motion.h3>
          </div>
        </div>
      </section>






      {/* --- TESTIMONIALS SECTION --- */}
      <section className="py-24 bg-soft-blue relative overflow-hidden">
        <WaveDivider fillColor="#f0f9ff" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">O que dizem as professoras</h2>
            <p className="text-lg text-text-muted font-medium">Quem já baixou e aplica em sala de aula todos os dias.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="p-10 rounded-[3rem] bg-[#fafafa] border border-slate-100 flex flex-col h-full">
                <div className="flex text-edu-amber mb-6">
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

          <div className="mt-12 text-center">
            <motion.a 
              href="#planos"
              variants={pulseVariants}
              animate="animate"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex bg-edu-rose hover:bg-edu-rose/90 text-white px-8 py-3.5 rounded-full font-black text-sm md:text-base shadow-premium transition-all tracking-wide whitespace-nowrap"
            >
              QUERO OS MATERIAIS
            </motion.a>
          </div>
        </div>
      </section>

      {/* --- 5. OFFER SECTION --- */}
      <section id="planos" className="py-20 md:py-32 bg-soft-blue bg-grid relative overflow-hidden">
        <WaveDivider fillColor="#fff1f2" />
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20 px-4">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Comece agora mesmo</h2>
            <p className="text-lg md:text-xl text-text-muted font-medium italic">Invista na sua carreira e na qualidade das suas aulas com um valor simbólico.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-10 max-w-3xl md:max-w-5xl mx-auto items-stretch">
            {/* Standard Tier */}
            <motion.div 
               whileHover={{ y: -5 }}
               className="bg-white rounded-[2rem] p-6 md:p-10 border border-slate-200 flex flex-col items-center text-center shadow-sm relative overflow-hidden"
            >
              <div className="mb-10 text-center">
                <p className="text-text-muted line-through font-bold text-lg mb-2">De R$50,70</p>
                <div className="flex items-center justify-center gap-1">
                  <span className="text-5xl font-black text-edu-rose tracking-tight">R$9,90</span>
                </div>
              </div>

              <div className="space-y-4 mb-12 w-full text-left">
                {[
                  { text: "267+ atividades de interpretação e produção de texto", status: "checked" },
                  { text: "Do 1º ao 5º ano", status: "checked" },
                  { text: "PDF editável — imprime quantas vezes quiser", status: "checked" },
                  { text: "Gabarito completo (Bônus)", status: "checked" },
                  { text: "Ficha de acompanhamento de leitura (Bônus)", status: "checked" },
                  { text: "Sequência didática sugerida (Bônus)", status: "checked" },
                  { text: "Acesso vitalício", status: "checked" },
                  { text: "Atividades de Leitura Fluente (1º ao 5º ano)", status: "locked" },
                  { text: "Gêneros Textuais completos — fábula, poema, notícia, carta, conto e mais", status: "locked" },
                ].map((item, i) => (
                  <div key={i} className={`flex items-start gap-2.5 ${item.status === 'locked' ? 'opacity-40' : ''}`}>
                    <div className="flex-shrink-0 mt-0.5">
                      {item.status === 'checked' ? (
                        <div className="bg-brand-teal text-white rounded-full p-0.5">
                          <Check size={12} strokeWidth={4} />
                        </div>
                      ) : (
                        <Lock size={14} className="text-slate-400" />
                      )}
                    </div>
                    <span className={`font-bold text-[13px] md:text-sm ${item.status === 'checked' ? 'text-slate-700' : 'text-slate-500'}`}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

                <motion.a 
                href={appendUTMs("https://pay.lowify.com.br/checkout?product_id=tH3CLD")}
                variants={pulseVariants}
                animate="animate"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#34bba7] hover:bg-[#2da695] text-white px-4 py-3.5 md:py-4 rounded-xl font-black text-sm md:text-base shadow-md transition-all flex items-center justify-center text-center tracking-tight whitespace-nowrap"
              >
                Quero o Kit Essencial →
              </motion.a>

              <motion.button 
                onClick={() => document.getElementById('offer-recommended')?.scrollIntoView({ behavior: 'smooth' })}
                variants={pulseVariants}
                animate="animate"
                className="mt-6 w-full py-4 border-2 border-dashed border-amber-200 bg-amber-50/30 text-slate-600 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 hover:bg-amber-50 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <ChevronDown size={18} /> Veja a oferta recomendada <ChevronDown size={18} />
              </motion.button>
            </motion.div>

            {/* Premium Tier */}
            <motion.div 
               id="offer-recommended"
               whileHover={{ y: -5 }}
               className="bg-white rounded-[2.5rem] p-6 md:p-10 border-[3px] border-edu-purple/50 flex flex-col items-center text-center shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-edu-purple/5 to-transparent pointer-events-none" />
              
              <div className="mb-10 text-center relative z-10">
                <div className="mb-6 w-full max-w-[280px] mx-auto">
                  <img 
                    src="https://i.ibb.co/GvmX8TyT/Whats-App-Image-2026-05-16-at-11-02-47.jpg" 
                    alt="Kit Premium Mockup" 
                    className="w-full h-auto object-contain mix-blend-multiply"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-3xl md:text-5xl font-black mb-2 bg-gradient-to-r from-edu-purple to-edu-rose bg-clip-text text-transparent tracking-tighter">
                  Kit Premium
                </h3>
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-edu-purple/60 mb-6 block">267+ ATIVIDADES + BÔNUS EXCLUSIVOS</span>
                
                <p className="text-text-muted line-through font-bold text-lg mb-2">De R$80,00</p>
                <div className="flex items-center justify-center gap-1">
                  <span className="text-6xl md:text-7xl font-black text-edu-purple tracking-tighter">R$19,90</span>
                </div>
                <div className="mt-4 inline-block bg-edu-amber text-slate-900 px-6 py-2 rounded-full text-xs md:text-sm font-black shadow-sm">
                   Você economiza R$60,10
                </div>
              </div>

              <div className="space-y-4 mb-12 w-full text-left">
                {[
                  { text: "Tudo do Kit Essencial", status: "checked" },
                  { text: "✨ BÔNUS EXCLUSIVO: Atividades de Leitura Fluente (1º ao 5º ano)", status: "checked" },
                  { text: "✨ BÔNUS EXCLUSIVO: Gêneros Textuais completos — fábula, poema, notícia, carta, conto, tirinha e mais (1º ao 5º ano)", status: "checked" },
                  { text: "Alinhado 100% à BNCC", status: "checked" },
                  { text: "PDF editável — imprime quantas vezes quiser", status: "checked" },
                  { text: "Acesso vitalício", status: "checked" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="bg-brand-indigo text-white rounded-full p-0.5">
                        <Check size={12} strokeWidth={4} />
                      </div>
                    </div>
                    <span className="font-bold text-[13px] md:text-sm text-slate-700">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

                <motion.a 
                href={checkoutUrl}
                variants={pulseVariants}
                animate="animate"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-brand-indigo hover:bg-brand-indigo/90 text-white px-4 py-3.5 md:py-4 rounded-xl font-black text-sm md:text-base shadow-md transition-all flex items-center justify-center text-center tracking-tight whitespace-nowrap"
              >
                Quero o Kit Premium por R$19,90 →
              </motion.a>
              
              <div className="mt-6 flex items-center justify-center gap-2 text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wide">
                 <span>🔒 Compra segura</span>
                 <span className="text-slate-200">•</span>
                 <span>Download imediato</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- 90-DAY GUARANTEE --- */}
      <section className="py-24 bg-soft-pink relative overflow-hidden">
        <WaveDivider fillColor="#ffffff" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="relative p-8 md:p-16 bg-white rounded-3xl border-2 border-edu-blue/20 shadow-2xl flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40">
              <img src="https://i.ibb.co/Y4BKz5LY/1000239986-1.png" alt="Garantia 90 Dias" className="w-full h-full object-contain" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                Garantia Incondicional de <span className="text-edu-blue">90 Dias</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                Adquira seu material hoje com total segurança. Se em até 90 dias você sentir que o conteúdo não é para você, devolvemos <strong>100% do seu investimento</strong>. Sem perguntas, sem burocracia, risco totalmente nosso.
              </p>
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full font-black text-lg shadow-lg">
                <ShieldCheck size={24} />
                <span>Risco Zero | Satisfação Garantida</span>
              </div>
              <div className="mt-10">
                <motion.a 
                  href="#planos"
                  variants={pulseVariants}
                  animate="animate"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex bg-edu-blue hover:bg-edu-blue/90 text-white px-8 py-3.5 rounded-full font-black text-sm md:text-base shadow-lg transition-all tracking-wide whitespace-nowrap"
                >
                  TESTAR POR 90 DIAS AGORA
                </motion.a>
              </div>
            </div>
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
                    className="text-edu-purple"
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

          <div className="mt-12 text-center">
            <motion.a 
              href="#planos"
              variants={pulseVariants}
              animate="animate"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex bg-edu-purple hover:bg-edu-purple/90 text-white px-8 py-3.5 rounded-full font-black text-sm md:text-base shadow-lg transition-all tracking-wide whitespace-nowrap"
            >
              AINDA TEM DÚVIDA? FALE CONOSCO
            </motion.a>
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
