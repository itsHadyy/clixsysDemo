import React, { useEffect } from 'react';
import '../style.css';
import { SlArrowDown } from "react-icons/sl";
import { Link } from 'react-router-dom';
import Slideshow from '../components/Slideshow';
import Features24 from '../components/features24';
import '../components/features24.css'
import Features25 from '../components/features25';
import CTA26 from '../components/cta26';
import Counter from '../components/Counter';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo('.heroContent',
      { opacity: 0, y: -50 }, 
      {
        opacity: 1, y: 0, duration: 1, scrollTrigger: {
          trigger: '.hero',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });

    gsap.fromTo('.scrollText',
      { opacity: 0, y: -50 },
      {
        opacity: 1, y: 0, duration: 1, scrollTrigger: {
          trigger: '.scrollText',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });

    gsap.fromTo('#featuresContainer',
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 1, scrollTrigger: {
          trigger: '#featuresContainer',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });

    gsap.fromTo('#featuresContainer02',
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 1, scrollTrigger: {
          trigger: '#featuresContainer02',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });

    // Animating Containers (Slideshow, Features, CTA, Counter)
    gsap.fromTo('.home01',
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 1, scrollTrigger: {
          trigger: '.home01',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });

    gsap.fromTo('.slideshow-container',
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 1, scrollTrigger: {
          trigger: '.slideshow-container',
          start: 'top 70%',
          toggleActions: 'play none none none'
        }
      });

    // Testimonial animation
    gsap.fromTo('.thq-section-padding',
      { opacity: 0, y: 100 },
      {
        opacity: 1, y: 0, duration: 1, scrollTrigger: {
          trigger: '.thq-section-padding',
          start: 'top 70%',
          toggleActions: 'play none none none'
        }
      });

    gsap.fromTo('.counter-container',
      { opacity: 0, y: 100 },
      {
        opacity: 1, y: 0, duration: 1, scrollTrigger: {
          trigger: '.counter-container',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });

    gsap.fromTo('#testimonials',
      { opacity: 0, y: 100 },
      {
        opacity: 1, y: 0, duration: 1, scrollTrigger: {
          trigger: '#testimonials',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });

    return () => {
      // Cleanup ScrollTriggers
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div>
      <div className="hero">
        <video className="heroVideo" autoPlay muted loop>
          <source src="./3d.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="heroContent">
          <h1>Welcome to ClixSys</h1>
          <p>Innovative solutions for your business</p>
          <button className="heroButton">Learn More</button>
        </div>
        <div className="scrollText">
          <p>
            Scroll down to learn more about our services <br></br>
            <SlArrowDown />
          </p>
        </div>
      </div>

      <div className='container'>
        <div className='home01'>
          <h1>Discover Our Automation Systems</h1>
          <p>Experience the future with our cutting-edge automation systems that enhance convenience and efficiency in your daily life.</p>
          <div>
            <button className="btn01">
              <Link to="/Solutions">Explore More</Link>
            </button>
            <button>
              <Link to="/Services">Shop Smart Products</Link>
            </button>
          </div>
        </div>
      </div>

      <Slideshow direction="left" />
      <Slideshow direction="right" />

      <div className='container'>
        <Features24
          feature3Description={<span className="home-text118">Explore our range of interactive tools that enhance your smart home experience.</span>}
          feature3Title={<span className="home-text119">Interactive Tools</span>}
          feature2Description={<span className="home-text120">Customize your products with different glass colors, lengths, widths, and frame materials in real time.</span>}
          feature1Title={<span className="home-text121">Automation Systems</span>}
          feature1Description={<span className="home-text122">Discover our cutting-edge automation systems that make your life easier and more efficient.</span>}
          feature2Title={<span className="home-text123">Product Customization Features</span>}
        ></Features24>

        <CTA26
          heading1={<h3>Ready to Automate Your Home or Business?</h3>}
          content1={<p>Explore our range of automation systems and smart products to enhance your space.</p>}
          action1={<span className="home-text126">Get Started</span>}
        ></CTA26>

        <Counter />
        <Testimonials />
        <Features25 />

        <Contact />
      </div>
    </div>
  );
}

export default Home;