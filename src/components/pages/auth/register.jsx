import { useEffect, useState } from "react";
import { Form, ErrorMsg, ErrorMsgContainer, Btn, TxtField } from "../../form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Route, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCookies } from "react-cookie";
import { TextField } from "@mui/material";

export const NavLink = styled(Link)`
  color: blue;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;
const Msgbox = styled.div`
  height: 50px;
  background-color: white;
  border: 1px solid green;
  padding: 10px;
  width: 98%;
  text-align: center;
  align-items: center;
`;
const Message = styled.label`
  color: green;
`;
export const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [course, setCourse] = useState("");
  const [courseDuration, setCourseDuration] = useState("");
  const [phone, setPhone] = useState("");
  const [parentPhone, setParentPhone] = useState("");
  const [accountName, setAccountName] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankSortCode, setBankSortCode] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [places, setPlaces] = useState([]);
  const [period, setPeriod] = useState("");

  const [address, setAddress] = useState("");
  const [nameInt, setNameInt] = useState("");
  const [phoneInt, setPhoneInt] = useState("");
  const [emailInt, setEmailInt] = useState("");

  const weeks = [
    "6 weeks",
    "8 weeks",
    "10 weeks",
    "12 weeks",
    "14 weeks",
    "16 weeks",
    "18 weeks",
  ];

  const [regNo, setRegNo] = useState("");
  const navigate = useNavigate();

  function Index() {
    setTimeout(() => {
      // 👇 Redirects to about page, note the `replace: true`
      navigate("/login", { replace: true });
    }, 3000);
  }

  const [password, setPassword] = useState("");

  const getInstitutions = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    await fetch("http://localhost:4000/all-institutions", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result.data);
        setPlaces(result?.data);
      })
      .catch((error) => console.log(error.message));
  };

  const handleSubmit = async (event) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let place = document.getElementById("places").value;
    let p = document.getElementById("period").value;
    alert(p);

    var raw = JSON.stringify({
      email: email,
      password: password,
      name: name,
      regNo: regNo,
      phone_number: phone,
      guardianPhone: parentPhone,
      accountName: accountName,
      accountNumber: accountNumber,
      bankName: bankName,
      bankSortCode: bankSortCode,
      course: course,
      courseDuration: courseDuration,
      institution: place,
      institutionAdress: address,
      institutionSupervisorName: nameInt,
      institutionSupervisorPhone: phoneInt,
      institutionSupervisorEmail: emailInt,
      period: period,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };
    event.preventDefault();
    if (`${password}` === "" || `${email}` === "") {
    } else {
      await fetch("http://localhost:4000/student/register", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          toast(result.message);
        })
        .catch((error) => console.log(error.message));
    }
  };

  const onInstitutionChange = async () => {
    let place = document.getElementById("places").value;
    if (place === "none") {
      setAddress("");
    } else {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };
      fetch(
        `http://localhost:4000/get-institution?_id=${place}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          setAddress(result.address);
        });
    }
  };

  useEffect(() => {
    getInstitutions();
  }, []);

  return (
    <>
      <div className="container">
        <div className="">
          <ToastContainer />
        </div>
        <Form>
          <div className="form-group d-flex flex-column">
            <TextField
              label="Name"
              className="form-control"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <TextField
              label="Email"
              className="form-control mt-2"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <TextField
              label="Matric"
              className="form-control mt-2"
              type="text"
              value={regNo}
              onChange={(e) => {
                setRegNo(e.target.value);
              }}
              required
            />
            <TextField
              label="Course Of Study"
              className="form-control mt-2"
              type="text"
              value={course}
              onChange={(e) => {
                setCourse(e.target.value);
              }}
              required
            />

            <TextField
              label="Course Duration"
              className="form-control mt-2"
              type="text"
              value={courseDuration}
              onChange={(e) => {
                setCourseDuration(e.target.value);
              }}
              required
            />
          </div>
          {/* phone number section */}
          <div className="form-group">
            <TextField
              label="Phone Number"
              className="form-control mt-2"
              type="text"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              required
            />

            <TextField
              label="Guardian Phone Number"
              className="form-control mt-2"
              type="text"
              value={parentPhone}
              onChange={(e) => {
                setParentPhone(e.target.value);
              }}
              required
            />
          </div>

          {/* Bank section */}
          <div className="form-group">
            <TextField
              label="Account Name"
              className="form-control mt-2"
              type="text"
              value={accountName}
              onChange={(e) => {
                setAccountName(e.target.value);
              }}
              required
            />

            <TextField
              label="Bank Name"
              className="form-control mt-2"
              type="text"
              value={bankName}
              onChange={(e) => {
                setBankName(e.target.value);
              }}
              required
            />

            <TextField
              label="Bank Sort Code"
              className="form-control mt-2"
              type="text"
              value={bankSortCode}
              onChange={(e) => {
                setBankSortCode(e.target.value);
              }}
              required
            />
          </div>
          {/* place of siwess */}
          <div className="form-group">
            <select
              name=""
              id="places"
              className="form-control mt-2"
              onChange={() => {
                onInstitutionChange();
              }}
            >
              <option value="none">Select Place of establishment</option>

              {places.map((place) => (
                <option key={place?._id} value={place?._id}>
                  {place?.name}
                </option>
              ))}
            </select>

            <TextField
              className="mt-2 form-control"
              placeholder="address"
              value={address}
              disabled
            />

            <select className="form-control mt-2" id="period">
              <option
                value="none"
                onChange={(e) => {
                  setPeriod(e.target.value);
                }}
              >
                Period of Siwess
              </option>
              {weeks.map((week) => (
                <option key={week} value={week}>
                  {week}
                </option>
              ))}
            </select>

            <TextField
              className="mt-2 form-control"
              label="Name of industrial based supervisor"
              value={nameInt}
              onChange={(e) => {
                setNameInt(e.target.value);
              }}
            />

            <TextField
              className="mt-2 form-control"
              label="Phone of industrial based supervisor"
              value={phoneInt}
              onChange={(e) => {
                setPhoneInt(e.target.value);
              }}
            />

            <TextField
              className="mt-2 form-control"
              label="Email of industrial based supervisor"
              value={emailInt}
              onChange={(e) => {
                setEmailInt(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <TextField
              className="form-control mt-2"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <TextField
              className="form-control mt-2"
              label="Confirm Password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <button
              onClick={handleSubmit}
              className="btn btn-primary form-control mt-2"
            >
              Submit
            </button>
          </div>
        </Form>
      </div>
    </>
  );
};
