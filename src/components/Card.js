import React from "react";
import Image from "next/image";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
export default function Card({ course, likedCourses, setLikedCourses }) {
  function clickHandler() {
    if (likedCourses.includes(course.id)) {
      setLikedCourses((prev) =>
        prev.filter((cid) => {
          cid != course.id;
        })
      );
      toast.warning("Like Removed");
    } else {
      if (likedCourses.length === 0) {
        setLikedCourses([course.id]);
      } else {
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("Like added");
    }
  }

  return (
    <div className="w-[300px] bg-gray-800 bg-opacity-80 rounded-md overflow-hidden">
      <div className="relative">
        <Image
          width={200}
          height={300}
          className="w-full"
          src={course.image.url}
          alt={course.title}
        />
        <div className="grid place-items-center absolute w-[30px] h-[30px] bg-white rounded-full right-2 bottom-3">
          <button onClick={clickHandler}>
            {likedCourses.includes(course.id) ? (
              <FcLike fontSize="2rem" />
            ) : (
              <FcLikePlaceholder fontSize="2rem" className="color-white" />
            )}
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">
          {course.title}
        </p>
        <p className=" text-white mt-2">
          {course.description.length > 100
            ? course.description.substr(0, 100) + " ..."
            : course.description}
        </p>
      </div>
    </div>
  );
}
