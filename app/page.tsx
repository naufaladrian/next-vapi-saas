import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'
import { getAllCompanions, getRecentSessions } from '@/lib/actions/companion.actions'
import { getSubjectColor } from '@/lib/utils'

const Page = async () => {
  
  const  companions = await getAllCompanions({limit:3})
  const recentSessionsCompanions = await getRecentSessions(10)
  return (
    <main>
      <h1 >Popular Companions</h1>
      <section className='home-section'>
        {companions.map((companions)=>(
        <CompanionCard
          key={companions.id}
          {...companions}
          color={getSubjectColor(companions.subject)}
        />
        ))}

      </section>
      <section className='home-section'>
        <CompanionList
          title="Recently Completed Sessions"
          companions={recentSessionsCompanions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  )
}

export default Page