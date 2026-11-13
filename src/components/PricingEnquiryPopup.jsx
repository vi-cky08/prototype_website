
import { useEffect, useState } from 'react';
import { X, Send } from 'lucide-react';

const STORAGE_KEY = 'pricing_enquiry_submitted';

export default function PricingEnquiryPopup() {
  const [isOpen, setIsOpen] = useState(false);

  const [hasSubmitted, setHasSubmitted] = useState(
    () => sessionStorage.getItem(STORAGE_KEY) === 'true'
  );

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  // Show popup after 5 seconds
  useEffect(() => {
    if (hasSubmitted || isOpen) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, [hasSubmitted, isOpen]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    sessionStorage.setItem(STORAGE_KEY, 'true');

    setHasSubmitted(true);
    setIsOpen(false);

    console.log('Pricing enquiry:', formData);

    // Connect backend API here to save enquiry.
  };

  if (!isOpen || hasSubmitted) return null;

  return (
    // Full-screen overlay
    <div
      className="
        fixed inset-0 z-[99999]
        flex items-center justify-center
        bg-[#071C3F]/95
        backdrop-blur-md
        p-4 sm:p-6
      "
      role="dialog"
      aria-modal="true"
      aria-labelledby="pricing-popup-title"
    >
      {/* Centered popup card */}
      <div
        className="
          relative w-full max-w-md
          max-h-[90vh] overflow-y-auto
          rounded-2xl
          border border-blue-200
          bg-white
          p-6 sm:p-8
          shadow-2xl
          animate-in fade-in zoom-in-95 duration-300
        "
      >
        {/* Close button */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close enquiry form"
          className="
            absolute right-4 top-4
            flex h-9 w-9 items-center justify-center
            rounded-full bg-slate-100
            text-slate-600
            transition
            hover:bg-red-100
            hover:text-red-600
          "
        >
          <X size={20} />
        </button>

        {/* Heading */}
        <div className="pr-8 text-center">

          <div className="
            mx-auto mb-4 flex h-14 w-14
            items-center justify-center
            rounded-full bg-blue-100
            text-blue-700
          ">
            <Send size={25} />
          </div>

          <p className="
            text-xs font-bold uppercase
            tracking-[0.18em] text-blue-600
          ">
            Project Enquiry
          </p>

          <h2
            id="pricing-popup-title"
            className="
              mt-3 text-2xl sm:text-3xl
              font-extrabold
              text-[#0B2A5B]
              tracking-tight
            "
          >
            Let's Discuss Your Project
          </h2>

          <p className="
            mt-3 text-sm leading-6
            text-slate-600
          ">
            Tell us about your engineering requirements.
            Our team will get in touch with you.
          </p>
        </div>

        {/* Enquiry Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-7 space-y-4"
        >
          <div>
            <label className="
              mb-1.5 block text-sm
              font-semibold text-slate-700
            ">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="
                w-full rounded-lg
                border border-slate-300
                bg-white px-4 py-3
                text-sm text-slate-800
                outline-none transition
                focus:border-blue-600
                focus:ring-2 focus:ring-blue-100
              "
            />
          </div>

          <div>
            <label className="
              mb-1.5 block text-sm
              font-semibold text-slate-700
            ">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="
                w-full rounded-lg
                border border-slate-300
                bg-white px-4 py-3
                text-sm text-slate-800
                outline-none transition
                focus:border-blue-600
                focus:ring-2 focus:ring-blue-100
              "
            />
          </div>

          <div>
            <label className="
              mb-1.5 block text-sm
              font-semibold text-slate-700
            ">
              Phone Number
            </label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
              pattern="[0-9+() -]{7,20}"
              className="
                w-full rounded-lg
                border border-slate-300
                bg-white px-4 py-3
                text-sm text-slate-800
                outline-none transition
                focus:border-blue-600
                focus:ring-2 focus:ring-blue-100
              "
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="
              flex w-full items-center
              justify-center gap-2
              rounded-lg bg-blue-700
              px-5 py-3.5
              text-sm font-bold text-white
              transition duration-300
              hover:bg-blue-800
              hover:shadow-lg
            "
          >
            Submit Enquiry
            <Send size={17} />
          </button>
        </form>

        <p className="
          mt-5 text-center
          text-xs text-slate-400
        ">
          Your information will be kept confidential.
        </p>
      </div>
    </div>
  );
}
