import CourseItem from "./CourseItem";
import "./Courses.css";
const Dummydata = [
  {
    syllabus: "HTML",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur necessitatibus illum, quia nemo sint dolorem commodi quasi, quod vero deserunt eaque. Optio quas alias minus ad expedita, dolores ",
  },
  {
    syllabus: "CSS",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur necessitatibus illum, quia nemo sint dolorem commodi quasi, quod vero deserunt eaque. Optio quas alias minus ad expedita, dolores ",
  },
  {
    syllabus: "JavaScript",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur necessitatibus illum, quia nemo sint dolorem commodi quasi, quod vero deserunt eaque. Optio quas alias minus ad expedita, dolores ",
  },
];

const Courses = () => {
  return (
    <section className="section-courses" id="courses">
      <ul className="courses-box">
        {Dummydata.map((course) => (
          <CourseItem
            syllabus={course.syllabus}
            description={course.description}
            key={course.syllabus}
          />
        ))}
      </ul>
    </section>
  );
};
export default Courses;
