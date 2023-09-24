import React, { useEffect, useState } from "react";
import { Footer } from "../../footer/footer";
import { network } from "../../../config/config";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const bg = require("../../../images/kasu.jpg");
  const [students, setStudents] = useState([]);
  const [institutions, setInstitutions] = useState([]);
  const navigate = useNavigate();

  var key = 0;
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

  const fetchInstitutions = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    fetch(`${network.serverip}/all-institutions`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setInstitutions(result.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    fetchStudents();
    fetchInstitutions();
  }, []);
  return (
    <>
      <div
        className="bg1"
        style={{
          overflow: "auto",
        }}
      >
        <div
          className="fadeIn"
          style={{
            margin: "auto",
            background:
              "rgb( 128, 128,128, 0.5 )" /* Black background with 0.5 opacity */,
            width: "75%",
            marginTop: "8%",
            padding: "8px",
            color: "white",
            height: "80vh",
            overflow: "auto",
          }}
        >
          <ul
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "10px",
              textAlign: "center",
              background: "blue",
              overflow: "auto",
              height: "50px",
            }}
          >
            <li>Recommended List of Institutions for Siwes</li>
          </ul>
          <div
            className="sub"
            style={{
              background:
                "rgb( 255, 255,255, 0.9 )" /* Black background with 0.5 opacity */,
              height: "67vh",
              width: "90%",
              margin: "auto",
            }}
          >
            <table className="table">
              <thead>
                <tr>
                  <td>Institution</td>
                  <td>Address</td>
                  <td>Phone</td>
                </tr>
              </thead>
              <tbody>
                {institutions?.map((institution) => (
                  <tr>
                    <td>{institution?.name}</td>
                    <td>{institution?.address}</td>
                    <td>{institution?.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
