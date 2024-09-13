import React from 'react';

const Portfolio = () => {
  // Example project data; replace with your actual projects
  const projects = [
    {
      title: 'Web Development Project',
      description: 'A responsive website built with ReactJS and CSS. Features include user authentication, dynamic content, and API integration.',
      link: 'https://yourwebsite.com/project1',
    },
    {
      title: 'Oracle Cloud Administration',
      description: 'Managed Oracle Cloud infrastructure, including database services, compute instances, and networking. Implemented automated backup solutions and monitoring tools.',
      link: 'https://yourwebsite.com/project2',
    },
    {
      title: 'Network Design and Implementation',
      description: 'Designed and implemented a secure and scalable network for a medium-sized enterprise. Configured routers, switches, and firewalls, ensuring optimal performance and security.',
      link: 'https://yourwebsite.com/project3',
    },
    {
      title: 'System Design and Implementation',
      description: 'Led the design and implementation of a distributed system architecture for a high-availability application. Utilized microservices and containerization with Docker and Kubernetes.',
      link: 'https://yourwebsite.com/project4',
    },
  ];

  return (
    <section style={styles.portfolio}>
      <div style={styles.container}>
        <h1 style={styles.heading}>My Experiences</h1>
        <p style={styles.description}>
          Below are some of the projects I’ve worked on.
        </p>

        <div style={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} style={styles.card}>
              <h2 style={styles.cardTitle}>{project.title}</h2>
              <p style={styles.cardDescription}>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" style={styles.cardLink}>
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  portfolio: {
    padding: '60px 20px',
    backgroundColor: '#C6E3FF',
    fontFamily: 'Verdana',
    color: '#333',
    textAlign: 'center',
  },
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '36px',
    marginBottom: '20px',
  },
  description: {
    fontSize: '18px',
    lineHeight: '1.6',
    marginBottom: '40px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
  card: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
  },
  cardTitle: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  cardDescription: {
    fontSize: '16px',
    marginBottom: '15px',
  },
  cardLink: {
    fontSize: '16px',
    color: '#282c34',
    textDecoration: 'none', // Removes underline
    fontWeight: 'bold',
  },
  cardLinkHover: {
    textDecoration: 'underline',
  },
};

export default Portfolio;
