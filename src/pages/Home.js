import HeroSection from 'components/HeroSection'
import Projects from 'components/Projects'
import Featured from 'components/Featured'
import Contact from 'components/Contact'
import { Helmet } from 'react-helmet'


function Home() {
  return (
    <>
    <Helmet>
      <title>Anasayfa - Navarc</title>
      <meta name='description' content='anasayfa description' />
    </Helmet>
      <HeroSection />
      <Projects />
      <Featured />
      <Contact />
    </>
  )
} 
export default Home