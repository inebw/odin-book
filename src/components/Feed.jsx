import { useOutletContext } from "react-router";

export default function Feed() {
  const { url, user } = useOutletContext();

  return (
    <>
      {user && (
        <div>
          <p>{user.first_name}</p>
          <p>{user.last_name}</p>
        </div>
      )}
    </>
  );
}
