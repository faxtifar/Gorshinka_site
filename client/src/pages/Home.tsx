// STYLE NOTE: Gorshinka's page features a sunlit cream yellow and bubblegum pink palette.
// Handmade scrapbook vibe, MM2 focus, target 2,000 subscribers, TikTok @goroxinka.

import { useState } from "react";
import { 
  Heart, 
  ArrowUpRight, 
  Sparkles, 
  Target, 
  Users, 
  ExternalLink,
  ChevronRight
} from "lucide-react";

export default function Home() {
  const [likes, setLikes] = useState({ 1: 420, 2: 385, 3: 512, 4: 298 });
  const [activeTab, setActiveTab] = useState<"all" | "mm2" | "challenges">("all");

  const toggleLike = (id: number) => {
    setLikes(prev => ({ ...prev, [id]: prev[id as keyof typeof prev] + 1 }));
  };

  return (
    <div className="min-h-screen bg-[#FFFDE7] text-[#3d222b] selection:bg-[#ffb3cc] selection:text-[#2d121b]">
      
      {/* Top Banner / Ticker */}
      <div className="bg-[#FF77A9] text-white py-2 px-4 text-xs font-bold tracking-widest text-center overflow-hidden uppercase flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5" />
        <span>аккаунт про мм2 ✿ цель: 2000 подписчиков ✿ ник в рб: goroxinka</span>
        <Sparkles className="w-3.5 h-3.5" />
      </div>

      {/* Navigation Header */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between border-b border-[#ffb3cc]/40">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-[#FF77A9] p-0.5 shadow-md flex items-center justify-center overflow-hidden">
            <img 
              src="/manus-storage/gorshinka-avatar-real_dbeb3a15.jpg" 
              alt="Горошинка" 
              className="w-full h-full object-cover rounded-full"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>
          <div>
            <span className="font-extrabold text-xl tracking-tight block">горошинка 🌸</span>
            <span className="text-xs text-[#a05070] font-medium">@goroxinka</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-bold tracking-wider uppercase text-[#704050]">
          <a href="#about" className="hover:text-[#FF77A9] transition-colors">о себе</a>
          <a href="#mm2" className="hover:text-[#FF77A9] transition-colors">миры мм2</a>
          <a href="#videos" className="hover:text-[#FF77A9] transition-colors">видео</a>
          <a href="#goal" className="hover:text-[#FF77A9] transition-colors">цель 2000</a>
        </nav>

        <a 
          href="https://www.tiktok.com/@goroxinka" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#3d222b] text-white px-5 py-2.5 rounded-full text-xs font-extrabold tracking-wider uppercase shadow-[3px_3px_0px_#FF77A9] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_#FF77A9] transition-all flex items-center gap-2"
        >
          <span>TikTok</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#ffb3cc]/30 border border-[#FF77A9] px-3.5 py-1.5 rounded-full text-xs font-bold text-[#b32d65]">
            <span className="w-2 h-2 rounded-full bg-[#FF77A9] animate-ping" />
            <span>в эфире и в игре MM2</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05]">
            привет, я <span className="text-[#FF77A9] underline decoration-wavy decoration-2">Горошинка</span> 🌸
          </h1>

          <p className="text-lg md:text-xl text-[#6b4854] max-w-xl font-normal leading-relaxed">
            Буду вести этот аккаунт про <strong>ММ2</strong>, делиться секретами выживания, оценивать сетовые комбинации и просто играть вместе с вами!
          </p>

          <div className="bg-white/80 border-2 border-dashed border-[#FF77A9] p-5 rounded-2xl shadow-[4px_4px_0px_#ffb3cc] max-w-lg space-y-3">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#b32d65]">
              <span className="flex items-center gap-1.5"><Target className="w-4 h-4" /> цель канала</span>
              <span>1,891 / 2,000 подписчиков</span>
            </div>
            <div className="w-full bg-[#FFFDE7] h-4 rounded-full overflow-hidden border border-[#ffb3cc]">
              <div className="bg-[#FF77A9] h-full rounded-full transition-all duration-1000" style={{ width: '94.5%' }} />
            </div>
            <p className="text-xs text-[#704050] italic">
              Ник в Роблоксе: <strong className="text-[#3d222b]">goroxinka</strong>. Надеюсь, мы с вами подружимся! 💕
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a 
              href="https://www.tiktok.com/@goroxinka"
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#FF77A9] text-white px-7 py-3.5 rounded-2xl font-bold text-sm shadow-[4px_4px_0px_#3d222b] hover:bg-[#ff5595] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#3d222b] transition-all flex items-center gap-2.5"
            >
              <span>перейти в TikTok</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a 
              href="#mm2"
              className="bg-white text-[#3d222b] border-2 border-[#3d222b] px-6 py-3.5 rounded-2xl font-bold text-sm shadow-[4px_4px_0px_#3d222b] hover:bg-[#FFFDE7] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#3d222b] transition-all"
            >
              смотреть сетовые обзоры
            </a>
          </div>
        </div>

        {/* Hero Visual Card */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="absolute -inset-4 bg-[#ffb3cc]/20 rounded-3xl transform rotate-3 -z-10" />
          <div className="paper-card p-4 rounded-3xl max-w-sm w-full transform -rotate-2 hover:rotate-0 transition-transform">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#fff5f8]">
              <img 
                src="/manus-storage/gorshinka-video-1_4dfb11fa.jpg" 
                alt="Горошинка в MM2" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-[#FF77A9] text-white px-3 py-1 rounded-full text-xs font-bold shadow">
                MM2 SHOWCASE 🌸
              </div>
            </div>
            <div className="mt-4 px-2 space-y-1">
              <div className="flex items-center justify-between text-xs font-bold text-[#b32d65]">
                <span>@goroxinka в TikTok</span>
                <span>4,165 лайков</span>
              </div>
              <p className="text-sm font-semibold">«сравниваю роблоксеров со вкусом..»</p>
            </div>
          </div>
        </div>
      </section>

      {/* MM2 & TikTok Video Grid Section */}
      <section id="mm2" className="max-w-7xl mx-auto px-6 py-16 border-t border-[#ffb3cc]/40">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF77A9] block mb-2">
              02 / мир murder mystery 2
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              лучшие видео и <span className="text-[#FF77A9]">сетовые образы</span>
            </h2>
          </div>

          <div className="flex items-center gap-2 bg-white p-1.5 rounded-2xl border-2 border-[#3d222b] shadow-[3px_3px_0px_#3d222b]">
            <button 
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === "all" ? "bg-[#FF77A9] text-white shadow" : "text-[#704050] hover:text-[#3d222b]"}`}
            >
              все видео
            </button>
            <button 
              onClick={() => setActiveTab("mm2")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === "mm2" ? "bg-[#FF77A9] text-white shadow" : "text-[#704050] hover:text-[#3d222b]"}`}
            >
              сеты MM2
            </button>
            <button 
              onClick={() => setActiveTab("challenges")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === "challenges" ? "bg-[#FF77A9] text-white shadow" : "text-[#704050] hover:text-[#3d222b]"}`}
            >
              челенджи
            </button>
          </div>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="paper-card rounded-2xl p-4 flex flex-col justify-between">
            <div>
              <div className="relative aspect-video rounded-xl overflow-hidden bg-stone-100 mb-4 border border-[#ffb3cc]">
                <img 
                  src="/manus-storage/gorshinka-video-2_301535ba.jpg" 
                  alt="MM2 Set" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2 bg-black/70 text-white text-[10px] font-bold px-2.5 py-1 rounded-md backdrop-blur-sm">
                  MM2 ✿ 902 просмотра
                </div>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF77A9]">сравнение сетов</span>
              <h3 className="text-xl font-bold mt-1 mb-2 leading-snug">сравниваю роблоксеров со вкусом..</h3>
              <p className="text-xs text-[#6b4854] line-clamp-2">Оцениваем редкие ножи и эстетичные комбо в Murder Mystery 2 с лучшими подписчиками!</p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-[#ffb3cc]/60 flex items-center justify-between">
              <button 
                onClick={() => toggleLike(1)}
                className="flex items-center gap-1.5 text-xs font-bold text-[#FF77A9] bg-[#ffb3cc]/20 px-3 py-1.5 rounded-full hover:bg-[#ffb3cc]/40 transition-colors cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-[#FF77A9]" />
                <span>{likes[1]}</span>
              </button>
              <a 
                href="https://www.tiktok.com/@goroxinka" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs font-bold uppercase tracking-wider text-[#3d222b] hover:text-[#FF77A9] flex items-center gap-1"
              >
                <span>смотреть в TikTok</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="paper-card rounded-2xl p-4 flex flex-col justify-between">
            <div>
              <div className="relative aspect-video rounded-xl overflow-hidden bg-stone-100 mb-4 border border-[#ffb3cc]">
                <img 
                  src="/manus-storage/gorshinka-video-3_58adc824.jpg" 
                  alt="Popular players" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2 bg-black/70 text-white text-[10px] font-bold px-2.5 py-1 rounded-md backdrop-blur-sm">
                  MM2 ✿ 1515 просмотров
                </div>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF77A9]">популярные игроки</span>
              <h3 className="text-xl font-bold mt-1 mb-2 leading-snug">какие же популярные роблоксеры подписаны на меня!</h3>
              <p className="text-xs text-[#6b4854] line-clamp-2">Невероятный выпуск про тех, кто следит за каналом Горошинки в TikTok.</p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-[#ffb3cc]/60 flex items-center justify-between">
              <button 
                onClick={() => toggleLike(2)}
                className="flex items-center gap-1.5 text-xs font-bold text-[#FF77A9] bg-[#ffb3cc]/20 px-3 py-1.5 rounded-full hover:bg-[#ffb3cc]/40 transition-colors cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-[#FF77A9]" />
                <span>{likes[2]}</span>
              </button>
              <a 
                href="https://www.tiktok.com/@goroxinka" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs font-bold uppercase tracking-wider text-[#3d222b] hover:text-[#FF77A9] flex items-center gap-1"
              >
                <span>смотреть в TikTok</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="paper-card rounded-2xl p-4 flex flex-col justify-between">
            <div>
              <div className="relative aspect-video rounded-xl overflow-hidden bg-stone-100 mb-4 border border-[#ffb3cc]">
                <img 
                  src="/manus-storage/gorshinka-video-4_ceec6ff5.jpg" 
                  alt="Sets update" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2 bg-black/70 text-white text-[10px] font-bold px-2.5 py-1 rounded-md backdrop-blur-sm">
                  MM2 ✿ 1140 просмотров
                </div>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF77A9]">обновление сетов</span>
              <h3 className="text-xl font-bold mt-1 mb-2 leading-snug">оцениваю сеты с разных обновлений (ч. 2)</h3>
              <p className="text-xs text-[#6b4854] line-clamp-2">Продолжаем грандиозный разбор новых и старых коллекций ножей и пистолетов.</p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-[#ffb3cc]/60 flex items-center justify-between">
              <button 
                onClick={() => toggleLike(3)}
                className="flex items-center gap-1.5 text-xs font-bold text-[#FF77A9] bg-[#ffb3cc]/20 px-3 py-1.5 rounded-full hover:bg-[#ffb3cc]/40 transition-colors cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-[#FF77A9]" />
                <span>{likes[3]}</span>
              </button>
              <a 
                href="https://www.tiktok.com/@goroxinka" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs font-bold uppercase tracking-wider text-[#3d222b] hover:text-[#FF77A9] flex items-center gap-1"
              >
                <span>смотреть в TikTok</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* About & Rules Section */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-16 border-t border-[#ffb3cc]/40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF77A9] block">
              03 / правила канала и дружба
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight">
              как общаться и <span className="text-[#FF77A9]">играть вместе</span>
            </h2>
            <p className="text-[#6b4854] text-base leading-relaxed">
              Я всегда рада видеть вас на стримах и в комментариях! Здесь царит уютная атмосфера, поэтому давайте уважать друг друга и наслаждаться игрой.
            </p>

            <div className="space-y-4 pt-2">
              <div className="bg-white border-2 border-[#3d222b] p-4 rounded-xl shadow-[3px_3px_0px_#FF77A9] flex items-start gap-3">
                <span className="bg-[#FF77A9] text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">1</span>
                <div>
                  <h4 className="font-bold text-sm">Ник в Роблоксе</h4>
                  <p className="text-xs text-[#6b4854] mt-0.5">Добавляйтесь в роблоксе: <strong className="text-[#3d222b]">goroxinka</strong>. Вместе веселее проходить карты MM2!</p>
                </div>
              </div>

              <div className="bg-white border-2 border-[#3d222b] p-4 rounded-xl shadow-[3px_3px_0px_#FF77A9] flex items-start gap-3">
                <span className="bg-[#FF77A9] text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">2</span>
                <div>
                  <h4 className="font-bold text-sm">Комментарии и эфиры</h4>
                  <p className="text-xs text-[#6b4854] mt-0.5">Всегда читаю ваши сообщения на стримах и в TikTok. Поддерживайте друг друга! 🌸</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border-3 border-[#3d222b] p-8 rounded-3xl shadow-[8px_8px_0px_#FF77A9] relative">
            <div className="absolute -top-4 -right-4 bg-[#FF77A9] text-white text-xs font-extrabold px-4 py-1.5 rounded-full shadow rotate-6">
              MM2 CLUB ✿
            </div>
            <h3 className="text-2xl font-extrabold mb-4">цель на этот месяц</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm font-bold">
                <span className="flex items-center gap-2"><Users className="w-4 h-4 text-[#FF77A9]" /> Подписчики в TikTok</span>
                <span className="text-[#FF77A9]">1891 / 2000</span>
              </div>
              <div className="w-full bg-[#FFFDE7] h-5 rounded-full overflow-hidden border-2 border-[#3d222b]">
                <div className="bg-[#FF77A9] h-full rounded-full" style={{ width: '94.5%' }} />
              </div>
              <p className="text-xs text-[#6b4854] leading-relaxed pt-2">
                Спасибо каждому, кто подписывается, ставит лайки и поддерживает канал Горошинки! Вместе мы быстро дойдем до заветной цели в 2000 подписчиков. 💕
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3d222b] text-white py-16 mt-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <span className="font-extrabold text-xl">горошинка 🌸</span>
              <span className="text-xs bg-[#FF77A9] text-white px-2.5 py-0.5 rounded-full font-bold">MM2</span>
            </div>
            <p className="text-xs text-stone-300">Личный сайт блогера в розово-желтой палитре • TikTok: @goroxinka</p>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="https://www.tiktok.com/@goroxinka" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#FF77A9] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-[#3d222b] transition-colors flex items-center gap-2"
            >
              <span>открыть TikTok</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
