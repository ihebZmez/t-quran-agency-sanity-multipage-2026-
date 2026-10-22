import { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu, X, BookOpen } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { path: "/", title: "الرئيسية" },
  { path: "/a-propos", title: "من نحن" },
  { path: "/services", title: "برامجنا" },
  { path: "/expertises", title: "المعلمون" },
  { path: "/actualites", title: "الأنشطة والمعرض" },
  { path: "/contact", title: "التسجيل والاتصال" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef([]);
  const ctaRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const mobileOverlayRef = useRef(null);
  const mobileItemsRef = useRef([]);

  const associationName = "الرابطة الوطنية للقرآن الكريم";
  const handleRegistration = () => navigate("/contact");

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "expo.out" },
    )
      .fromTo(
        logoRef.current,
        { scale: 1.4, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8 },
        "<0.2",
      )
      .fromTo(
        linksRef.current,
        { y: -14, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.07 },
        "<0.1",
      )
      .fromTo(
        ctaRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" },
        "<0.1",
      );

    ScrollTrigger.create({
      start: 60,
      onEnter: () => {
        gsap.to(navRef.current, {
          backgroundColor: "rgba(5,48,36,0.96)",
          backdropFilter: "blur(24px)",
          borderBottomColor: "rgba(190,151,91,0.2)",
          paddingTop: "0.6rem",
          paddingBottom: "0.6rem",
          duration: 0.5,
        });
      },
      onLeaveBack: () => {
        gsap.to(navRef.current, {
          backgroundColor: "rgba(5,48,36,0.96)",
          backdropFilter: "blur(0px)",
          borderBottomColor: "rgba(255,255,255,0)",
          paddingTop: "1.25rem",
          paddingBottom: "1.25rem",
          duration: 0.4,
        });
      },
    });
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      gsap.to(mobileOverlayRef.current, {
        opacity: 1,
        pointerEvents: "all",
        duration: 0.3,
      });
      gsap.fromTo(
        mobileMenuRef.current,
        { x: "100%" },
        { x: "0%", duration: 0.55, ease: "expo.out" },
      );
      gsap.fromTo(
        mobileItemsRef.current,
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, stagger: 0.07, delay: 0.25 },
      );
    } else {
      document.body.style.overflow = "";
      gsap.to(mobileOverlayRef.current, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.3,
      });
      gsap.to(mobileMenuRef.current, {
        x: "100%",
        duration: 0.45,
        ease: "expo.in",
      });
    }
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 border-b border-transparent"
        style={{
          paddingTop: "0.65rem",
          paddingBottom: "0.65rem",
          backgroundColor: "rgba(5,48,36,0.96)",
          transition: "padding 0.4s",
        }}
      >
        <div className="mx-auto flex min-w-0 max-w-7xl items-center justify-between gap-4">
          {/* Logo */}
          <NavLink
            to="/"
            className="flex min-w-0 max-w-48 items-center gap-2.5 shrink-0"
          >
            <div
              ref={logoRef}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold"
            >
              <BookOpen className="h-5 w-5 text-navy" aria-hidden="true" />
            </div>
            <span className="min-w-0 whitespace-nowrap text-xs font-bold leading-snug text-white sm:text-sm">
              {associationName}
            </span>
          </NavLink>

          {/* Desktop Links */}
          <ul className="hidden list-none gap-4 p-0 m-0 xl:flex xl:items-center">
            {navLinks.map((link, i) => (
              <li key={link.path} ref={(el) => (linksRef.current[i] = el)}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `whitespace-nowrap text-xs font-semibold leading-none transition-colors duration-300 relative pb-1 ${
                      isActive ? "text-gold" : "text-white/60 hover:text-white"
                    }`
                  }
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <button
              ref={ctaRef}
              onClick={handleRegistration}
              className="hidden xl:block bg-gold text-navy px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 hover:bg-gold-light hover:shadow-lg hover:shadow-gold/25"
            >
              التسجيل
            </button>

            <button
              onClick={() => setMenuOpen(true)}
              className="xl:hidden text-white"
              aria-label="فتح القائمة"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        ref={mobileOverlayRef}
        onClick={closeMenu}
        className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm opacity-0 pointer-events-none"
      />

      {/* Mobile Drawer */}
      <div
        ref={mobileMenuRef}
        className="fixed top-0 right-0 bottom-0 z-50 flex w-[min(340px,90vw)] flex-col overflow-y-auto border-r border-white/10 bg-navy p-8 transform translate-x-full"
      >
        <div className="flex justify-between items-center mb-8">
          <span className="text-white font-bold">
            {associationName}
          </span>
          <button onClick={closeMenu} className="text-white" aria-label="إغلاق القائمة">
            <X className="w-6 h-6" />
          </button>
        </div>

        <ul className="flex flex-col gap-5 list-none m-0 p-0">
          {navLinks.map((link, i) => (
            <li key={link.path} ref={(el) => (mobileItemsRef.current[i] = el)}>
              <NavLink
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors ${
                    isActive
                      ? "text-gym-orange"
                      : "text-white/80 hover:text-white"
                  }`
                }
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-8">
          <button
            onClick={() => {
              closeMenu();
              handleRegistration();
            }}
            className="w-full bg-gold text-navy py-4 rounded-full font-bold"
          >
            التسجيل
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
