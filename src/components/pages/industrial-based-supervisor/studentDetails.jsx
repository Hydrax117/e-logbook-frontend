import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { network } from "../../../config/config";
import styled from "styled-components";

const Card = styled.div`
  height: 250px;
  box-shadow: 1px 1px 5px -1px;
  cursor: pointer;
`;
const CardText = styled.p`
  font-size: 40px;
  text-align: center;
`;

export const StudentDetails = () => {
  const { student } = useParams();
  const [reports, setReports] = useState([]);
  const navigate = useNavigate();

  var a = [];

  const fetchReports = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    await fetch(
      `${network.serverip}/get-reports?student=${student}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setReports(result?.data);
        console.log("ss", result.data);
      })
      .catch((error) => console.log("s error", error.message));
  };

  useEffect(() => {
    fetchReports();
  }, []);

  return (
    <div className="container">
      {reports.length > 0 ? (
        <h3>{reports[0]?.student?.firstName} Weekly Progress Report</h3>
      ) : (
        <h3>No reports yet</h3>
      )}
      <table class="table table-bordered">
        <thead>
          <tr>
            <td>week</td>
            <td>date</td>
            <td>weekending</td>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report?._id}>
              <td>
                {report?.week}{" "}
                <button
                  onClick={() => {
                    navigate(`/report-details/${report._id}`, {
                      replace: false,
                    });
                  }}
                >
                  View
                </button>
              </td>
              <td>{report?.date}</td>
              <td>{report?.weekending}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
