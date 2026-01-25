import { useEffect, useState } from "react";

export default function useGetAuthUser(url, refreshUser) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      console.log("hi");
      try {
        const response = await fetch(`${url}/user/authenticate`, {
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) throw new Error("Server Error!");
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [refreshUser]);

  return { user, loading, error };
}
