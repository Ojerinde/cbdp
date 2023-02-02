import Attendance from "../../components/Attendance/Attendance";
import Courses from "../../components/Courses/Courses";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <main>
      <Header />
      <Courses />
      <Attendance />
      <Footer />
    </main>
  );
};
export default Home;
