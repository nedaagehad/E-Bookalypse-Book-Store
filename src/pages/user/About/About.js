import React from 'react';
import { useSelector } from 'react-redux';

//CSS Module
import styles from './About.module.css';

//Components
import OurPartners from '../../../components/OurPartners/OurPartners';

//Icons
import { FaHandshake, FaUsers, FaHouseUser, FaBookReader } from 'react-icons/fa';
import { GiCardExchange } from 'react-icons/gi';
import { MdSupportAgent } from 'react-icons/md';

function About() {

  const theme = useSelector((state) => state.theme.currentTheme);

  return (
    <>
      <div className={`container-fluid content ${theme === "night" ? "bg-dark" : ""}`}>
        <div className='container pt-5'>
          <h3 className={`mb-4 fw-bold ${styles.mainTitle}`}>About Us</h3>
          <div className='row mb-5'>
            <p className={`col-6 ${theme === "night" ? styles.lightTxt : ""}`}>
              E-Bookalypse is an international e-publishing house, specialized in Literature and Self Development.
              Founded in 2022, the company includes a team of design, internet, media, literature and education veterans
              who share a passion for helping authors bring their works to life in the most advanced way. Based in Egypt,
              E-Bookalypse Society is the newest platform for creating and publishing e-books, audio books and audible messages
              for a society of multinational authors all over the world.
            </p>
            <p className={`col-6 ${theme === "night" ? styles.lightTxt : ""}`}>
              Our platform is built for personal book makers, authors of all kinds, creative professionals and artists. We put you,
              the author, in control. Everything from how you design your cover to how you fill the inside layout, from how to publish
              your content to how you promote it and sell it, all these steps are followed, executed and fine-tuned by books making experts
              at E-Bookalypse Society. Let us make modern, creative, beautiful, amazing books together.
            </p>
          </div>
          <h3 className={`mb-4 fw-bold ${styles.mainTitle}`}>What sets us apart</h3>
          <div class="row row-cols-1 row-cols-md-3 g-4 pb-5">
            <div class={`col`}>
              <div class={`card h-100 row mx-1 ${theme === "night" ? styles.cardNight : styles.card}`}>
                <FaHandshake className={`text-center my-3 fs-1 ${styles.mainTitle}`} />
                <div class="card-body">
                  <h6 class={`card-title text-center ${theme === "night" ? "text-light" : ""}`}>CHALLENGING OUR TEAM</h6>
                  <p class={`card-text ${theme === "night" ? styles.lightTxt : ""}`}>Creating remarkable experiences requires enormous passion for what we do, therefore we challenge our team to excel in all aspects
                    of publishing by setting up an environment of open communication with everyone in the company.</p>
                </div>
              </div>
            </div>

            <div class="col">
              <div class={`card h-100 row mx-1 ${theme === "night" ? styles.cardNight : styles.card}`}>
                <FaUsers className={`text-center my-3 fs-1 ${styles.mainTitle}`} />
                <div class="card-body">
                  <h6 class={`card-title text-center ${theme === "night" ? "text-light" : ""}`}>FULLY COMMITTED</h6>
                  <p class={`card-text ${theme === "night" ? styles.lightTxt : ""}`}>We are committed to provide superior services and products at the highest level of quality and professionalism,
                    by encouraging a culture of innovation that facilitates the development of new techniques, tools and technologies.</p>
                </div>
              </div>
            </div>

            <div class="col">
              <div class={`card h-100 row mx-1 ${theme === "night" ? styles.cardNight : styles.card}`}>
                <FaHouseUser className={`text-center my-3 fs-1 ${styles.mainTitle}`} />
                <div class="card-body">
                  <h6 class={`card-title text-center ${theme === "night" ? "text-light" : ""}`}>INDEPENDENTLY OWNED</h6>
                  <p class={`card-text ${theme === "night" ? styles.lightTxt : ""}`}>We are independently owned and managed by expert publishers and academics, not financial investors and business minded tycoons,
                    that is why we provide the dedication and commitment our readers expect.</p>
                </div>
              </div>
            </div>

            <div class="col">
              <div class={`card h-100 row mx-1 ${theme === "night" ? styles.cardNight : styles.card}`}>
                <GiCardExchange className={`text-center my-3 fs-1 ${styles.mainTitle}`} />
                <div class="card-body">
                  <h6 class={`card-title text-center ${theme === "night" ? "text-light" : ""}`}>EMBRACING CHANGE</h6>
                  <p class={`card-text ${theme === "night" ? styles.lightTxt : ""}`}>We believe in continuous and dedicated marketing for as long as the content is relevant,
                    taking into consideration that things change very quickly, trusting that either we embrace change or the business dies.</p>
                </div>
              </div>
            </div>

            <div class="col">
              <div class={`card h-100 row mx-1 ${theme === "night" ? styles.cardNight : styles.card}`}>
                <MdSupportAgent className={`text-center my-3 fs-1 ${styles.mainTitle}`} />
                <div class="card-body">
                  <h6 class={`card-title text-center ${theme === "night" ? "text-light" : ""}`}>CONTINUOUS CONSULTATION</h6>
                  <p class={`card-text ${theme === "night" ? styles.lightTxt : ""}`}>We are in continuous consultation with the publishing community to influence our direction,
                    taking into consideration the ever changing needs of our authors, societies, booksellers, librarians, online readers and end-users.</p>
                </div>
              </div>
            </div>

            <div class="col">
              <div class={`card h-100 row mx-1 ${theme === "night" ? styles.cardNight : styles.card}`}>
                <FaBookReader className={`text-center my-3 fs-1 ${styles.mainTitle}`} />
                <div class="card-body">
                  <h6 class={`card-title text-center ${theme === "night" ? "text-light" : ""}`}>UNIQUE READING EXPERIENCES</h6>
                  <p class={`card-text ${theme === "night" ? styles.lightTxt : ""}`}>We use digital technology to create unique reading experiences and expand the reach of our authors as it is the end of the paperbook Era,
                    and the rise of the electronic books being accessible on all kind of devices.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OurPartners />
    </>
  )
}

export default About;