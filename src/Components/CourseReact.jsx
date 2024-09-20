//frontend course
import React, { useState } from "react";
import { AcademicCapIcon, HomeIcon, UserIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";


function CourseReact() {
  // Video URLs for the courses
  const welcomeVideos=[
    { title: "Welcome To Our Course", url: "https://www.youtube.com/embed/cpP-fCo8Dn4?si=XQtO67eEEL0WG4cM" },
    { title: "What is React", url: "https://www.youtube.com/embed/Tn6-PIqc4UM?si=p_6e5g6YoTSzKK6X" },
    { title: "Why& When I use React", url: "https://www.youtube.com/embed/yAbnoYfV99g?si=U9AW41MwN82B6JUB"},
    { title: "React or Angular", url: "https://www.youtube.com/embed/K9vBpIq8Wck?si=C2tpqKtVbWLZBDPA" },
  ]
  const htmlVideos = [
    { title: "ES6 IN ONE HOUR", url: "https://www.youtube.com/embed/NCwa_xi0Uuc?si=XYaPRpAVyjRGVT6g" },
  ];

  const cssVideos = [
    { title: "How rect app work", url: "https://www.youtube.com/embed/mNdLo_UfwBE?si=XyJu8aZYBnSeVAb2" },
    { title: "Create react components", url: "https://www.youtube.com/embed/d5ooYpXioqE?si=t62qRWWuY_cwvami" },
    { title: "Props", url: "https://www.youtube.com/embed/SV0fSOIKAZQ?si=GYYBPvvw_8RFz-RC"  },
    { title: "Functional Components", url: "https://www.youtube.com/embed/NJ_qbsLf52w?si=198LXti0UHEsKJxz"  },
    { title: "class Vs Functional Components", url: "https://www.youtube.com/embed/yc6elaGOoGQ?si=ryJcNU7eM0bqgjMM"  },
  ];

  const jsVideos = [
    { title: "Introduction to hooks", url: "https://www.youtube.com/embed/cF2lQ_gZeA8?si=aepuj4MsnIpBueFK" },
    { title: "useState hooks", url: "https://www.youtube.com/embed/lAW1Jmmr9hc?si=eQoIZ00rwVOds3F_" },
    { title: "useEffect hooks", url: "https://www.youtube.com/embed/-4XpG5_Lj_o?si=7pbJRroMQ9phxtWT" },
    { title: "useMemo hooks", url: "https://www.youtube.com/embed/vpE9I_eqHdM?si=yO3pBksWX4BMx7Kp"},
    { title: "useContext", url: "https://www.youtube.com/embed/5LrDIWkK_Bc?si=E7M_6gv6Hlw96vZ6" },
    { title: "useReducer", url: "https://www.youtube.com/embed/kK_Wqx3RnHk?si=Cv1mOWtaOXyiuib7"},
    { title: "Revsion on all hooks", url:"https://www.youtube.com/embed/LlvBzyy-558?si=FLZMmWBnfaA5wxp1"}
  ];
  const routingVideo = [
    { title: "Introduction to react routing", url: "https://www.youtube.com/embed/UWYOC8g5N_0?si=aaP9v_vCqZVsCahT"},
    { title: "Complete tutorial react router", url: "https://www.youtube.com/embed/oTIJunBa6MA?si=IhyGWOkM92fHPIGg" },
    { title: "React Router V6", url: "https://www.youtube.com/embed/Ul3y1LXxzdU?si=Z0HZ4BIMVNspqL5C" },
  ];
  const formvalidationVideos = [
    { title: "Form Validation in react", url: "https://www.youtube.com/embed/tIdNeoHniEY?si=IZkpM-ubUsqPSfen" },
    { title: "React Form Handeling and Validate", url: "https://www.youtube.com/embed/tIdNeoHniEY?si=IZkpM-ubUsqPSfen" },
    { title: "Create a complete form", url: "https://www.youtube.com/embed/H63Pd_lXkeQ?si=Gk1eJHiq_jNIBO5E" },
  ];
  const reduxVideos = [
    { title: "What and Why Redux", url: "https://www.youtube.com/embed/D2MqT4OEgoE?si=AcS6kn6X2jO83FE7" },
    { title: "Redux for beginers", url: "https://www.youtube.com/embed/poQXNp9ItL4?si=-_Aa9HLomuLR9wOR"},
    { title: "Learn Redux with ToDoList project", url: "https://www.youtube.com/embed/drPK9sznPDc?si=6xd4xd8n788GYfPl" },
    { title: "React Redux in Arabic", url: "https://www.youtube.com/embed/ouB52-5WGoQ?si=EFT2v3TAI2a4rqVj"},
  ];

  const [videoUrl, setVideoUrl] = useState(welcomeVideos[0].url); // Default video
  const [videoIndex, setVideoIndex] = useState(0); // Track the index of the current video
  const [currentCourse, setCurrentCourse] = useState("welcome"); // Track current course
  const [isOpenWelcome,setIsOpenWelcome]=useState(false);
  const [isOpenHtml, setIsOpenHtml] = useState(false);
  const [isOpenCss, setIsOpenCss] = useState(false);
  const [isOpenJs, setIsOpenJs] = useState(false);
  const [isOpenRouting, setIsOpenRouting] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [isOpenRedux, setIsOpenRedux] = useState(false);

  // Handle video navigation (Previous/Next)
  const handlePrevVideo = () => {
    const videos = getCurrentVideos();
    if (videoIndex > 0) {
      setVideoIndex(videoIndex - 1);
      setVideoUrl(videos[videoIndex - 1].url);
    }
  };

  const handleNextVideo = () => {
    const videos = getCurrentVideos();
    if (videoIndex < videos.length - 1) {
      setVideoIndex(videoIndex + 1);
      setVideoUrl(videos[videoIndex + 1].url);
    }
  };

  // Function to get the current videos based on the current course
  const getCurrentVideos = () => {
    switch (currentCourse) {
    case "welcome":
        return welcomeVideos;
      case "html":
        return htmlVideos;
      case "css":
        return cssVideos;
      case "js":
        return jsVideos;
      case "routing":
        return routingVideo;
      case "form":
        return formvalidationVideos;
      case "redux":
            return reduxVideos;
      default:
        return [];
    }
  };

  // Function to update video and set current course
  const handleVideoClick = (course, index) => {
    setCurrentCourse(course);
    setVideoIndex(index);
    setVideoUrl(getCurrentVideos()[index].url);
  };

  return (
    <div className="flex header-course ">
      {/* Top Navbar next,prev,user */}
      <div className="fixed top-0 left-0 w-full bg-white text-blue-600 h-16 flex items-center justify-between px-4 z-50">
        <div className="flex items-center space-x-4">
          <UserIcon className="w-6 h-6" />
          <span className="font-bold">Arwa Zakria</span>
        </div>
        <div className="flex items-center space-x-4">
          <button onClick={handlePrevVideo} className="bg-blue-50 hover:bg-blue-100 px-3 py-2 rounded">
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
          <button onClick={handleNextVideo} className="bg-blue-50 hover:bg-blue-100 px-3 py-2 rounded">
            <ChevronRightIcon className="w-5 h-5" />
          </button>
          <button className="bg-green-100 text-green-600 hover:bg-green-200 px-3 py-2 rounded">Mark as Complete</button>
          <span>
                <Link to="/loading" className="flex items-center px-4 py-2 hover:bg-blue-200 rounded">
                <HomeIcon className="w-6 h-6 mr-3 text-blue-600" />
                <span className="text-blue-900">Home</span>
              </Link>
        </span>
        </div>
      </div>

      {/* Sidebar */}
      <div className="h-screen bg-white text-gray-600 w-68  flex flex-col mt-16">
        <div className="flex items-center justify-center h-16 bg-white border-b-2 border-t-2">
          <h1 className="text-xl text-blue-600 p-4">React.Js</h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-2">
            
            {/* Expandable Welcome Menu */}
            <li>
                <button onClick={()=>setIsOpenWelcome(!isOpenWelcome)} className="flex items-center text-gray-600 px-4 py-2 hover:bg-gray-100 rounded w-full">
                    <AcademicCapIcon className="w-6 h-6 mr-3" />
                    <span className="text-gray-600">Welcome</span>
                    <ChevronDownIcon className={`w-5 h-5 ml-auto ${isOpenWelcome ? "rotate-180" :""}`} />
                </button>
                {isOpenWelcome && (
                    <ul className="mt-2 space-y-1 pl-8">
                        {welcomeVideos.map((video,index) => (
                            <li key={index}>
                                 <button onClick={() => handleVideoClick("welcome", index)} className="block w-full text-gray-400 text-left px-4 py-2 hover:bg-gray-200 rounded">
                                   {video.title}
                                 </button>
                            </li>
                        ))}
                    </ul>
                )}
            </li>
            {/* Expandable HTML Menu */}
            <li>
              <button onClick={() => setIsOpenHtml(!isOpenHtml)} className="flex items-center text-gray-600 px-4 py-2 hover:bg-gray-100 rounded w-full">
                <AcademicCapIcon className="w-6 h-6 mr-3" />
                <span>ES6(Revision)</span>
                <ChevronDownIcon className={`w-5 h-5 ml-auto transition-transform ${isOpenHtml ? "rotate-180" : ""}`} />
              </button>
              {isOpenHtml && (
                <ul className="mt-2 space-y-1 pl-8">
                  {htmlVideos.map((video, index) => (
                    <li key={index}>
                      <button
                        onClick={() => handleVideoClick("html", index)}
                        className="block w-full text-gray-400 text-left px-4 py-2 hover:bg-gray-200 rounded"
                      >
                        {video.title}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Expandable CSS Menu */}
            <li>
              <button onClick={() => setIsOpenCss(!isOpenCss)} className="flex items-center text-gray-600 px-4 py-2 hover:bg-gray-100 rounded w-full">
                <AcademicCapIcon className="w-6 h-6 mr-3" />
                <span>React</span>
                <ChevronDownIcon className={`w-5 h-5 ml-auto transition-transform ${isOpenCss ? "rotate-180" : ""}`} />
              </button>
              {isOpenCss && (
                <ul className="mt-2 space-y-1 pl-8">
                  {cssVideos.map((video, index) => (
                    <li key={index}>
                      <button
                        onClick={() => handleVideoClick("css", index)}
                        className="block w-full text-gray-400 text-left px-4 py-2 hover:bg-gray-200 rounded"
                      >
                        {video.title}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Expandable JavaScript hooks */}
            <li>
              <button onClick={() => setIsOpenJs(!isOpenJs)} className="flex items-center text-gray-600 px-4 py-2 hover:bg-gray-100 rounded w-full">
                <AcademicCapIcon className="w-6 h-6 mr-3" />
                <span>Hooks</span>
                <ChevronDownIcon className={`w-5 h-5 ml-auto transition-transform ${isOpenJs ? "rotate-180" : ""}`} />
              </button>
              {isOpenJs && (
                <ul className="mt-2 space-y-1 pl-8">
                  {jsVideos.map((video, index) => (
                    <li key={index}>
                      <button
                        onClick={() => handleVideoClick("js", index)}
                        className="block w-full text-gray-400 text-left px-4 py-2 hover:bg-gray-200 rounded"
                      >
                        {video.title}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            {/* Expandable JavaScript routing */}
            <li>
              <button onClick={() => setIsOpenRouting(!isOpenRouting)} className="flex items-center text-gray-600 px-4 py-2 hover:bg-gray-100 rounded w-full">
                <AcademicCapIcon className="w-6 h-6 mr-3" />
                <span>Routing in react</span>
                <ChevronDownIcon className={`w-5 h-5 ml-auto transition-transform ${isOpenRouting ? "rotate-180" : ""}`} />
              </button>
              {isOpenRouting && (
                <ul className="mt-2 space-y-1 pl-8">
                  {routingVideo.map((video, index) => (
                    <li key={index}>
                      <button
                        onClick={() => handleVideoClick("routing", index)}
                        className="block w-full text-gray-400 text-left px-4 py-2 hover:bg-gray-200 rounded"
                      >
                        {video.title}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            {/* Expandable JavaScript formvalidation */}
            <li>
              <button onClick={() => setIsOpenForm(!isOpenForm)} className="flex items-center text-gray-600 px-4 py-2 hover:bg-gray-100 rounded w-full">
                <AcademicCapIcon className="w-6 h-6 mr-3" />
                <span>Forms Vslidation</span>
                <ChevronDownIcon className={`w-5 h-5 ml-auto transition-transform ${isOpenForm ? "rotate-180" : ""}`} />
              </button>
              {isOpenForm && (
                <ul className="mt-2 space-y-1 pl-8">
                  {formvalidationVideos.map((video, index) => (
                    <li key={index}>
                      <button
                        onClick={() => handleVideoClick("form", index)}
                        className="block w-full text-gray-400 text-left px-4 py-2 hover:bg-gray-200 rounded"
                      >
                        {video.title}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            {/* Expandable JavaScript redux */}
            <li>
              <button onClick={() => setIsOpenRedux(!isOpenRedux)} className="flex items-center text-gray-600 px-4 py-2 hover:bg-gray-100 rounded w-full">
                <AcademicCapIcon className="w-6 h-6 mr-3" />
                <span>Redux</span>
                <ChevronDownIcon className={`w-5 h-5 ml-auto transition-transform ${isOpenRedux ? "rotate-180" : ""}`} />
              </button>
              {isOpenRedux && (
                <ul className="mt-2 space-y-1 pl-8">
                  {reduxVideos.map((video, index) => (
                    <li key={index}>
                      <button
                        onClick={() => handleVideoClick("redux", index)}
                        className="block w-full text-gray-400 text-left px-4 py-2 hover:bg-gray-200 rounded"
                      >
                        {video.title}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            
          </ul>
        </nav>

        {/* Sidebar Footer */}
        <div className="bg-gray-300 p-4 ">
          <p className="text-sm text-gray-600">© 2024 Frontend Track</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="main flex-1 bg-gray-100 p-6 mt-16 justify-center ">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-600 pt-2 transform transition-transform duration-500 hover:scale-110 animate-fade-in">Welcome to our course</h2>

        {/* Video iframe */}
        <div className="relative pb-56 h-0">
          <iframe
            className="absolute top-0 left-0  rounded-lg"
            src={videoUrl}
            title="Course Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          
        </div>
      </div>
      
    </div>
  );
}

export default CourseReact;