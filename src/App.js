// // // Export the other if needed
// // import React, { useEffect, useState } from "react";
// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import { Box } from "@mui/material"; // an element
// // import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from "./components";

// // // AppRouter Component
// // const AppRouter = () => (
// //   <BrowserRouter>
// //     <Box sx={{ backgroundColor: "#000" }}>
// //       <Navbar />
// //       <Routes>
// //         <Route path="/" exact element={<Feed />} />
// //         <Route path="/video/:id" element={<VideoDetail />} />
// //         <Route path="/channel/:id" element={<ChannelDetail />} />
// //         <Route path="/search/:searchTerm" element={<SearchFeed />} />
// //       </Routes>
// //     </Box>
// //   </BrowserRouter>
// // );

// // // DynamicHtmlLoader Component
// // const DynamicHtmlLoader = () => {
// //   const [htmlContent, setHtmlContent] = useState("");

// //   useEffect(() => {
// //     // Load the HTML file dynamically
// //     fetch("/custom.html")
// //       .then((response) => response.text())
// //       .then((data) => setHtmlContent(data))
// //       .catch((error) => console.error("Error loading HTML:", error));
// //   }, []);

// //   return (
// //     <div>
// //       <div
// //         dangerouslySetInnerHTML={{ __html: htmlContent }}
// //       ></div>
// //     </div>
// //   );
// // };

// // // Combine Both Components
// // const App = () => {
// //   const [showHtmlLoader, setShowHtmlLoader] = useState(false);

// //   return (
// //     <div>
// //       <button onClick={() => setShowHtmlLoader(!showHtmlLoader)}>
// //         {showHtmlLoader ? "Switch to AppRouter" : "Switch to HTML Loader"}
// //       </button>

// //       {showHtmlLoader ? <DynamicHtmlLoader /> : <AppRouter />}
// //     </div>
// //   );
// // };

// // export default App;
// import React, { useState, useEffect } from "react";
// import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
// import { Box } from "@mui/material";
// import { Navbar as AppNavbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from "./components"; // Use imported Navbar as 'AppNavbar'

// const AppRouter = () => (
//   <Box sx={{ backgroundColor: "#000" }}>
//     <AppNavbar />
//     <Routes>
//       <Route path="/" exact element={<Feed />} />
//       <Route path="/video/:id" element={<VideoDetail />} />
//       <Route path="/channel/:id" element={<ChannelDetail />} />
//       <Route path="/search/:searchTerm" element={<SearchFeed />} />
//     </Routes>
//   </Box>
// );

// const DynamicHtmlLoader = () => {
//   const [htmlContent, setHtmlContent] = useState("");

//   useEffect(() => {
//     fetch("/custom.html")
//       .then((response) => response.text())
//       .then((data) => setHtmlContent(data))
//       .catch((error) => console.error("Error loading HTML:", error));
//   }, []);

//   return (
//     <div
//       dangerouslySetInnerHTML={{ __html: htmlContent }}
//     ></div>
//   );
// };

// const DynamicHtmlLoader1 = () => {
//   const [htmlContent, setHtmlContent] = useState("");

//   useEffect(() => {
//     fetch("/learn.html")
//       .then((response) => response.text())
//       .then((data) => setHtmlContent(data))
//       .catch((error) => console.error("Error loading HTML:", error));
//   }, []);

//   return (
//     <div
//       dangerouslySetInnerHTML={{ __html: htmlContent }}
//     ></div>
//   );
// };

// //...
// const DynamicHtmlLoader2 = () => {
//   const [htmlContent, setHtmlContent] = useState("");

//   useEffect(() => {
//     fetch("/assessment.html")
//       .then((response) => response.text())
//       .then((data) => setHtmlContent(data))
//       .catch((error) => console.error("Error loading HTML:", error));
//   }, []);

//   return (
//     <div
//       dangerouslySetInnerHTML={{ __html: htmlContent }}
//     ></div>
//   );
// };
// const DynamicHtmlLoader3 = () => {
//   const [htmlContent, setHtmlContent] = useState("");

//   useEffect(() => {
//     fetch("/dashboard.html")
//       .then((response) => response.text())
//       .then((data) => setHtmlContent(data))
//       .catch((error) => console.error("Error loading HTML:", error));
//   }, []);

//   return (
//     <div
//       dangerouslySetInnerHTML={{ __html: htmlContent }}
//     ></div>
//   );
// };
// const LocalNavbar = () => {
//   const navigate = useNavigate(); // Using navigate to programmatically change routes
  
