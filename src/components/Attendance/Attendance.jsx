import { useRef } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import Joi from "joi";
import "./Attendance.css";

function validate(req) {
  const schema = Joi.object({
    studentId: Joi.string().min(10).max(100).required(),
  });

  return schema.validate(req);
}

const Attendance = () => {
  const idRef = useRef();
  const checkRef = useRef(null);

  const attendanceHandler = async (event) => {
    event.preventDefault();

    const studentId = idRef.current.value;
    const checked = checkRef.current.checked;

    const currentDate = new Date();

    if (currentDate.getDay() !== 6) {
      Swal.fire({
        title: "Error",
        text: "Attendance can only be submitted on Saturdays",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    const { error } = validate({ studentId });
    if (error) {
      Swal.fire({
        title: "Error",
        text: error.details[0].message,
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    try {
      const response = await axios.post(
        "https://cbdp-lms-apis.onrender.com/api/attendance",
        { studentId }
      );

      if (studentId && checked) {
        Swal.fire({
          title: "Success",
          text: response.data.message,
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "Please enter your student ID and check the box to mark attendance",
          icon: "error",
          confirmButtonText: "OK",
        });
      }

      const attendanceResponse = await axios.get(
        `https://cbdp-lms-apis.onrender.com/api/attendance/${studentId}`
      );

      if (attendanceResponse.data) {
        Swal.fire({
          title: "Error",
          text: attendanceResponse.data.error,
          icon: "error",
          confirmButtonText: "OK",
        });
        return;
      }
    } catch (err) {
      Swal.fire({
        title: "Error",
        text: err.response.data.error,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <section className="attendance-box" id="attendance">
      <div className="section-attendance">
        <form id="attendance__form">
          <p className="form__heading">
            Enter your student ID and mark the checkbox below for your
            attendance
          </p>
          <div className="form-group">
            <label htmlFor="studentId" className="attendance__label">
              Student ID
            </label>
            <input
              type="text"
              id="studentId"
              name="studentId"
              placeholder="Enter your student ID"
              className="attendance__input"
              ref={idRef}
            />
          </div>
          <div className="form-group">
            <label htmlFor="attendance" className="attendance__label left">
              Check to mark attendance
            </label>
            <input
              type="checkbox"
              id="attendance"
              className="attendance__checkbox"
              name="checkbox"
              ref={checkRef}
            />
          </div>
          <button
            type="submit"
            onClick={attendanceHandler}
            className="attendance__button"
          >
            Submit
          </button>
        </form>
        <div className="error hidden">
          An error occurred{" "}
          <span>
            <button className="close__modal">
              <ion-icon className="modal-control" name="close"></ion-icon>
            </button>
          </span>
        </div>
        <div className="success hidden">Success</div>
      </div>
    </section>
  );
};

export default Attendance;
