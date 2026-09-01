const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  { label: "Instagram", href: "#" },
  { label: "Pinterest", href: "#" },
  { label: "Vimeo", href: "#" },
];

export default function Footer() {
  const handleNavClick = (href) => (e) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-obsidian border-t border-ivory/10 pt-16 pb-10">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 pb-12">
          <div>
            <p className="font-display text-xl text-ivory mb-3">LuxeFrame Studios</p>
            <p className="text-stone text-sm leading-relaxed max-w-xs">
              Premium photography and cinematic films for weddings, brands, portraits and
              life&apos;s unforgettable moments.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4">Navigate</p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleNavClick(link.href)}
                    className="text-stone text-sm hover:text-bronze transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Contact</p>
            <ul className="space-y-2 text-stone text-sm">
              <li>hello@luxeframestudios.example</li>
              <li>+234 (0) 800 000 0000</li>
              <li>Lagos, Nigeria</li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Follow</p>
            <ul className="space-y-2">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="text-stone text-sm hover:text-bronze transition-colors duration-300"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-ivory/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-stone/60">
          <p>© {new Date().getFullYear()} LuxeFrame Studios. All rights reserved.</p>
          <p>Fictional studio · Portfolio project</p>
        </div>
      </div>
    </footer>
  );
}
