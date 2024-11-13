import React from "react";

function CustomTable({ heading, data }) {
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
          {data?.data?.map((e, index) => {
            return (
              <tr key={index}>
                <td className="px-6 py-4">{e?.name}</td>
                <td className="px-6 py-4">{e?.email}</td>
                <td className="px-6 py-4">
                  {e?.company_name ? e?.company_name : "Not Present"}
                </td>
                <td className="px-6 py-4">{e?.inquiry_description}</td>
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
    </div>
  );
}

export default CustomTable;
