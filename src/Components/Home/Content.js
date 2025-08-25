// Suqare Blocks
import whatFreq from '../../assets/images/whatsinside/frequent.svg';
import whatConst from '../../assets/images/whatsinside/constrained.svg';
import whatApps from '../../assets/images/whatsinside/apps.svg';
import whatFont from '../../assets/images/whatsinside/fonticon.svg';
import whatDrop from '../../assets/images/whatsinside/drop.svg';
import whatOrgan from '../../assets/images/whatsinside/organized.svg';
import whatVector from '../../assets/images/whatsinside/vector.svg';
import whatAdapt from '../../assets/images/whatsinside/adaptive.svg';


import TimeImage from '../../assets/images/acheivements-icons/time.svg'
import ExperienceImage from '../../assets/images/acheivements-icons/experience.svg'
import projectsHandleImage from '../../assets/images/acheivements-icons/projects.svg'
import clientImages from '../../assets/images/acheivements-icons/clients.svg'


  const whatsInside = [
    {
      image: whatFreq,
      count: '30+',
      desc: 'Frequent and reusable templates all screens'
    },
    {
      image: whatConst,
      count: '250+',
      desc: 'Constrained components & well-crafted UI widgets'
    },
    {
      image: whatApps,
      count: '6+',
      desc: 'Languages can be learned and used to build apps '
    },
    {
      image: whatFont,
      count: 'Fonts',
      desc: 'Powered by free Manrope and Rubik fonts'
    },
    {
      image: whatDrop,
      count: 'Styles',
      desc: 'Made and build completely with Tailwind css '
    },
    {
      image: whatOrgan,
      count: 'Orgnaized',
      desc: 'Organized and labeled for a faster workflow'
    },
    {
      image: whatVector,
      count: '100%',
      desc: '100% Component based Application made with React'
    },
    {
      image: whatAdapt,
      count: 'Adaptive',
      desc: 'Prepared components for mobile, tablet & desktop'
    },
  ]




  const AcheivedBlock = [
    {
      count: 40,
      title: 'Projects',
      image: projectsHandleImage,
      duration: 3,
    },
    {
      count: 25 ,
      title: 'Happy Clients',
      image: clientImages ,
      duration: 4,
    },
    {
      count: 3 ,
      title: 'Experience',
      image: ExperienceImage,
      duration: 5,
    },
    {
      count: 600,
      title: 'Hours Spent',
      image: TimeImage,
      duration: 3,
    },
  ]

  export const Content = {
    whatsInside,
    AcheivedBlock 
  }

