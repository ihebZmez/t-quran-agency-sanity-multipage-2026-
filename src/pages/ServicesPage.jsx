import { Link } from "react-router-dom";
import { BookOpen, CalendarDays, MapPin } from "lucide-react";
import SectionTitle from "../components/ui/SectionTitle";
import Seo from "../components/seo/Seo";
import SanityImage from "../components/common/SanityImage";
import { useServices } from "../hooks/useServices";
import { seoConfig } from "../config/seoConfig";

const audienceLabels = {
  women: "للنساء",
  men: "للرجال",
  children: "للأطفال",
  all: "للجميع",
};

const ServicesPage = () => {
  const { data: programs = [], loading } = useServices();

  return (
    <main className="quran-page">
      <Seo {...seoConfig.services} />
      <section className="quran-page-hero">
        <div className="container">
          <p className="quran-eyebrow">برامجنا القرآنية</p>
          <h1>حلقات التحفيظ والتعلّم</h1>
          <p>
            برامج يعلنها الفرع للنساء والرجال والأطفال. تواصلوا معنا للتأكد من
            مواعيد التسجيل والتفاصيل.
          </p>
        </div>
      </section>
      <section className="quran-section quran-section-ivory">
        <div className="container">
          <SectionTitle
            badge="الحلقات والبرامج"
            title="تعلّموا القرآن الكريم"
            subtitle="تُعرض هنا البرامج التي نشرها الفرع في الموقع."
            align="left"
          />
          {loading ? (
            <p className="quran-empty-note" role="status">
              جارٍ تحميل البرامج...
            </p>
          ) : programs.length ? (
            <div className="quran-program-grid">
              {programs.map((program) => (
                <article className="quran-program-card" key={program._id}>
                  {program.coverImage ? (
                    <SanityImage
                      source={program.coverImage}
                      alt={program.title}
                      width={760}
                      height={480}
                      className="quran-program-image"
                    />
                  ) : (
                    <div className="quran-program-placeholder">
                      <BookOpen aria-hidden="true" />
                    </div>
                  )}
                  <div className="quran-program-content">
                    <span className="quran-category">
                      {audienceLabels[program.audience]}
                    </span>
                    <h2>{program.title}</h2>
                    {program.shortDescription && <p>{program.shortDescription}</p>}
                    {program.description && <p>{program.description}</p>}
                    <ul className="quran-program-details">
                      {program.schedule && (
                        <li>
                          <CalendarDays aria-hidden="true" />
                          {program.schedule}
                        </li>
                      )}
                      {program.location && (
                        <li>
                          <MapPin aria-hidden="true" />
                          {program.location}
                        </li>
                      )}
                    </ul>
                    <p className="quran-registration-status">
                      {program.registrationOpen
                        ? "التسجيل متاح وفق تعليمات الفرع"
                        : "يرجى التواصل مع الفرع للاستفسار عن التسجيل"}
                    </p>
                    {program.registrationInstructions && (
                      <p>{program.registrationInstructions}</p>
                    )}
                    <Link
                      to="/contact"
                      className="quran-button quran-button-primary"
                    >
                      الاستفسار والتسجيل
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="quran-empty-note" role="status">
              لا توجد برامج منشورة حاليًا. يرجى التواصل مع الفرع للاستفسار عن
                الحلقات ومواعيدها.
            </p>
          )}
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
