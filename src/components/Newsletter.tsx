"use client";

import { useState } from "react";
import { spacing, forms, buttons } from "@/styles/design-tokens";

interface NewsletterProps {
  actionUrl: string;
  buttonText?: string;
  disclaimerText?: string;
  backgroundColor?: string,
  title?: string,
}

// Function to map backgroundColor values to Tailwind CSS classes
const getBackgroundColorClass = (backgroundColor?: string): string => {
  switch (backgroundColor) {
    case 'cream':
      return 'bg-cream';
    case 'blue':
      return 'bg-blue';
    case 'olive':
      return 'bg-olive';
    case 'scarlet':
      return 'bg-scarlet';
    case 'gradient-blue-cream':
      return 'bg-gradient-to-tr from-blue to-cream';
    case 'gradient-scarlet-cream':
      return 'bg-gradient-to-tr from-scarlet to-cream';
    case 'gradient-pink-cream':
      return 'bg-gradient-to-tr from-pink to-cream';
    case 'gradient-pink-blue':
      return 'bg-gradient-to-tr from-pink to-blue';
    case 'gradient-scarlet-pink':
      return 'bg-gradient-to-tr from-scarlet to-pink';
    default:
      return 'bg-gradient-to-tr from-blue to-cream'; // fallback to default
  }
};

export default function Newsletter({
  actionUrl = 'https://milkandcookiesfestival.us21.list-manage.com/subscribe/post?u=dd0a4903ee93a291eb0eb77fc&amp;id=a57c276c6e&amp;f_id=009383e6f0',
  buttonText,
  disclaimerText,
  backgroundColor,
  title,
}: NewsletterProps) {
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    if (disclaimerText && !agreed) {
      e.preventDefault();
      alert("Please agree to the disclaimer before submitting.");
    }
  };

  // Get the background color class
  const bgColorClass = getBackgroundColorClass(backgroundColor);

  return (
    <section className={`${spacing.section} ${bgColorClass} border-t-4`}>
      <div className={spacing.container}>
        {title && (
          <p className="font-display uppercase text-left text-2xl sm:text-center sm:text-3xl md:text-4xl xl:text-5xl">
            {title}
          </p>
        )}
        <form
          action={actionUrl}
          method="POST"
          target="_blank"
          noValidate
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-6 lg:grid-cols-2"
          aria-label="Sign up for our mailing list"
        >
          {/* First Name */}
          <div className={forms.fieldset}>
            <label htmlFor="mce-FNAME" className={forms.label}>
              First Name <span aria-hidden="true" className="text-pink">*</span>
            </label>
            <input
              type="text"
              name="FNAME"
              id="mce-FNAME"
              required
              aria-required="true"
              className={forms.input}
              placeholder="Your first name here"
            />
          </div>

          {/* Last Name */}
          <div className={forms.fieldset}>
            <label htmlFor="mce-LNAME" className={forms.label}>
              Last Name
            </label>
            <input
              type="text"
              name="LNAME"
              id="mce-LNAME"
              className={forms.input}
              placeholder="Your last name here"
            />
          </div>

          {/* Email */}
          <div className={forms.fieldset}>
            <label htmlFor="mce-EMAIL" className={forms.label}>
              Email Address{" "}
              <span aria-hidden="true" className="text-pink">*</span>
            </label>
            <input
              type="email"
              name="EMAIL"
              id="mce-EMAIL"
              required
              aria-required="true"
              className={forms.input}
              placeholder="Your email here"
            />
          </div>

          {/* Phone */}
          <div className={forms.fieldset}>
            <label htmlFor="mce-PHONE" className={forms.label}>
              Phone Number
            </label>
            <input
              type="tel"
              name="PHONE"
              id="mce-PHONE"
              className={forms.input}
              placeholder="Your phone number here"
            />
          </div>

          {/* Conditional Disclaimer & Checkbox */}
          {disclaimerText && (
            <div className="flex items-start">
              <input
                type="checkbox"
                id="mce-DISCLAIMER"
                name="DISCLAIMER"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1"
                required
                aria-required="true"
              />
              <label htmlFor="mce-DISCLAIMER" className="ml-2">
                {disclaimerText}
              </label>
            </div>
          )}

          {/* Submit Button */}
          <div className="col-span-full mt-2 w-full">
            <button
              type="submit"
              className={`${buttons.primary} !w-full`}
            >
              {buttonText?.trim() || "Count Me In"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

