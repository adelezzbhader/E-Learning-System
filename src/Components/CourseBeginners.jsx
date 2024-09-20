//frontend course
import React, { useState } from "react";
import { AcademicCapIcon, HomeIcon, UserIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";


function CourseBeginners() {
  // Video URLs for the courses
  const welcomeVideos=[
    { title: "Welcome To Our Course", url: "https://www.youtube.com/embed/cpP-fCo8Dn4?si=XQtO67eEEL0WG4cM" },
    { title: "What is programming ", url: "https://www.youtube.com/embed/6YMec72CEiU?si=irpQgmgJZ-g9ZM4Z"},
    { title: "Introduction to Programming", url: "https://www.youtube.com/embed/zOjov-2OZ0E?si=D1JlgAfOLBWHNcXr" },
    { title: "CS50 course for beginners", url: "https://www.youtube.com/embed/baLMODtYFog?si=8NFK9sHWStUBlfvC"},
  ]
  const htmlVideos = [
    { title: "Programming Languages Overview", url: "https://www.youtube.com/embed/2lVDktWK-pc?si=Cq9U-mtEiPFR9655" },
    { title: "History of programming languages", url: "https://www.youtube.com/embed/YZV8Zv_YW7I?si=x_bPYmL0JTeFTj3T"},
  ];

  const cssVideos = [
    { title: "What is coding?", url: "https://www.youtube.com/embed/N7ZmPYaXoic?si=2kT2h_xVoWIIApoV"},
    { title: "Programming Vs Coding", url: "https://www.youtube.com/embed/CIRGjwYgdT4?si=AUeAAjiM5GEhdB0A" },
  ];

  const jsVideos = [
    { title: "Which language I should learn first", url: "https://www.youtube.com/embed/poJfwre2PIs?si=MrskbGDw8qrMugA4" },
    { title: "Best programming language to learn", url: "https://www.youtube.com/embed/kJOqIaGwQ7Y?si=vMla5epP5kAvogHb"},
  ];
   
  const routingVideo = [
    { title: " Why Python ", url: "https://www.youtube.com/embed/Y8Tko2YC5hA?si=qOFyNdFqrU5UIeUM"},
    { title: " Python for beginners", url:"https://www.youtube.com/embed/kqtD5dpn9C8?si=qRbacNs_SKiG97zL"},
    { title: " Python Projects for beginners", url: "https://www.youtube.com/embed/4wGuB3oAKc4?si=kK5CokAWprSKzDed" },
  ];
  const formvalidationVideos = [
    { title: "Problem solving guide", url: "https://www.youtube.com/embed/UFc-RPbq8kg?si=dOoxV4ceQJzwAw1s" },
    { title: "Problem solving for beginners", url: "https://www.youtube.com/embed/Pt6aevav4Do?si=BF_kuo62O3gZq8ct" },
  ];
  const reduxVideos = [
    { title: "Career Paths", url: "https://www.youtube.com/embed/XmWkcePhf84?si=kgJ1r4LEv0wgnquR" },
    { title: "Career paths and How chooce it", url: "https://www.youtube.com/embed/oGy_uK6FrgE?si=rwjT826GKebxHgGf"},
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
      <div className="h-screen bg-white text-gray-600 w-68 flex flex-col mt-16">
        <div className="flex items-center justify-center h-16 bg-white border-b-2 border-t-2">
          <h1 className="text-xl text-blue-600 p-4">ReactJs</h1>
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
                <span>Programming Languages</span>
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
                <span>What is Coding?</span>
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
                <span>How I can choose programming language?
                </span>
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
                <span>Intro to Python </span>
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
                <span> Understanding Logic and Problem-Solving</span>
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
                <span>IT traks</span>
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
          <p className="text-sm text-gray-600">© 2024 Beginners</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="main flex-1 bg-gray-100 p-6 mt-16 justify-center ">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-600 pt-2 transform transition-transform duration-500 hover:scale-110 animate-fade-in">Welcome to our course, Wish you success</h2>

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

export default CourseBeginners;