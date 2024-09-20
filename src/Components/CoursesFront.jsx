//frontend course
import React, { useState } from "react";
import { AcademicCapIcon, HomeIcon, UserIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";


function CoursesFront() {
  // Video URLs for the courses
  const welcomeVideos=[
    { title: "Welcome To Our Course", url: "https://www.youtube.com/embed/cpP-fCo8Dn4?si=XQtO67eEEL0WG4cM" },
    { title: "What is Frontend", url: "https://www.youtube.com/embed/9He4UBLyk8Y?si=2ixsOPmlwxFhBnO5" },
    { title: "Frontend Roadmap", url: "https://www.youtube.com/embed/GxmfcnU3feo?si=iazQYBX3AwE_qr8K" },
    { title: "Why Choose FrontEnd", url: "https://www.youtube.com/embed/NOfUCMzBNVg?si=yiEHMQLi2cQG-ckx" },
  ]
  const htmlVideos = [
    { title: "Basics of HTML", url: "https://www.youtube.com/embed/hT3j87FMR6M" },
    { title: "What is HTML?", url: "https://www.youtube.com/embed/UB1O30fR-EE" },
    { title: "HTML Elements and Attributes", url: "https://www.youtube.com/embed/lcZorMlEnhU?si=KWGs-98sT4z4tBH8"},
    { title: "HTML Forms and Inputs", url: "https://www.youtube.com/embed/frAGrGN00OA?si=7ceSzSkzK-ZYUkqg" },
  ];

  const cssVideos = [
    { title: "CSS Basics", url: "https://www.youtube.com/embed/1PnVor36_40" },
    { title: "Selectors and Specificity", url: "https://www.youtube.com/embed/yfoY53QXEnI" },
    { title: "Flex Box in CSS", url: "https://www.youtube.com/embed/JJSoEo8JSnc" },
    { title: "Box Model", url: "https://www.youtube.com/embed/nSst4-WbEZk?si=VN33bQp3Wejqm9EQ"  },
    { title: "Grid Layout", url: "https://www.youtube.com/embed/0xMQfnTU6oo?si=Spi0tktdyz9xo5fb"  },
  ];

  const jsVideos = [
    { title: "JavaScript Basics", url: "https://www.youtube.com/embed/2Ji-clqUYnA" },
    { title: "Variables and Data Types", url: "https://www.youtube.com/embed/W6NZfCO5SIk" },
    { title: "Functions in JavaScript", url: "https://www.youtube.com/embed/PkZNo7MFNFg" },
    { title: "DOM Manipulation", url: "https://www.youtube.com/embed/Qqx_wzMmFeA" },
  ];

  const [videoUrl, setVideoUrl] = useState(welcomeVideos[0].url); // Default video
  const [videoIndex, setVideoIndex] = useState(0); // Track the index of the current video
  const [currentCourse, setCurrentCourse] = useState("welcome"); // Track current course
  const [isOpenWelcome,setIsOpenWelcome]=useState(false);
  const [isOpenHtml, setIsOpenHtml] = useState(false);
  const [isOpenCss, setIsOpenCss] = useState(false);
  const [isOpenJs, setIsOpenJs] = useState(false);

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
          <h1 className="text-xl text-blue-600 p-4">Frontend Track</h1>
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
                <span>HTML</span>
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
                <span>CSS</span>
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

            {/* Expandable JavaScript Menu */}
            <li>
              <button onClick={() => setIsOpenJs(!isOpenJs)} className="flex items-center text-gray-600 px-4 py-2 hover:bg-gray-100 rounded w-full">
                <AcademicCapIcon className="w-6 h-6 mr-3" />
                <span>JavaScript</span>
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
          </ul>
        </nav>

        {/* Sidebar Footer */}
        <div className="bg-gray-300 p-4 ">
          <p className="text-sm text-gray-600">© 2024 Frontend Track</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="main flex-1 bg-gray-100 p-6 mt-16 justify-center ">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-600 pt-2 transform transition-transform duration-500 hover:scale-110 animate-fade-in">Welcome to the Frontend Track</h2>

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

export default CoursesFront;