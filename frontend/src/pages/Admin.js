import React, { useEffect, useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";
import styles from "./admin.module.css";

function Admin() {
  const [users, setUsers] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [festivals, setFestivals] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [activeTab, setActiveTab] = useState("users"); 
  const navigate = useNavigate();

  // Festival & Testimonial form states
  const [festivalName, setFestivalName] = useState("");
  const [festivalDate, setFestivalDate] = useState("");
  const [reviewer, setReviewer] = useState("");
  const [review, setReview] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/");
          return;
        }

        // Fetch all data
        const resUsers = await API.get("/users", { headers: { Authorization: `Bearer ${token}` } });
        const resContacts = await API.get("/contacts", { headers: { Authorization: `Bearer ${token}` } });
        const resFestivals = await API.get("/festivals");
        const resTestimonials = await API.get("/testimonials");

        setUsers(resUsers.data);
        setContacts(resContacts.data);
        setFestivals(resFestivals.data);
        setTestimonials(resTestimonials.data);
      } catch (err) {
        alert("Access denied");
        navigate("/");
      }
    };
    fetchData();
  }, [navigate]);

 

  const handleLogout = () => {
    localStorage.removeItem("token"); // remove admin token
    navigate("/login"); // redirect to login page
  };
  const handleAddFestival = async () => {
    if (!festivalName || !festivalDate) return alert("All fields required!");
    const token = localStorage.getItem("token");
    const res = await API.post(
      "/festivals",
      { festival: festivalName, date: festivalDate },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setFestivals([...festivals, res.data]);
    setFestivalName("");
    setFestivalDate("");
  };

  // Delete Festival
  const handleDeleteFestival = async (id) => {
    const token = localStorage.getItem("token");
    await API.delete(`/festivals/${id}`, { headers: { Authorization: `Bearer ${token}` } });
    setFestivals(festivals.filter(f => f._id !== id));
  };

  // Add Testimonial
  const handleAddTestimonial = async () => {
    if (!reviewer || !review) return alert("All fields required!");
    const token = localStorage.getItem("token");
    const res = await API.post(
      "/testimonials",
      { name: reviewer, review },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setTestimonials([...testimonials, res.data]);
    setReviewer("");
    setReview("");
  };

  // Delete Testimonial
  const handleDeleteTestimonial = async (id) => {
    const token = localStorage.getItem("token");
    await API.delete(`/testimonials/${id}`, { headers: { Authorization: `Bearer ${token}` } });
    setTestimonials(testimonials.filter(t => t._id !== id));
  };

  const handleDeleteUser = async (id) => {
  if (!window.confirm("Are you sure you want to delete this user?")) return;
  const token = localStorage.getItem("token");
  await API.delete(`/users/${id}`, { headers: { Authorization: `Bearer ${token}` } });
  setUsers(users.filter((user) => user._id !== id));
};

const handleDeleteContact = async (id) => {
  if (!window.confirm("Are you sure you want to delete this message?")) return;
  const token = localStorage.getItem("token");
  await API.delete(`/contacts/${id}`, { headers: { Authorization: `Bearer ${token}` } });
  setContacts(contacts.filter((c) => c._id !== id));
};


  return (
    <div className={styles.adminContainer}>
      <div className={styles.btn}>
      <h1 className={styles.heading}>Admin Dashboard</h1>
      <button className={styles.logoutBtn} onClick={handleLogout}>
          Logout
        </button>
        </div>

      {/* Tab Buttons */}
      <div className={styles.tabMenu}>
        <button className={activeTab === "users" ? styles.activeTab : ""} onClick={() => setActiveTab("users")}>Users</button>
        <button className={activeTab === "contacts" ? styles.activeTab : ""} onClick={() => setActiveTab("contacts")}>Contact Messages</button>
        <button className={activeTab === "festivals" ? styles.activeTab : ""} onClick={() => setActiveTab("festivals")}>Festivals</button>
        <button className={activeTab === "testimonials" ? styles.activeTab : ""} onClick={() => setActiveTab("testimonials")}>Testimonials</button>
      </div>

      {activeTab === "users" && (
  <div className={styles.tableWrapper}>
    <h2>Users</h2>
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Expertise</th>
          <th>Experience</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, i) => (
          <tr key={i}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>{user.role === "pundit" ? user.expertise : "-"}</td>
            <td>{user.role === "pundit" ? user.experience : "-"}</td>
            <td>{user.role === "pundit" ? user.phone : "-"}</td>
            <td>
              <button
                className={styles.deleteBtn}
                onClick={() => handleDeleteUser(user._id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}


     
      {activeTab === "contacts" && (
  <div className={styles.tableWrapper}>
    <h2>Contact Messages</h2>
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Contact</th>
          <th>Date</th>
          <th>Pooja Type</th>
          <th>Message</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((c, i) => (
          <tr key={i}>
            <td>{c.name}</td>
            <td>{c.email}</td>
            <td>{c.contacts}</td>
            <td>{new Date(c.date).toLocaleDateString()}</td>
            <td>{c.poojaType}</td>
            <td>{c.message}</td>
            <td>
              <button
                className={styles.deleteBtn}
                onClick={() => handleDeleteContact(c._id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}


      {/* Festivals Table & Form */}
      {activeTab === "festivals" && (
        <div className={styles.tableWrapper}>
          <h2>Upcoming Festivals</h2>
          <input type="text" placeholder="Festival Name" value={festivalName} onChange={(e)=>setFestivalName(e.target.value)} className="form-control mb-2"/>
          <input type="text" placeholder="Date" value={festivalDate} onChange={(e)=>setFestivalDate(e.target.value)} className="form-control mb-2"/>
          <button onClick={handleAddFestival} className="btn btn-success mb-3">Add Festival</button>

          <table className={styles.table}>
            <thead>
              <tr><th>Festival</th><th>Date</th><th>Action</th></tr>
            </thead>
            <tbody>
              {festivals.map(f => (
                <tr key={f._id}>
                  <td>{f.festival}</td>
                  <td>{f.date}</td>
                  <td><button className="btn btn-danger btn-sm" onClick={() => handleDeleteFestival(f._id)}>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Testimonials Table & Form */}
      {activeTab === "testimonials" && (
        <div className={styles.tableWrapper}>
          <h2>Devotee Testimonials</h2>
          <input type="text" placeholder="Name" value={reviewer} onChange={(e)=>setReviewer(e.target.value)} className="form-control mb-2"/>
          <textarea placeholder="Review" value={review} onChange={(e)=>setReview(e.target.value)} className="form-control mb-2"/>
          <button onClick={handleAddTestimonial} className="btn btn-primary mb-3">Add Testimonial</button>

          <table className={styles.table}>
            <thead>
              <tr><th>Name</th><th>Review</th><th>Action</th></tr>
            </thead>
            <tbody>
              {testimonials.map(t => (
                <tr key={t._id}>
                  <td>{t.name}</td>
                  <td>{t.review}</td>
                  <td><button className="btn btn-danger btn-sm" onClick={() => handleDeleteTestimonial(t._id)}>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

    </div>
  );
}

export default Admin;

