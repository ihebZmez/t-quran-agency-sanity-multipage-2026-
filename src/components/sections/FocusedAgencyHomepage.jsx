import { Link } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  CalendarDays,
  MapPin,
  UsersRound,
} from "lucide-react";
import { useSiteSettings } from "../../hooks/useSiteSettings";
import { useServices } from "../../hooks/useServices";
import { useNews } from "../../hooks/useNews";
import { useTeam } from "../../hooks/useTeam";
import SanityImage from "../common/SanityImage";

const audienceCards = [
  {
    value: "women",
    title: "للنساء",
    description: "حلقات لتعلّم القرآن الكريم والحفظ والمراجعة.",
  },
  {
    value: "men",
    title: "للرجال",
    description: "برامج قرآنية للتعلّم والتلاوة والمراجعة.",
  },
  {
    value: "children",
    title: "للأطفال",
    description: "بيئة تربوية مشجّعة على تعلّم كتاب الله وحفظه.",
  },
];

const formatArabicDate = (date) =>
  new Intl.DateTimeFormat("ar-TN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

const NewsCard = ({ item }) => (
  <article className="quran-content-card" key={item._id}>
    {item.image && (
      <SanityImage
        source={item.image}
        alt={item.title}
        width={700}
        height={440}
        className="quran-content-image"
      />
    )}
    <div className="quran-content-body">
      {item.category && <span className="quran-category">{item.category}</span>}
      <h3>{item.title}</h3>
      {item.description && <p>{item.description}</p>}
      {item.date && (
        <span className="quran-card-detail">
          <CalendarDays aria-hidden="true" />
          {formatArabicDate(item.date)}
        </span>
      )}
      {item.location && (
        <span className="quran-card-detail">
          <MapPin aria-hidden="true" />
          {item.location}
        </span>
      )}
    </div>
  </article>
);

const FocusedAgencyHomepage = () => {
  const { data: settings } = useSiteSettings();
  const { data: programs = [] } = useServices();
  const { data: newsItems = [] } = useNews();
  const { data: teachers = [] } = useTeam();
  const today = new Date().toISOString().slice(0, 10);
  const upcomingEvents = newsItems
    .filter((item) => item.date && item.date >= today)
    .slice(0, 3);
  const recentActivities = newsItems
    .filter((item) => item.mediaType === "photo" || item.mediaType === "video")
    .slice(0, 3);
  const featuredTeachers = teachers.slice(0, 3);

  return (
    <div className="quran-site">
      <section className="quran-hero">
        <div className="quran-hero-pattern" aria-hidden="true" />
        <div className="container quran-hero-layout">
          <div className="quran-hero-content">
            <p className="quran-eyebrow">
              <BookOpen aria-hidden="true" />
              الفرع المحلي للرابطة الوطنية للقرآن الكريم
            </p>
            <h1>
              القرآن الكريم
              <span> نورٌ وهداية</span>
            </h1>
            <p className="quran-hero-copy">
              معًا نتعلّم كتاب الله، ونتدبّر آياته، ونسعى إلى العمل به.
            </p>
            <p className="quran-branch-name">بسيدي بوضاوي — قليبية</p>
            <div className="quran-actions">
              <Link to="/contact" className="quran-button quran-button-primary">
                سجّل في حلقات التحفيظ <ArrowLeft aria-hidden="true" />
              </Link>
              <Link
                to="/actualites"
                className="quran-button quran-button-secondary"
              >
                اكتشف أنشطتنا <ArrowLeft aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="quran-hero-image">
            <img
              src="/images/Activity%20Images/quran.jpg"
              alt="مصحف كريم مفتوح على حامل خشبي"
              fetchPriority="high"
            />
            <span>مجالس للعلم والتلاوة والعمل بكتاب الله</span>
          </div>
        </div>
      </section>

      <section className="quran-section quran-section-ivory">
        <div className="container">
          <div className="quran-section-heading">
            <p className="quran-eyebrow">برامجنا القرآنية</p>
            <h2>مجالس تجمعنا على كتاب الله</h2>
            <p>
              تعرّفوا إلى البرامج المنشورة، واختاروا ما يناسبكم من الحلقات
              والمبادرات القرآنية.
            </p>
          </div>
          <div className="quran-audience-grid">
            {audienceCards.map((audience) => {
              const program = programs.find(
                (item) => item.audience === audience.value,
              );
              return (
                <article className="quran-audience-card" key={audience.value}>
                  <span className="quran-card-icon">
                    <UsersRound aria-hidden="true" />
                  </span>
                  <h3>{audience.title}</h3>
                  <p>{program?.shortDescription || audience.description}</p>
                  {program?.schedule && (
                    <p className="quran-card-detail">
                      {program.schedule}
                    </p>
                  )}
                  <Link to="/services">
                    اكتشفوا البرامج <ArrowLeft aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>
          {programs.length === 0 && (
            <p className="quran-empty-note">
              تُنشر تفاصيل الحلقات ومواعيدها عند اعتمادها من الفرع.
            </p>
          )}
        </div>
      </section>

      {upcomingEvents.length > 0 && (
        <section className="quran-section quran-section-white">
          <div className="container">
            <div className="quran-section-heading quran-section-heading-row">
              <div>
                <p className="quran-eyebrow">موعدنا القادم</p>
                <h2>الفعاليات القادمة</h2>
                <p>مواعيد وأنشطة أعلن عنها الفرع.</p>
              </div>
              <Link className="quran-text-link" to="/actualites">
                جميع الفعاليات <ArrowLeft aria-hidden="true" />
              </Link>
            </div>
            <div className="quran-content-grid">
              {upcomingEvents.map((item) => (
                <NewsCard item={item} key={item._id} />
              ))}
            </div>
          </div>
        </section>
      )}

      {recentActivities.length > 0 && (
        <section className="quran-section quran-section-ivory">
          <div className="container">
            <div className="quran-section-heading quran-section-heading-row">
              <div>
                <p className="quran-eyebrow">من أنشطتنا</p>
                <h2>أحدث الصور والمنشورات</h2>
              </div>
              <Link className="quran-text-link" to="/galerie">
                معرض الأنشطة <ArrowLeft aria-hidden="true" />
              </Link>
            </div>
            <div className="quran-content-grid">
              {recentActivities.map((item) => (
                <NewsCard item={item} key={item._id} />
              ))}
            </div>
          </div>
        </section>
      )}

      {featuredTeachers.length > 0 && (
        <section className="quran-section quran-section-ivory">
          <div className="container">
            <div className="quran-section-heading quran-section-heading-row">
              <div>
                <p className="quran-eyebrow">أهل القرآن</p>
                <h2>المعلمون والمشرفون</h2>
              </div>
              <Link className="quran-text-link" to="/expertises">
                تعرّفوا إليهم <ArrowLeft aria-hidden="true" />
              </Link>
            </div>
            <div className="quran-teacher-grid">
              {featuredTeachers.map((teacher) => (
                <article className="quran-teacher-card" key={teacher._id}>
                  {teacher.photo ? (
                    <SanityImage
                      source={teacher.photo}
                      alt={teacher.name}
                      width={360}
                      height={360}
                      className="quran-teacher-image"
                    />
                  ) : (
                    <span className="quran-teacher-placeholder">
                      <UsersRound aria-hidden="true" />
                    </span>
                  )}
                  <h3>{teacher.name}</h3>
                  {teacher.position && <p>{teacher.position}</p>}
                  {teacher.biography && <p>{teacher.biography}</p>}
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="quran-contact-strip">
        <div className="container quran-contact-content">
          <div>
            <p className="quran-eyebrow">نرحّب بكم</p>
            <h2>كونوا معنا في رحلتنا مع القرآن الكريم</h2>
            <p>
              {settings?.address || "الفرع المحلي بسيدي بوضاوي — قليبية"}
            </p>
          </div>
          <Link to="/contact" className="quran-button quran-button-primary">
            التسجيل والتواصل <ArrowLeft aria-hidden="true" />
          </Link>
          {settings?.mapsUrl && (
            <a
              className="quran-location-link"
              href={settings.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin aria-hidden="true" /> الموقع
            </a>
          )}
        </div>
      </section>
    </div>
  );
};

export default FocusedAgencyHomepage;
