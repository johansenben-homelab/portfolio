'use client'
import { useState } from "react";
import { ComingSoon, Section, SectionHeading, SectionSubHeading } from "./SectionUtils";

function ExperienceItem({ company, title, dates, description }: { company: string, title: string, dates: string, description: string }) {
  const [open, setOpen] = useState(false);
  return (
    open ?
    <li className="mb-4">
      <div className="flex items-center">
        <div className="box-border border-t-16 border-transparent border-t-black border-l-8 border-r-8 h-0" onClick={e => {setOpen(false)}}></div>
        <h3 className="text-xl font-bold mr-auto ml-2">{company} - <span className="text-[1rem]">{title}</span></h3>
        <p className="italic text-[0.75rem]">{dates}</p>
      </div>
      <p className="indent-8">{description}</p>
    </li> 
    :
    <li>
      <div className="flex items-center">
        <div className="box-border border-l-16 border-transparent border-l-black border-t-8 border-b-8 h-0" onClick={e => {setOpen(true)}}></div>
        <h3 className="text-xl font-bold mr-auto ml-2">{company} - <span className="text-[1rem]">{title}</span></h3>
      </div>
    </li>
  );
}

function EducationItem({ school, location, degree, dates, description }: { school: string, location?: string, degree: string, dates?: string, description: string }) {
  const [open, setOpen] = useState(false);
  return (
    open ?
    <li className="mb-4">
      <div className="flex items-center">
        <div className="box-border border-t-16 border-transparent border-t-black border-l-8 border-r-8 h-0" onClick={e => {setOpen(false)}}></div>
        <h3 className="text-xl font-bold mr-auto ml-2">{school}{ location && ',' } {location} - <span className="text-[1rem]">{degree}</span></h3>
      </div>
      <p className="italic text-[0.75rem]">{dates}</p>
      <p className="indent-8">{description}</p>
    </li> 
    :
    <li>
      <div className="flex items-center">
        <div className="box-border border-l-16 border-transparent border-l-black border-t-8 border-b-8 h-0" onClick={e => {setOpen(true)}}></div>
        <h3 className="text-xl font-bold mr-auto ml-2">{school}{ location && ',' } {location} - <span className="text-[1rem]">{degree}</span></h3>
      </div>
    </li>
  );
}

export default function AboutMe() {
  return (
    <Section id="about-me">
      <SectionHeading>About Me</SectionHeading>
      <p className="ml-4">
        I started learning C++ in 2020 after I graduated from high school as a way to spend my time. Since then, I have taught myself a lot of different programming languages and tools. I am currently working on a Software Development Degree throgh the BYU Pathways program. I have completed my Associates degree and I'm planning be done my bachelors in the next year. I have also spent a lot of time learning about computer hardware and IT and have set up a homelab server running on a GMKtec G3 Plus mini pc that is exposed using a cloudflare tunnel and host most of my projects (including my portfolio).
      </p>
      <div>
        <SectionSubHeading>Skills & Qualities</SectionSubHeading>
        <ul className="ml-8 list-disc grid lg:grid-cols-3 md:grid-cols-2">
          {
            [
              "Hard Working",
              "Detail Oriented",
              "Punctual",
              "Dependable",
              "Fork Lift"
            ].map((skill,i) => <li key={`skill${i}`}>{skill}</li>)
          }
        </ul>
        <SectionSubHeading>Technology Skills</SectionSubHeading>
        <ul className="ml-8 list-disc grid lg:grid-cols-3 md:grid-cols-2">
          {
            [
              "C/C++",
              "Python",
              "Javascript",
              "Typescript",
              "HTML",
              "CSS",
              "Tailwind CSS",
              "Express JS",
              "React JS",
              "Next JS",
              "C#",
              "Rust",
              "Java",
              "Docker",
              "Windows 10/11",
              "Linux",
              "Mac OS",
              "Android",
              "Chromebook/Computer Repair"
            ].map((skill,i) => <li key={`tech-skill${i}`}>{skill}</li>)
          }
        </ul>
      </div>
      <div>
        <SectionSubHeading>Education</SectionSubHeading>
        <ul className="ml-4">
          <EducationItem school="WR Myers" location="Taber, AB" dates="Graduated 2020" degree="High School Diploma" description="" />
          <EducationItem school="BYU Pathways" location="Online" dates="Jan. 2024 - Now" degree="Software Development" description="I have completed my Associates of Software Development and am planning to complete my Bachelors of Software Development in late 2026 or early 2027." />
          <EducationItem school="Self Taught" degree="Programming & IT" description="I have taught myself to use programming languages, frameworks and operating systems like C++, Java, Python, C#, Rust, Javascript, Typescript, HTML, CSS, Tailwind CSS, Express JS, React JS, Next JS, Docker, Windows 10/11, Linux, Mac OS and others. I have also learned about servers and networking to use fore my homelab server." />
        </ul>
      </div>
      <div>
        <SectionSubHeading>Experience</SectionSubHeading>
        <ul className="ml-4">
          <ExperienceItem 
            company="Horizon School Division" 
            title="Casual IT Technician" 
            dates="Nov. 2024 - Jan. 2025"
            description="I was recalled on a casual basis to assist the tech team/IT department during a leave.  My tasks have been similar to the summer position.  I have completed support tickets, repaired chromebooks/computers and projectors, delivered technology orders, and explained tech problems to staff."
          />
          <ExperienceItem 
            company="Horizon School Division"
            title="IT Summer Student"
            dates="May 2024 - Aug. 2024"
            description="I worked with the tech team/IT department and did  various tasks including repairing chromebooks/computers, answering questions about technology, testing technology, terminated RJ45 cables (ethernet), and toning/tracing ethernet cables, installing windows 10, organizing the tech workroom, installing viewsonic boards and troubleshooting computer problems."
          />
          <ExperienceItem 
            company="The Church of Jesus Christ of Latter-Day Saints"
            title="Service Missionary"
            dates="Nov. 2021 - Nov. 2023"
            description="I volunteered at multiple places, including the Interfaith Food Bank, Clearview Lodge, the LDS Bishop’s Storehouse and the Lethbridge Soup Kitchen. On average, I volunteered for 20-30 hours each week. During this time, I stocked shelves, helped customers and operated a forklift."
          />
          <ExperienceItem 
            company="Bonduelle"
            title="Pea/Corn Combine Operator"
            dates="July 2020 - Aug. 2020 & July 2021 - Oct. 2021 (seasonal)"
            description="I worked 12 hour shifts during the summer to operate pea combines and corn combines to harvest peas/corn."
          />
          <ExperienceItem 
            company="Lantic - Roger's Sugar"
            title="General Laborer"
            dates="Sept. 2020 - Feb. 2021 (seasonal)"
            description="I worked 8 hour shifts during the sugar beet campaign. I was mostly cleaning or packaging icing sugar. I was trained to use a fork-lift, but the certificate has expired."
          />
        </ul>
      </div>
    </Section>
  );
}