import { useNavigate } from "react-router";
import successImg from "./../assets/reg-success.png";

export default function SuccessUpdate({ success }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center gap-5 bg-l2 dark:bg-d2 flex-1 rounded-md ">
      {success.map((item) => (
        <div className="flex flex-col gap-5 items-center justify-center ">
          <div>
            <img src={successImg} />
            <p className="text-center">{item.msg}</p>
          </div>
          <button
            onClick={() => navigate(`/`)}
            className="w-max bg-green font-bold px-5 py-2 rounded-md cursor-pointer active:translate-y-0.5"
          >
            Go Home
          </button>
        </div>
      ))}
    </div>
  );
}
