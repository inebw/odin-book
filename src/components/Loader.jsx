export default function Loader({ className }) {
  return (
    <div className="flex flex-col items-center justify-center gap-5 bg-l2 dark:bg-d2 flex-1 rounded-md ">
      <div className={className}></div>
    </div>
  );
}
