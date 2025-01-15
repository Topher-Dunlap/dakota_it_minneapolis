export default function Title() {
    return (
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 md:my-48 my-10 text-center">
            <div id="show_bg_2">
                <img
                    alt="city_outline"
                    src="minneapolis_outline_1.jpg"
                    className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
                />
            </div>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-[#192B6D] from-[#111827]">
                    Dakota
                </span>
                <span> </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-[#192B6D]">
                     IT Solutions
                </span>
            </h1>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                IT services designed to be as unique as your business because one size does not fit all.
            </p>
            <a href="#"
               className="inline-flex items-center justify-center px-5 py-2.5 text-base font-medium text-center text-white bg-gradient-to-br from-[#111827] to-[#192B6D] rounded-lg hover:bg-[#111827] focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Contact Us
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                     fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    )
}