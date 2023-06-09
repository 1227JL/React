import React from 'react'

const Search = () => {
  return (
    <div>
        <div className="relative mb-4 flex w-1/5 mx-auto flex-wrap items-stretch">
                <input
                type="search"
                className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid bg-transparent bg-clip-padding  px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:border-blue-500 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-400' dark:focus:border-primary"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon1"
                onChange={ e => setBuscador(e.target.value)}
                />
                <button
                className="bg-blue-500 relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase text-white leading-tight shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                type="button"
                id="button-addon1"
                data-te-ripple-init
                data-te-ripple-color="light">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5">
                    <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clipRule="evenodd" />
                </svg>
                </button>
            </div>
    </div>
  )
}

export default Search