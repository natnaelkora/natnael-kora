import React from 'react';


const Resume = () => {
  return (
    <section style={styles.resume}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Resume</h1>

        {/* Education Section */}
        <div style={styles.section}>
          <h2 style={styles.subheading}>Education</h2>
          <div style={styles.entry}>
            <h3 style={styles.entryTitle}>Information Technology, B.Sc. - Addis Ababa University</h3>
            <p style={styles.entryDate}>Graduated: 2021</p>
            <p style={styles.entryDescription}>Brief description of your studies, key courses, and any relevant projects.</p>
          </div>
        </div>

        {/* Experience Section */}
        <div style={styles.section}>
          <h2 style={styles.subheading}>Occupations</h2>
          <div style={styles.entry}>
            <h3 style={styles.entryTitle}>Front-end Developer</h3>
            <p style={styles.entryDate}>Yaltopia Tech - Dates</p>
            <p style={styles.entryDescription}>Description of your role, responsibilities, and key achievements.</p>
          </div>
          <div style={styles.entry}>
            <h3 style={styles.entryTitle}>Systems and Cloud Solutions Architect & Channel Manager</h3>
            <p style={styles.entryDate}>IE Network solutions - Dates</p>
            <p style={styles.entryDescription}>Description of your role, responsibilities, and key achievements.</p>
          </div>
          <div style={styles.entry}>
            <h3 style={styles.entryTitle}>System and Cloud Solutions Engineer</h3>
            <p style={styles.entryDate}>IE Network solutions - Dates</p>
            <p style={styles.entryDescription}>Description of your role, responsibilities, and key achievements.</p>
          </div>
          <div style={styles.entry}>
            <h3 style={styles.entryTitle}>IT Officer</h3>
            <p style={styles.entryDate}>Mamo Kacha PLC - Dates</p>
            <p style={styles.entryDescription}>Description of your role, responsibilities, and key achievements.</p>
          </div>
        </div>

        {/* Skills Section */}
        <div style={styles.section}>
          <h2 style={styles.subheading}>Skills</h2>
          <ul style={styles.skillsList}>
            <li style={styles.skill}>Web Development</li>
            <li style={styles.skill}>Oracle Cloud Administration</li>
            <li style={styles.skill}>Network Design and Implementation</li>
            <li style={styles.skill}>System Design and Implementation</li>
            <li style={styles.skill}>Cyber Security (specialization in progress)</li>
            <li style={styles.skill}>Cloud Administration (specialization in progress)</li>
          </ul>
        </div>

        {/* Download Resume Button */}
        <a href='https://drive.google.com/file/d/1ite0UzhA5zseShXH_oqXVkFNwl2Z_kpe/view?usp=sharing' style={styles.downloadButton}>
          View My Resume
        </a>
      </div>
    </section>
  );
};

const styles = {
  resume: {
    padding: '60px 20px',
    backgroundColor: '#C6E3FF',
    fontFamily: 'Verdana',
    color: '#333',
    textAlign: 'center',
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '36px',
    marginBottom: '40px',
  },
  section: {
    marginBottom: '40px',
  },
  subheading: {
    fontSize: '28px',
    marginBottom: '20px',
  },
  entry: {
    marginBottom: '20px',
  },
  entryTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  entryDate: {
    fontSize: '16px',
    color: '#777',
    marginBottom: '10px',
  },
  entryDescription: {
    fontSize: '16px',
    lineHeight: '1.5',
  },
  skillsList: {
    listStyleType: 'none',
    padding: 0,
  },
  skill: {
    fontSize: '16px',
    margin: '5px 0',
  },
  downloadButton: {
    display: 'inline-block',
    padding: '10px 20px',
    fontSize: '18px',
    color: 'white',
    backgroundColor: '#282c34',
    textDecoration: 'none', // Removes underline
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  },
};

export default Resume;
