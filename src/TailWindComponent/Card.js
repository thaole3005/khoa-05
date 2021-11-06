import React from 'react'

export default function Card() {
    return (
        <div className="card w-full">
            <div className="content bg-gray-200 py-8 rounded-tl-lg rounded-tr-lg">
                <h3 className="text-yellow-300 font-bold text-sm">Category</h3>
                <p className="text-black text-2xl">Cybersoft frontend</p>
                <p className = "px-2 font-thin my-2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae laudantium eveniet sit quam repellat provident reprehenderit aliquam inventore, nihil consequuntur veritatis reiciendis molestias, nemo aspernatur molestiae aperiam quod.
                </p>
            </div>

            <div className="card-footer rounded-bl-lg rounded-br-lg flex justify-between bg-gray-100 p-2">
                <p>10USD</p>
                <button className ="rounded-lg bg-green-400 p-2 hover:text-red-500 hover:bg-yellow-300 duration-500">Register</button>
            </div>
        </div>
    )
}
