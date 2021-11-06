import React from 'react'

export default function FlexDemo() {
    return (
        <div className="w-screen h-screen bg-green-300">
            <div className="flex flex-row justify-center items-center h-1/4 w-100 bg-blue-400">
                <div className="fItem h-10 w-10 bg-red-700"></div>
                <div className="fItem h-10 w-10 bg-yellow-400"></div>
                <div className="fItem h-10 w-10 bg-pink-500"></div>
              
            </div>
            <div className="flex flex-row justify-start items-start flex-wrap h-1/4 w-100 bg-yellow-400">
                <div className="fItem h-10 w-1/2 bg-red-700"></div>
                <div className="fItem h-10 w-1/2 bg-green-400"></div>
                <div className="fItem h-10 w-1/2 bg-pink-500"></div>
              
            </div>
            <div className="flex flex-row justify-start items-start flex-wrap gap-4 h-1/4 w-100 bg-pink-400">
                <div className="fItem h-10 w-1/4 bg-red-700"></div>
                <div className="fItem h-10 w-1/4 bg-green-400"></div>
                <div className="fItem h-10 w-1/4 bg-purple-500"></div>
              
            </div>
            <div className="flex flex-col justify-end items-center h-1/4 w-100 bg-purple-400">
                <div className="fItem h-10 w-10 bg-red-700"></div>
                <div className="fItem h-10 w-10 bg-yellow-400"></div>
                <div className="fItem h-10 w-10 bg-pink-500"></div>
              
            </div>
        </div>
    )
}
