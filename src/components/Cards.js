"use client";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import Spinner from "./Spinner";
import { apiUrl } from "../app/data";
import { ToastContainer, toast } from "react-toastify";

export const Cards = ({ category }) => {
  const [likedCourses, setLikedCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState(null);
  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();
      setCourses(output.data);
      setLoading(false);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  // Initialize a state variable to store all courses
  const [allCourses, setAllCourses] = useState([]);

  // When the courses prop updates, update the allCourses state
  useEffect(() => {
    if (category === "All") {
      if (courses) {
        const combinedCourses = Object.values(courses).flat();
        setAllCourses(combinedCourses);
      } else {
        // Handle the case where courses is undefined or null
        setAllCourses([]);
      }
    } else {
      setAllCourses(courses[category]);
    }
  }, [courses, category]);

  return (
    <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
      <ToastContainer />
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        {loading ? ( // Check if loading is true
          <Spinner /> // Show "Loading..." heading
        ) : (
          allCourses.map((course) => (
            <Card
              key={course.id}
              course={course}
              likedCourses={likedCourses}
              setLikedCourses={setLikedCourses}
            />
          ))
        )}
      </div>
    </div>
  );
};
