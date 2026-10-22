import { Link, useParams } from "react-router-dom";
import { BookOpen, CalendarDays, MapPin } from "lucide-react";
import Seo from "../components/seo/Seo";
import SanityImage from "../components/common/SanityImage";
import { useServices } from "../hooks/useServices";
import { seoConfig } from "../config/seoConfig";

const ServiceDetail = () => {
  const { slug } = useParams();
  const { data: programs = [], loading } = useServices();
  const program = programs.find((item) => item.slug === slug);

  if (!program) {
    return (
      <main className="quran-page">
        <section className="quran-section quran-section-ivory">
          <div className="container quran-empty-panel">
            <h1>{loading ? "جارٍ تحميل البرنامج..." : "البرنامج غير متاح"}</h1>
            {!loading && (
              <p>
                قد يكون البرنامج غير منشور أو لم يعد متاحًا على الموقع.
              </p>
            )}
            <Link to="/services" className="quran-text-link">
              العودة إلى البرامج <span aria-hidden="true">←</span>
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="quran-page">
      <Seo
        title={`${program.title} | برامج الرابطة الوطنية للقرآن الكريم — قليبية`}
        description={program.shortDescription || seoConfig.serviceDetail.description}
        canonical={`/services/${slug}`}
        image={seoConfig.serviceDetail.image}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Course",
          name: program.title,
          description: program.shortDescription,
          provider: {
            "@type": "Organization",
            name: "الفرع المحلي للرابطة الوطنية للقرآن الكريم بسيدي بوضاوي — قليبية",
          },
        }}
      />
      <section className="quran-page-hero">
        <div className="container">
          <Link to="/services" className="quran-text-link">
            العودة إلى البرامج
          </Link>
          <h1>{program.title}</h1>
          {program.shortDescription && <p>{program.shortDescription}</p>}
        </div>
      </section>
      <section className="quran-section quran-section-ivory">
        <div className="container quran-program-card">
          {program.heroImage || program.coverImage ? (
            <SanityImage
              source={program.heroImage || program.coverImage}
              alt={program.title}
              width={900}
              height={720}
              className="quran-program-image"
            />
          ) : (
            <div className="quran-program-placeholder">
              <BookOpen aria-hidden="true" />
            </div>
          )}
          <div className="quran-program-content">
            {program.audience && (
              <span className="quran-category">
                {program.audience === "women"
                  ? "للنساء"
                  : program.audience === "men"
                    ? "للرجال"
                    : program.audience === "children"
                      ? "للأطفال"
                      : "للجميع"}
              </span>
            )}
            {program.description && <p>{program.description}</p>}
            {program.schedule && (
              <p className="quran-card-detail">
                <CalendarDays aria-hidden="true" />
                {program.schedule}
              </p>
            )}
            {program.location && (
              <p className="quran-card-detail">
                <MapPin aria-hidden="true" />
                {program.location}
              </p>
            )}
            {program.registrationInstructions && (
              <p>{program.registrationInstructions}</p>
            )}
            <p className="quran-registration-status">
              {program.registrationOpen
                ? "التسجيل متاح وفق تعليمات الفرع"
                : "يرجى التواصل مع الفرع للاستفسار عن التسجيل"}
            </p>
            <Link to="/contact" className="quran-button quran-button-primary">
              الاستفسار والتسجيل
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetail;
