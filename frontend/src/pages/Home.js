import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import styles from "./Home.module.css";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import API from "../api";
import Stairs from "../components/common/Stairs";
import Footer from "../components/Footer/Footer";

gsap.registerPlugin(ScrollTrigger);

const sliderImages = [
  "https://t4.ftcdn.net/jpg/12/83/34/47/360_F_1283344765_kGszIrHF49xeBsBOOhadrG6dHmxpnSNa.jpg",
  "https://t3.ftcdn.net/jpg/07/16/21/54/360_F_716215474_Yl4HN9RYNdvzuRVkUhgOa56UENx0I2bq.jpg",
  "https://t4.ftcdn.net/jpg/06/35/78/25/240_F_635782555_8zjUfBduS6tzxTwTuQIFP7FGfx7nBklC.jpg",
];

function Home() {
  const [index, setIndex] = useState(0);
  const [festivals, setFestivals] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [pundits, setPundits] = useState([]);
  const welcomeRef = useRef(null);
  const journeyRef = useRef(null);
  const bookRef = useRef(null);

  
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);


  useGSAP(() => {
    const tl = gsap.timeline({ delay: 2 });
    tl.from(welcomeRef.current, { y: -300, opacity: 0, duration: 1.5, ease: "power3.out" })
      .from(journeyRef.current, { x: 300, opacity: 0, duration: 1.5, ease: "power3.out" }, "-=1")
      .from(bookRef.current, { y: 300, opacity: 0, duration: 1.5, ease: "power3.out" }, "-=1");
  }, []);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [resFestivals, resTestimonials, resPundits] = await Promise.all([
          API.get("/festivals"),
          API.get("/testimonials"),
          API.get("/pundits"), 
        ]);

        setFestivals(resFestivals.data);
        setTestimonials(resTestimonials.data);
        setPundits(resPundits.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <Stairs>
        <Navbar />
        <marquee behavior="" direction="left" scrollamount="5">
          मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥ 47 ॥ तुम्हें अपना कर्म करने का अधिकार है, किन्तु कर्मफल के अधिकारी नहीं हो।
        </marquee>

        {/* Slider */}
        <div className="w-100 text-center pt-2">
          <div className="position-relative">
            <img
              src={sliderImages[index]}
              alt={`Slide ${index + 1}`}
              className={styles.image}
              style={{ width: "100%" }}
            />
            <div className={`position-absolute top-50 start-0 translate-middle-y ms-4 ${styles.textOverlay}`}>
              <p ref={welcomeRef} className={styles.head}>Welcome to our website</p>
              <p ref={journeyRef} className={styles.journey}>Your spiritual journey begins here</p>
              <p ref={bookRef} className={styles.book}>Book poojas and services online 🙏</p>
            </div>
            <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3 d-flex">
              {sliderImages.map((_, i) => (
                <span
                  key={i}
                  onClick={() => setIndex(i)}
                  style={{
                    height: "12px",
                    width: "12px",
                    margin: "0 4px",
                    borderRadius: "50%",
                    display: "inline-block",
                    cursor: "pointer",
                    backgroundColor: i === index ? "white" : "gray",
                  }}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </Stairs>

      {/* Pundits Section */}
      <div className={styles.punditSection} style={{ padding: "5% 0", backgroundColor: "#f0f0f0" }}>
        <div className="container">
          <h2 className="text-center mb-4 text-black">📿 Our Expert Pundits</h2>
          <div className="row">
            {pundits.length === 0 ? (
              <p className="text-center">No pundits available yet.</p>
            ) : (
              pundits.map((pundit) => (
                <div key={pundit._id} className="col-md-4 mb-4">
                  <div className="p-3 rounded shadow-sm text-center" style={{ background: "#fff" }}>
                    <h5>{pundit.name}</h5>
                    <p>Expertise: {pundit.expertise}</p>
                    <p>Experience: {pundit.experience} years</p>
                    {/* <Link to={`/pundit/${pundit._id}`} className="btn btn-primary mt-2">
                      View Details
                    </Link> */}
                    <Link to={`/Contact`} className={styles.btn}>
                      Contact
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Pooja Categories */}
      <div className={styles.second}>
        <center>
          <h2>Find your pooja by Category</h2>
          <p>Explore our spiritual services</p>
        </center>
        <div className="container mt-4">
          <div className="row">
            {[
              { name: "Ganesh Pooja", img: "https://images.news18.com/ibnlive/uploads/2025/08/image-2025-08-97a1b678f146274e432f9d798b39b7d4.jpg", link: "/ganesh-pooja" },
              { name: "Lakshmi Pooja", img: "https://cdn.pixabay.com/video/2023/11/11/188672-883619720_tiny.jpg", link: "/lakshmi-pooja" },
              { name: "Satyanarayan Pooja", img: "https://static.toiimg.com/thumb/msid-91551097,imgsize-73708,width-400,resizemode-4/91551097.jpg", link: "/satyanarayan-pooja" },
              { name: "Rudrabhishek", img: "https://d18guwlcxyb2ak.cloudfront.net/wp-content/uploads/2024/11/25155902/IMG-20241119-WA0007.jpg", link: "/rudrabhishek" },
              { name: "Navagraha Pooja", img: "https://cdn.shopify.com/s/files/1/0901/3588/8184/files/Navagraha-1536x864_jpg.webp?v=1740132210", link: "/navagraha-pooja" },
              { name: "Maha Mrityunjaya Pooja", img: "https://cdn.99pandit.com/images/blogsimg/Maha-Mrityunjaya-Homam-1.webp", link: "/mahamrityunjaya-pooja" },
            ].map((pooja, i) => (
              <div className="col-md-4 mb-4 text-center" key={i}>
                <Link to={pooja.link} style={{ textDecoration: "none", color: "inherit" }}>
                  <img src={pooja.img} alt={pooja.name} className={`img-fluid ${styles.poojaImage}`} style={{ height: "200px", objectFit: "cover", width: "100%" }} />
                  <h5 className="mt-2">{pooja.name}</h5>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div className={styles.blogSection} style={{ padding: "5%", backgroundColor: "#f7f7f7" }}>
        <div className="container">
          <h2 className="text-center mb-5 text-black" style={{ fontWeight: 700 }}>Spiritual Insights & Blog</h2>
          <div className="row">
            {[
              { title: "Importance of Ganesh Pooja", snippet: "Ganesh Pooja helps remove obstacles and brings prosperity. Learn the rituals, timings, and benefits.", img: "https://images.news18.com/ibnlive/uploads/2025/08/image-2025-08-97a1b678f146274e432f9d798b39b7d4.jpg", link: "/ganesh-pooja-blog" },
              { title: "Benefits of Lakshmi Pooja", snippet: "Lakshmi Pooja invites wealth and abundance into your life.", img: "https://cdn.pixabay.com/video/2023/11/11/188672-883619720_tiny.jpg", link: "/blog/lakshmi-pooja" },
              { title: "Power of Maha Mrityunjaya Pooja", snippet: "A powerful ritual for health, protection, and spiritual growth.", img: "https://cdn.99pandit.com/images/blogsimg/Maha-Mrityunjaya-Homam-1.webp", link: "/blog/mahamrityunjaya-pooja" },
            ].map((blog, i) => (
              <div key={i} className="col-md-4 mb-4">
                <div className="card shadow-sm" style={{ borderRadius: "15px", overflow: "hidden" }}>
                  <img src={blog.img} alt={blog.title} className="card-img-top" style={{ height: "200px", objectFit: "cover" }} />
                  <div className="card-body">
                    <h5 className="card-title">{blog.title}</h5>
                    <p className="card-text">{blog.snippet}</p>
                    <Link to={blog.link} className={styles.btn}>Read More</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
{/* Live Streaming Section */}
<div
  className={styles.liveStreaming}
  style={{
    width: "100%",
    padding: "5% 5%",
    backgroundColor: "#000",
    color: "white",
    textAlign: "center",
  }}
>
  <h2 style={{ fontWeight: "700", marginBottom: "20px" }}>🔴 Live Streaming</h2>
  <p style={{ marginBottom: "30px" }}>
    Watch our live poojas and spiritual events streamed directly from the temples.
  </p>

  <div className="container">
    <div className="row">
      {[
        {
    id: "dSHbDZih20c",
    title: "Mahakal Darshan",
  },
  {
    id: "DFVqswyYsyo",
    title: "Somnath Temple Live Darshan",
  },
  {
    id: "4zrvQhdoKow",
    title: "Siddhivinayak Live Darshan",
  },
  {
    id: "XN11vc5Y87k",
    title: "Dwarkadhish Mandir Live Darshan",
  },
        {
          id: "j9iET_VIM98",
          title: "Shirdi Sai Baba Live Darshan",
        },
        {
          id: "66QBd7VTw9c",
          title: "Kashi Vishwanath Temple Live Darshan",
        },
        
   
 
        
         
        
      ].map((live, i) => (
        <div className="col-md-4 mb-4" key={i}>
          <div
            className="ratio ratio-16x9"
            style={{
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0,0,0,0.6)",
            }}
          >
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${live.id}?autoplay=0`}
              title={live.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <h5 className="mt-2">{live.title}</h5>
        </div>
      ))}
    </div>
  </div>
</div>






      {/* Upcoming Festivals */}
      <div className={styles.third}>
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className={styles.blk}>📅 Upcoming Festivals</h2>
            <div className="row mt-4">
              {festivals.length === 0 ? <p>No festivals added yet.</p> : festivals.map((f, i) => (
                <div key={i} className="col-md-4 mb-3">
                  <div className="p-3 rounded shadow-sm" style={{ background: "#252222ff", color:"white"}}>
                    <h5>{f.festival}</h5>
                    <p>{f.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Devotee Testimonials */}
          <div className="text-center">
            <h2 className={styles.blk}>🌸 What Devotees Say</h2>
            <div className="row mt-4">
              {testimonials.length === 0 ? <p>No testimonials yet.</p> : testimonials.map((t, i) => (
                <div key={i} className="col-md-4 mb-3">
                  <div className="p-3 rounded shadow-sm" style={{ background: "#252222ff", color:"white" }}>
                    <p>"{t.review}"</p>
                    <h6>- {t.name}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
              <Footer/>
    </div>
  );
}

export default Home;
