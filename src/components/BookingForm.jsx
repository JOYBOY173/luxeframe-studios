import { useState } from "react";
import useReveal from "../hooks/useReveal";

const SERVICES = ["Photography", "Videography", "Weddings", "Brand & Commercial"];

const EMPTY_FORM = { name: "", email: "", service: "", date: "", message: "" };

function validate(form) {
  const errors = {};

  if (!form.name.trim() || form.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!form.service) {
    errors.service = "Please select a service.";
  }

  if (!form.date) {
    errors.date = "Please choose a preferred date.";
  } else {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (new Date(form.date) < today) {
      errors.date = "Preferred date can't be in the past.";
    }
  }

  if (!form.message.trim() || form.message.trim().length < 10) {
    errors.message = "Tell us a little more (10+ characters) so we can prepare.";
  }

  return errors;
}

function Field({ label, error, children }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-stone mb-2">{label}</label>
      {children}
      {error && <p className="mt-2 text-xs text-bronze-light">{error}</p>}
    </div>
  );
}

const inputClasses = (hasError) =>
  `w-full bg-transparent border-b ${
    hasError ? "border-bronze-light" : "border-ivory/25"
  } py-3 text-ivory placeholder:text-stone/50 focus:border-bronze outline-none transition-colors duration-300`;

export default function BookingForm() {
  const revealRef = useReveal();
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (errors[field]) setErrors((err) => ({ ...err, [field]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  };

  const startOver = () => {
    setForm(EMPTY_FORM);
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section id="contact" className="bg-obsidian py-24 md:py-36 border-t border-ivory/10">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div ref={revealRef} className="reveal grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5">
            <p className="eyebrow mb-4">Booking Enquiry</p>
            <h2 className="font-display text-4xl md:text-5xl text-ivory leading-[1.05] mb-6">
              Let&apos;s talk about your story.
            </h2>
            <p className="text-stone text-base leading-relaxed mb-8 max-w-sm">
              Tell us a little about what you have in mind. We reply within one business day
              with availability and next steps.
            </p>
            <div className="border-t border-ivory/10 pt-6 space-y-2 text-sm text-stone">
              <p>hello@luxeframestudios.example</p>
              <p>+234 (0) 800 000 0000</p>
              <p>Lagos, Nigeria</p>
            </div>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            {submitted ? (
              <div className="border border-bronze/40 p-10 md:p-14 text-center bg-obsidian-soft">
                <div className="w-12 h-12 mx-auto mb-6 rounded-full border border-bronze flex items-center justify-center text-bronze">
                  ✓
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-ivory mb-3">
                  Enquiry sent.
                </h3>
                <p className="text-stone text-sm md:text-base leading-relaxed mb-8">
                  Thank you, {form.name.split(" ")[0] || "there"}. We&apos;ve received your
                  enquiry and will be in touch within one business day.
                </p>
                <button onClick={startOver} className="btn-ghost">
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-7">
                <Field label="Name" error={errors.name}>
                  <input
                    type="text"
                    value={form.name}
                    onChange={handleChange("name")}
                    placeholder="Your full name"
                    className={inputClasses(errors.name)}
                  />
                </Field>

                <Field label="Email" error={errors.email}>
                  <input
                    type="email"
                    value={form.email}
                    onChange={handleChange("email")}
                    placeholder="you@example.com"
                    className={inputClasses(errors.email)}
                  />
                </Field>

                <Field label="Service" error={errors.service}>
                  <select
                    value={form.service}
                    onChange={handleChange("service")}
                    className={`${inputClasses(errors.service)} bg-obsidian`}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s} className="bg-obsidian">
                        {s}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Preferred Date" error={errors.date}>
                  <input
                    type="date"
                    value={form.date}
                    onChange={handleChange("date")}
                    className={`${inputClasses(errors.date)} [color-scheme:dark]`}
                  />
                </Field>

                <Field label="Message" error={errors.message}>
                  <textarea
                    value={form.message}
                    onChange={handleChange("message")}
                    placeholder="Tell us about the occasion, location and vision..."
                    rows={4}
                    className={`${inputClasses(errors.message)} resize-none`}
                  />
                </Field>

                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Send Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
