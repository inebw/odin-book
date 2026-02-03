import { useEffect, useState } from "react";

export default function useGetUserByUsername(url, username) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`${url}/user/username/${username}`, {
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) throw new Error("Server Error!");
        const data = await response.json();
        setProfile(data);
      } catch (err) {
        setError(err);
        setProfile(null);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [username]);

  return { profile, loading, error };
}
