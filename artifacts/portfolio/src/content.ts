export type ProjectCategory = 'All' | 'Field Reporting' | 'Multimedia' | 'Product' | 'Broadcast';

export interface Project {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, 'All'>;
  tag: string;
  role: string;
  shortDescription: string;
  detailDescription: string;
  isLarge?: boolean;
  image?: string;
  bannerImage?: string;
  previewLink?: string;
  previewLabel?: string;
}

export interface Stat {
  value: number;
  label: string;
}

export interface Award {
  title: string;
  event: string;
  year: string;
  detail?: string;
}

export const content = {
  hero: {
    eyebrow: "JOURNALISM PORTFOLIO · 2026",
    name: "Nahel Zaqi Alfian",
    tagline: "Third-year Journalism Student at Universitas Padjadjaran.",
    subDescription: "I have worked across broadcast, radio, field reporting, and digital journalism. I covered stories for a campus TV station, reported on the ground in Sumedang for an advocacy piece on displaced Jatigede Dam residents, and helped build an AI-based platform that checks whether news articles comply with Indonesia's Press Code of Ethics. I am applying to Kompas because I want to learn what serious, accountable journalism looks like from the inside."
  },
  about: {
    quote: "I want to be the kind of journalist who earns trust, not just clicks.",
    paragraphs: [
      "I am a third-year Journalism student at Universitas Padjadjaran. Over the past three years, I have worked in broadcast journalism as a camera person for our campus TV station, produced a radio broadcast as an on-air announcer, reported from the field in Sumedang for an advocacy piece on residents displaced by the Jatigede Dam, edited a six-month multimedia project about Bandung's gig economy workers, and contributed to building Ethicheck, an AI-based platform designed to help journalists check whether their articles comply with Indonesia's Press Code of Ethics.",
      "Outside of reporting, I spent one year as Chairman of Himpunan Mahasiswa Jurnalistik Unpad, leading an organization of 120 members. That experience taught me more about journalism than I expected. When you are responsible for the quality of work produced by a team that size, you quickly realize that editorial standards are not just individual habits, they have to be built into the culture of the group. We finished the year with two FIKOM Awards 2025.",
      "I am applying to Kompas because I think the best way to learn what serious journalism actually looks like is to be inside a newsroom that has been doing it for decades."
    ],
    stats: [
      { value: 120, label: "Members in the organization I led" },
      { value: 2, label: "FIKOM Awards 2025 won under my leadership" },
      { value: 1, label: "Long-form investigative piece published (Jatigede)" },
      { value: 6, label: "Months leading the Serabutan multimedia project as editor" }
    ] as Stat[]
  },
  work: {
    categories: ['All', 'Field Reporting', 'Multimedia', 'Product', 'Broadcast'] as ProjectCategory[],
    projects: [
      {
        id: "serabutan",
        title: "Serabutan",
        category: "Multimedia",
        tag: "Multimedia · Editorial · 6-Month Project",
        role: "Editor / Content Overseer",
        shortDescription: "A six-month multimedia storytelling project about Bandung's Gen Z creative workers navigating a shrinking job market.",
        detailDescription: "Serabutan started from a question our team kept coming back to: what actually happens to young creative workers in Bandung when the formal job market stops working for them? We were not just talking about freelancers by choice. We were talking about people who became freelancers because they got laid off, could not find stable work, or needed to piece together multiple gigs just to cover rent.\n\nAs editor and content overseer for the entire six months, my job was to make sure every story we produced was honest, specific, and structurally sound. That meant going through the data first, BPS unemployment figures, Disnaker records, BPJS Ketenagakerjaan statistics, before we even started assigning stories. I wanted every piece to be grounded in something real, not just vibes about the gig economy.\n\nOn the editorial side, I edited scripts to fit a sharp narrative style, clear angle, no unnecessary detours, the kind of writing that respects the reader's time. I also directed the video feature production and designed the prototype website for Serabutan on Figma, which served as the main container for the whole multimedia project.\n\nThe part I found hardest was maintaining consistency across a team with different writing backgrounds over six months. Some people write academically, some write casually, and getting everyone to land in the same voice without killing their individual style took a lot of back-and-forth. I think that taught me more about editing than any single technique could.",
        isLarge: true,
        image: "/foto-serabutan.jpeg",
        bannerImage: "/foto-serabutan-banner.png",
        previewLink: "https://www.figma.com/proto/ZQp0iRgBO7vVTBFsl0jCFb/Figma-Serabutan--main-?node-id=111-1429&p=f&t=j5bsRjXzU21E7EeA-1&scaling=scale-down-width&content-scaling=fixed&page-id=103%3A241&starting-point-node-id=111%3A1429"
      },
      {
        id: "jatigede",
        title: "Jatigede: The Wound That Never Closed",
        category: "Field Reporting",
        tag: "Investigative · Field Reporting · Advocacy Journalism",
        role: "Field Reporter and Researcher",
        shortDescription: "A field-reported opinion piece on the unresolved social and economic fallout from the Jatigede Dam relocation in Sumedang, West Java.",
        detailDescription: "The Jatigede Dam has been operational for over a decade. The government calls it a success. The residents who were relocated to build it have a different story.\n\nI went to Sumedang as part of my advocacy journalism course, initially to do research. But once I was there and started talking to people, the gap between the official narrative and what residents were actually living through was impossible to ignore. I interviewed Om Engkus Hadi, a former farmer who now works as a boat operator at Tanjung Duriat tourism site. On a good day he makes some money. On most days he makes nothing. He told me the boats are falling apart and no one helps with repairs. He fixes them out of his own pocket because that is the only livelihood he has left.\n\nI also interviewed the site manager, who spoke about training programs and community empowerment initiatives. Both accounts were true in their own way, which made the story more complicated and more important to tell carefully.\n\nThe piece I wrote argues that infrastructure development cannot be declared a success just because the dam is functioning. Success should be measured by whether the people who sacrificed their land and homes have genuinely recovered. In the case of Jatigede, they have not.\n\nThis was the first time I reported a story where I felt the weight of getting it right. These are real people whose names appear in the article. That responsibility changed how I approach sourcing and verification.",
        image: "/foto-jatigede.jpg",
        bannerImage: "/foto-jatigede-banner.png",
        previewLink: "https://docs.google.com/document/d/1iM6qCEWRa9gD-nMw4FXSha8gpPPtEtmc-YYewNkGEKQ/edit?usp=sharing",
        previewLabel: "Preview Artikel Opini"
      },
      {
        id: "ethicheck",
        title: "Ethicheck",
        category: "Product",
        tag: "Product Innovation · AI and Journalism · Media Ethics",
        role: "Contributor, Journalism Innovation Project",
        shortDescription: "An AI-powered platform that checks whether a news article complies with Indonesia's Press Code of Ethics.",
        detailDescription: "Ethicheck came out of a problem we kept noticing in Indonesian online media. Speed was consistently winning over accuracy. Articles were getting published with unverified sources, sensational headlines, and thin attribution, and most of the time nothing happened because there was no accessible tool for readers or editors to flag these issues against the actual code of ethics.\n\nThe platform we built checks articles against the Kode Etik Jurnalistik, the Press Law, and Pedoman Pemberitaan Media Siber automatically. But beyond the checker function, we also built in an interactive education module with quizzes and scenarios, because we thought it was important that people understand why each ethical standard exists, not just whether they violated it.\n\nMy contribution sat at the intersection of journalism knowledge and product thinking. I helped research the cases of ethical violations that informed the platform's evaluation criteria, and worked on how the feedback should be framed so it was useful rather than just judgmental.\n\nWhat I found interesting about this project was that it forced me to think about journalism ethics not as a list of rules to memorize but as a set of principles that have real consequences when ignored.",
        image: "/foto-ethicheck.png",
        bannerImage: "/foto-ethicheck-banner.png",
        previewLink: "https://docs.google.com/document/d/1N0RyuVx0uYBIpWo5_IXgYmehgASDIZ4xJNN4vCJvHH0/edit?usp=sharing",
        previewLabel: "Lihat Dokumen Ethicheck"
      },
      {
        id: "diviatv",
        title: "Audiovisual Journalism — Divia Unpad TV",
        category: "Broadcast",
        tag: "Broadcast · Audio Visual",
        role: "Camera Person",
        shortDescription: "Produced coverage for Divia Unpad TV, the campus television station, including a public service announcement.",
        detailDescription: "This was my first experience working inside a proper broadcast production workflow. As camera person, I was responsible for making sure the visual quality of our footage supported the story we were trying to tell, not just technically but editorially. A shot that looks fine in isolation can completely undercut a narrative if it is not the right shot for that moment.\n\nWorking on the ILM component specifically taught me how much discipline broadcast journalism requires compared to written formats. You cannot clarify later. What you capture is what you have.",
        image: "/foto-divia.jpeg",
        bannerImage: "/foto-divia-banner.jpg"
      },
      {
        id: "radio",
        title: "Audio Journalism — Campus Radio Broadcast",
        category: "Broadcast",
        tag: "Audio Journalism · Broadcasting",
        role: "Announcer",
        shortDescription: "Produced a campus radio broadcast as part of an audio journalism course, serving as on-air announcer.",
        detailDescription: "Radio is an unforgiving format. You cannot rely on visuals, captions, or the reader's ability to go back and reread. Everything depends on how clearly and naturally you can deliver information out loud, in real time.\n\nServing as announcer for this production made me much more conscious of pacing, clarity, and the way sentence structure affects how something sounds when spoken versus when read. It is a discipline I now apply when writing scripts for video, because the two are more connected than they seem.",
        image: "/foto-radio.jpeg",
        bannerImage: "/foto-radio-banner.jpeg"
      }
    ] as Project[]
  },
  leadership: {
    title: "Chairman, Himpunan Mahasiswa Jurnalistik (HMJ) Unpad",
    subtitle: "KABINET BERGERAK · 2024 - 2025",
    paragraphs: [
      "HMJ Unpad is the student journalism organization at Universitas Padjadjaran, with around 120 active members spread across multiple bureaus, divisions, and departments. I served as Chairman for the 2024 to 2025 period under the cabinet name Kabinet Bergerak.",
      "Leading an organization this size inside a journalism faculty is a different kind of responsibility than leading a project team. You are not just managing tasks, you are trying to keep a large group of people aligned on what good journalism practice actually looks like, from how we cover internal events to how we handle content that involves real people. That standard has to be consistent whether you are in the room or not.",
      "During this period we ran programs across reporting, broadcasting, and media literacy. We ended the year winning two awards at FIKOM Awards 2025, The Most Contributive Student Organization and The Most Innovative Student Organization Programs. I am proud of those results but what I am more proud of is that the members who came in as first-year students left with actual journalism experience, not just participation certificates.",
      "This role is also where I learned that the hardest part of leadership in journalism is not managing people. It is keeping the commitment to accuracy and fairness alive when everyone is tired and deadlines are close."
    ]
  },
  skills: [
    {
      name: "Adobe Premiere Pro",
      icon: "SiAdobepremierepro",
      context: "Video editing for the Serabutan multimedia project feature"
    },
    {
      name: "Adobe Photoshop",
      icon: "SiAdobephotoshop",
      context: "Photo editing and visual asset preparation for journalism projects"
    },
    {
      name: "Figma",
      icon: "SiFigma",
      context: "Designed the Serabutan website prototype and portfolio wireframes"
    },
    {
      name: "Canva",
      icon: "SiCanva",
      context: "Visual content production for HMJ Unpad organizational materials"
    },
    {
      name: "Microsoft Office",
      icon: "SiMicrosoftoffice",
      context: "Document production and data compilation for research-based projects"
    }
  ],
  awards: [
    { 
      title: "The Most Contributive Student Organization", 
      event: "FIKOM Awards, Universitas Padjadjaran — Awarded to HMJ Unpad under my leadership as Chairman of Kabinet Bergerak, recognizing the organization's active contribution to campus journalism life throughout 2024 to 2025.", 
      year: "2025"
    },
    { 
      title: "The Most Innovative Student Organization Programs", 
      event: "FIKOM Awards, Universitas Padjadjaran — Awarded alongside The Most Contributive category, recognizing the range and originality of programs HMJ Unpad ran during the year, including journalism training initiatives and cross-organization collaborations.", 
      year: "2025"
    },
    { 
      title: "Honorable Mention, Journalism Writing Competition", 
      event: "Fikom Unpad x Fokusenergi x SKK Migas and KKKS — A journalism writing competition organized in collaboration with the energy sector. My submission was the 'Energy Security: Challenges and Future Opportunities for Indonesia's Upstream Oil and Gas Industry'", 
      year: "2025"
    },
    { 
      title: "Runner-Up, Putra Putri Fikom", 
      event: "Universitas Padjadjaran, Faculty of Communication — A faculty-level competition assessing academic achievement, communication skills, and social contribution. Reached the runner-up position out of candidates representing all departments within the Faculty of Communication.", 
      year: "2024"
    },
    { 
      title: "1st Place and Best Director, Inter-Class Video Competition", 
      event: "'28 Forward' Inter-Class Competition — Won both the top prize and the Best Director award in a video production competition between classes. This was one of the earlier experiences that showed me how much I enjoyed the craft of visual storytelling before I had the language to call it journalism.", 
      year: "2022"
    }
  ] as Award[],
  contact: {
    title: "Let's Talk.",
    subtitle: "Open for internship opportunities, story collaborations, and conversations about journalism.",
    email: "nahelnahel238@gmail.com",
    phone: "+62 897-9022-990",
    linkedin: "https://www.linkedin.com/in/nahel-zaqi-alfian-297a11212",
    location: "Jakarta, Indonesia",
    footer: "Nahel Zaqi Alfian · Journalism Portfolio 2026"
  }
};