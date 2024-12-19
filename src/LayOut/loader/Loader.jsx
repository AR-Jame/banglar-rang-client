import './loader.css'

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-[89vh]">
      <svg
        className="w-24 h-24"
        viewBox="0 0 240 240"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Ring A */}
        <circle
          className="pl__ring pl__ring--a"
          cx="120"
          cy="120"
          r="105"
          fill="none"
          strokeWidth="20"
          strokeLinecap="round"
        />
        {/* Ring B */}
        <circle
          className="pl__ring pl__ring--b"
          cx="120"
          cy="120"
          r="35"
          fill="none"
          strokeWidth="20"
          strokeLinecap="round"
        />
        {/* Ring C */}
        <circle
          className="pl__ring pl__ring--c"
          cx="85"
          cy="120"
          r="70"
          fill="none"
          strokeWidth="20"
          strokeLinecap="round"
        />
        {/* Ring D */}
        <circle
          className="pl__ring pl__ring--d"
          cx="155"
          cy="120"
          r="70"
          fill="none"
          strokeWidth="20"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default Loader;
