import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Mert Kısacık",
  initials: "MK",
  location: "Eskişehir, Türkiye, UTC+3",
  locationLink: "https://www.google.com/maps/place/Eskisehir",
  about: "Software developer, passionate learner, and team player.",
  summary:
    "Originally from Turkey, I'm a software developer with a background in English Language Teaching. I'm passionate about learning new technologies and building products that make a difference.",
  avatarUrl:
    "https://media.licdn.com/dms/image/D4E03AQEh8pru3LYMnQ/profile-displayphoto-shrink_200_200/0/1710957439057?e=1728518400&v=beta&t=JICK30wSgmxgNiYjoVoFFqcP-80-caT3ZAjApusKXR4",
  personalWebsiteUrl: "https://mertkisacik.dev",
  contact: {
    email: "mert@mertkisacik.dev",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/mk-nlp",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mert-k%C4%B1sac%C4%B1k-b175a72bb/",
        icon: LinkedInIcon,
      },
      // {
      //   name: "X",
      //   url: "https://x.com/BartoszJarocki",
      //   icon: XIcon,
      // },
    ],
  },
  education: [
    {
      school: "Anadolu University",
      degree: "Bachelor's Degree in English Language Teaching",
      start: "2019",
      end: "2024",
    },
    {
      school: "The Odin Project",
      degree: "Full Stack Web Development",
      start: "2023",
      end: "2024",
    },
  ],
  work: [
    {
      company: "Turkish Ministry of Justice",
      link: "https://justice.gov.tr",
      badges: [],
      title: "Sworn Court Interpreter",
      logo: ConsultlyLogo,
      start: "2023",
      end: "2024",
      description:
        "As a Sworn Court Translator I helped local law enforcement officers, and judicial authorities in Eskişehir",
    },
    {
      company: "Çağfen Eğitim Kurumları",
      link: "",
      badges: [],
      title: "English Language Teacher",
      logo: ParabolLogo,
      start: "2022",
      end: "2023",
      description:
        "Teached English as a second language to high school and middle school learners.",
    },
    {
      company: "Ollang Inc.",
      link: "",
      badges: [],
      title: "Translator, Transcriber",
      logo: ParabolLogo,
      start: "2022",
      end: "2023",
      description:
        "Translated documents for a Fortune 500 pharmaceutical company. Transcribed videos for a government media network.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "React Native",
    "Python",
    "Django",
    "Node.js",
    "Tailwind CSS",
    "Docker",
    "Git",
    "Linux",
    "Nix",
    "Bash",
  ],
  projects: [
    {
      title: "Habithub",
      techStack: [
        "Full Stack",
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "OAuth",
        "Credentials",
      ],
      description:
        "A web application that helps you track your habits and reach your goals. (Desktop is in development)",
      logo: ParabolLogo,
      link: {
        label: "Habithub",
        href: "https://habithub.linuxoyun.com",
      },
    },
    {
      title: "IWeather",
      techStack: ["Client Side", "TypeScript", "React", "Axios"],
      description:
        "A weather application that shows the current weather and forecast",
      logo: EvercastLogo,
      link: {
        label: "IWeather",
        href: "https://iweather-react-staj.netlify.app/",
      },
    },
    {
      title: "arkaplankaldir.com",
      techStack: ["Client Side", "TypeScript", "Next.js"],
      description: "A client side image background remover",
      logo: ConsultlyLogo,
      link: {
        label: "arkaplankaldir.com",
        href: "https://arkaplankaldir.com",
      },
    },
    {
      title: "linuxoyun.com",
      techStack: ["Full-Stack", "TypeScript", "Next.js"],
      description:
        "A website that focuses on Gaming on Linux and Open Source Software (In development)",
      logo: MonitoLogo,
      link: {
        label: "linuxoyun.com",
        href: "https://linuxoyun.com",
      },
    },
    {
      title: "pomodoro-cli",
      techStack: ["CLI", "Node.js"],
      description:
        "A simple CLI Pomodoro Technique timer that also plays music from Youtube Music",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://github.com/mk-nlp/pomodoro-cli",
      },
    },
  ],
} as const;
