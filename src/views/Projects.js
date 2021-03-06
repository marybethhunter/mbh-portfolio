import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Masonry from 'react-smart-masonry';
import { Link } from 'react-router-dom';
import { getAllProjects } from '../api/data/portfolioData';
import ProjectCard from '../components/ProjectCard';

const DivStyle = styled.div`
  margin-top: 5px !important;
  margin: 5px !important;
  display: flex !important;
  justify-content: center !important;
  min-height: 90vh !important;
`;
export default function Projects({ user }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getAllProjects().then((projArray) => {
      if (isMounted) {
        setProjects(
          projArray.sort((a, b) => (a.dateCreated > b.dateCreated ? 1 : -1)),
        );
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <DivStyle>
      {user?.isAdmin && <Link to="/addproject">Add Project</Link>}
      <Masonry columns={2} gap={18}>
        {projects.map((project) => (
          <ProjectCard
            key={project.firebaseKey}
            project={project}
            setProjects={setProjects}
            user={user}
          />
        ))}
      </Masonry>
    </DivStyle>
  );
}

Projects.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

Projects.defaultProps = {
  user: null,
};
