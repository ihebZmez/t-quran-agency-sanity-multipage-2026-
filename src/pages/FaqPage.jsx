import Seo from "../components/seo/Seo";
import FaqAccordion from "../components/sections/FaqAccordion";
import SectionTitle from "../components/ui/SectionTitle";
import { seoConfig } from "../config/seoConfig";
import { useFaqs } from "../hooks/useFaqs";

const FaqPage = () => {
  const { data: faqs = [] } = useFaqs();

  return (
    <main className="quran-page min-h-[70vh] px-4 pb-24 pt-24 text-ink md:px-8">
      <Seo {...seoConfig.faq} />
      <div className="container">
        <SectionTitle
          badge="معلومات"
          title="أسئلة شائعة"
          subtitle="إجابات عن الاستفسارات المتعلقة بالبرامج القرآنية والتسجيل."
          align="left"
          headingAs="h1"
        />
        {faqs.length ? (
          <div className="mt-12">
            <FaqAccordion items={faqs} />
          </div>
        ) : (
          <p className="mt-10 text-ink/60" role="status">
            لا توجد أسئلة منشورة حاليًا. يرجى التواصل مع الفرع للاستفسار.
          </p>
        )}
      </div>
    </main>
  );
};

export default FaqPage;
