import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CoursesContainer = styled.div`
  padding: 20px;
`;

const CourseCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  padding: 20px;
`;

const CourseTitle = styled.h2`
  color: #333;
`;

const CourseDescription = styled.p`
  color: #555;
  font-size: 1.2rem;
  margin-top: 10px;
`;

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "React.js Hooks",
      url: "/react-01/courses/hooks",
      description: "Master React.js and build modern, interactive user interfaces.",
    },
    // Add more courses as needed
  ];

  return (
    <CoursesContainer>
      <h1>Courses</h1>
      {courses.map((course) => (
        <CourseCard key={course.id}>
          <Link to={course.url}>
            <CourseTitle>{course.title}</CourseTitle>
          </Link>
          <CourseDescription>{course.description}</CourseDescription>
        </CourseCard>
      ))}
    </CoursesContainer>
  );
};

export default Courses;
