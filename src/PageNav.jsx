const PageNav = ({ page, setPage }) => {
  return (
    <div className="flex justify-center gap-3.5 m-7">
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="hover:bg-gray-900 hover:cursor-pointer hover:text-white rounded-4xl "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
      </button>
      <button
        onClick={() => setPage(page + 1)}
        className="hover:bg-gray-900 hover:cursor-pointer hover:text-white rounded-4xl "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
    </div>
  );
};
export default PageNav;
