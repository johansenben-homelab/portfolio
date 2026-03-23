import { Section, SectionHeading } from "./SectionUtils";
import Image from 'next/image';

import dockerSVG from "@/images/frameworks/docker-logo.svg";
import casaosSVG from "@/images/frameworks/casaos-logo.svg";
import nginxSVG from "@/images/frameworks/nginx-logo.svg";
import cloudflareSVG from "@/images/frameworks/cloudflare-logo.svg";
import ubuntuSVG from "@/images/frameworks/ubuntu-logo.svg";

function Project(
  { 
    name, description, 
    siteLink, githubLink,
    frameworkSVGs 
  }: { 
    name: string, description: string, 
    siteLink?: string, githubLink?: string,
    frameworkSVGs?: string[]
  }) {
  return (
    <li className="border-2 px-4 py-2">
      <h3 className="font-bold text-lg">{name}</h3>
      <p>{description}</p>
      { siteLink && <a href={siteLink}>View the project site</a> }
      { githubLink && <a href={githubLink}>Github Repository</a> }
      <ul className="flex justify-center gap-4 mt-2">
        {
          frameworkSVGs?.map((f, i) => <Image className="w-12" src={f} alt={f} key={`${name}-framework${i}`} />)
        }
      </ul>
    </li>
  );
}
export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeading>My Projects</SectionHeading>
      <ul>
        <Project 
          name="Homelab" 
          description="I have installed Ubuntu Server on my GMKtec G3 Plus mini pc. It uses a Cloudflare tunnel and Nginx Proxy Manager to expose it to the internet easily in any network without any port forwarding. I primarilly use Portainer, Casa OS and Nginx Proxy Manager to manage it remotely." 
          frameworkSVGs={[
            ubuntuSVG,
            dockerSVG,
            casaosSVG,
            nginxSVG,
            cloudflareSVG
          ]}
        />
      </ul>
    </Section>
  );
}