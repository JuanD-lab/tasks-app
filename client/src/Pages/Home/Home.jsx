import React from "react";
import { Container } from "./styles";
import useFetch from "../../Hooks/useFetch";
import { useNavigate, Navigate, Outlet, useLocation } from "react-router-dom";

function Home() {
  let location = useLocation();

  /* if (location.pathname === "/") return <Navigate to={"/"} state={{ from: location }} replace /> */
  const navigate = useNavigate();
  const { loading, data, error } = useFetch({
    url: `${import.meta.env.VITE_API_URL}/users/verify`,
    method: "get",
  });
  if (error || data?.name === "JsonWebTokenError") {
    console.log(error);
    return navigate("/login");
  }
  return (
    <>
      <Container>
        <aside className="w-64 relative" aria-label="Sidebar">
          <div className="relative mb-12 w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <svg
              className="absolute w-12 h-12 text-gray-400 -left-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800 fixed">
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <svg
                    className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                  <span className="ml-3">Dashboard</span>
                </a>
              </li>
              <li>
                <button
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => {
                    localStorage.removeItem("token");
                    localStorage.removeItem("id");
                    navigate("/login");
                  }}
                >
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">Log Out</span>
                </button>
              </li>
            </ul>
          </div>
        </aside>
        {loading && <p>{loading}</p>}
        {error && <p>{error}</p>}
        <Outlet />
      </Container>
    </>
  );
}

export default Home;
