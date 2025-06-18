import React from 'react'

export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src="data:image/jpeg;base64,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" alt="product_image1" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        4.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    );
}
