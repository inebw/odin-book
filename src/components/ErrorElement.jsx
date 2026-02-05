import { useNavigate } from "react-router";
import notFound from "./../assets/pageNotFound.png";
import HomeIcon from "../assets/HomeIcon";

export default function ErrorElement() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-dvh flex-col gap-5 bg-l1 dark:bg-d1 text-d7 dark:text-l1 min-h-dvh max-h-dvh lg:px-[calc(25%-10rem)] lg:py-5">
      <h1 className="font-bold text-3xl">Page not found</h1>
      <img
        className="size-52 object-contain"
        src={notFound}
        alt="page not found"
      />
      <div>
        <p className="text-center">Go back to</p>
        <button
          className={` bg-yello  flex gap-3 items-center justify-center cursor-pointer p-2 px-5 rounded-md font-bold w-max`}
          onClick={() => navigate("/")}
        >
          <HomeIcon className={"size-6 fill-d7 dark:fill-l1"} />
          <p>Home</p>
        </button>
      </div>
    </div>
  );
}
