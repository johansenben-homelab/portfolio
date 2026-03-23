import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "Ben Johansen | Resume",
	description: "Ben Johansen's Resume"
};

function ResumeHeader() {
  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-6xl">Ben Johansen</h1>
      <ul className="flex gap-6">
        <li><a href="">LinkedIn</a></li>
        <li>johansenben12@gmail.com</li>
        <li>(403) 892 - 2291</li>
      </ul>
    </div>
  );
}
function ExperienceItem({ company, title, dates, description }: { company: string, title: string, dates: string, description: string }) {
  return (
    <li className="mb-4">
      <div className="flex justify-between">
        <h3 className="text-xl font-bold">{company} - <span className="text-[1rem]">{title}</span></h3>
        <p className="italic text-[0.75rem]">{dates}</p>
      </div>
      <p className="indent-8">{description}</p>
    </li>
  );
}
function ResumeExperience() {
  return (
    <div className="w-full">
      <h2 className="text-4xl mb-4">Experience</h2>
      <ul>
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
  );
}
export default function Resume() {
  return (
    <div className="w-200 print:w-full flex flex-col items-center mx-auto">
      <ResumeHeader />
      <ResumeExperience />
    </div>
  );
}
