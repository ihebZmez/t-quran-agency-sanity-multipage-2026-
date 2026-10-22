import { ArrowUpLeft, CalendarDays, Image, MapPin } from "lucide-react";
import { useNews } from "../../hooks/useNews";
import SanityImage from "../common/SanityImage";
import LoadingSkeleton from "../common/LoadingSkeleton";

const formatArabicDate = (date) =>
  new Intl.DateTimeFormat("ar-TN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

const News = () => {
  const { data: newsItems = [], loading } = useNews();
  const items = Array.isArray(newsItems) ? newsItems : [];

  if (loading) {
    return (
      <section className="quran-section quran-section-white" aria-busy="true">
        <div className="container">
          <LoadingSkeleton />
        </div>
      </section>
    );
  }

  if (!items.length) {
    return (
      <section className="quran-section quran-section-white">
        <div className="container">
          <p className="quran-empty-note">
            لا توجد أنشطة أو مواد منشورة حاليًا. تابعوا الموقع للاطلاع على
            المستجدات.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="quran-section quran-section-white">
      <div className="container">
        <div className="quran-content-grid">
          {items.map((item) => (
            <article className="quran-content-card" key={item._id}>
              {item.image ? (
                <SanityImage
                  source={item.image}
                  alt={item.title}
                  width={800}
                  height={540}
                  className="quran-content-image"
                />
              ) : (
                <div className="quran-content-placeholder">
                  <Image aria-hidden="true" />
                </div>
              )}
              <div className="quran-content-body">
                <div className="quran-card-meta">
                  {item.category && (
                    <span className="quran-category">{item.category}</span>
                  )}
                  {item.mediaType === "video" && (
                    <span className="quran-category">فيديو أو منشور اجتماعي</span>
                  )}
                </div>
                <h2>{item.title}</h2>
                {item.description && <p>{item.description}</p>}
                {item.location && (
                  <span className="quran-card-detail">
                    <MapPin aria-hidden="true" />
                    {item.location}
                  </span>
                )}
                {(item.date || item.publishedAt) && (
                  <span className="quran-card-detail">
                    <CalendarDays aria-hidden="true" />
                    {formatArabicDate(item.date || item.publishedAt)}
                  </span>
                )}
                {item.registrationInstructions && (
                  <p>{item.registrationInstructions}</p>
                )}
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="quran-text-link"
                  >
                    {item.mediaType === "video"
                      ? "مشاهدة المحتوى"
                      : "التفاصيل"}
                    <ArrowUpLeft aria-hidden="true" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
