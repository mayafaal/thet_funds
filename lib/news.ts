export type ContentBlock =
  | string
  | { type: 'heading'; text: string }
  | { type: 'image'; src: string; alt?: string };

export type NewsItem = {
  id: string
  title: string
  description: string
  date: string
  category: string
  featured: boolean
  /** Main cover image */
  image?: string
  /** Up to 2–3 additional images to display in the gallery at the bottom */
  subImages?: string[]
  /** Article body as an array of content blocks (strings for paragraphs, or objects for headings/images) */
  content?: ContentBlock[]
}

export const newsItems: NewsItem[] = [
  {
    id: "news-07",
    title: "THET Fund Engages Gambia Federation of the Disabled",
    description:
      "The leadership of the Tertiary and Higher Education Trust (THET) Fund today held a productive engagement with The Gambia Federation Of The Disabled. as part of its ongoing stakeholder consultations.",
    date: "March 2026",
    category: "Press Release",
    featured: true,
    image: "/news/A1.jpg",
    subImages: [],
    content: [
      "Led by our Executive Director Dr Jorjoh Ndure-Tambedou, the THET Fund team introduced the Fund’s mandate and highlighted its commitment to supporting inclusive access to tertiary and higher education.",
      "The Chairperson of The Gambia Federation of the Disabled, His Worship Muhammed Krubally, together with members of his team, provided an overview of the organisation and shared key challenges faced by persons with disabilities, particularly in relation to education, skills development and employment opportunities.",
      "The engagement created an important platform for dialogue, with both sides exchanging perspectives on how the THET Fund can support initiatives that promote inclusion and expand opportunities for persons with disabilities in The Gambia.",
    ],
  },
  {
    id: "news-06",
    title: "THET Fund Presents Stakeholder Engagement Analytical Findings to the Honorable Minister and MoHERST SMT",
    description:
      "The Leadership of the Tertiary and Higher Education Trust (THET) Fund presented its flagship National Stakeholder Engagement Findings to the Honourable Minister and Senior Management Team of the Ministry of Higher Education,Research Science and Technology (MoHERST).",
    date: "March 2026",
    category: "Press Release",
    featured: true,
    image: "/news/1NEWS.jpeg",
    subImages: [
      "/news/1.1NEWS.jpeg",
      "/news/1.2NEWS.jpeg",
    ],
    content: [
      "The report, titled “Advancing Homegrown Youth Employability and Institutional Transformation for Inclusive Prosperity,” captures insights from over 400 stakeholders across universities, TVET institutions, students, government, donor partners and the private sector.",
      "In her presentation, the THET Fund’s Executive Director, Dr Jorjoh Ndure-Tambedou, emphasised the importance of preparing young people for the future of work, practical skills, and leadership to secure The Gambia’s future prosperity.",
      "The Honourable Minister, Professor Pierre Gomez, commended the Fund for its proactive and impactful work. The report will guide future THET Fund investments/inputs. It also informs the pilot funding windows, eligibility criteria and five year strategic plan.",
      "The fund presented the findings for alignment with the ministry’s and national priorities. Once the recommendations are approved by the governing board, the findings will be shared with stakeholders and published on the THET Fund website for public access.",
    ],
  },
  {
    id: "news-01",
    title: "Spotlight on Our Executive Director!",
    description:
      "Dr Jorjoh Ndure-Tambedou, PhD, is a transformative leader committed to shaping futures for Gambian youth; grounded in capacity development, innovation, inclusion, and sustainable growth.",
    date: "11th March 2026",
    category: "Announcement",
    featured: true,
    image: "/news/news01.jpg",
    subImages: [],
    content: [
      "Dr Jorjoh’s academic journey began early—intrigued by science and mathematics from childhood. At age 16 and 17, she spent summers at University of Oxford in mathematics bootcamps and in the Queen Mary University of London chemistry labs, earning the UK Government’s Nuffield Foundation Science Bursary and a Gold CREST Award for contributing to the development of a drug candidate for Bilharzia. At age 21, she was awarded a Wellcome Trust grant to conduct an independent neuroscience research project while studying at King's College London, where she discovered a novel signaling site for a gene called Cyp1B1, marking her early entry into scientific innovation.",
      "Holding a Ph.D. in Medical Sciences (funded by the European & Developing Countries Clinical Trials Partnership (EDCTP)), with specialization in vaccinology, data analytics and statistics, she worked as a scientist at the Medical Research Council (MRC) in The Gambia, contributing to clinical trials before transitioning into STEM leadership.",
      "As former CEO of InSIST Global Gambia Ltd., she led her team to develop major national digital systems—including the Education Management Information System, and Afrijula, a platform empowering entrepreneurs with digital financial tools. Under her leadership, the team trained over 13,000 women and youth in digital/financial literacy, supported by the United Nations Capital Development Fund (UNCDF).",
      "Dr Jorjoh is the main author of the first NAQAA-accredited Industry-led curriculum in the tech sector in the Gambia. A trusted ITC, UNESCO and UNDESA consultant, she developed the National TVET Digital Transformation Strategy and contributed to the country’s data governance situational analysis, both now central to national policy reforms. She is the Chair for the Sector Skills Council for ICT, working closely with NAQAA to develop career paths and national occupational standards for the sector. An advocate for STEM and gender equity, she is the President of the RISE Women Network_Gambia and an advocate for Girls and Women in STEM careers. She mentors youth, and champions inclusive leadership.",
      "Her impact has earned major recognition: Woman of the Year 2024, Woman Who Inspires Inclusion, Forbes Africa’s /Choiseul Under 40 Honoree (2023, 2024) and the Pan-African Changemaker Award. She was also honored by Forbes Africa as a woman leader changing the technology landscape. An AI Connect Fellow, Acumen Fellow, Toastmaster, and mother of three, Dr. Jorjoh brings a rare blend of academic scientific rigor, policy insight, and human-centered leadership to advancing the future of tertiary and higher education in The Gambia."
    ],
  },
  {
    id: "news-02",
    title: "THET Fund Engages UTG Students’ Union on Student-Centred Initiatives",
    description:
      "The Tertiary and Higher Education Trust (THET) Fund held a constructive engagement with the leadership of the University of The Gambia Students’ Union (UTGSU), represented by the Union’s President and Finance Director.",
    date: "March 2026",
    category: "Press Release",
    featured: true,
    image: "/news/news02.jpg",
    subImages: [],
    content: [
      "The meeting provided an opportunity for open dialogue on strengthening collaboration between the THET Fund and student leadership, while also exploring initiatives that can directly benefit students and enhance their overall experience within the tertiary education system.",
      "Discussions centred on identifying practical areas of partnership that can support student development and contribute to improving learning environments across institutions.",
      "At THET Fund, students are recognised not merely as beneficiaries of reforms but as key partners in shaping the future of higher education in The Gambia. Through continued engagement with student leaders, the institution aims to ensure that the voices and perspectives of students remain an integral part of the national higher education agenda."
    ],
  },
  {
    id: "news-03",
    title: "THET Fund Leadership Visit USET TVET Skills Centres in Ndemban and Kanilai",
    description:
      "On 9th March 2026, the leadership of the Tertiary and Higher Education Trust (THET) Fund continued its nationwide courtesy calls and consultations with visits to the USET TVET skills centres in Ndemban and Kanilai.",
    date: "March 2026",
    category: "Press Release",
    featured: false,
    image: "/news/news03.jpg",
    subImages: [
      "/news/news03b.jpg",
      "/news/news03c.jpg",
      "/news/news03a.jpg",
    ],
    content: [
      "The visits formed part of the Fund’s ongoing efforts to engage directly with institutions that are expanding skills development opportunities in rural communities, while strengthening collaboration across the tertiary and higher education sector in The Gambia.",
      "During the engagements, discussions focused on the role of Technical and Vocational Education and Training (TVET) in equipping young people with practical skills and improving access to training opportunities across the country. The meetings also provided an opportunity for the THET Fund leadership to listen to the experiences and perspectives of the institutions as they work to build capacity and support skills development at the community level.",
      "A key priority for the THET Fund is ensuring that education, skills development, and opportunity are inclusive and accessible to all Gambian youth, regardless of where they live. The Fund believes that talent exists in every community and remains committed to supporting systems that enable young people from both urban and rural areas to learn, grow, and thrive.",
      "The discussions reaffirmed a shared vision of building stronger institutions, expanding access to practical skills training, and creating pathways to employment and entrepreneurship across the country, ensuring that no young person is left behind because of geography.",
      "The THET Fund leadership also expressed appreciation for the warm reception and valuable insights shared during the visits."
    ],
  },
  {
    id: "news-04",
    title: "THET Fund Leadership Continues Stakeholder Engagement Tour",
    description:
      "The leadership of the Tertiary and Higher Education Trust (THET) Fund on the 5th of March, 2026, continued their stakeholder engagement visits to key tertiary and higher education institutions in the country.",
    date: "March 2026",
    category: "Press Release",
    featured: true,
    image: "/news/news04.jpg",
    subImages: [],
    content: [
      "The latest tour included visits to The Gambia Telecommunications and Multimedia Institute (GTMI), the School of Medicine and Allied Health Sciences at The University of The Gambia, and The Gambia Tourism and Hospitality Institute (GTHI).",
      "These engagements follow earlier visits by the Executive Director to the University of The Gambia, University of Applied Science, Engineering and Technology (USET), Civil Service University, and University of Education - The Gambia.",

      { type: 'heading', text: 'First Stop – GTMI' },
      { type: 'image', src: '/news/news04b.jpg', alt: 'GTMI Visit' },
      "The delegation first met with the Director General of The Gambia Telecommunications and Multimedia Institute (GTMI), Mr Malick Bah, who provided an overview of the institution, its history, establishment challenges, and key areas requiring support. Mr Bah expressed optimism about the engagement, noting that the visit has renewed hope for potential collaboration. The team was later taken on a guided tour of the institute’s facilities.",

      { type: 'heading', text: 'Second Stop – UTG School of Medicine and Allied Health Sciences' },
      { type: 'image', src: '/news/news04.jpg', alt: 'UTG Visit' },
      "At the School of Medicine and Allied Health Sciences (University of The Gambia), the delegation met with the Provost, Professor Gabriel Ogun. Discussions centred on capacity and skills gaps within the sector, institutional challenges, and priority areas where support from the Fund could have meaningful impact.",

      { type: 'heading', text: 'Final Stop – GTHI' },
      { type: 'image', src: '/news/news04a.jpg', alt: 'GTHI Visit' },
      "The final visit was to The Gambia Tourism and Hospitality Institute (GTHI), where the team met with the Director General, Mr Momodou Singhateh, and his management team. The institution presented an overview of its programmes, mandate, and strategic priorities.",
      "These visits are part of THET Fund’s ongoing consultations to gather first-hand insights from education institutions, which will help inform the design of its upcoming programs."
    ],
  },
  {
    id: "news-05",
    title: "THET Fund Leads National Dialogue on Workforce-Ready Graduates",
    description:
      "The Tertiary and Higher Education Trust (THET) Fund, in partnership with the Ministry of Higher Education, Research, Science and Technology (MoHERST), on 24 February 2026 convened a National Stakeholder Engagement and Requirements Gathering Workshop under the theme “Co-Creating Workforce-Ready Graduates for The Gambia.”",
    date: "March 2026",
    category: "Press Release",
    featured: false,
    image: "/news/news05.jpg",
    subImages: [
      "/news/news05a.jpg",
      "/news/news05b.jpg",
      "/news/news05c.jpg",
    ],
    content: [
      "The high-level forum brought together government officials, diplomatic representatives, development partners, private sector leaders, tertiary institutions, civil society organisations, students and youth groups to help shape the future of tertiary and higher education financing in the country.",
      "Delivering the keynote address, the Honourable Minister of Higher Education, Research, Science and Technology emphasised that workforce readiness must go beyond academic certification. He called for sustained investment in modern laboratories, digital learning spaces and inclusive access to education, particularly for rural learners, women and persons with disabilities.",
      "Chairperson of the THET Fund Board of Trustees, Mr. Muhammed Jah, described workforce development as a shared national responsibility and urged stronger private sector participation in skills development initiatives.",
      "The Executive Director of the THET Fund, Dr Jorjoh Ndure-Tambedou, presented the Fund’s mandate and milestones, outlining its strategic direction and long-term institutional vision.",
      "In her speech, Dr Jorjoh underlined the significance of the THET Fund by saying, “We are not just a fund - we are a CATALYST for transformation”",
      "A major highlight of the workshop was the unveiling of the Fund’s operational framework.",
      "The Director of Infrastructure and Strategic Partnerships, Mrs Kumbale Goode, presented the Fund’s multi-source financing model, drawing from government contributions, development partner support, private sector participation, grants and endowments. She noted that funding windows would prioritise research and innovation, institutional strengthening and equitable access, with calls for applications expected to be rolled out in phases.",
      "The Programme Director Mr Modou Touray outlined the governance framework guiding the Fund’s operations, highlighting the legal and institutional safeguards designed to ensure transparency and effective implementation.",
      "Finance Director Mr Seedia B. Jammeh also underscored the financial oversight mechanisms and performance-based funding model aimed at strengthening accountability.",
      "Meanwhile, the Director of Education Support and Workforce Development, Ms Yassin Sagnia, presented the operational roadmap, including a 90-day action plan ahead of the Fund’s pilot initiatives.",
      "The workshop concluded with panel discussions and group sessions, giving stakeholders the opportunity to identify institutional needs and outline priority interventions for the sector.",
      "The engagement reflects a growing national recognition that investment in tertiary and higher education is essential to building a skilled workforce and supporting The Gambia’s long-term development."
    ],
  },
]

export function getAllNews() {
  return newsItems
}

export function getNewsById(id: string) {
  return newsItems.find((n) => n.id === id) || null
}
