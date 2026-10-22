import { siteConfig } from "./siteConfig";

const associationName =
  "الفرع المحلي للرابطة الوطنية للقرآن الكريم بسيدي بوضاوي — قليبية";
const defaultImage = `${siteConfig.siteUrl}/images/Activity%20Images/quran.jpg`;

export const seoConfig = {
  home: {
    title: "القرآن الكريم نورٌ وهداية | الرابطة الوطنية للقرآن الكريم — قليبية",
    description:
      "الفرع المحلي للرابطة الوطنية للقرآن الكريم بسيدي بوضاوي — قليبية. معًا نتعلّم كتاب الله، ونتدبّر آياته، ونسعى إلى العمل به.",
    canonical: "/",
    image: defaultImage,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: associationName,
      url: siteConfig.siteUrl,
      image: defaultImage,
      address: {
        "@type": "PostalAddress",
        addressLocality: "قليبية",
        addressCountry: "TN",
      },
    },
  },
  services: {
    title: "برامجنا وحلقات التحفيظ | الرابطة الوطنية للقرآن الكريم — قليبية",
    description:
      "تعرّفوا إلى برامج القرآن الكريم وحلقات الحفظ والمراجعة المنشورة للنساء والرجال والأطفال في الفرع المحلي بسيدي بوضاوي — قليبية.",
    canonical: "/services",
    image: defaultImage,
  },
  serviceDetail: {
    title: "البرامج القرآنية | الرابطة الوطنية للقرآن الكريم — قليبية",
    description:
      "تفاصيل البرامج القرآنية وحلقات التحفيظ والتسجيل لدى الفرع المحلي بسيدي بوضاوي — قليبية.",
    image: defaultImage,
  },
  expertise: {
    title: "المعلمون والمشرفون | الرابطة الوطنية للقرآن الكريم — قليبية",
    description:
      "تعرّفوا إلى المعلمين والمشرفين على البرامج القرآنية في الفرع المحلي بسيدي بوضاوي — قليبية.",
    canonical: "/expertises",
    image: defaultImage,
  },
  company: {
    title: "من نحن | الفرع المحلي للرابطة الوطنية للقرآن الكريم — قليبية",
    description:
      "نبذة عن الفرع المحلي للرابطة الوطنية للقرآن الكريم بسيدي بوضاوي — قليبية، ورسالته وأهدافه في تعليم كتاب الله.",
    canonical: "/a-propos",
    image: defaultImage,
  },
  news: {
    title: "الأنشطة والفعاليات ومعرض الصور | الرابطة الوطنية للقرآن الكريم",
    description:
      "تابعوا أنشطة الفرع المحلي للرابطة الوطنية للقرآن الكريم بسيدي بوضاوي — قليبية وإعلاناته وفعالياته المنشورة.",
    canonical: "/actualites",
    image: defaultImage,
  },
  faq: {
    title: "معلومات التسجيل والأسئلة الشائعة | الرابطة الوطنية للقرآن الكريم",
    description:
      "إجابات عن الاستفسارات المتكررة حول حلقات التحفيظ والبرامج القرآنية والتسجيل في فرع قليبية.",
    canonical: "/faq",
    image: defaultImage,
  },
  contact: {
    title: "التسجيل والاتصال بنا | الرابطة الوطنية للقرآن الكريم — قليبية",
    description:
      "تواصلوا مع الفرع المحلي للرابطة الوطنية للقرآن الكريم بسيدي بوضاوي — قليبية للاستفسار والتسجيل في البرامج المنشورة.",
    canonical: "/contact",
    image: defaultImage,
  },
};
