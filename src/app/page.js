import Contactpage from '@/components/Contactpage'
import Heroespage from '@/components/Heroespage'
import Navbar from '@/components/Navbar'
import Projectpage from '@/components/Projectpage'
import Skillspage from '@/components/Skillspage'
import React from 'react'

function page() {
  return (
    <div>
      <Navbar/>
      <Heroespage/>
      <Skillspage/>
      <Projectpage/>
      <Contactpage/>
    </div>
  )

}

export default page