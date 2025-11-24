module.exports = {
  name: "Narciso Braga Benigno",
  title: "Software developer",
  facts: {
    Residence:
      '<a href="https://www.google.com/maps/place/Sydney+NSW/@-33.8478796,150.7918939,11z/data=!3m1!4b1!4m6!3m5!1s0x6b129838f39a743f:0x3017d681632a850!8m2!3d-33.8688197!4d151.2092955!16zL20vMDZ5NTc0"><i class="fa fa-home fact-icon"></i>Sydney</a>',
    Email:
      '<a href="mailto:narciso.benigno@gmail.com"><i class="fa fa-envelope fact-icon"></i>narciso.benigno@gmail.com</a>',
    Linkedin:
      '<a href="https://www.linkedin.com/in/narcisobenigno/"><i class="fa-brands fa-linkedin-in fact-icon"></i>narcisobenigno</a>',
    GitHub:
      '<a href="https://github.com/narcisobenigno"><i class="fab fa-github fact-icon"></i>narcisobenigno</a>',
  },
  positions: [
    {
      title: "Slice Pay - Staff Engineer - Sydney, Australia",
      period: "February 2025 - November 2025",
      skills: [
        "CQRS",
        "Event Sourcing",
        "Event Storming",
        "Reactive Systems",
        "TypeScript",
        "Server Side Rendering web apps",
        "Node.js",
        "AWS Lambda",
        "API Gateway",
        "AWS",
        "SQS",
        "SNS",
        "EventBridge",
        "DynamoDB",
        "GCP",
        "BigQuery",
        "Data Studio",
        "TDD",
        "DDD",
        "Clean Architecture",
        "Agile",
        "Fintech",
        "Pulumi",
      ],
      contents: `
Joined as the first dedicated engineer after a temporary engineer validated the market with a basic prototype (single API endpoint, Notion as database). My mandate was to transform this prototype into a production-grade application with robust features, scalability, and security.

The Notion-based system revealed critical bottlenecks: business processes built directly on top of Notion created deep coupling that required multiple iterations to decouple, poor technical and product observability, platform flakiness, and substantial manual operational overhead. Since Notion is not designed as a production database, removing this dependency was critical to avoid undermining the product's potential. After implementing initial features to enable sales, another engineer joined and I led the re-architecture of the entire system. Despite limited stakeholder availability, we conducted Event Storming workshops involving product, operations, sales, and marketing teams to inform the design.

The migration strategy prioritized zero business disruption: deployed CQRS with event sourcing infrastructure from day one, initially emitting events in-memory while maintaining the existing API contract to avoid breaking client integrations. Once the flow was complete, activated event persistence and migrated historical Notion data to proper events, giving older bookings the same functionality as new ones.

This transformation achieved substantial reduction in manual operational and engineering work tracked by metrics, while enabling analytics capabilities through BigQuery projections that allowed teams to build dashboards and reports using low-code tools. All development maintained 24/7 availability with zero downtime throughout the transition.
`,
    },
    {
      title: "Indebted - Staff Engineer - Sydney, Australia",
      period: "August 2020 - February 2025",
      skills: [
        "Agile",
        "Flow",
        "AWS",
        "CI",
        "CD",
        "Reactive Systems",
        "Lambda",
        "CQRS",
        "Event Sourcing",
        "Terraform",
        "SQS",
        "SNS",
        "S3",
        "Aurora",
        "OO",
        "DynamoDB",
        "TDD",
        "DDD",
        "React",
      ],
      contents: `
InDebted is a debt collection company that relies on data to provide a smarter and more sensible approach, supporting customers to get their financial life back on track.

During my period at InDebted, I was instrumental in the platform's globalisation efforts. First, expanding to Canada which required adapting the platform to meet Canadian regulatory requirements. Then leading the more complex expansion to the US market, ensuring compliance with US-specific debt collection regulations.

A key technical achievement was absorbing the legacy platform into the new CQRS and event sourcing architecture. This migration preserved complete audit trails for old accounts and maintained data integrity and history for existing clients, ensuring no data loss during the transition.

Working within a team of 10 engineers, I collaborated primarily through pair and mob programming to tackle complex challenges and leading many of those teams tackling strategic goals. When timezone differences between US and Australia made mobbing impractical, we maintained regular check-ins to ensure alignment. Combined with trunk-based development, this approach resulted in minimal rework, low bug rates, and eliminated time spent on code reviews.

Throughout this work, I maintained the platform's 24/7 availability with zero downtime. The architecture enabled continuous experimentation and real-time impact measurement while ensuring the team could progress independently with fast releases and simple extensibility. As well as changing and implementing features into the Indebted's frontend application using React.
`,
    },
    {
      title: "Pragmateam - Software developer - Sydney, Australia",
      period: "Dec 2018 - Aug 2020",
      skills: [
        "Agile",
        "OO",
        "TDD",
        "CI",
        "CD",
        "DDD",
        "Consulting skills",
        "JavaScript",
        "Kotlin",
      ],
      contents: `
Worked as a consultant software engineer across two major engagements, helping organisations improve their technical practices and delivery capabilities.

At a large private company, I focused on frontend delivery using Angular, working closely with the team through pair programming to deliver features while applying TDD practices. I also provided architectural guidance on frontend codebase structure, helping establish patterns that improved code organisation and maintainability.

At Service NSW (government agency), I joined a team with already strong TDD principles and focused on delivering features while upskilling the team on advanced testing strategies and CI/CD pipelines. The engagement involved practical work with Kotlin on an AWS-based platform, establishing deployment automation that improved their delivery capabilities.
`,
    },
    {
      title: "Bionexo - Software developer - São Paulo, Brazil",
      period: "Jul 2017 - Sep 2018",
      skills: [
        "OO",
        "Working Effectively with Legacy code",
        "TDD",
        "DDD",
        "Strangler Pattern",
        "CI",
        "CD",
      ],
      contents: `
I worked within the legacy platform team, helping the team apply techniques described in the book "Working Effectively with Legacy Code" by organising Kata sessions to improve our skills and confidence when dealing with such codebases. Using Pair Programming to address issues, we first measured the problems to isolate the biggest sources of issues, then worked together to tackle them systematically. Through this approach, we introduced automated tests and improved the code base quality, solving years-long platform problems and improving user satisfaction. Furthermore, I was involved in the project to migrate from that legacy platform to a new one.
`,
    },
    {
      title: "ThoughtWorks - Software Developer - São Paulo, Brazil",
      period: "Feb 2015 - Jun 2017",
      skills: [
        "Agile",
        "OO",
        "TDD",
        "DDD",
        "CI",
        "CD",
        "Consulting skills",
        "Ruby",
        "Java",
        "golang",
        "rest",
      ],
      contents: `
I worked as a consultant on 2 major client engagements across e-commerce and pharmaceutical industries. On the first project—a large e-commerce platform—I was hired as the first engineer with previous Ruby ecosystem knowledge for a remote team based in another state. I served as the on-site ThoughtWorks team representative, helped prepare inceptions, and synchronised priorities across multiple stakeholders. I led major testing and design improvements to their codebase and enhanced delivery provider integrations, resulting in more stable and reliable services.

On the second engagement—an India-based project for a large US pharmacy company—I coached the team on design skills and TDD practices through pair programming. This resulted in significant improvements to their product development flow, including reduced bugs and faster delivery times.
`,
    },
  ],
  experience: [
    {
      contents: `
Caelum teacher of Object Oriented Programming for 6 months. That was a great experience of teaching in one of best "bootcamps"-like in Brazil.
      `,
      skills: ["teaching"],
    },
  ],
};
