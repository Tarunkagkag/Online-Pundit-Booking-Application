import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api";

function PunditDetails() {
  const { id } = useParams();
  const [pundit, setPundit] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPundit = async () => {
      try {
        const res = await API.get(`/users/pundits/${id}`);
        setPundit(res.data);
      } catch (err) {
        console.error("Error fetching pundit:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPundit();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!pundit) return <p>Pundit not found</p>;

  return (
    <div>
      <h1>{pundit.name}</h1>
      <p>Expertise: {pundit.expertise}</p>
      <p>Experience: {pundit.experience} years</p>
    </div>
  );
}

export default PunditDetails;
