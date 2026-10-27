/* Single source of truth for per-route SEO copy. Consumed two ways:
   client-side by <Seo> (src/components/Seo.jsx) on each page, and at
   build time by scripts/prerender.mjs, which bakes the same title/
   description/canonical into a static dist/<route>/index.html so link
   unfurlers and crawlers that don't execute JS still see the right
   preview. Keeping both reads from this one file is what keeps them
   from drifting apart. Plain data, no JSX, so Node can import it as-is. */
export const SEO = {
  home: {
    path: "/",
    title: "Managed IT & Cybersecurity on the East Coast",
    description:
      "HoneyBee Systems keeps your technology connected, protected, and supported, so your team can stay productive and focus on running the business.",
  },
  services: {
    path: "/services",
    title: "IT Services: Managed IT, Cybersecurity, Cloud & Compliance",
    description:
      "Managed IT & helpdesk, cybersecurity, cloud & backup, network infrastructure, and compliance, all from one coordinated team on a flat monthly rate.",
  },
  whyHoneyBee: {
    path: "/why-honeybee",
    title: "Why Businesses Choose Us",
    description:
      "IT support should feel personal, clear, and dependable. See how HoneyBee Systems communicates without the technical nonsense and builds solutions that fit your team.",
  },
  support: {
    path: "/support",
    title: "Client Support",
    description:
      "Email support@honeybeesys.com to create a support ticket automatically, or call (754) 264-1616. Standard hours are Monday–Friday, 9:00 a.m.–6:00 p.m. ET, with after-hours help for emergencies.",
  },
  career: {
    path: "/career",
    title: "Careers",
    description:
      "Are you a bee without a hive? Send your resume and LinkedIn link to careers@honeybeesys.com.",
  },
  emergencySupport: {
    path: "/emergency-support",
    title: "Emergency Support",
    description:
      "Need emergency support? Let our team know and include specific details about the issues you are experiencing.",
  },
  hiveai: {
    path: "/custom-products/hiveai",
    title: "HiveAI: Your Business Knowledge, Instantly Answerable",
    description:
      "HiveAI is the AI that knows your business as well as you do. Upload documents, connect your website, sync your files, and get instant answers from your own knowledge base.",
  },
  conx1: {
    path: "/custom-products/conx1",
    title: "ConX1: Smart Phone System for Growing Teams",
    description:
      "ConX1 turns your phone system into a real-time performance tool, with call recording, live transcription, SMS follow-up, and agent scorecards built in.",
  },
};
