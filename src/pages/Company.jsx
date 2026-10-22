import { Link } from "react-router-dom";
import { BookOpen, HeartHandshake, UsersRound } from "lucide-react";
import Seo from "../components/seo/Seo";
import SectionTitle from "../components/ui/SectionTitle";
import { seoConfig } from "../config/seoConfig";

const Company = () => (
  <main className="quran-page">
    <Seo {...seoConfig.company} />
    <section className="quran-page-hero">
      <div className="container">
        <p className="quran-eyebrow">من نحن</p>
        <h1>الفرع المحلي للرابطة الوطنية للقرآن الكريم</h1>
        <p>بسيدي بوضاوي — قليبية</p>
      </div>
    </section>
    <section className="quran-section quran-section-ivory">
      <div className="container quran-about-copy">
        <SectionTitle
          badge="رسالتنا"
          title="معًا نتعلّم كتاب الله"
          subtitle="نسعى إلى تيسير تعلّم القرآن الكريم وتلاوته وحفظه ومراجعته، في أجواء تربوية جامعة لأفراد المجتمع."
          align="left"
        />
        <div className="quran-principle-grid">
          <article>
            <BookOpen aria-hidden="true" />
            <h2>تعليم القرآن</h2>
            <p>
              إتاحة حلقات وبرامج قرآنية تساعد المشاركين على التعلّم والتلاوة
              والحفظ والمراجعة.
            </p>
          </article>
          <article>
            <HeartHandshake aria-hidden="true" />
            <h2>قيم القرآن</h2>
            <p>
              التشجيع على تدبّر آيات القرآن الكريم والسعي إلى العمل به في حياة
              الفرد والمجتمع.
            </p>
          </article>
          <article>
            <UsersRound aria-hidden="true" />
            <h2>مجتمع متعاون</h2>
            <p>
              جمع النساء والرجال والأطفال في مبادرات تعليمية وأنشطة قرآنية
              يعلنها الفرع.
            </p>
          </article>
        </div>
        <div className="quran-about-cta">
          <p>للاستفسار عن البرامج والأنشطة المتاحة، تواصلوا مع الفرع.</p>
          <Link to="/contact" className="quran-button quran-button-primary">
            التسجيل والاتصال
          </Link>
        </div>
      </div>
    </section>
  </main>
);

export default Company;
