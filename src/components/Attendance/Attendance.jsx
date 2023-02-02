import "./Attendance.css";
const Attendance = () => {
  return (
    <section class="attendance-box">
      <div class="section-attendance">
        <form id="attendance__form">
          <div class="form-group">
            <label for="fullname" class="attendance__label">
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Enter your full name"
              class="attendance__input"
            />
          </div>
          <div class="form-group">
            <label for="attendance" class="attendance__label left">
              Check to mark attendance
            </label>
            <input
              type="checkbox"
              id="attendance"
              class="attendance__checkbox"
              name="checkbox"
            />
          </div>
          <button type="submit" class="attendance__button">
            Submit
          </button>
        </form>
        <div class="error hidden">
          An error occured{" "}
          <span>
            <button class="close__modal">
              <ion-icon class="modal-control" name="close"></ion-icon>
            </button>
          </span>
        </div>
        <div class="success hidden">Success</div>
      </div>
    </section>
  );
};
export default Attendance;
