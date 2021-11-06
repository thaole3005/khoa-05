import React from 'react';
import './CustomCss.css';

export default function CustomCss() {
    return (
        <div className="container">
            <article className="bg-gray-500 p-5 shadow-lg">
                <p className = "text-2xl text-white">Responsive</p>
                <p className = "content-text">
                Every utility class in Tailwind can be applied conditionally at different breakpoints, which makes it a piece of cake to build complex responsive interfaces without ever leaving your HTML.
                This works for every utility class in the framework, which means you can change literally anything at a given breakpoint — even things like letter spacing or cursor styles.
                </p>
            </article>

            <button class="animation-scale">
            Hover me
            </button>
        </div>
    )
}
