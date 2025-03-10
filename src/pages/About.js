import React, { useState, useRef, useEffect } from "react";
import '../style.css';
import logo from '../logo01.png';
import Slideshow from '../components/Slideshow';
import '../components/features24.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function About() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo('.team',
            { opacity: 0, y: -50 },
            {
                opacity: 1, y: 0, duration: 1, scrollTrigger: {
                    trigger: '.team',
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            });

        gsap.fromTo('.team-members',
            { opacity: 0, y: 50 },
            {
                opacity: 1, y: 0, duration: 1, scrollTrigger: {
                    trigger: '.team-members',
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                }
            });

        gsap.fromTo('.aboutCards',
            { opacity: 0, y: 50 },
            {
                opacity: 1, y: 0, duration: 1, scrollTrigger: {
                    trigger: '.aboutCards',
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                }
            });

        return () => {
            // Cleanup ScrollTriggers
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const [selectedMember, setSelectedMember] = useState(null);

    const teamMembers = [
        {
            name: "Omar Sabbour",
            title: "Co-Founder",
            image: "./media/omar_sabbour.jpeg",
            description:
                "Omar Sabbour graduated from the American University in Cairo with a Bachelors’ degree in Construction Engineering. He then joined the family business that is a well-known pillar in the field of construction and real estate development. Chief Executive Officer of Sabbour Consulting, one of the largest Engineering Consulting firms in Egypt with over 60 years’ experience. An active member of the Egyptian business community, Omar Sabbour was the Chairman of the Egyptian Junior Business Association 2011 to 2013 and a member of the Egyptian Businessmen Association (EBA), the British Egyptian Business Association (BEBA) and the Egyptian German Chamber of Commerce.",
        },
        {
            name: "Hesham Fahmy",
            title: "Co-Founder & CEO",
            image: "./media/hesham_fahmy.jpeg",
            description:
                "Graduated from AAST with Bachelor’s degree in Electronics and Communications, Excellent with honor overall grade. He started his academic career as a Teacher Assistant in Smart Village campus and got his Master’s degree in 2016 and undergoing PhD degree in UCM Madrid, Spain. After Finishing Master’s degree his passion for smart systems design and implementation and his vision to make an Egyptian brand that can compete with the big tech. companies made him start working on the system right away choosing Hesham Tarek and Omar Alaa securing the technical development for their extensive know how. In June 2021 and with the joining of Eng. Ahmed Sabbour and Eng. Omar Sabbour as co-founders completing the big picture, the company was up and running with Hesham Fahmy as the CEO.",
        },
        {
            name: "Hesham Tarek",
            title: "Co-Founder & CTO Software",
            image: "./media/hesham_tarek.jpeg",
            description:
                "Graduated from AAST with Bachelor’s degree in Electronics and Communications, not only Excellent with Honor grade, he got the highest score in the department being the first upon his colleagues. He started his academic career and Master’s degree right after he graduated as a Teacher Assistant. Hesham is the one when tech. software issues are discussed in front of him, solutions pop up in no time. Brightness, self-taught experience and market experience gained over the years joining in 2016 in addition to tons of ideas, in addition to being a Co-Founder, made him the best person to be Clixsys, CTO-Software.",
        },
        {
            name: "Omar Alaa",
            title: "CO-FOUNDER & CTO HARDWARE",
            image: "./media/omar_alaa.jpeg",
            description:
                "Graduated from AAST, with Bachelor’s degree in Electronics and Communications, Omar was not only good at hardware design, he also is the one to ask in robotics and motors. With his extensive knowledge which was gained through his long term self-taught experience, was picked to take care of the Hardware and mechanisms design as a Co-Founder. June 2021 and with being the person having the solutions of complicated issues it was the time to be Clixsys, CTO-Hardware.",
        },
        {
            name: "Mohamed Adawy",
            title: "CFO",
            image: "./media/mohamed_adawy.jpeg",
            description:
                "Over 15+ years in finance and being Finance Director of one of the largest engineering consulting firms in Egypt, Sabbour Consulting and as known for his high managerial skills, joined Clixsys as CFO June 2021 in addition to his active work in the firm, responsible for all Clixsys Finances, short term and long term plans and visions.",
        },
        {
            name: "Mohamed Arafa",
            title: "Finance Manager",
            image: "./media/mohamed_arafa.jpeg",
            description:
                "Graduated from Faculty of Commerce, he started his career in Sabbour Consulting right after he graduated due to his hard work he had known for. In less than two years, he became one of the big figures in Finance Department made him responsible for the critical finances in the firm. For that, Clixsys picked Arafa in 2021 to be the Finance Manager in addition to his current job in Sabbour Consulting.",
        },
        {
            name: "Judi Tarek",
            title: "Marketing Manager",
            image: "./media/judi_Tarek.jpeg",
            description:
                "Graduated with honors from the American University in Cairo with specialization in Marketing, Manager of the marketing departments and head of marketing team that consists of marketing strategiest, content creator, social media specialist and graphic designer, work in parallel on improving brand name for business development.",
        },
        {
            name: "Abdelrahman Essam",
            title: "Light Current Department Manager",
            image: "./media/abdelrahman_essam.jpg",
            description:
                "Graduated from Faculty of Commerce, he started his career in Sabbour Consulting right after he graduated due to his hard work he had known for. In less than two years, he became one of the big figures in Finance Department made him responsible for the critical finances in the firm. For that, Clixsys picked Arafa in 2021 to be the Finance Manager in addition to his current job in Sabbour Consulting.",
        },
    ];

    const openModal = (member) => {
        setSelectedMember(member); // Set the selected member
        setTimeout(() => {
            gsap.fromTo(
                ".modalContainer",
                { opacity: 0, scale: 0.8 }, // Start state
                { opacity: 1, scale: 1, duration: 0.3, ease: "power3.inOut" } // End state
            );
        }, 10); // Short delay to ensure GSAP animates the modal
    };

    const closeModal = () => {
        gsap.to(".modalContainer", {
            opacity: 0,
            scale: 0.8,
            duration: 0.3, // Match the duration with the opening animation
            ease: "power3.inOut", // Match the ease with the opening animation
            onComplete: () => setSelectedMember(null), // Reset the selected member
        });
    };

    return (
        <div>
            <div className='container'>
                <div className='home01'>
                    <img src={logo} alt="Logo" className="logo02" />
                    <p>Discover who we are and what we do.</p>
                    <div className='about01'>
                        <p>
                            We are a forward-thinking organization dedicated to developing
                            innovative systems that provide comfort, convenience, and intelligence
                            to our clients. With expertise across various disciplines, we aim to
                            lead the industry with cutting-edge solutions.
                        </p>
                    </div>
                </div>

            </div>

            <Slideshow />
            

            <div className='container'>
                {/* The Team Section */}
                <section className="team">
                    <div className="teamHeader">
                        <h2>Our Team</h2>
                        <p>
                            We’re a team of highly passionate engineers striving to take the
                            smart home industry to the next level. Through innovation,
                            dedication, and teamwork, we aim to revolutionize the way technology
                            integrates with daily life.
                        </p>
                    </div>
                    <div className="team-members">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="team-member"
                                onClick={() => openModal(member)}
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    onError={(e) => (e.target.src = "./media/default-avatar.jpg")}
                                />
                                <h3>{member.name}</h3>
                                <p>{member.title}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Modal for Team Member Description */}
                {selectedMember && (
                    <div className="modal-overlay" onClick={closeModal}>
                        <div className="modalContainer">
                            <div className="modalContainer02">
                                <div
                                    className="modal"
                                    onClick={(e) => e.stopPropagation()} // Prevent closing on modal click
                                >
                                    <button className="close-btn" onClick={closeModal}>
                                        ×
                                    </button>
                                    <img
                                        src={selectedMember.image}
                                        alt={selectedMember.name}
                                        className="modal-image"
                                    />
                                    <h3>{selectedMember.name}</h3>
                                    <p className="modal-title">{selectedMember.title}</p>
                                    <p className="modal-description">{selectedMember.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="aboutCards">
                    <div className="testimonial02 about02">
                        <div className="testimonial about02">
                            <h2>Mission</h2>
                            <p>
                                Our mission is to propose the most comprehensive systems to offer comfort,
                                facilitate usage, and become a leading organization pushing the world into the future.
                            </p>
                        </div>
                    </div>

                    <div className="testimonial02 about02">
                        <div className="testimonial about02">
                            <h2>Vision</h2>
                            <p>
                                Our vision is to deliver a wide range of innovative, intelligent services to all entities
                                with assorted disciplines and properties within all segments.
                            </p>
                            <p> We want to help organizations
                                and individuals be more productive and work faster by creating intelligent environments.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default About;