//   const handleLinkClick = (path) => {
//     navigate(path); // Change the route programmatically
//   };

//   return (
//     <div className="navbar">
//       <button onClick={() => handleLinkClick("/assessment")}>Assessment</button>
//       <button onClick={() => handleLinkClick("/dashboard")}>Dashboard</button>
//       <button onClick={() => handleLinkClick("/lectures")}>Lectures</button>
//       <button onClick={() => handleLinkClick("/learn")}>Engage and Learn</button>
//       <button onClick={() => handleLinkClick("/custom")}>Home</button>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <BrowserRouter>
//       <LocalNavbar />
//       <Routes>
//       <Route path="/dashboard" element={<DynamicHtmlLoader3 />} />
//       <Route path="/assessment" element={<DynamicHtmlLoader2 />} />
//       <Route path="/learn" element={<DynamicHtmlLoader1 />} />
//         <Route path="/custom" element={<DynamicHtmlLoader />} />
//         <Route path="/lectures" element={<AppRouter />} />
//         {/* Add additional routes as needed */}
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { Navbar as AppNavbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from "./components"; // Use imported Navbar as 'AppNavbar'

// AppRouter Component
const AppRouter = () => (
  <Box sx={{ backgroundColor: "#000" }}>
    <AppNavbar />
    <Routes>
      <Route path="/" exact element={<Feed />} />
      <Route path="/video/:id" element={<VideoDetail />} />
      <Route path="/channel/:id" element={<ChannelDetail />} />
      <Route path="/search/:searchTerm" element={<SearchFeed />} />
    </Routes>
  </Box>
);

// Dynamic HTML Loaders
const DynamicHtmlLoader = () => {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    fetch("/custom.html")
      .then((response) => response.text())
      .then((data) => setHtmlContent(data))
      .catch((error) => console.error("Error loading HTML:", error));
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>;
};

const DynamicHtmlLoader1 = () => {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    fetch("/learn.html")
      .then((response) => response.text())
      .then((data) => setHtmlContent(data))
      .catch((error) => console.error("Error loading HTML:", error));
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>;
};

const DynamicHtmlLoader2 = () => {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    fetch("/assessment.html")
      .then((response) => response.text())
      .then((data) => setHtmlContent(data))
      .catch((error) => console.error("Error loading HTML:", error));
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>;
};

const DynamicHtmlLoader3 = () => {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    fetch("/dashboard.html")
      .then((response) => response.text())
      .then((data) => setHtmlContent(data))
      .catch((error) => console.error("Error loading HTML:", error));
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>;
};

// LocalNavbar Component
const LocalNavbar = () => {
  const navigate = useNavigate(); // Use navigate to programmatically change routes

  const handleLinkClick = (path) => {
    navigate(path); // Change the route programmatically
  };

  // Button style object
  const buttonStyle = {
    padding: "10px 20px",
    margin: "5px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
  };

  return (
    <div className="navbar">
      <button
        style={buttonStyle}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#45a049")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#4CAF50")}
        onClick={() => handleLinkClick("/assessment")}
      >
        Assessment
      </button>
      <button
        style={buttonStyle}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#45a049")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#4CAF50")}
        onClick={() => handleLinkClick("/dashboard")}
      >
        Dashboard
      </button>
      <button
        style={buttonStyle}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#45a049")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#4CAF50")}
        onClick={() => handleLinkClick("/lectures")}
      >
        Lectures
      </button>
      <button
        style={buttonStyle}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#45a049")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#4CAF50")}
        onClick={() => handleLinkClick("/learn")}
      >
        Engage and Learn
      </button>
      <button
        style={buttonStyle}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#45a049")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#4CAF50")}
        onClick={() => handleLinkClick("/custom")}
      >
        Home
      </button>
    </div>
  );
};

// App Component
const App = () => {
  return (
    <BrowserRouter>
      <LocalNavbar />
      <Routes>
        <Route path="/dashboard" element={<DynamicHtmlLoader3 />} />
        <Route path="/assessment" element={<DynamicHtmlLoader2 />} />
        <Route path="/learn" element={<DynamicHtmlLoader1 />} />
        <Route path="/custom" element={<DynamicHtmlLoader />} />
        <Route path="/lectures" element={<AppRouter />} />
        {/* Add additional routes as needed */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
