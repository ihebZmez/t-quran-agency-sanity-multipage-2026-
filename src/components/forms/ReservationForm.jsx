import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { Send, Loader2, CheckCircle } from "lucide-react";
import gsap from "gsap";
import Button from "../ui/Button";

// Replace with your EmailJS credentials
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ReservationForm = () => {
  const { t } = useTranslation();
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    ageGroup: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
      ...(name === "service" && value !== "children" ? { ageGroup: "" } : {}),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setError(t("contact.error"));
      return;
    }
    setIsSubmitting(true);
    setError(null);

    try {
      // Using EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          activity: formData.service,
          age_group: formData.ageGroup,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY,
      );

      if (result.status === 200) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "",
          ageGroup: "",
          message: "",
        });

        // Success animation
        gsap.fromTo(
          ".success-check",
          { scale: 0, opacity: 0, rotation: -180 },
          {
            scale: 1,
            opacity: 1,
            rotation: 0,
            duration: 0.5,
            ease: "back.out(0.6)",
          },
        );

        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        setError(t("contact.error"));
      }
    } catch (err) {
      console.error("EmailJS error:", err);
      setError(t("contact.error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="relative">
          <input
            type="text"
            name="name"
            dir="rtl"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder=" "
            className="peer w-full bg-white/5 border border-gym-border rounded-xl px-4 py-3.5 text-white placeholder-transparent focus:outline-none focus:border-gym-orange transition-colors duration-300"
          />
          <label className="absolute right-4 top-3.5 text-white/40 text-sm transition-all duration-300 pointer-events-none peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-gym-orange">
            {t("contact.form.name")}
          </label>
        </div>

        <div className="relative">
          <input
            type="tel"
            name="phone"
            dir="ltr"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder=" "
            className="peer w-full bg-white/5 border border-gym-border rounded-xl px-4 py-3.5 text-white placeholder-transparent focus:outline-none focus:border-gym-orange transition-colors duration-300"
          />
          <label className="absolute right-4 top-3.5 text-white/40 text-sm transition-all duration-300 pointer-events-none peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-gym-orange">
            {t("contact.form.phone")}
          </label>
        </div>
      </div>

      <div className="relative">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder=" "
          dir="ltr"
          className="peer w-full bg-white/5 border border-gym-border rounded-xl px-4 py-3.5 text-white placeholder-transparent focus:outline-none focus:border-gym-orange transition-colors duration-300"
        />
        <label className="absolute right-4 top-3.5 text-white/40 text-sm transition-all duration-300 pointer-events-none peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-gym-orange">
          {t("contact.form.email")}
        </label>
      </div>

      <div className="relative">
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          dir="rtl"
          className="w-full bg-white/5 border border-gym-border rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-gym-orange transition-colors duration-300 appearance-none"
        >
          <option value="" className="text-black">
            {t("contact.form.service")}
          </option>
          <option value="women" className="text-black">
            حلقات النساء
          </option>
          <option value="men" className="text-black">
            حلقات الرجال
          </option>
          <option value="children" className="text-black">
            حلقات الأطفال
          </option>
        </select>
      </div>

      {formData.service === "children" && (
        <div>
          <label
            htmlFor="ageGroup"
            className="mb-2 block text-sm text-white/70"
          >
            الفئة العمرية للمشارك *
          </label>
          <select
            id="ageGroup"
            name="ageGroup"
            value={formData.ageGroup}
            onChange={handleChange}
            required
            dir="rtl"
            className="w-full rounded-xl border border-gym-border bg-white/5 px-4 py-3.5 text-white focus:outline-none focus:border-gym-orange"
          >
            <option value="" className="text-black">
              اختاروا الفئة العمرية
            </option>
            <option value="6-9" className="text-black">
              من 6 إلى 9 سنوات
            </option>
            <option value="10-12" className="text-black">
              من 10 إلى 12 سنة
            </option>
            <option value="13+" className="text-black">
              13 سنة فأكثر
            </option>
          </select>
        </div>
      )}

      <div className="relative">
        <textarea
          name="message"
          dir="rtl"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder=" "
          className="peer w-full bg-white/5 border border-gym-border rounded-xl px-4 py-3.5 text-white placeholder-transparent focus:outline-none focus:border-gym-orange transition-colors duration-300 resize-none"
        />
        <label className="absolute right-4 top-3.5 text-white/40 text-sm transition-all duration-300 pointer-events-none peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-gym-orange">
          {t("contact.form.message")}
        </label>
      </div>

      {error && (
        <div role="alert" className="text-red-400 text-sm text-center">
          {error}
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            {t("contact.form.sending")}
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            {t("contact.form.submit")}
          </>
        )}
      </Button>

      {isSubmitted && (
        <div className="success-check flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400">
          <CheckCircle className="w-5 h-5 shrink-0" />
          <span className="text-sm" role="status">
            {t("contact.success")}
          </span>
        </div>
      )}
    </form>
  );
};

export default ReservationForm;
