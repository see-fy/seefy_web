import React from "react";
import { HiSearch } from "react-icons/hi";

function search() {
  return (
    <div class="flex flex-col items-center justify-center">
      <div className="flex w-96 rounded p-2">
        <input
          type="text"
          className="flex-grow bg-transparent outline-none text-sm font-semibold"
          placeholder="Search by issues or Tasks or users and more..."
        />
        <HiSearch size={36} color="white" className="-ml-10" />
      </div>
    </div>
  );
}

export default search;
