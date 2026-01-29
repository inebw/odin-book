import GithubIcon from "../assets/GithubIcon";
import SideBar from "../assets/SideBar";

export default function ToggleSidebar({ sidebarToggle, sidebarOn }) {
  return (
    <div
      className={
        "hidden sm:flex justify-between w-full dark:bg-d4 bg-l4 absolute bottom-0 right-0 px-3 py-1 rounded-md"
      }
    >
      <a
        href="https://github.com/inebw/odin-book"
        target="_blank"
        rel="noopener noreferrer"
        className={sidebarOn ? "" : "hidden"}
      >
        <GithubIcon className={"size-6 fill-d1 dark:fill-l1"} />
      </a>
      <button onClick={sidebarToggle} className="cursor-pointer">
        <SideBar className={"size-6 fill-d1 dark:fill-l1"} />
      </button>
    </div>
  );
}
