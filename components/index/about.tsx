const SkillBadge: React.FC<{ children: string }> = ({ children }) => (
  <li className="badge badge-outline badge-md md:badge-lg mr-2 mb-2 rounded-xl">
    {children}
  </li>
);

export const About: React.FC = () => (
  <>
    <h3 id="about">
      About Me
    </h3>
    <p>
      I started my career at Sony in 2010 as a research engineer, designing
      video compression algorithms for the HEVC standard before side-stepping
      into software engineering and consultancy, where I have spent the past
      decade working for clients in the Government and National Security
      sectors.
    </p>
    <p>
      I have worked for over a dozen clients across several organisations, 
      building large-scale systems, leading multiple engineering teams and 
      developing long-term technical strategy.
    </p>
    <h4 className="pt-2">
      Skills & Technologies
    </h4>
    <ul>
      <SkillBadge>Kubernetes</SkillBadge>
      <SkillBadge>React</SkillBadge>
      <SkillBadge>Typescript</SkillBadge>
      <SkillBadge>Python</SkillBadge>
      <SkillBadge>Terraform</SkillBadge>
      <SkillBadge>DevOps Transformation</SkillBadge>
      <SkillBadge>Domain-Driven Design</SkillBadge>
      <SkillBadge>Agile Development</SkillBadge>
      <SkillBadge>Continuous Delivery</SkillBadge>
    </ul>
  </>
);
