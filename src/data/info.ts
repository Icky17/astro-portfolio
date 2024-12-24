// info.ts
export const info = {
  baseUrl: "https://astro-portfolio-uzair.vercel.app",
  name: "Uzair Ahmed",
  jobDescription: "Web Developer",
  about: `I'm a software engineer based in Karachi, Pakistan.
   I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.
   I have been working for 3 year, with a demonstrated history of working in the Computer Software industry. Skilled in Front-end Development.
   I have 3 years of experience in HTML, CSS, SCSS, JavaScript, Bootstrap, tailwind CSS, StyledComponent, React JS and Next JS. Hence,
   I have successfully completed several web projects from scratch. 
   Yet, I learn continuously and never stop exploring new technologies.
   So, I have also gained knowledge of Node JS, Express JS, Mongo DB, Python,
   firebase and React Native with time.
  `,

  experience: [
    {
      name: "InterNative Labs, LLC",
      location: "Karāchi, Sindh, Pakistan",
      startDate: "Apr 2022",
      endDate: "Present",
      description: [
        "- Developing screens and UI components for the web application using React and Tailwind.",
        "- Fixing UI issues and integrating backend APIs with Redux Saga.",
      ],
    },
    {
      name: "Coupon Approve (Remote)",
      location: "Amsterdam, North Holland, Netherlands",
      startDate: "Nov 2020",
      endDate: "Apr 2022",
      description: [
        "✓ Developing code in accordance with appropriate design and architectural rules",
        "✓ Documenting, testing, deployment, maintenance, support of platforms, applications, databases and solutions",
        "✓ Help and training of other colleagues",
        "✓ Others tasks connected to the nature of the job",
        "✓ Code Improvements and Refactoring ",
        "✓ Best Practices and Rules Maintainer",
      ],
    },
    {
      name: "Interns Pakistan",
      location: "Pakistan",
      startDate: "Oct 2020",
      endDate: "Nov 2020",
      description: [
        "An Immersive Internship Program that prepares me for the world's most in-demand career. A six weeks program completely based on learning and challenges.",
        "The internship track is built by an industry expert that let develop the skills in the areas most important ",
      ],
    },
  ],

  education: [
    {
      name: "Pakistan Institute of Professional Science & Technology (PIPS-TECH)",
      location: "Karāchi, Sindh, Pakistan",
      startDate: "2019",
      endDate: "2022",
      description: [
        "Diploma of Associate Engineering,  Computer Information Technology (CIT)",
      ],
    },
    {
      name: "Govt. Degree Boys College Buffer Zone",
      location: "Karāchi, Sindh, Pakistan",
      startDate: "2018",
      endDate: "2020",
      description: ["Intermediate, Pre-Engineering"],
    },
    {
      name: "Ghazi Foundation Schools & Colleges",
      location: "Karāchi, Sindh, Pakistan",
      startDate: "2016",
      endDate: "2018",
      description: ["Matriculation,  Computer Science"],
    },
  ],

  socialMedia: {
    facebook: "https://www.facebook.com/profile.php?id=100022899849583",
    twitter: "https://twitter.com/Uzzii_21",
    github: "https://github.com/uzzii-21",
    email: "mailto:uzairahmed@74372gmail.com",
    linkedin: "https://www.linkedin.com/in/uzzii21/",
  },

  projects: [
    {
      title: "Astro Portfolio",
      isFeatured: true,
      thumbnail: "/assets/images/astro-portfolio.png",
      githubUrl: "https://github.com/uzzii-21/astro-portfolio",
      liveUrl: "https://astro-portfolio-uzair.vercel.app/",
    },
  ],

  tools: {
    design: [
      {
        name: "Figma",
        icon: "/assets/images/tools/figma.svg",
        description: "Design Tool",
        url: "https://www.figma.com"
      }
    ],
    productivity: [
      {
        name: "Arc",
        icon: "/assets/images/tools/arc.svg",
        description: "Browser",
        url: "https://arc.net"
      },
      {
        name: "Notion",
        icon: "/assets/images/tools/notion.svg",
        description: "Note Taking",
        url: "https://www.notion.so"
      },
      {
        name: "Obsidian",
        icon: "/assets/images/tools/obsidian.svg",
        description: "Long-form Writing",
        url: "https://obsidian.md"
      }
    ],
    development: [
      {
        name: "VS Code",
        icon: "/assets/images/tools/vscode.svg",
        description: "IDE",
        url: "https://code.visualstudio.com"
      },
      {
        name: "ChatGPT",
        icon: "/assets/images/tools/chatgpt.svg",
        description: "AI",
        url: "https://chat.openai.com"
      }
    ]
  },

  skills: {
    languages: [
      {
        name: "JavaScript",
        level: 90,
        icon: "/assets/images/skills/javascript.svg"
      },
      {
        name: "TypeScript",
        level: 85,
        icon: "/assets/images/skills/typescript.svg"
      },
      {
        name: "Python",
        level: 75,
        icon: "/assets/images/skills/python.svg"
      }
    ],
    frameworks: [
      {
        name: "React",
        level: 90,
        icon: "/assets/images/skills/react.svg"
      },
      {
        name: "Next.js",
        level: 85,
        icon: "/assets/images/skills/nextjs.svg"
      },
      {
        name: "Astro",
        level: 80,
        icon: "/assets/images/skills/astro.svg"
      }
    ]
  },

  blog: [
    {
      title: "Getting Started with Astro",
      description: "Learn how to build fast websites with Astro",
      date: "2023-05-15",
      thumbnail: "/assets/images/astro-portfolio.png",
      slug: "getting-started-with-astro",
      tags: ["astro", "web-development", "javascript"],
      content: `
# Getting Started with Astro

Astro is a modern static site builder that offers an amazing developer experience. In this post, we'll explore the basics of Astro and how to get started with it.

## Why Astro?

Astro provides several benefits:
- Zero JavaScript by default
- Component Islands architecture
- Built-in optimizations
- Great developer experience

## Getting Started

To create a new Astro project, run:

\`\`\`bash
npm create astro@latest
\`\`\`

This will guide you through the project creation process.
      `
    },
    {
      title: "Why I Love Web Development",
      description: "A personal journey into the world of web development",
      date: "2023-05-10",
      thumbnail: "/assets/images/astro-portfolio.png",
      slug: "why-i-love-web-development",
      tags: ["web-development", "career", "personal"],
      content: `
# Why I Love Web Development

Web development is an exciting field that combines creativity with technical skills. Here's why I fell in love with it.

## The Creative Aspect

Web development allows me to create something from nothing. It's like having a blank canvas where I can bring my ideas to life.

## The Technical Challenge

Every day brings new challenges and opportunities to learn. The web development ecosystem is constantly evolving, which keeps things interesting.
      `
    }
  ]
};
