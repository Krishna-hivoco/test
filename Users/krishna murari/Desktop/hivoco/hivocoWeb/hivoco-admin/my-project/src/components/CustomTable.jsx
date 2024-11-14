import React, { useState } from "react";
import { GoEye } from "react-icons/go";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import ReactPaginate from "react-paginate";

function CustomTable({ heading, data }) {
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const itemsPerPage = 10;
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = data?.data?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data?.data?.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data?.data?.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <div className="max-w-full overflow-x-auto rounded-t-lg">
      <table className="min-w-full text-left bg-white">
        {/* Table Header */}
        <thead>
          <tr className="bg-black text-white">
            {heading.map((h, index) => {
              return (
                <th key={index} className="px-6 py-3 font-semibold">
                  {h}
                </th>
              );
            })}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {currentItems?.map((e, index) => {
            return (
              <tr key={index}>
                <td className="px-6 py-4">{e?.name}</td>
                <td className="px-6 py-4">{e?.email}</td>
                <td className="px-6 py-4">
                  {e?.company_name ? e?.company_name : "Not Present"}
                </td>
                <td className="px-6 py-4">{e?.inquiry_description}</td>
                <td className="px-6 py-4 text-lg cursor-pointer">{<IoEye/>}</td>
              </tr>
            );
          })}

          {/* <tr>
            <td className="px-6 py-4">Row 2, Col 1</td>
            <td className="px-6 py-4">Row 2, Col 2</td>
            <td className="px-6 py-4">Row 2, Col 3</td>
            <td className="px-6 py-4">Row 2, Col 4</td>
            <td className="px-6 py-4">Row 2, Col 5</td>
          </tr>
          <tr>
            <td className="px-6 py-4">Row 3, Col 1</td>
            <td className="px-6 py-4">Row 3, Col 2</td>
            <td className="px-6 py-4">Row 3, Col 3</td>
            <td className="px-6 py-4">Row 3, Col 4</td>
            <td className="px-6 py-4">Row 3, Col 5</td>
          </tr> */}
        </tbody>
      </table>
      <div className="w-full  flex justify-end pt-7">
        <ReactPaginate
          containerClassName=" flex items-center gap-2  p-2"
          activeClassName="bg-blue-500 text-white w-8 h-8 rounded-full flex justify-center items-center"
          pageClassName="flex justify-center items-center"
          previousClassName="flex justify-center items-center "
          nextClassName="flex justify-center items-center"
          previousLabel={<IoIosArrowBack />} // Using a left arrow icon
          nextLabel={<IoIosArrowForward />} // Using a right arrow icon
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
}

export default CustomTable;
