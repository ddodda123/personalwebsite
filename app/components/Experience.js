"use client";

import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
const experiences = [
  {
    name: "Software Engineer Intern · Meta",
    description: "Incoming Software Engineer Intern for Summer of 2025",
    tags: [],
    link: "https://www.meta.com/",
    date: "May 2025 — Aug 2025",
  },
  {
    name: "Software Engineer Intern · Principal Financial Group",
    description:
      "Engineered a TypeScript bot to improve codebase hygiene by generating automated reports on 500+ stale branches across 40+ repositories, leveraging GitHub API and Teams webhooks. Developed a CSV-based SQL query generator with TypeScript in Next.js, reducing query execution time to 45 seconds on average. Optimized AWS design by consolidating 4 separate Lambdas into a single Lambda, reducing costs by 30%.",
    tags: ["TypeScript", "AWS", "GitHub API", "Next.js", "SQL"],
    link: "https://www.principal.com/",
    date: "May 2024 — Aug 2024",
  },
  {
    name: "Full Stack Software Developer · Student Government Association",
    description:
      "Improved course evaluations for 18,000+ students by scraping data from RateMyProfessors using Selenium. Designed visualizations for 2,700+ courses using Python, SQL, Node.js, and D3.js. Automated build, testing, and release processes with Jenkins pipelines, ensuring higher software reliability.",
    tags: ["Python", "SQL", "Node.js", "Selenium", "D3.js", "Jenkins"],
    link: "https://sga.gatech.edu/",
    date: "Jan 2024 — May 2024",
  },
  {
    name: "Undergraduate Teaching Assistant · Georgia Tech",
    description:
      "Mentored a cohort of 800+ students in Python fundamentals using the IDLE IDE. Led weekly recitations with 25+ students and held 5+ office hours weekly. Authored 50+ exam and homework questions on topics like Recursion, APIs, and Data Structures.",
    tags: ["Python", "Teaching", "Data Structures", "APIs"],
    link: "https://www.cc.gatech.edu/",
    date: "Jan 2024 — Present",
  },
  {
    name: "Software Engineer Intern · LIC Dental Associates",
    description:
      "Designed a website using Next.js, React, and Tailwind CSS to automate scheduling for patient consultations. Architected a secure PostgreSQL database system on Amazon RDS to manage 1,000+ patient records.",
    tags: ["Next.js", "React", "Tailwind CSS", "PostgreSQL", "AWS RDS"],
    link: "https://www.licdentalassociates.com/",
    date: "May 2023 — Aug 2023",
  },
];

export default function ExperienceTimeline() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4 md:p-10"
      style={{
        background: "linear-gradient(160deg, #141414 0%, #1a1a1a 100%)",
        position: "relative",
      }}
    >
      <div
        style={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 50% 50%, rgba(138, 255, 185, 0.05) 0%, rgba(20, 20, 20, 0) 80%)",
          pointerEvents: "none",
        }}
      />
      <h1
        id="hero"
        data-aos="fade-up"
        className="text-3xl font-bold text-gray-800 text-left mb-8"
      >
        <span
          id="ai"
          style={{
            color: "#8affb9",
            textShadow: "0 10px 30px rgb(92, 182, 129, 0.2)",
            marginLeft: "250px",
            padding: "30px",
            fontFamily: "Poppins",
            fontWeight: 500,
          }}
        >
          Experiences
        </span>
      </h1>
      <div style={{ width: "80%" }}>
      <Timeline
        position="right"
        sx={{
          width: "100%",
          maxWidth: "4xl",
          [`& .MuiTimelineItem-root::before`]: {
            display: "none",
          },
        }}
      >
        {experiences.map((experience, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent
              sx={{
                m: "0",
                color: "white",
                fontSize: "0.875rem",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-end",
                paddingTop: "12px",
              }}
            >
              {experience.date}
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineDot
                sx={{
                  margin: "12px 0",
                }}
              />
              {index < experiences.length - 1 && <TimelineConnector />}
            </TimelineSeparator>

            <TimelineContent>
              <div
                className="ml-4 p-4 rounded-lg experience-card"
                style={{
                  backgroundColor: "rgba(31, 41, 55, 0.4)",
                  border: "1px solid rgba(75, 85, 99, 0.2)",
                  borderRadius: "10px",
                  padding: "20px 20px",
                  transition: "all 0.3s ease",
                }}
              >
                <style jsx>{`
                  .experience-card:hover {
                    background-color: rgba(31, 41, 55, 0.8);
                    transform: scale(1.005);
                  }
                  .experience-card:hover h3,
                  .experience-card:hover a {
                    color: #8affb9 !important;
                  }
                  .experience-card:hover span {
                    border-color: #8affb9 !important;
                    color: #8affb9 !important;
                  }
                `}</style>
                <h3
                  style={{
                    color: "#ffffff",
                    fontSize: "1.125rem",
                    fontWeight: "bold",
                    transition: "color 0.3s ease",
                  }}
                >
                  {experience.name}
                </h3>
                <p style={{ color: "#d1d5db", fontSize: "0.875rem" }}>
                  {experience.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {experience.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      style={{
                        color: "#d1d5db",
                        backgroundColor: "rgba(31, 41, 55, 0.4)",
                        padding: "0.25rem 0.5rem",
                        borderRadius: "0.375rem",
                        fontSize: "0.75rem",
                        fontWeight: "500",
                        marginRight: "0.5rem",
                        border: "1px solid rgba(75, 85, 99, 0.2)",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={experience.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#d1d5db",
                    textDecoration: "underline",
                    display: "inline-block",
                    marginTop: "0.5rem",
                    transition: "color 0.3s ease",
                  }}
                >
                  Learn more
                </a>
              </div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
      </div>
    </div>
  );
}