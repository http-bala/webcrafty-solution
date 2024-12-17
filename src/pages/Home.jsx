import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import GrowthSection from '../components/GrowthSection'
import AboutSection from '../components/AboutSection'
import RunningText from '../components/RunningText'
import ServiceSection from '../components/ServiceSection'
import ProcessSection from '../components/ProcessSection'
import TeamSection from '../components/TeamSection'
import OurAwardsSection from '../components/OurAwardsSection'
import ProjectSection from '../components/ProjectSection'
import CounterSection from '../components/CounterSection'
import TestonimalSection from '../components/TestonimalSection'
import RequestSection from '../components/RequestSection'
import BlogSection from '../components/BlogSection'
import SponserSection from '../components/SponserSection'
import CtaAreaSection from '../components/CtaAreaSection'
import WhatsAppButton from '../components/WhatsAppButton'
import Footer from '../components/Footer'
import PlansSection from "../components/PlansSection";


const Home = () => {
  return (
    <>
    
    <Navbar/>
    <div id="smooth-wrapper">
    <div id="smooth-content">
    <HeroSection/>
    <GrowthSection/>
    <AboutSection/>
    <RunningText/>
    <ServiceSection/>
    <ProcessSection/>
    {/* <TeamSection/> */}
    <OurAwardsSection/>
    {/* <ProjectSection/> */}
    {/* <CounterSection/> */}
    <TestonimalSection/>
    <PlansSection />
    <RequestSection/>
    <BlogSection/>
    {/* <SponserSection/> */}
    <CtaAreaSection/>
    <Footer/>
    </div>
    </div>
    </>
  )
}

export default Home