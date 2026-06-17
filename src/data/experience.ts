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
    role: "Full-Stack Developer & Intern",
    date: "June 2025 - Present",
    category: "Work",
    points: [
      "Managed daily Zoom class operations by handling host duties, recording sessions, and ensuring smooth screen sharing for lecturers and students.",
      "Partnered with a teammate to engineer a student business showcase platform using Laravel and MySQL, managing the full development lifecycle.",
      "Provided technical support for university seminars and events, including the 2025 MEM Inauguration Night.",
      "Facilitated outreach programs at SMK Harapan Sejati by supporting the technical delivery of entrepreneurship workshops."
    ]
  },
  {
    id: "intern-hustle-coord",
    title: "Intern Hustle 2026",
    role: "Event Division Coordinator",
    date: "December 2025 - Present",
    category: "Leadership",
    points: [
      "Co-led the Event Division for Intern Hustle 2026 by managing a team to execute comprehensive career development programs, including seminars, workshops, and internship placements.",
      "Partnered with a fellow coordinator to delegate administrative and logistical tasks, drafting Terms of Reference (ToR) and detailed event rundowns.",
      "Mentored team members through the operational planning process, ensuring all logistical requirements were met to deliver a seamless experience."
    ]
  },
  {
    id: "oop-assistant",
    title: "Universitas Ciputra Surabaya",
    role: "Object-Oriented Programming Student Assistant",
    date: "February 2026 - June 2026",
    category: "Work",
    points: [
      "Assessed weekly lab assignments for Java programming based on technical rubrics, verifying the correct application of OOP principles.",
      "Provided constructive technical feedback to students, ensuring code clarity, logical problem-solving, and adherence to object-oriented design paradigms."
    ]
  },
  {
    id: "gdg-coord",
    title: "Google Developer Groups (GDG) on Campus",
    role: "Creative Division Coordinator",
    date: "November 2025 - June 2026",
    category: "Leadership",
    points: [
      "Spearheaded promotional strategies and managed end-to-end design workflows for Techvolution 3.0, featuring industry experts in AI and Full-Stack Development.",
      "Led a team of creative designers to develop promotional materials, successfully increasing event attendance through consistent visual branding."
    ]
  },
  {
    id: "su-member",
    title: "Student Union of Informatics",
    role: "PDD Design Division Member",
    date: "April 2025 - June 2026",
    category: "Leadership",
    points: [
      "Collaborated within the creative team to produce high-impact visual assets and promotional materials for various student union initiatives.",
      "Ensured all designs aligned strictly with event themes and campus branding guidelines."
    ]
  },
  {
    id: "su-hackfest",
    title: "Student Union of Informatics",
    role: "PDD Design Division Coordinator of Hackfest 2026",
    date: "October 2025 - April 2026",
    category: "Leadership",
    points: [
      "Directed the design team for Hackfest 2026, which featured both Hackathon and UI/UX competition tracks.",
      "Delegated design tasks, managed project timelines, and provided mentorship to ensure all visual assets met quality standards and strict deadlines."
    ]
  },
  {
    id: "coa-assistant",
    title: "Universitas Ciputra Surabaya",
    role: "Computer Organization & Architecture Student Assistant",
    date: "September 2025 - January 2026",
    category: "Work",
    points: [
      "Supported course development by preparing, structuring, and organizing lecture presentation content.",
      "Drafted comprehensive exam questions focused on fundamental system architecture and hardware-software interaction concepts.",
      "Managed the grading process for student examinations and assessments, ensuring consistent evaluation standards."
    ]
  },
  {
    id: "gdg-member",
    title: "Google Developer Groups (GDG) on Campus",
    role: "Creative Division Member",
    date: "November 2024 - June 2025",
    category: "Leadership",
    points: [
      "Facilitated Android Jetpack Compose Study Jam sessions by providing technical mentorship and code-along guidance to peers.",
      "Designed visual assets for Techvolution 2.0, including seminar branding and promotional materials, ensuring high-quality outreach."
    ]
  },
  {
    id: "apple-foundation",
    title: "Apple Foundation",
    role: "Participant",
    date: "July 2024 - August 2024",
    category: "Education",
    points: [
      "Designed and developed a gamified time management iOS application using SwiftUI for interface construction and SwiftData for efficient local data persistence.",
      "Implemented Apple’s Human Interface Guidelines (HIG) to design an intuitive, responsive user experience and consistent navigation flow.",
      "Collaborated in an agile team of 5 members using the Challenge-Based Learning (CBL) framework to deliver a functional mobile prototype within a 4-week intensive program."
    ]
  }
];
