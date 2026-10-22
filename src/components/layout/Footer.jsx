import { Link } from "react-router-dom";
import { BookOpen, Facebook, Instagram, MapPin, Phone } from "lucide-react";
import { useSiteSettings } from "../../hooks/useSiteSettings";

const navLinks = [
  { path: "/", label: "الرئيسية" },
  { path: "/a-propos", label: "من نحن" },
  { path: "/services", label: "برامجنا وحلقات التحفيظ" },
  { path: "/expertises", label: "المعلمون والمشرفون" },
  { path: "/actualites", label: "الأنشطة والفعاليات" },
  { path: "/faq", label: "الأسئلة الشائعة" },
  { path: "/contact", label: "التسجيل والاتصال بنا" },
];

const Footer = () => {
  const { data: settings } = useSiteSettings();
  const socialLinks = [
    { icon: Facebook, url: settings?.social?.facebook, label: "فيسبوك" },
    { icon: Instagram, url: settings?.social?.instagram, label: "إنستغرام" },
  ].filter((social) => social.url);

  return (
    <footer className="quran-footer">
      <div className="container quran-footer-grid">
        <div>
          <div className="quran-footer-brand">
            <span>
              <BookOpen aria-hidden="true" />
            </span>
            <strong>الرابطة الوطنية للقرآن الكريم</strong>
          </div>
          <p className="quran-footer-description">
            الفرع المحلي بسيدي بوضاوي — قليبية
          </p>
        </div>

        <div>
          <h2>روابط الموقع</h2>
          <ul>
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>تواصلوا معنا</h2>
          <ul className="quran-footer-contact">
            {settings?.phone && (
              <li>
                <Phone aria-hidden="true" />
                <a href={`tel:${settings.phone}`}>{settings.phone}</a>
              </li>
            )}
            {settings?.address && (
              <li>
                <MapPin aria-hidden="true" />
                <span>{settings.address}</span>
              </li>
            )}
            {settings?.mapsUrl && (
              <li>
                <MapPin aria-hidden="true" />
                <a
                  href={settings.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  الموقع على الخريطة
                </a>
              </li>
            )}
          </ul>
          {socialLinks.length > 0 && (
            <div className="quran-footer-socials">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <social.icon aria-hidden="true" />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="container quran-footer-bottom">
        © {new Date().getFullYear()} الفرع المحلي للرابطة الوطنية للقرآن الكريم
        بسيدي بوضاوي — قليبية
      </div>
    </footer>
  );
};

export default Footer;
