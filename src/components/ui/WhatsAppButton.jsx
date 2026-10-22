import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import siteConfig from "../../config/siteConfig";
import { useSiteSettings } from "../../hooks/useSiteSettings";
import gsap from "gsap";

const WhatsAppButton = () => {
  const { data: settings } = useSiteSettings();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const siteName = siteConfig.name;
  const whatsappNumber = settings?.whatsapp?.replace(/\D/g, "");

  useEffect(() => {
    // Show after scroll
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Entrance animation
  useEffect(() => {
    if (isVisible) {
      gsap.fromTo(
        ".whatsapp-btn",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(0.6)" },
      );
    }
  }, [isVisible]);

  const sendWhatsApp = (message) => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  const quickMessages = [
    {
      label: "الاستفسار عن الحلقات",
      message: `السلام عليكم، أود الاستفسار عن حلقات القرآن الكريم لدى ${siteName}.`,
    },
    {
      label: "التسجيل في برنامج",
      message: `السلام عليكم، أود الاستفسار عن التسجيل في برامج ${siteName}.`,
    },
    {
      label: "استفسار آخر",
      message: `السلام عليكم، أود الاستفسار عن أنشطة ${siteName}.`,
    },
  ];

  if (!isVisible || !whatsappNumber) return null;

  return (
    <div className="fixed bottom-6 left-6 z-40">
      {/* Quick messages popup */}
      {isOpen && (
        <div className="absolute bottom-16 left-0 mb-2 w-64 bg-gym-bg-light rounded-xl border border-gym-border shadow-2xl overflow-hidden animate-slideUp">
          <div className="p-3 border-b border-gym-border">
            <span className="text-white font-medium text-sm">
              كيف يمكننا مساعدتكم؟
            </span>
          </div>
          <div className="p-2 space-y-1">
            {quickMessages.map((item, index) => (
              <button
                key={index}
                onClick={() => sendWhatsApp(item.message)}
                className="w-full text-right px-3 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Main button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="whatsapp-btn relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        aria-label="التواصل عبر واتساب"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-7 h-7 text-white" />
        )}

        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full border-2 border-[#25D366]/30 animate-ping" />
      </button>
    </div>
  );
};

export default WhatsAppButton;
