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
      title: "Slice Pay - Software developer - Sydney, Australia",
      period: "February 2025 - Present",
      skills: [
        "Event Sourcing",
        "Event Storming",
        "Reactive Systems",
        "TypeScript",
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
      ],
      contents: `
Joined as the first dedicated engineer after a temporary engineer validated the market with a basic prototype (single API endpoint, Notion as database). My mandate was to transform this prototype into a production-grade application with robust features, scalability, and security.

The Notion-based system revealed critical bottlenecks: business processes built directly on top of Notion created deep coupling that required multiple iterations to decouple, poor technical and product observability, platform flakiness, and substantial manual operational overhead. Since Notion is not designed as a production database, removing this dependency was critical to avoid undermining the product's potential. After implementing initial features to enable sales, another engineer joined and I led the re-architecture of the entire system. Despite limited stakeholder availability, we conducted Event Storming workshops involving product, operations, sales, and marketing teams to inform the design.

The migration strategy prioritized zero business disruption: deployed event sourcing infrastructure from day one, initially emitting events in-memory while maintaining the existing API contract to avoid breaking client integrations. Once the flow was complete, activated event persistence and migrated historical Notion data to proper events, giving older bookings the same functionality as new ones.

This transformation achieved substantial reduction in manual operational and engineering work tracked by metrics, while enabling analytics capabilities through BigQuery projections that allowed teams to build dashboards and reports using low-code tools. All development maintained 24/7 availability with zero downtime throughout the transition.
`,
    },
    {
      title: "Indebted - Software developer - Sydney, Australia",
      period: "August 2020 - February 2025",
      skills: [
        "Agile",
        "Flow",
        "AWS",
        "CI",
        "CD",
        "Reactive Systems",
        "Lambda",
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
      ],
      contents: `
InDebted is a debt collection company that relies on data to provide a smarter and more sensible approach, supporting customers to get their financial life back on track.

During my tenure, I was instrumental in the platform's globalization efforts. First, expanding to Canada which required adapting the platform to meet Canadian regulatory requirements. Then leading the more complex expansion to the US market, ensuring compliance with US-specific debt collection regulations.

A key technical achievement was absorbing the legacy platform into the new event sourcing architecture. This migration preserved complete audit trails for old accounts and maintained data integrity and history for existing clients, ensuring no data loss during the transition.

Working within a team of 10 engineers, I collaborated primarily through pair and mob programming to tackle complex challenges. When timezone differences between US and Australia made mobbing impractical, we maintained regular check-ins to ensure alignment. Combined with trunk-based development, this approach resulted in minimal rework, low bug rates, and eliminated time spent on code reviews.

Throughout this work, I maintained the platform's 24/7 availability with zero downtime. The architecture enabled continuous experimentation and real-time impact measurement while ensuring the team could progress independently with fast releases and simple extensibility.
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
Consultant software engineer helping clients to improve their technical and lean/XP skills. Furthermore, I worked with technologies such as React, Kotlin and microservices as well as techniques as TDD, DDD, continuous delivery and inceptions.
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
I worked within the legacy platform team, helping the team apply techniques described in the book "Working Effectively with Legacy Code". So, we introduced automated tests and improved the code base quality, solving years-long platform problems and improving user satisfaction. Furthermore, I was involved in the project to migrate from that legacy platform to a new one.
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
I worked as a consultant embedded to the customer's office, influencing, and helping them to improve their agile process, implementing continuous-delivery, and coding skills.
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
