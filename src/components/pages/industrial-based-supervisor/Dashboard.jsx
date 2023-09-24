import { useState, useEffect } from "react";
import { network } from "../../../config/config";
import { useNavigate } from "react-router-dom";

export const IndustryBasedSupervisorDashboard = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  const fetchStudents = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    await fetch(`${network.serverip}/all-students`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        var a = result.data;
        console.log(a);
        setStudents(a);
      })
      .catch((error) => console.log("s error", error.message));
  };
  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="container">
      <div className="welcome">List of all students </div>
      <table class="table table-bordered">
        <thead>
          <tr>
            <td>name</td>
            <td>matric</td>
            <td>place</td>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr
              key={student?._id}
              onClick={() => {
                navigate(`/student/reports/${student._id}`, { replace: true });
              }}
            >
              <td>
                {student.firstName},{student?.lastName}
              </td>
              <td>{student?.regNo}</td>
              <td>{student?.place}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
