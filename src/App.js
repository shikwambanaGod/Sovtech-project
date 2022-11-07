import logo from "./logo.svg";
import mypic from "./My.jpeg";
import pic2 from "./Godfirst.jpg";
import pic3 from "./C++.png";
import pic4 from "./java.png";
import pic5 from "./netbeans.png";
import pic7 from "./PythoN.png";
import pic8 from "./C#.png";

import pic9 from "./HTML5.png";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import  "bootstrap-icons/font/bootstrap-icons.css"

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg">
        <h2 className="navbar-brand text-light">
          <span className="text-warning">Godfirst </span>Shikwambana
        </h2>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav  ms-auto">
            <li className="nav-item">
              <a className="nav-link text-light " href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#experience">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container-fluid ">
        <div className="row">
          <div className="col-lg-6">
            <div className="card bg-dark cardTmargin">
              <div className="card-body">
                <h6 className="card-text text-light">
                  Hello,
                  <h2 className="card-title text-light">
                    {" "}
                    I'M Godfirst Shikwambana
                  </h2>
                </h6>
                <h5 className="text-light">AND</h5>
                <p className="text-light">
                  I COMPLETED MY STUDIES IN INFORMATION TECHNOLOGY SPECIALIZING
                  IN{" "}
                  <strong className="text-success">
                    INTELLIGENT INDUSTRIAL SYSTEMS
                  </strong>{" "}
                  AT TUT
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              src={mypic}
              alt="Godfirt shikwambana in gown"
              height={480}
              width={330}
            ></img>
            <p className="text-light mt-3">
              Place LinkedIn, FaceBook and Instagram Icons HERE
            </p>
          </div>
        </div>
      </div>
      <div id="about">
        <div className="bg secondary ">
          <div className="row">
            <div className="col-6">
              <img src={pic2}></img>
            </div>
            <div className="col-6">
              <h1 className="sub-title">ABOUT ME</h1>

              <p className="about">
                I am detail-oriented, Outgoing and energetic information
                communication technology specializing with Intelligent Industry
                Systems looking forward to utilizing my training, my skills and
                looking forward to persuading my dreams through an organization
                where I can enhance my capabilities and my knowledge while
                making a significant contribution to the success of the company.
                Aiming to a proven of data collection and electronic data
                interchange skills fill the Software Development role at
                company. Frequently praised as hardworking, problem solving and
                critical thinking, I can be relied upon to help you achieve its
                goals. At university I gained experience in working with system
                automation, mobile robots, electronics and software development.
                I got internship as a junior software developer, it was a great
                experience, and I learned a lot. As software developer I would
                like to enhance my skills in automation, machine learning,
                DevOps <br></br>
                <span className="text-warning">
                  junior Software develops , design , electronics and robotics
                </span>
                <br></br>
              </p>
              <h2>My SoftSkills</h2>

              <ul>Time Management</ul>
              <ul>Problem-solving</ul>
              <ul>Communication skills</ul>
              <ul>Patient and positive</ul>
              <ul>Teamwork</ul>
            </div>
          </div>
        </div>
      </div>
      <div id="skills"></div>
      <div className="row">
        <div className="col-3">
          <img src={pic3} alt="C++ skills" className="skillPic"></img>
        </div>

        <div className="col-3">
          <img src={pic4} alt="java  skills" className="skillPic"></img>
        </div>

        <div className="col-3">
          <img src={pic5} alt="netbean framework" className="skillPic"></img>
        </div>
        <div className="col-3">
          <img src={pic7} alt="PYTHON skills" className="skillPic"></img>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <img src={pic8} alt="HTML5 skills" className="skillPic"></img>
        </div>
        <div className="col-3">
          <img src={pic9} alt="C# skills" className="skillPic"></img>
        </div>
      </div>
      <div id="experience">
        <h2>Experience</h2>

        <div className="row">
          <div className="col-lg-4">
            <div className="card bg-secondary">
              <div className="card-title">Machine Learnig
              </div>
              <div className="card-body">binary classification and dimensionality reduction <br></br>Reinforcement learning <br></br>able to control robots  to perform tasks the physical world using this technique.</div>
            </div>
          </div>
          <div className="col-lg-4 ">
            <div className="card bg-secondary">
              <div className="card-title">DevOps
              </div>
              <div className="card-body">Build and test code continuously with scripting and programming languages<br></br>Defining and setting development, test, release, update, and support processes for DevOps operation<br></br>able to implement various development, automation and IT infrastructure</div>
            </div>
          </div>
           <div className="col-lg-4">
            <div className="card bg-secondary">
              <div className="card-title">Software Development
              </div>
              <div className="card-body">• Troubleshot software development issues on a regular basis, ensuring that the system was
up and running smoothly <br></br>
.Successfully learned software development and helped in developing a customer
management system <br></br>able to use different languages <br></br>

</div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card bg-secondary">
              <div className="card-title">Robotics and Electonics
              </div>
              <div className="card-body">• Smart car with alcohol detection and alert system <br></br>
.This was my final project at TUT, it was a smart car that moves automatically, and it avoids
any obstacle on the path, it also detects if the alcohol level is acceptable and if it is not then
the car does not move. If an accident occur the car automatically sent an SMS to the
emergency personnel containing location of the accident and car was connected to the
online website where the data was saved and viewed.  <br></br>able to use different languages <br></br>

.Fingerprint attendance system using Arduino <br></br>
.• Fingerprint Sensor Based Biometric Attendance System using Arduino.<br></br> Simply we will be
interfacing fingerprint sensor with Arduino<br></br> LCD Display & RTC Module to design the desired
project. In this project<br></br>we used the fingerprint Module and Arduino to take and keep
attendance data and records. 

</div>
            </div>
          </div>
        </div>
    </div>
      

    <div class="container  mt-5 mb-5">
      <div class="row m-0">
        <div class="col-md-3 bg-primary p-0 d-flex text-center  justify-content-center flex-column display-none">
          <h3 class="mb-2">Contact Info</h3>
          <div class="info">
            <ul>
              <li>3191 pond fish street</li>
              <li>shikwambanaesman@gmail.com</li>
              <li>0824222146</li>
            </ul>
            <div class="social-icons">
            </div>
          </div>
        </div>
        <div id  = "contact"></div>
        <div class="col-md-8 p-0 bg-danger pt-4 pb-4" >
          <h3 class="pl-4">Send a message</h3>
          <form class="w-100 p-4" action="#">
            <div class="row">
              <div class="col-md-6">
                <div class="mb-3">
                  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Full Name" required></input>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="Email" required></input>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <textarea  class="form-control" id="exampleFormControlInput2" placeholder="Message" required rows="3"></textarea>
                </div>
               
              </div>
            </div>
            <button type="button" class="btn btn-custom btn-lg btn-block mt-3">Send Now</button>
          </form>
        </div>
        <div class="col-md-1 bg-warning display-none ">
          <div class="social-icons">
            <i class="fa fa-facebook"></i>
           
            <i class="fa fa-linkedin">www.linkedin.com/in/godfirst-shikwambana-3229331bb</i>
          </div>
        </div>
      </div>
    </div>


      </div>

  );
}

export default App;
