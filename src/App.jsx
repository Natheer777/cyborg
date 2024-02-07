import "./App.css";
import { useEffect , useState } from "react";
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';

import 'bootstrap/dist/js/bootstrap.bundle'
// import 'bootstrap/dist/css/bootstrap.min.css'

import PropagateLoader from "react-spinners/PropagateLoader";


import { Container } from "./components/index";
import { Header, Footer } from "./Sections/index";
import { Home, Profile , Browser } from "./Pages/index";


const App= ()=> {
  
    const [loading , setLoading] = useState(false)
    
    useEffect(()=>{
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 5000);
    },[])
  
    //////////////////////
  
  
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  

  useEffect(() => {
    setInterval(() => {
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
    });
    
    const leftElements = document.querySelectorAll(".left");
    const rightElements = document.querySelectorAll(".right");
    const hiddenElements = document.querySelectorAll(".hidden");
    const topElements = document.querySelectorAll(".top");
    leftElements.forEach((el) => observer.observe(el));
    rightElements.forEach((el) => observer.observe(el));
    hiddenElements.forEach((el) => observer.observe(el));
    topElements.forEach((el) => observer.observe(el));
    
    return () => {
      leftElements.forEach((el) => observer.unobserve(el));
      rightElements.forEach((el) => observer.unobserve(el));
      hiddenElements.forEach((el) => observer.unobserve(el));
      topElements.forEach((el) => observer.unobserve(el));
    };
  }, );
  }, []);

  
  return (
    <>
      {loading ? (
        <PropagateLoader
        style={{}}
        className='loading'
          color={"#ec6090"}
          loading={loading}
          size={20}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (

<>    
      <Router>
        <Header />
        <Container>
          <Routes>
            <Route  path="/Cyborg/"element={<Home />} />
            <Route  path="/Browser" element={<Browser />} />
            <Route  path="/Profile" element={<Profile />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </>
  )}
</>
  )}
export default App;
