import { useEffect, useState } from "react";

export default function useGetConnections(url, id = null, type = "followers") {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [connections, setConnections] = useState(null);

  useEffect(() => {
    const fetchConnections = async () => {
      try {
        const response = await fetch(
          `${url}/user/${type}${id ? "/" + id : ""}`,
          {
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        if (!response.ok) throw new Error("Server Error!");
        const data = await response.json();
        setConnections(data);
      } catch (err) {
        setError(err);
        setConnections(null);
      } finally {
        setLoading(false);
      }
    };
    fetchConnections();
  }, [id]);

  return { connections, loading, error };
}
