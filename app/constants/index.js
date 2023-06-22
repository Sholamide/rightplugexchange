import {
  gold,
  amazon,
  ebay,
  footlocker,
  googleplay,
  itunes,
  steam,
  vanilla,
} from "../assets";
import {FaStudiovinari, FaHandHoldingUsd} from 'react-icons/fa'
import {TbTableOptions} from 'react-icons/tb'
import {SiExpertsexchange} from 'react-icons/si'

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "faqs",
    title: "FAQs",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const cards = [
  {
    name: "google",
    icon: gold,
  },
  {
    name: "amazon",
    icon: amazon,
  },
  {
    name: "ebay",
    icon: ebay,
  },
  {
    name: "footlocker",
    icon: footlocker,
  },
  {
    name: "googleplay",
    icon: googleplay,
  },
  {
    name: "itunes",
    icon: itunes,
  },
  {
    name: "steam",
    icon: steam,
  },
  {
    name: "vanilla",
    icon: vanilla,
  },
];


export const perks = [
  {
    title:'Wide Range of Options',
    icon: TbTableOptions
    
  },
  {
    title:'Affordable Rates',
    icon: FaHandHoldingUsd
  },
  {
    title:'Simplified Experience',
    icon: SiExpertsexchange 
  }
]