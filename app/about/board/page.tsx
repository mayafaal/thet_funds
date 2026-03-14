"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

/* -------------------- Data -------------------- */

const boardRoles = [
  "Approve strategic plans, budgets, and funding priorities",
  "Oversee governance, transparency, and risk management",
  "Ensure alignment with national development priorities",
  "Approve grants and funding awards",
  "Monitor performance and impact",
]

const boardMembers = [
  {
    name: "Mr. Muhammed Jah",
    role: "Chair of the Board of Trustees, THET Fund",
    organization: "CEO, Q Group",
    image: "/board/muhammed-jah.png",
  },
  {
    name: "Ms. Isatou Auber",
    role: "Board Member",
    organization: "Permanent Secretary, MoHERST",
    image: "/board/isatou-auber.jpg",
  },
  {
    name: "Mr. Siaka SaidyLeigh",
    role: "Board Member",
    organization: "Principal Assistant Secretary, MoHERST",
    image: "/board/siaka-saidy-leigh.jpg",
  },
  {
    name: "Mr. Geoffrey Bala-Gaye",
    role: "Board Member",
    organization: "Director, Human Resources Development Division, Ministry of Public Service",
    image: "/board/geoffrey-bala-gaye.jpg",
  },
  {
    name: "Mr. Illo Jallo",
    role: "Board Member",
    organization: "Permanent Secretary, Office of The President",
    image: "/board/illo-jallo.jpg",
  },
  {
    name: "Mr. Samba Mballow",
    role: "Board Member",
    organization: "Permanent Secretary, Ministry of Transport, Works and Infrastructure",
    image: "/board/samba-mballow.jpg",
  },
  {
    name: "Hon. Sir Farimang Saho",
    role: "Board Member",
    organization: "President of the Confederation of Gambian Industries",
    image: "/board/farimang-saho.jpg",
  },
  {
    name: "Mr. Dawda Kujabie",
    role: "Board Member",
    organization: "CEO of Gambia Teachers Union Cooperative Credit Union (GTUCCU)",
    image: "/board/dawda-kujabie.jpg",
  },
  {
    name: "Dr Modou Lamin Tarro",
    role: "Board Member",
    organization: "CEO, National Accreditation and Quality Assurance Authority (NAQAA)",
    image: "/board/modou-lamin-tarro.jpg",
  },
  {
    name: "Ms. Beatrice Mboge",
    role: "Board Member",
    organization: "CEO, Gambia Women’s Chamber of Commerce (GWCC)",
    image: "/board/beatrice-mboge.jpg",
  },
  {
    name: "Dr. Jorjoh Ndure-Tambedou",
    role: "Board Member",
    organization: "Executive Director (THET Fund)",
    image: "/board/jorjoh-ndure-tambedou.jpg",
  },
  {
    name: "Mr. Alfusainey K. Jabbie",
    role: "Board Member",
    organization: "Deputy Director, Monitoring and Evaluation - Directorate of Development Planning Ministry of Finance and Economics Affairs",
    image: "/board/alfusainey-k-jabbie.jpg",
  },
  {
    name: "Ms. Rakie Duanda",
    role: "Board Member",
    organization: "Senior State Counsel, Attorney General’s Chambers & Ministry of Justice ",
    image: "/board/ricki-duanda.jpg",
  },
  {
    name: "Mr. Muhammed Juwara",
    role: "Board Member",
    organization: "Deputy Director Finance, GRA",
    image: "/board/muhammed-juwara.jpg",
  }
]

/* -------------------- Page -------------------- */

export default function BoardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden bg-primary py-20 lg:py-28">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary" />
          <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
                Board of Trustees
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/90">
                The Board of Trustees is the governing body of the THET Fund. It
                provides strategic direction, ensures sound governance, approves
                funding decisions, and safeguards the integrity and
                accountability of the Fund.
              </p>
            </div>
          </div>
        </section>

        {/* ================= ROLE OF THE BOARD ================= */}
        <section className="bg-muted/40 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
              <div>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground">
                  Role of the Board
                </h2>
                <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
                  The Board of Trustees ensures that the THET Fund operates with
                  the highest standards of governance, transparency, and
                  effectiveness in line with national priorities.
                </p>

                <ul className="mt-8 space-y-4">
                  {boardRoles.map((role, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="leading-relaxed text-foreground">
                        {role}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted shadow-sm">
                <img
                  src="/11.jpeg"
                  alt="THET Fund Board of Trustees meeting"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* ================= BOARD MEMBERS ================= */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground">
                Our Trustees
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Distinguished leaders providing oversight, stewardship, and
                strategic guidance to the THET Fund.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
              {boardMembers.map((member, index) => (
                <Card
                  key={index}
                  className="group text-center transition-all hover:-translate-y-1 hover:shadow-md border-border/60"
                >
                  <CardHeader className="pb-4 pt-6 px-4">
                    <div className="mx-auto h-20 w-20 overflow-hidden rounded-full bg-muted ring-2 ring-border group-hover:ring-primary/30 transition-all">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <CardTitle className="mt-4 text-sm font-semibold leading-snug">
                      {member.name}
                    </CardTitle>
                    <p className="mt-1 text-xs font-semibold text-primary">{member.role}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground leading-snug">{member.organization}</p>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
