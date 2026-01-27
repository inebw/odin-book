import { useOutletContext } from "react-router";
import useGetConnections from "../utils/useGetConnections";

export default function Following() {
  const { user, url } = useOutletContext();
  const { connections, loading, error } = useGetConnections(
    url,
    user.id,
    "following",
  );

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <div>
      {connections.map((connection) => (
        <div key={connection.id}>
          <p>
            {connection.first_name} {connection.last_name}
          </p>
        </div>
      ))}
    </div>
  );
}
