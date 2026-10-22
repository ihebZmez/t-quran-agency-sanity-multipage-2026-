import { Link } from "react-router-dom";
import { BookOpen, UsersRound } from "lucide-react";
import Seo from "../components/seo/Seo";
import SanityImage from "../components/common/SanityImage";
import { seoConfig } from "../config/seoConfig";
import { useTeam } from "../hooks/useTeam";

const ExpertisePage = () => {
  const { data: teachers = [], loading } = useTeam();

  return (
    <main className="quran-page">
      <Seo {...seoConfig.expertise} />
      <section className="quran-page-hero">
        <div className="container">
          <p className="quran-eyebrow">المعلمون والمشرفون</p>
          <h1>أهل القرآن</h1>
          <p>
            تعرّفوا إلى المعلمين والمشرفين والبرامج التي يتولّون متابعتها.
          </p>
        </div>
      </section>
      <section className="quran-section quran-section-ivory">
        <div className="container">
          {loading ? (
            <p className="quran-empty-note" role="status">
              جارٍ تحميل المعلومات...
            </p>
          ) : teachers.length ? (
            <div className="quran-teacher-grid quran-teacher-grid-wide">
              {teachers.map((teacher) => (
                <article className="quran-teacher-card" key={teacher._id}>
                  {teacher.photo ? (
                    <SanityImage
                      source={teacher.photo}
                      alt={teacher.name}
                      width={440}
                      height={440}
                      className="quran-teacher-image"
                    />
                  ) : (
                    <span className="quran-teacher-placeholder">
                      <UsersRound aria-hidden="true" />
                    </span>
                  )}
                  {teacher.position && (
                    <span className="quran-category">{teacher.position}</span>
                  )}
                  <h2>{teacher.name}</h2>
                  {teacher.biography && <p>{teacher.biography}</p>}
                  {teacher.assignedPrograms?.length > 0 && (
                    <div className="quran-assigned-programs">
                      <BookOpen aria-hidden="true" />
                      <span>
                        {teacher.assignedPrograms
                          .map((program) => program.title)
                          .filter(Boolean)
                          .join("، ")}
                      </span>
                    </div>
                  )}
                </article>
              ))}
            </div>
          ) : (
            <div className="quran-empty-panel">
              <p>لا توجد معلومات منشورة عن المعلمين والمشرفين في الوقت الحالي.</p>
              <Link to="/contact" className="quran-text-link">
                للاستفسار عن البرامج <span aria-hidden="true">←</span>
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default ExpertisePage;
