import Video from "./Video"
import { Link } from "react-router-dom"
import {useLanguage} from 'context/LanguageContext'
function HeroSection() {
  const {language} = useLanguage()
  const text = language === 'tr' ? "Çevreci İnovatif Denizcilik Teknolojileri" :"Environmentalist Innovative Maritime Technologies"; 
  return (
    
    <div className="relative  h-[720px]">
        <Video/>
        <div className=" w-full absolute top-16 flex flex-col items-center text-center z-10">
          <h3 className="text-2xl font-semibold text-white">{text}</h3>
        </div>
        <div className="w-full absolute bottom-20 flex flex-col items-center text-center z-10">
          <Link to="/volster" className="p-2 text-lg antialiased font-semibold cursor-pointer tracking-tight bg-black text-white border rounded-md items-center text-center transition-all hover:bg-blue-400 hover:text-black">
            <span>VOLSTER</span>
          </Link>
        </div>
    </div>
  )
}

export default HeroSection