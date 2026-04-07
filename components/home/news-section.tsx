import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

const newsItems = [
  {
    title: "THET Fund Engages Gambia Federation of the Disabled",
    description: "The leadership of the Tertiary and Higher Education Trust (THET) Fund today held a productive engagement with The Gambia Federation Of The Disabled. as part of its ongoing stakeholder consultations.",
    date: "March 2026",
    category: "Press Release",
    href: "/news/news-07",
  },
  {
    title: "THET Fund Presents Stakeholder Engagement Analytical Findings to the Honorable Minister and MoHERST SMT",
    description: "The Leadership of the Tertiary and Higher Education Trust (THET) Fund today presented its flagship National Stakeholder Engagement Findings to the Honourable Minister and Senior Management Team of the Ministry of Higher Education,Research Science and Technology (MoHERST).",
    date: "March 2026",
    category: "Press Release",
    href: "/news/news-06",
  },
  {
    title: "Spotlight on Our Executive Director!",
    description: "Dr Jorjoh Ndure-Tambedou, PhD, is a transformative leader committed to shaping futures for Gambian youth; grounded in capacity development, innovation, inclusion, and sustainable growth.",
    date: "11th March 2026",
    category: "Announcement",
    href: "/news/news-01",
  },
  {
    title: "THET Fund Engages UTG Students’ Union on Student-Centred Initiatives",
    description: "The Tertiary and Higher Education Trust (THET) Fund held a constructive engagement with the leadership of the University of The Gambia Students’ Union (UTGSU), represented by the Union’s President and Finance Director.",
    date: "March 2026",
    category: "Press Release",
    href: "/news/news-02",
  },
  {
    title: "THET Fund Leadership Visit USET TVET Skills Centres in Ndemban and Kanilai",
    description: "On 9th March 2026, the leadership of the Tertiary and Higher Education Trust (THET) Fund continued its nationwide courtesy calls and consultations with visits to the USET TVET skills centres in Ndemban and Kanilai.",
    date: "March 2026",
    category: "Press Release",
    href: "/news/news-03",
  },
  {
    title: "THET Fund Launches National Workshop on the Establishment of the Tertiary and Higher Education Trust (THET) Fund",
    description: "On 10th March 2026, the leadership of the Tertiary and Higher Education Trust (THET) Fund continued its nationwide courtesy calls and consultations with visits to the USET TVET skills centres in Ndemban and Kanilai.",
    date: "March 2026",
    category: "Press Release",
    href: "/news/news-04",
  },
  {
    title: "THET Fund Leads National Dialogue on Workforce-Ready Graduates",
    description: "On 10th March 2026, the leadership of the Tertiary and Higher Education Trust (THET) Fund continued its nationwide courtesy calls and consultations with visits to the USET TVET skills centres in Ndemban and Kanilai.",
    date: "March 2026",
    category: "Press Release",
    href: "/news/news-05",
  }
]

export function NewsSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">Latest News & Announcements</h2>
            <p className="mt-2 text-lg text-muted-foreground">Stay updated with the latest from THET Fund.</p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/news">View All Announcements</Link>
          </Button>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {newsItems.map((item) => (
            <Card key={item.title} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Badge variant="outline">{item.category}</Badge>
                  <span className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {item.date}
                  </span>
                </div>
                <CardTitle className="mt-3 text-lg group-hover:text-primary transition-colors">
                  <Link href={item.href}>{item.title}</Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
