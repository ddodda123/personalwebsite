import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const experiences = [
    {
        name: 'Software Engineer Intern · Meta',
      description: 'Incoming Software Engineer Intern for Summer of 2025',
      tags: [],
      link: 'https://www.meta.com/',
      date: 'May 2025 — Aug 2025',
    },
    {
      name: 'Software Engineer Intern · Principal Financial Group',
      description: 'Engineered a TypeScript bot to improve codebase hygiene by generating automated reports on 500+ stale branches across 40+ repositories, leveraging GitHub API and Teams webhooks. Developed a CSV-based SQL query generator with TypeScript in Next.js, reducing query execution time to 45 seconds on average. Optimized AWS design by consolidating 4 separate Lambdas into a single Lambda, reducing costs by 30%.',
      tags: ['TypeScript', 'AWS', 'GitHub API', 'Next.js', 'SQL'],
      link: 'https://www.principal.com/',
      date: 'May 2024 — Aug 2024',
    },
    {
      name: 'Full Stack Software Developer · Student Government Association',
      description: 'Improved course evaluations for 18,000+ students by scraping data from RateMyProfessors using Selenium. Designed visualizations for 2,700+ courses using Python, SQL, Node.js, and D3.js. Automated build, testing, and release processes with Jenkins pipelines, ensuring higher software reliability.',
      tags: ['Python', 'SQL', 'Node.js', 'Selenium', 'D3.js', 'Jenkins'],
      link: 'https://sga.gatech.edu/',
      date: 'Jan 2024 — May 2024',
    },
    {
      name: 'Undergraduate Teaching Assistant · Georgia Tech',
      description: 'Mentored a cohort of 800+ students in Python fundamentals using the IDLE IDE. Led weekly recitations with 25+ students and held 5+ office hours weekly. Authored 50+ exam and homework questions on topics like Recursion, APIs, and Data Structures.',
      tags: ['Python', 'Teaching', 'Data Structures', 'APIs'],
      link: 'https://www.cc.gatech.edu/',
      date: 'Jan 2024 — Present',
    },
    {
      name: 'Software Engineer Intern · LIC Dental Associates',
      description: 'Designed a website using Next.js, React, and Tailwind CSS to automate scheduling for patient consultations. Architected a secure PostgreSQL database system on Amazon RDS to manage 1,000+ patient records.',
      tags: ['Next.js', 'React', 'Tailwind CSS', 'PostgreSQL', 'AWS RDS'],
      link: 'https://www.licdentalassociates.com/',
      date: 'May 2023 — Aug 2023',
    },
]

export default function ExperienceTimeline() {
    return (
      <div
        className="bg-gray-100 min-h-screen flex items-center justify-center" // Tailwind CSS classes
        style={{
          backgroundColor: '#f9fafb', // Optional inline style for the background
          padding: '20px',
        }}
      >
        <h1 
            id="hero" 
            data-aos="fade-up" 
            style={{
                textAlign: 'center', // Centers the text horizontally
                margin: '0 auto',    // Ensures horizontal centering of the container
            }}
            >
            <span 
                id="ai" 
                style={{
                color: '#0a3315', 
                textShadow: '0 10px 30px rgb(92, 182, 129)', 
                display: 'inline',
                }}
            >
                Experiences
            </span>        
        </h1>

        <Timeline position="alternate">
          {experiences.map((experience, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot />
                {index < experiences.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <h3 className="text-lg font-bold">{experience.name}</h3>
                <p className="text-sm text-gray-600">{experience.date}</p>
                <p className="text-sm">{experience.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {experience.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs font-medium bg-gray-200 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={experience.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-blue-500 underline"
                >
                  Learn more
                </a>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    );
  }
  