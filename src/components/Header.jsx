import odinSVG from "./../assets/odin.svg";
import DarkModeToggle from "./ToggleDarkMode";
import UserSpace from "./UserSpace";

export default function Header({ logoutHandler, user, toggleTheme, theme }) {
  return (
    <header className="flex justify-between items-center p-2 sm:p-3 lg:rounded-md bg-l2 dark:bg-d2 relative">
      <div className="flex gap-3 items-center justify-center">
        <img className="h-8 sm:h-12" src={odinSVG} alt="" />
        <h1 className="text-2xl sm:text-4xl font-plaster text-yello font-bold">
          Odin Book
        </h1>
      </div>
      <div className="flex gap-5 items-center justify-center">
        <DarkModeToggle theme={theme} toggleTheme={toggleTheme} />
        {user && <UserSpace logoutHandler={logoutHandler} user={user} />}
      </div>
    </header>
  );
}
