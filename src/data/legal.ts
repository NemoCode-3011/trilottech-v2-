import { site } from "./site";

export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface LegalDoc {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}

export const legal: Record<"privacy" | "terms", LegalDoc> = {
  privacy: {
    title: "Privacy Policy",
    updated: "31 October 2026",
    intro:
      "This page explains what personal information Trilot collects through this website, why we collect it, and what your rights are. We’ve tried to keep it short and in plain language.",
    sections: [
      {
        heading: "Who we are",
        paragraphs: [
          `Trilot (“we”, “us”) is a web design and development studio based in Nigeria. You can reach us at ${site.email}.`,
        ],
      },
      {
        heading: "What we collect",
        bullets: [
          "Information you give us through the quote form: your name or company name, your WhatsApp number or email, the type of project, and the description you write.",
          "Messages you send us by email or WhatsApp.",
          "Basic technical information that our hosting provider may log when you visit, such as your IP address, browser type and the pages requested.",
        ],
        paragraphs: [
          "We do not collect payment details through this website.",
        ],
      },
      {
        heading: "Why we use it",
        bullets: [
          "To reply to your request and prepare a quote.",
          "To run our business, keep records and, if we work together, deliver your project.",
          "To keep the website secure and working properly.",
        ],
        paragraphs: [
          "We rely on your request to hear from us, and on our legitimate interest in running our studio, as the reasons for using your information. We don’t use it for advertising and we don’t sell it.",
        ],
      },
      {
        heading: "Who we share it with",
        paragraphs: [
          "We use a small number of service providers to run this website. They only receive what they need to do their job:",
        ],
        bullets: [
          "EmailJS: delivers your quote request to our email inbox.",
          "Google (Gmail): where we receive and store those emails.",
          "Vercel: hosts this website and may keep technical logs.",
          "Google Fonts: when you open the site, your browser requests fonts from Google, which means your IP address is shared with Google.",
          "WhatsApp (Meta): if you choose to message us on WhatsApp, your conversation is handled under WhatsApp’s own privacy policy.",
        ],
      },
      {
        heading: "Information leaving Nigeria",
        paragraphs: [
          "Some of these providers are based outside Nigeria, so your information may be processed in other countries. We choose established providers and only share what is needed.",
        ],
      },
      {
        heading: "Cookies",
        paragraphs: [
          "This website does not use advertising or analytics cookies. If that changes, we will update this page first.",
        ],
      },
      {
        heading: "How long we keep it",
        paragraphs: [
          "We keep your quote request for as long as we need it to reply to you. If we don’t end up working together, we delete the enquiry within 12 months. If we do work together, we keep the relevant records for as long as our business and accounting needs require.",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: [
          "Under the Nigeria Data Protection Act 2023 you can ask us to:",
        ],
        bullets: [
          "tell you what information we hold about you and give you a copy,",
          "correct anything that is wrong,",
          "delete your information, or limit how we use it,",
          "stop using it where you object to how we use it, and",
          "withdraw your consent where we are relying on it.",
        ],
      },
      {
        heading: "How to make a request or complain",
        paragraphs: [
          `Email us at ${site.email} and we will respond within a reasonable time. If you are not happy with how we handle your information, you also have the right to complain to the Nigeria Data Protection Commission (NDPC).`,
        ],
      },
      {
        heading: "Security",
        paragraphs: [
          "We take reasonable steps to protect your information, including using HTTPS and limiting who can access our inbox. No method of sending information over the internet is completely secure, so we can’t guarantee absolute security.",
        ],
      },
      {
        heading: "Children",
        paragraphs: [
          "Our services are for businesses and are not directed at children.",
        ],
      },
      {
        heading: "Changes to this policy",
        paragraphs: [
          "We may update this page from time to time. The date at the top shows when it was last changed.",
        ],
      },
    ],
  },

  terms: {
    title: "Terms of Use",
    updated: "31 October 2026",
    intro:
      "These terms cover your use of this website. Work we do for you is covered by the written proposal we agree with you, which takes priority for that project.",
    sections: [
      {
        heading: "Using this website",
        paragraphs: [
          "By using this website you agree to these terms. If you don’t agree, please don’t use it.",
        ],
      },
      {
        heading: "Quotes and proposals",
        paragraphs: [
          "Information on this website is general and is not an offer. A project starts only when we agree a written proposal that sets out the scope, the fixed price, the payment schedule and the timeline. If anything in a proposal differs from this page, the proposal applies to that project.",
        ],
      },
      {
        heading: "Payments and ownership",
        paragraphs: [
          "As a rule, we ask for 50% to begin and 50% when the work is ready to launch, but your proposal confirms the exact terms. Once the final payment is received, you own the finished website and its source code. Third-party and open-source components used in the project remain under their own licences.",
        ],
      },
      {
        heading: "Our portfolio",
        paragraphs: [
          "The projects shown on this website are labeled as either concept builds or work built for a specific business. Performance and accessibility scores are measurements taken on a particular date. They change over time and between tests, and they are not a promise of future results.",
        ],
      },
      {
        heading: "Our content",
        paragraphs: [
          "The design, text and code of this website belong to Trilot. Please don’t copy or republish them without our permission.",
        ],
      },
      {
        heading: "Acceptable use",
        paragraphs: [
          "Please don’t misuse the website, for example by sending spam through the quote form, trying to break into our systems, or interfering with how the site works.",
        ],
      },
      {
        heading: "No guarantees",
        paragraphs: [
          "We work hard to keep this website accurate and available, but it is provided “as is”. To the extent the law allows, Trilot is not responsible for indirect or consequential losses arising from your use of it. Nothing in these terms limits any liability that cannot be limited by law.",
        ],
      },
      {
        heading: "Links to other sites",
        paragraphs: [
          "This website links to other websites, including the live sites of our portfolio projects and WhatsApp. We are not responsible for their content or privacy practices.",
        ],
      },
      {
        heading: "Governing law",
        paragraphs: [
          "These terms are governed by the laws of the Federal Republic of Nigeria.",
        ],
      },
      {
        heading: "Changes and contact",
        paragraphs: [
          `We may update these terms from time to time. The date at the top shows the latest version. Questions? Email ${site.email}.`,
        ],
      },
    ],
  },
};