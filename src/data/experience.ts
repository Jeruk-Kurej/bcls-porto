export type ExperienceCategory = "Work" | "Leadership" | "Education";

export interface ExperienceItem {
  id: string;
  title: string;
  role: string;
  date: string;
  category: ExperienceCategory;
  points: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "uco-intern",
    title: "Universitas Ciputra Online Learning",
    role: "Intern",
    date: "December 2025 – Present",
    category: "Work",
    points: [
      "Partnered with a teammate to design and build a student business showcase website using Laravel and MySQL, giving students a platform to publish professional profiles and testimonials.",
      "Manage daily virtual class operations by hosting Zoom sessions, recording lectures, and overseeing the technical flow for lecturers and students.",
      "Provide technical support for university seminars and events, including the 2025 MEM Inauguration Night, handling presentation media, video playback, and live production transitions.",
      "Facilitate outreach programs such as entrepreneurship workshops at SMK Harapan Sejati by managing technical delivery and media content."
    ]
  },
  {
    id: "student-assistant",
    title: "Universitas Ciputra Surabaya",
    role: "Student Assistant",
    date: "September 2025 – Present",
    category: "Work",
    points: [
      "Web Development (Sep 2026 – Present): mentor students from object-oriented PHP through the Laravel framework, database migrations, and final deployment, while drafting practice tests and managing the course e-learning platform.",
      "Basic Programming (Sep 2026 – Present): assist first-year students during Java lab sessions and grade weekly laboratory pre-tests with personalized technical feedback.",
      "Advanced Programming (Feb 2026 – Jun 2026): assessed weekly Java lab assignments against technical rubrics, verifying correct use of encapsulation, inheritance, polymorphism, and abstraction.",
      "Computer Organization & Architecture (Sep 2025 – Jan 2026): prepared lecture content, drafted exam questions on system architecture and hardware-software interaction, and managed grading."
    ]
  },
  {
    id: "intern-hustle-coord",
    title: "Intern Hustle 2026",
    role: "Event Coordinator",
    date: "December 2025 – August 2026",
    category: "Leadership",
    points: [
      "Co-led the Event Division, overseeing the planning and execution of career development programs including seminars, workshops, and internship placement initiatives.",
      "Drafted project documentation such as Terms of Reference (ToR), detailed event rundowns, and Memorandums of Understanding (MoU) for partners, while mentoring committee members through operational planning."
    ]
  },
  {
    id: "gdg",
    title: "Google Developer Groups (GDG) on Campus",
    role: "Creative Member, then Creative Coordinator",
    date: "November 2024 – August 2026",
    category: "Leadership",
    points: [
      "Facilitated Android Jetpack Compose Study Jam sessions, providing technical mentorship and code-along guidance to peers.",
      "As Creative Coordinator, led a team of designers and owned the visual identity and promotional strategy for Techvolution 3.0, a flagship event on AI and Full-Stack Development.",
      "Designed seminar branding and promotional materials for Techvolution 2.0 as a creative team member."
    ]
  },
  {
    id: "su-hackfest",
    title: "Student Union of Informatics",
    role: "PDD Design Coordinator, Hackfest 2026",
    date: "October 2025 – April 2026",
    category: "Leadership",
    points: [
      "Directed the design team for Hackfest 2026 and established a Master Design system used as the template library for all digital and print assets.",
      "Delegated design tasks, set deadlines, and reviewed every output for adherence to the event's visual guidelines.",
      "Applied the same Master Design approach as PDD Design Coordinator for PULSE 2025, the Student Union's internship program."
    ]
  },
  {
    id: "uc-informatics",
    title: "Universitas Ciputra Surabaya",
    role: "Undergraduate Student, Informatics",
    date: "September 2024 – Present",
    category: "Education",
    points: [
      "Pursuing a degree in Informatics with a focus on native mobile development (Swift, Kotlin) and full-stack web development (Laravel, Next.js, React)."
    ]
  },
  {
    id: "apple-foundation",
    title: "Apple Developer Academy @ UC Surabaya",
    role: "Apple Foundation Program Participant",
    date: "July 2024 – August 2024",
    category: "Education",
    points: [
      "Designed and developed a gamified time management iOS application using SwiftUI for interface construction and SwiftData for efficient local data persistence.",
      "Implemented Apple’s Human Interface Guidelines (HIG) to design an intuitive, responsive user experience and consistent navigation flow.",
      "Collaborated in a team using the Challenge-Based Learning (CBL) framework, validating app concepts with structured ideation methods before building a functional prototype."
    ]
  }
];
