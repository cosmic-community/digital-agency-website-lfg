import { cosmic, hasStatus } from '@/lib/cosmic'
import { Service, TeamMember, CaseStudy, Testimonial } from '@/types'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Team from '@/components/Team'
import CaseStudies from '@/components/CaseStudies'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

async function getHomePageData() {
  try {
    const [servicesRes, teamRes, caseStudiesRes, testimonialsRes] = await Promise.all([
      cosmic.objects.find({ type: 'services' }).props(['id', 'title', 'slug', 'metadata']).limit(3),
      cosmic.objects.find({ type: 'team-members' }).props(['id', 'title', 'slug', 'metadata']).limit(3),
      cosmic.objects.find({ type: 'case-studies' }).props(['id', 'title', 'slug', 'metadata']).depth(1).limit(2),
      cosmic.objects.find({ type: 'testimonials' }).props(['id', 'title', 'slug', 'metadata']).limit(3)
    ])

    return {
      services: servicesRes.objects as Service[],
      team: teamRes.objects as TeamMember[],
      caseStudies: caseStudiesRes.objects as CaseStudy[],
      testimonials: testimonialsRes.objects as Testimonial[]
    }
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return {
        services: [],
        team: [],
        caseStudies: [],
        testimonials: []
      }
    }
    throw error
  }
}

export default async function HomePage() {
  const { services, team, caseStudies, testimonials } = await getHomePageData()

  return (
    <main>
      <Header />
      <Hero />
      <Services services={services} />
      <Team team={team} />
      <CaseStudies caseStudies={caseStudies} />
      <Testimonials testimonials={testimonials} />
      <CTA />
      <Footer />
    </main>
  )
}