import useGetLiveConnections from "../utils/useGetLiveConnections";

export default function Connections({ userId, socket, changeConnection }) {
  const { connections, loading, error } = useGetLiveConnections(socket, userId);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <div>
      {connections.map((connection) => (
        <div
          onClick={() => changeConnection(connection.id)}
          key={connection.id}
        >
          <img src={connection.dp} alt="" />
          <p>{connection.first_name}</p>
        </div>
      ))}
    </div>
  );
}
