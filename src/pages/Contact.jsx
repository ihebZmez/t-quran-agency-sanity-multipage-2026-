import { useTranslation } from "react-i18next";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import SectionTitle from "../components/ui/SectionTitle";
import ReservationForm from "../components/forms/ReservationForm";
import { useSiteSettings } from "../hooks/useSiteSettings";
import Seo from "../components/seo/Seo";
import { seoConfig } from "../config/seoConfig";

const ContactPage = () => {
  const { t } = useTranslation();
  const { data: settings } = useSiteSettings();
  const socialLinks = [
    { icon: Facebook, url: settings?.social?.facebook, label: "فيسبوك" },
    { icon: Instagram, url: settings?.social?.instagram, label: "إنستغرام" },
    { icon: Youtube, url: settings?.social?.youtube, label: "يوتيوب" },
  ].filter((social) => social.url);
  const whatsappNumber = settings?.whatsapp?.replace(/\D/g, "");
  const contactInfo = [
    {
      icon: Phone,
      label: t("contact.info.phone"),
      value: settings?.phone,
      href: settings?.phone ? `tel:${settings.phone}` : null,
    },
    {
      icon: Mail,
      label: t("contact.info.email"),
      value: settings?.email,
      href: settings?.email ? `mailto:${settings.email}` : null,
    },
    {
      icon: MapPin,
      label: t("contact.info.address"),
      value: settings?.address,
      href: null,
    },
  ].filter((item) => item.value);

  return (
    <main className="quran-page">
      <Seo {...seoConfig.contact} />
      <section className="quran-section quran-section-ivory quran-contact-page">
        <div className="container">
          <SectionTitle
            badge={t("contact.badge")}
            title={t("contact.title")}
            highlight={t("contact.titleHighlight")}
            subtitle={t("contact.subtitle")}
            headingAs="h1"
          />
          <div className="quran-contact-grid">
            <aside className="quran-contact-panel">
              <h2>الفرع المحلي</h2>
              <p>الرابطة الوطنية للقرآن الكريم بسيدي بوضاوي — قليبية</p>
              {contactInfo.length ? (
                <ul>
                  {contactInfo.map((info) => (
                    <li key={info.label}>
                      <info.icon aria-hidden="true" />
                      <div>
                        <span>{info.label}</span>
                        {info.href ? (
                          <a href={info.href}>{info.value}</a>
                        ) : (
                          <p>{info.value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="quran-contact-note">
                  تُضاف بيانات الهاتف والعنوان عند اعتمادها من الفرع. يمكنكم
                  إرسال طلب التسجيل من خلال النموذج.
                </p>
              )}
              {settings?.mapsUrl && (
                <a
                  href={settings.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="quran-button quran-button-secondary"
                >
                  الموقع على الخريطة <MapPin aria-hidden="true" />
                </a>
              )}
              {whatsappNumber && (
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="quran-button quran-button-primary"
                >
                  التواصل عبر واتساب <Phone aria-hidden="true" />
                </a>
              )}
              {socialLinks.length > 0 && (
                <div className="quran-contact-socials">
                  <h3>{t("contact.social")}</h3>
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
            </aside>
            <section className="quran-contact-form-panel">
              <h2>طلب التسجيل أو الاستفسار</h2>
              <p>
                يُرجى إدخال بيانات التواصل اللازمة فقط. تسجيل الأطفال يكون
                بواسطة وليّ الأمر.
              </p>
              <ReservationForm />
            </section>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
