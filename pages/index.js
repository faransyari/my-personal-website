// pages/index.js
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Firlandi Althaf Ansyari - Personal Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className={styles.main}>
          {/* Home Section */}
          <section id="home" className={`${styles.section} ${styles.homeSection}`}>
          <div className={styles.intro}>
            <h2 style={{ color: '#4797ff' }}>Hello,</h2>
            <h1>I Am Firlandi Althaf Ansyari</h1>
            <p>Software Engineer</p>
            <button className={styles.contactMeBtn}>Contact Me</button>
          </div>
          <div className={styles.imageContainer}>
            <img src="/assets/IMG_2032.png" alt="Firlandi Althaf Ansyari" className={styles.profileImage} />
          </div>
        </section>

      {/* About Section */}
        <section id="about" className={`${styles.section} ${styles.aboutSection}`}>
          <h1 style={{ color: '#4797ff' }}>About Me</h1>
          <p>An information technology student specializing in software information systems with a passion for web development (frontend and backend), mobile development, and data science.</p>
          <h1>Skills & Interests</h1>
          <ul>
            <li>Python, Java, Javascript, PostgreSQL, React Native, Node.js, Springboot, Flutter, HTML, Django, CSS, Django REST Framework, Amazon Web Services (AWS), PHP, ReactJS, Dart, PHP</li>
            <li>English (Fluent), Indonesian (Native)</li>
            <li>Web Development (Back-End and Front-End), Mobile Development, Data Science</li>
          </ul>
        </section>

        {/* Projects Section */}
        <section id="projects" className={styles.section}>
          <h1>Projects</h1>
          <h2>Collectiv</h2>
          <p>Backend Developer and Video Editor (Jul 2023 - Nov 2023)</p>
          <p>Developed backend systems for Collectiv using Django Framework and Python, developed database systems using PostgreSQL, and utilised geolocation technology to bring local events to users’ fingertips.</p>

          <h2>iSaveIt</h2>
          <p>Backend Developer and Video Editor (Jan 2022 - Jul 2022)</p>
          <p>Developed backend systems for iSaveIt, using the Django Framework and Python. Implemented features such as creating multiple pockets, inputting transactions, tracking owed money, viewing finance reports, and reading newsletters about finance and economy.</p>

          <h2>HeyDoc</h2>
          <p>Backend Developer and Frontend Developer (Aug 2021 - Dec 2021)</p>
          <p>Developed a Django and Flutter-based application offering education and information in the form of vaccines, statistics, and recommendations for COVID-19 medicines, as well as consultations with COVID-19 specialist doctors.</p>
        </section>
    </main>
  </div>
  );
}
