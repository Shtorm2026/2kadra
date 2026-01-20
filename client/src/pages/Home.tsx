import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { ArrowRight, Film, Mic, Users, Award, Mail, Phone, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import VideoPlayer from "@/components/VideoPlayer";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import ContactForm from "@/components/ContactForm";

/**
 * Design Philosophy: Cinematographic Minimalism
 * - Orange (#FF8C42) for energy and creativity
 * - Sky Blue (#0099CC) for professionalism
 * - Asymmetric layouts with diagonal transitions
 * - Film frame elements and accent lines
 */

const EZHNOSTI_VIDEOS = [
  {
    id: "1",
    title: "Что делать, когда злишься? Почему крахмал хрустит?",
    description: "В этом выпуске Ежовостей мы разбираемся, что делать, когда испытываешь гнев, и узнаем, почему крахмал и снег издают хрустящие звуки. Ведущие: Ёжик Ежович и Анфиса Новикова. Корреспонденты: Маруся Каткова, Алиса Сафрайтер, Давид Акобян.",
    thumbnail: "/images/ezhnosti-scene.jpg",
    embedUrl: "https://vk.com/video_ext.php?oid=-37913616&id=456239017&hash=123abc",
    duration: "13:40",
    date: "17 января 2025",
  },
  {
    id: "2",
    title: "Рубрика 'Любопытно': Почему число 13 считают несчастливым?",
    description: "Алиса рассказывает о числе 13 и его истории. Почему это число считают несчастливым в разных культурах? Узнайте в этом выпуске Ежовостей!",
    thumbnail: "/images/ezhnosti-scene.jpg",
    embedUrl: "https://vk.com/video_ext.php?oid=-37913616&id=456239018&hash=123abc",
    duration: "2:24",
    date: "18 января 2025",
  },
  {
    id: "3",
    title: "Рубрика 'Что почитать?': Лучшие книги для детей",
    description: "В этой рубрике мы рекомендуем интересные и полезные книги для детей разного возраста. Какую книгу выбрать? Смотрите в Ежовостях!",
    thumbnail: "/images/ezhnosti-scene.jpg",
    embedUrl: "https://vk.com/video_ext.php?oid=-37913616&id=456239019&hash=123abc",
    duration: "3:15",
    date: "16 января 2025",
  },
  {
    id: "4",
    title: "Рубрика 'Любопытно': Почему птичка Киви так называется?",
    description: "Узнайте интересные факты о птичке киви и почему она получила такое необычное имя. Рубрика 'Любопытно' в Ежовостях!",
    thumbnail: "/images/ezhnosti-scene.jpg",
    embedUrl: "https://vk.com/video_ext.php?oid=-37913616&id=456239020&hash=123abc",
    duration: "2:50",
    date: "15 января 2025",
  },
];

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white" style={{ color: "#0F172A" }}>
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold" style={{ backgroundColor: "#FF8C42", color: "white" }}>
              📹
            </div>
            <span className="font-bold text-lg hidden sm:inline" style={{ color: "#0099CC" }}>Два-Кадра</span>
          </div>
          <div className="flex gap-2 sm:gap-4 flex-wrap justify-end">
            <a
              href="https://vk.com/2kadra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm hover:text-orange-400 transition font-semibold"
              style={{ color: "#0099CC" }}
            >
              VK
            </a>
            <a
              href="https://t.me/dva_kadra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm hover:text-orange-400 transition font-semibold"
              style={{ color: "#0099CC" }}
            >
              Telegram
            </a>
            <a
              href="https://rutube.ru/u/2kadra/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm hover:text-orange-400 transition font-semibold"
              style={{ color: "#0099CC" }}
            >
              RuTube
            </a>
            <a
              href="https://www.tiktok.com/@2kadra2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm hover:text-orange-400 transition font-semibold"
              style={{ color: "#0099CC" }}
            >
              TikTok
            </a>
            <a
              href="https://www.youtube.com/@dva-kadra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm hover:text-orange-400 transition font-semibold"
              style={{ color: "#0099CC" }}
            >
              YouTube
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6 md:space-y-8 order-2 md:order-1">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4" style={{ color: "#0099CC" }}>
                  Детская студия видеотворчества
                </h1>
                <div className="h-1 w-24 rounded-full mb-6" style={{ backgroundColor: "#FF8C42" }}></div>
              </div>
              <p className="text-lg md:text-xl leading-relaxed" style={{ color: "#6B7280" }}>
                Учим детей писать сценарии, снимать, монтировать и работать в кадре. С 2017 года наши ученики создают добрые новости для телеканала «Я первый» и побеждают на фестивалях.
              </p>
              <div className="flex gap-4 flex-wrap">
                <button 
                  onClick={() => {
                    const ctaSection = document.getElementById('cta-section');
                    if (ctaSection) {
                      ctaSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer" 
                  style={{ backgroundColor: "#FF8C42", color: "white" }}
                >
                  Записаться на занятие
                </button>
                <button 
                  onClick={() => {
                    const aboutSection = document.getElementById('about-section');
                    if (aboutSection) {
                      aboutSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="border-2 font-semibold px-6 py-3 rounded-lg hover:bg-gray-50 transition-all duration-300 cursor-pointer" 
                  style={{ borderColor: "#0099CC", color: "#0099CC" }}
                >
                  Узнать больше
                </button>
              </div>
            </div>

            {/* Right: Image */}
            <div className="order-1 md:order-2 relative">
              <div className="relative">
                <img
                  src="/images/hero-kids-filming.jpg"
                  alt="Дети работают с профессиональным оборудованием"
                  className="w-full rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 border-8 rounded-lg pointer-events-none" style={{ borderColor: "#FF8C42" }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Diagonal Divider */}
        <svg
          className="absolute bottom-0 left-0 right-0 w-full h-24 text-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"
            fill="currentColor"
          ></path>
        </svg>
      </section>

      {/* Video Player Section */}
      <section className="py-20 md:py-32" style={{ backgroundColor: "#F3F4F6" }}>
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#0099CC" }}>
              Смотрите «Ежовости»
            </h2>
            <div className="h-1 w-16 rounded-full" style={{ backgroundColor: "#FF8C42" }}></div>
            <p className="mt-4 text-lg" style={{ color: "#6B7280" }}>
              Еженедельные добрые новости, созданные нашими ребятами для телеканала «Я первый»
            </p>
          </div>
          <VideoPlayer videos={EZHNOSTI_VIDEOS} />
        </div>
      </section>

      {/* About Section */}
      <section id="about-section" className="bg-white py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="relative">
              <img
                src="/images/kids-editing-montage.jpg"
                alt="Дети работают в редакторском люксе"
                className="w-full rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 border-8 rounded-lg pointer-events-none" style={{ borderColor: "#FF8C42" }}></div>
            </div>

            {/* Right: Text */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold" style={{ color: "#0099CC" }}>О студии</h2>
              <div className="h-1 w-16 rounded-full" style={{ backgroundColor: "#FF8C42" }}></div>
              <p className="text-lg leading-relaxed" style={{ color: "#6B7280" }}>
                Студия «Два-Кадра» — это место, где дети раскрывают свой творческий потенциал через видеопроизводство. Мы работаем с профессиональным оборудованием и учим ребят не только техническим навыкам, но и командной работе, дисциплине и ответственности.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: "#6B7280" }}>
                Наши ученики участвуют в реальных проектах, выходят в эфир и побеждают на фестивалях. Каждый ребенок получает опыт, который станет основой для его будущей карьеры в медиа и кино.
              </p>
              <div className="pt-4">
                <p className="font-semibold text-lg" style={{ color: "#FF8C42" }}>📍 г. Ярославль</p>
                <p style={{ color: "#6B7280" }}>Работаем с 2017 года</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Teach Section */}
      <section className="py-20 md:py-32" style={{ backgroundColor: "#0099CC", color: "white" }}>
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Чему мы учим</h2>
            <div className="h-1 w-16 rounded-full mx-auto" style={{ backgroundColor: "#FF8C42" }}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Film,
                title: "Сценарии и режиссура",
                description: "Дети учатся писать сценарии, планировать съемки и управлять процессом создания фильма.",
              },
              {
                icon: Mic,
                title: "Звук и речь",
                description: "Работа с микрофонами, запись голоса, актерское мастерство и публичные выступления.",
              },
              {
                icon: Users,
                title: "Командная работа",
                description: "Навыки сотрудничества, распределение ролей и управление проектом в группе.",
              },
              {
                icon: Film,
                title: "Съемка и монтаж",
                description: "Работа с профессиональными камерами, освещением и современным видеоредактором.",
              },
              {
                icon: Award,
                title: "Журналистика",
                description: "Создание новостей, интервью и репортажей для телевидения и интернета.",
              },
              {
                icon: Users,
                title: "Работа в кадре",
                description: "Актерское мастерство, позирование перед камерой и работа с эмоциями.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg hover:bg-opacity-20 transition-all duration-300 border border-opacity-30"
                style={{ borderColor: "#FF8C42" }}
              >
                <item.icon className="w-12 h-12 mb-4" style={{ color: "#FF8C42" }} />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-200">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 md:py-32" style={{ backgroundColor: "#F3F4F6" }}>
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#0099CC" }}>Наши проекты</h2>
            <div className="h-1 w-16 rounded-full mx-auto" style={{ backgroundColor: "#FF8C42" }}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Ezhnosti */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <img
                src="/images/ezhnosti-scene.jpg"
                alt="Ежовости - добрые новости"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2" style={{ color: "#0099CC" }}>«Ежовости»</h3>
                <p style={{ color: "#6B7280" }} className="mb-4">
                  Еженедельные добрые новости для телеканала «Я первый». Наши дети создают, ведут и снимают каждый выпуск.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-yellow-100 px-3 py-1 rounded-full text-sm font-semibold" style={{ color: "#92400E" }}>
                    ТВ
                  </span>
                  <span className="bg-blue-100 px-3 py-1 rounded-full text-sm font-semibold" style={{ color: "#1E40AF" }}>
                    Новости
                  </span>
                </div>
              </div>
            </div>

            {/* Short Films */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <img
                src="/images/film-festival-celebration.jpg"
                alt="Награды на фестивалях"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2" style={{ color: "#0099CC" }}>Короткометражные фильмы</h3>
                <p style={{ color: "#6B7280" }} className="mb-4">
                  Наши ученики создают оригинальные фильмы, которые побеждают на фестивалях и получают признание.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-purple-100 px-3 py-1 rounded-full text-sm font-semibold" style={{ color: "#6B21A8" }}>
                    Фестивали
                  </span>
                  <span className="bg-red-100 px-3 py-1 rounded-full text-sm font-semibold" style={{ color: "#991B1B" }}>
                    Награды
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-lg p-8" style={{ borderLeft: "4px solid #FF8C42" }}>
            <h3 className="text-2xl font-bold mb-2" style={{ color: "#0099CC" }}>Также снимаем:</h3>
            <ul style={{ color: "#6B7280" }} className="space-y-2">
              <li className="flex items-center gap-2">
                <span style={{ color: "#FF8C42" }}>▶</span> Видеоблоги и сюжеты
              </li>
              <li className="flex items-center gap-2">
                <span style={{ color: "#FF8C42" }}>▶</span> Документальные фильмы
              </li>
              <li className="flex items-center gap-2">
                <span style={{ color: "#FF8C42" }}>▶</span> Образовательный контент
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}

      {/* Gallery Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#0099CC" }}>Галерея</h2>
            <div className="h-1 w-16 rounded-full mx-auto" style={{ backgroundColor: "#FF8C42" }}></div>
            <p className="mt-4 text-lg" style={{ color: "#6B7280" }}>
              Посмотрите, как мы работаем: съемки, студия, монтаж и праздники побед
            </p>
          </div>
          <Gallery
            images={[
              {
                id: "1",
                src: "/images/gallery-filming-outdoor.jpg",
                alt: "Съемка на открытом воздухе",
                category: "filming",
                title: "Съемка на открытом воздухе",
                description: "Наша команда снимает документальный материал в естественных условиях с профессиональным оборудованием.",
              },
              {
                id: "2",
                src: "/images/gallery-studio-setup.jpg",
                alt: "Профессиональная студия",
                category: "studio",
                title: "Профессиональная студия с зеленым экраном",
                description: "Дети работают в современной студии с профессиональным освещением и оборудованием для создания качественного контента.",
              },
              {
                id: "3",
                src: "/images/gallery-editing-room.jpg",
                alt: "Редакторский люкс",
                category: "editing",
                title: "Видеомонтаж и цветокоррекция",
                description: "Ученики работают с профессиональным ПО для монтажа, цветокоррекции и создания спецэффектов.",
              },
              {
                id: "4",
                src: "/images/gallery-team-collaboration.jpg",
                alt: "Командная работа",
                category: "filming",
                title: "Планирование и командная работа",
                description: "Дети обсуждают сценарий, планируют кадры и работают вместе над реализацией проекта.",
              },
              {
                id: "5",
                src: "/images/gallery-festival-awards.jpg",
                alt: "Фестивальные награды",
                category: "festival",
                title: "Победы на фестивалях",
                description: "Наши ученики регулярно побеждают на кинофестивалях и получают признание за свои работы.",
              },
            ]}
          />
        </div>
      </section>
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#0099CC" }}>Отзывы родителей и учеников</h2>
            <div className="h-1 w-16 rounded-full mx-auto" style={{ backgroundColor: "#FF8C42" }}></div>
            <p className="mt-4 text-lg" style={{ color: "#6B7280" }}>
              Узнайте, что говорят о нас родители и ученики
            </p>
          </div>
          <Testimonials
            testimonials={[
              {
                id: "1",
                name: "Юлия Титова",
                role: "Руководитель студии",
                avatar: "👩‍🏫",
                text: "За 8 лет работы студии мы помогли более чем 150 детям раскрыть свой творческий потенциал. Каждый ребенок уходит от нас с реальным опытом и портфолио.",
                rating: 5,
                category: "teacher",
              },
              {
                id: "2",
                name: "Мария Петрова",
                role: "Мама Маруси",
                avatar: "👩",
                text: "Спасибо за эмоциональную встряску. Надеюсь, родители откликнутся на этот призыв. Моя дочь полностью изменилась после занятий в студии!",
                rating: 5,
                category: "parent",
              },
              {
                id: "3",
                name: "Матвей Сафин",
                role: "Ученик 7 класса",
                avatar: "🎬",
                text: "Это просто ШЕДЕВР! Я создал свой первый фильм и он был показан на фестивале. Теперь я хочу стать режиссером!",
                rating: 5,
                category: "student",
              },
              {
                id: "4",
                name: "Анна Смирнова",
                role: "Папа Алисы",
                avatar: "👨",
                text: "Действительно, необычная техника и очень актуальный сюжет в современном мире. Студия учит детей не только технике, но и ответственности.",
                rating: 5,
                category: "parent",
              },
              {
                id: "5",
                name: "Алиса Сафрайтер",
                role: "Ученица 8 класса",
                avatar: "🎥",
                text: "Я ведущая рубрики 'Любопытно' в Ежовостях. Это дало мне уверенность в себе и я даже выступаю на публике без страха!",
                rating: 5,
                category: "student",
              },
              {
                id: "6",
                name: "Татьяна Никонорова",
                role: "Учитель школы",
                avatar: "👨‍🏫",
                text: "Дети, которые занимаются в студии, становятся более организованными и ответственными. Это отличное дополнение к школьному образованию.",
                rating: 5,
                category: "teacher",
              },
            ]}
          />
        </div>
      </section>

      {/* CTA Section with Contact Form */}
      <section id="cta-section" className="py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: "#0099CC", color: "white" }}>
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent opacity-10"></div>
        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Готовы начать творческий путь?
              </h2>
              <p className="text-xl text-gray-200">
                Присоединяйтесь к нашей студии и создавайте кино вместе с нами!
              </p>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-lg border border-opacity-30" style={{ borderColor: "#FF8C42" }}>
              <h3 className="text-2xl font-bold mb-6 text-center">Записаться на занятие</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12" style={{ backgroundColor: "#0099CC", color: "white", borderTop: "4px solid #FF8C42" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Контакты</h3>
              <div className="space-y-3">
                <a
                  href="tel:+79159765579"
                  className="flex items-center gap-2 hover:text-orange-300 transition"
                >
                  <Phone className="w-5 h-5" />
                  +7 (915) 976-55-79
                </a>
                <a
                  href="mailto:yuli-tita@yandex.ru"
                  className="flex items-center gap-2 hover:text-orange-300 transition"
                >
                  <Mail className="w-5 h-5" />
                  yuli-tita@yandex.ru
                </a>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>г. Ярославль, Силикатное ш., 19</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Следите за нами</h3>
              <div className="space-y-2">
                <a
                  href="https://vk.com/2kadra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-orange-300 transition"
                >
                  🎬 VK: @2kadra
                </a>
                <a
                  href="https://t.me/dva_kadra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-orange-300 transition"
                >
                  💬 Telegram: @dva_kadra
                </a>
                <a
                  href="https://rutube.ru/u/2kadra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-orange-300 transition"
                >
                  📺 RuTube: @2kadra
                </a>
                <a
                  href="https://www.tiktok.com/@2kadra2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-orange-300 transition"
                >
                  🎵 TikTok: @2kadra2
                </a>
                <a
                  href="https://www.youtube.com/@dva-kadra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-orange-300 transition"
                >
                  ▶️ YouTube: @dva-kadra
                </a>
              </div>
            </div>

            {/* Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">О нас</h3>
              <p className="text-gray-300">
                Детская студия видеотворчества «Два-Кадра» работает с 2017 года. Мы учим детей создавать кино, развиваем их творческие способности и помогаем раскрыть талант.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-400 pt-8 text-center text-gray-200">
            <p>© 2024 Студия «Два-Кадра». Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
