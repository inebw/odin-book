import ProfileHeader from "./ProfileHeader";

export default function ({ liveUser, handleFakeSubmit }) {
  return (
    <form
      className="flex flex-col gap-3 items-center justify-center "
      onSubmit={handleFakeSubmit}
    >
      <ProfileHeader
        user={liveUser}
        className={
          "flex w-50 items-center  py-1 px-2 gap-2 rounded-md bg-l4 dark:bg-d4 "
        }
      />
      <button
        className="w-20 text-sm bg-red font-bold px-5 py-1 rounded-md cursor-pointer active:translate-y-0.5"
        type="submit"
      >
        Go
      </button>
    </form>
  );
}
