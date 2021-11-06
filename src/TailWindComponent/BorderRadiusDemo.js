import React from 'react'

export default function BorderRadiusDemo() {
    return (
        <div className="container">
            <button className="rounded-lg bg-green-400 text-yellow-600 w-20 h-20 p-4">My Button</button>
            <button className="rounded-full bg-blue-400 text-pink-600 w-20 h-20 p-4">Fronted</button>
            <br/>
            <button className="rounded-3xl shadow-2xl bg-red-400 text-pink-600 w-20 h-20 p-4">Web</button>
        </div>
    )
}
