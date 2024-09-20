//frontend course
import React, { useState } from "react";
import { AcademicCapIcon, HomeIcon, UserIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";


function CourseJava() {
  // Video URLs for the courses
  const welcomeVideos=[
    { title: "Welcome To Our Course", url: "https://www.youtube.com/embed/cpP-fCo8Dn4?si=XQtO67eEEL0WG4cM" },
    { title: "What is java language", url: "https://www.youtube.com/embed/mAtkPQO1FcA?si=_UfidYQfpFudo2x5" },
    { title: "Why choose java", url: "https://www.youtube.com/embed/eJkwnS5ZkAI?si=tt_aDaSW3FOc8lZR" },
  ]
  const htmlVideos = [
    { title: "Java Language for beginners", url: "https://www.youtube.com/embed/eIrMbAQSU34?si=_fbNGRicsc0Epvry" },
    { title: "Java full tutorial", url: "https://www.youtube.com/embed/grEKMHGYyns?si=TrCBXKxJVWJ-tc9P"  },
  ];

  const cssVideos = [
    { title: "Why and What java", url: "https://www.youtube.com/embed/pTB0EiLXUC8?si=mMEPmq1w10YusM_U" },
    { title: "OOP in Java", url:"https://www.youtube.com/embed/Af3s3KsxStY?si=dUtAs6SL9G5GkZhj" },
  ];

  const jsVideos = [
    { title: "Datastructure What and How ?", url: "https://www.youtube.com/embed/SFEROgwxicA?si=fOknxsY-UDBcNjQC"},
    { title: "Importance of DSA", url: "https://www.youtube.com/embed/lXZn3eDFDgE?si=hqCfNr7sY2S8rkjh"},
    { title: "Datastructure using java", url: "https://www.youtube.com/embed/8MmMm2-kJV8?si=MAMwecEqL6AmgwuO" },
  ];
  const javaVideos = [
    { title: "Top 10 projects using java", url: "https://www.youtube.com/embed/5bXlinw_JlU?si=bRlBoOO7iXqorQzq" },
    { title: "Snake game using java", url: "https://www.youtube.com/embed/bI6e6qjJ8JQ?si=IyZmudMjEKBuVMQx"},
    
    { title: "What is next..!", url: "https://www.youtube.com/embed/I4ASZZxLvZc?si=68IwjKLAXiCBkFsY"},


  ];

  const [videoUrl, setVideoUrl] = useState(welcomeVideos[0].url); // Default video
  const [videoIndex, setVideoIndex] = useState(0); // Track the index of the current video
  const [currentCourse, setCurrentCourse] = useState("welcome"); // Track current course
  const [isOpenWelcome,setIsOpenWelcome]=useState(false);
  const [isOpenHtml, setIsOpenHtml] = useState(false);
  const [isOpenCss, setIsOpenCss] = useState(false);
  const [isOpenJs, setIsOpenJs] = useState(false);
  const [isOpenJava, setIsOpenJava] = useState(false);

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
        case "java":
            return javaVideos;
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
          <h1 className="text-xl text-blue-600 p-4">Java Programming Language</h1>
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
                <span>Java Programming language</span>
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
                <span>OOP by java</span>
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
                <span>Datastructure by java</span>
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
            {/* Expandable projects Menu */}
            <li>
              <button onClick={() => setIsOpenJava(!isOpenJava)} className="flex items-center text-gray-600 px-4 py-2 hover:bg-gray-100 rounded w-full">
                <AcademicCapIcon className="w-6 h-6 mr-3" />
                <span>Projects using java</span>
                <ChevronDownIcon className={`w-5 h-5 ml-auto transition-transform ${isOpenJava ? "rotate-180" : ""}`} />
              </button>
              {isOpenJava && (
                <ul className="mt-2 space-y-1 pl-8">
                  {javaVideos.map((video, index) => (
                    <li key={index}>
                      <button
                        onClick={() => handleVideoClick("java", index)}
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
          <p className="text-sm text-gray-600">© 2024 Java</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="main flex-1 bg-gray-100 p-6 mt-16 justify-center ">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-600 pt-2 transform transition-transform duration-500 hover:scale-110 animate-fade-in">Welcome to the Java Language</h2>

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

export default CourseJava;