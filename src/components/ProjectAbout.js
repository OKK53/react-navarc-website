import React from 'react'
import {useLanguage} from 'context/LanguageContext'

function ProjectAbout() {
  const {language} = useLanguage()
  return (
        <div className="mt-8 container mx-auto flex flex-col items-center text-center">
          <div className="mb-8 grid grid-cols-1 items-center text-center text-lg">
            {language === 'tr' && <div><p>Navarc genç ve hızlı büyüyen genç bir start-up şirketidir.</p>
            <p>Şirketimiz çevre dostu, modern teknolojiler ve denize olan sevgimiz tutkumuz için kurulmuştur.</p>
            <p>Bu nedenle misyonumuz, çevreye faydalı ve yenilikçi tasarım içeren projeler yapmaktır.</p></div>
            || <div><p>Navarc is a young and fast growing young start-up company.</p>
            <p>Our company was founded for our passion for environment friendly, modern technologies and our love for the sea.</p>
            <p>For this reason, our mission is to make projects that are beneficial to the environment and include innovative design.</p></div>}
          </div>
          
        </div>
  )
}

export default ProjectAbout