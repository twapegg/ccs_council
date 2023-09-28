"use client";

import TableData from "./TableData.jsx";
import { useState } from "react";

export default function Table({ data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 30;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  return (
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">
            Name
          </th>
          <th scope="col" class="px-6 py-3">
            Course
          </th>
          <th scope="col" class="px-6 py-3">
            Year Level
          </th>
          <th scope="col" class="px-6 py-3">
            Units
          </th>
        </tr>
      </thead>
      <tbody>
        {currentItems.map((item) => (
          <TableData
            ID={item.ID}
            NAME={item.NAME}
            COURSE={item.COURSE}
            YEAR_LEVEL={item.YEAR_LEVEL}
            UNITS={item.UNITS}
          />
        ))}
      </tbody>

      <tfoot>
        <tr>
          <td colspan="5" class="px-6 py-3">
            <div class="flex justify-center">
              <div class="flex rounded-md mt-8">
                <a
                  href="#"
                  class={`px-3 py-2 mx-1 font-medium ${
                    currentPage === 1
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => handleClick(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </a>
                {Array.from({ length: totalPages }, (_, i) => (
                  <a
                    href="#"
                    key={i}
                    class={`px-3 py-2 mx-1 font-medium ${
                      currentPage === i + 1
                        ? "text-gray-700 bg-gray-100 border-gray-300"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                    onClick={() => handleClick(i + 1)}
                  >
                    {i + 1}
                  </a>
                ))}
                <a
                  href="#"
                  class={`px-3 py-2 mx-1 font-medium ${
                    currentPage === totalPages
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => handleClick(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </a>
              </div>
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  );
}
