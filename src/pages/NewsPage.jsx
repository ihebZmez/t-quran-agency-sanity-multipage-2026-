import News from "../components/sections/News";
import SectionTitle from "../components/ui/SectionTitle";
import Seo from "../components/seo/Seo";
import { seoConfig } from "../config/seoConfig";

export default function NewsPage() {
  return (
    <main className="quran-page">
      <Seo {...seoConfig.news} />
      <div className="quran-page-hero">
        <div className="container">
          <SectionTitle
            badge="أنشطة الفرع"
            title="الأنشطة والفعاليات"
            highlight="ومعرض الصور والفيديوهات"
            subtitle="إعلانات الأنشطة والفعاليات والصور والمنشورات التي يشاركها الفرع."
            headingAs="h1"
          />
        </div>
      </div>
      <News />
    </main>
  );
}
