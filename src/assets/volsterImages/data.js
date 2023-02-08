import React from "react";
//icons
import {
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoYoutube,
  IoIosArrowDown,
} from "react-icons/io";
// boats images
import volster from "assets/volsterImages/volster.png";
import solarvess from "assets/solarvessImages/solarvess.png";
import solarange from "assets/solarangeImages/solarange.png";
// featured logos
import ytulogo from "assets/ytulogo.svg";
import tubitaklogo from "assets/tubitaklogo.png";
import iskiLogo from "assets/iskiLogo.png";
//projects/volster images
import VolsterPoster_1 from "assets/volsterImages/VolsterPoster_1.jpg";
import VolsterPoster_2 from "assets/volsterImages/VolsterPoster_2.jpg";
//projects/solarvess images
import SolarvessShuttlePoster_1 from "assets/solarvessImages/SolarvessShuttlePoster_1.jpg";
import SolarvessYachtPoster_1 from "assets/solarvessImages/SolarvessYachtPoster_1.jpg";
import SolarvessDivePosters_1 from "assets/solarvessImages/SolarvessDivePosters_1.jpg";
import SolarvessDiveOpenPoster_1 from "assets/solarvessImages/SolarvessDiveOpenPoster_1.jpg";
//projects/solarange image
import SolarangePoster from "assets/solarangeImages/SolarangePoster.jpg";
//projects/carboat images
import CarboatPosterHillRoad from "assets/carboatImages/CarboatPosterHillRoad.jpg";
import CarboatPosterForest from "assets/carboatImages/CarboatPosterForest.jpg";
import CarboatPosterDaylight from "assets/carboatImages/CarboatPosterDaylight.jpg";
import CarboatPosterSunsetpsd from "assets/carboatImages/CarboatPosterSunsetpsd.jpg";
import CarboatFront from "assets/carboatImages/CarboatFront.jpg";
import CarboatBack from "assets/carboatImages/CarboatBack.jpg";

export const links = [
  {
    id: 1,
    url: "/",
    textEn: "home",
    textTr: "anasayfa",
  },
  {
    id: 2,
    url: "/projects",
    textEn: "projects",
    textTr: "projeler",
    icon: <IoIosArrowDown />,
  },
  {
    id: 3,
    url: "/about",
    textEn: "about",
    textTr: "hakkımızda",
  },
  {
    id: 4,
    url: "/contact",
    textEn: "contact",
    textTr: "İletişim",
  },
];

export const DropdownLinks = [
  {
    id: 1,
    url: "/projects/volster",
    title: "volster",
  },
  {
    id: 2,
    url: "/projects/solarvess",
    title: "solarvess",
  },
  {
    id: 3,
    url: "/projects/solarange",
    title: "solarange",
  },
  {
    id: 4,
    url: "/projects/carboat",
    title: "carboat",
  },
];

export const social = [
  {
    id: 1,
    url: "https://tr.linkedin.com/company/navarcdesign",
    icon: <IoLogoLinkedin />,
  },
  {
    id: 2,
    url: "https://www.instagram.com/navarcdesign/",
    icon: <IoLogoInstagram />,
  },
  {
    id: 3,
    url: "https://www.youtube.com/@navarcdesign6376/featured",
    icon: <IoLogoYoutube />,
  },
];

export const projectcards = [
  {
    id: 1,
    image: volster,
    title: "Volster",
    descriptionEn: "The beauty an electric-powered boat deserves",
    descriptionTr: "Elektrikle çalışan bir teknenin hak ettiği güzellik",
    range: "10 Miles",
    cruisingSpeed: "3 Knots",
    passenger: "8",
    ElectricityConsumption: "12 kWh",
    url: "/volster",
  },
  {
    id: 2,
    image: solarvess,
    title: "Solarvess open dive",
    descriptionEn: "Stay quiet and dive deeper",
    descriptionTr: "Sessiz kalın ve daha derine dalın",
    range: "120 Miles",
    cruisingSpeed: "5 Knots",
    passenger: "20",
    ElectricityConsumption: "24 kWh",
    url: "/solarvessOpenDive",
  },
  {
    id: 3,
    image: solarange,
    title: "Solarange",
    descriptionEn: "Extend your range with the solar power",
    descriptionTr: "Güneş enerjisiyle menzilinizi genişletin",
    range: "60 Miles",
    cruisingSpeed: "5 Knots",
    passenger: "2",
    ElectricityConsumption: "6 kWh",
    url: "/solarange",
  },
];
export const featuredLogos = [
  {
    id: 1,
    image: ytulogo,
    title: "YTU",
    url: "https://www.yildiz.edu.tr/",
  },
  {
    id: 2,
    image: tubitaklogo,
    title: "Tubitak",
    url: "https://www.tubitak.gov.tr/",
  },
  {
    id: 3,
    image: iskiLogo,
    title: "iski",
    url: "https://www.iski.istanbul/web",
  },
];

export const volsterImages = [
  {
    id: 1,
    image: VolsterPoster_1,
    title: "VolsterPoster_1",
  },
  {
    id: 2,
    image: VolsterPoster_2,
    title: "VolsterPoster_2",
  },
];
export const solarvessImages = [
  {
    id: 1,
    image: SolarvessShuttlePoster_1,
    title: "SolarvessShuttlePoster_1",
  },
  {
    id: 2,
    image: SolarvessYachtPoster_1,
    title: "SolarvessYachtPoster_1",
  },
  {
    id: 3,
    image: SolarvessDivePosters_1,
    title: "SolarvessDivePosters_1",
  },
  {
    id: 4,
    image: SolarvessDiveOpenPoster_1,
    title: "SolarvessDiveOpenPoster_1",
  },
];

export const solarangeImages = [
  {
    id: 1,
    image: SolarangePoster,
    title: "SolarangePoster",
  },
];
export const carboatImages = [
  {
    id: 1,
    image: CarboatPosterHillRoad,
    title: "CarboatPosterHillRoad",
  },
  {
    id: 2,
    image: CarboatPosterForest,
    title: "CarboatPosterForest",
  },
  {
    id: 3,
    image: CarboatPosterDaylight,
    title: "CarboatPosterDaylight",
  },
  {
    id: 4,
    image: CarboatPosterSunsetpsd,
    title: "CarboatPosterSunsetpsd",
  },
  {
    id: 5,
    image: CarboatFront,
    title: "CarboatFront",
  },
  {
    id: 6,
    image: CarboatBack,
    title: "CarboatBack",
  },
];
