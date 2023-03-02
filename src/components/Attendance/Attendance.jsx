import { useRef } from "react";
import "./Attendance.css";
const Attendance = () => {
  const nameRef = useRef();
  const checkRef = useRef(null);

  const attendanceHandler = (event) => {
    event.preventDefault();

    const fullName = nameRef.current.value;
    const checked = checkRef.current.checked;

    console.log(fullName, checked);
  };

  return (
    <section className="attendance-box" id="attendance">
      <div className="section-attendance">
        <form id="attendance__form">
          <p className="form__heading">
            Enter your full name and mark the checkbok below for your attendance
          </p>
          <div className="form-group">
            <label htmlFor="fullname" className="attendance__label">
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Enter your full name"
              className="attendance__input"
              ref={nameRef}
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
          An error occured{" "}
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
