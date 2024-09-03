import React from 'react';

const About = () => {
  return (
    <section style={styles.about}>
      <div style={styles.container}>
        <h1 style={styles.heading}>About Me</h1>
        <p style={styles.description}>
          I am an IT Engineering graduate with a strong foundation in web development, Oracle Cloud administration, network design and implementation, and system design. My passion for technology and problem-solving has driven me to work on various challenging projects and gain practical experience in these areas.
        </p>
        <p style={styles.description}>
          Over the years, I have developed a comprehensive skill set that allows me to design and implement effective IT solutions tailored to specific business needs. I have a keen interest in staying updated with the latest industry trends and continuously expanding my knowledge.
        </p>
        <p style={styles.description}>
          Currently, I am focusing on furthering my education and specializing in Cyber Security and Cloud Administration. My goal is to leverage my existing skills and experience to contribute to the growing field of IT security and cloud technologies.
        </p>
        <p style={styles.description}>
          Outside of work, I enjoy exploring new technologies, learning new programming languages, and contributing to open-source projects. I am always looking for opportunities to collaborate on innovative projects and make a meaningful impact in the tech community.
        </p>
      </div>
    </section>
  );
};

const styles = {
  about: {
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
  description: {
    fontSize: '18px',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
};

export default About;
