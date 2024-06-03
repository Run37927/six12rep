import { Search } from 'lucide-react';
import React from 'react'

function Gallery() {
    const projects = [
        {
            title: "macs-circlek-flip-lip",
            imgUrl: "/FTLF4-thumb-550x550.jpg",
        },
        {
            title: "stride-crunch",
            imgUrl: "/stride-feature-image-550x550.jpg"
        },
        {
            title: "earths-choice-coffee",
            imgUrl: "/ec-packaging-coffee-thumb-550x550.jpg",
        },
        {
            title: "sunco-dried-fruit",
            imgUrl: "/sunco-fruit-bags-thumb-550x550.jpg"
        },
        {
            title: "aims-manitoba-home",
            imgUrl: "/aims-manitoba-home-thumb-550x550.jpg"
        },
        {
            title: "metrie-catalogue",
            imgUrl: "/mm-covers-thumb2-550x550.jpg"
        }
    ];

    return (
        <div className="bg-[#EEE] grid grid-cols-1 sm:grid-cols-3 sm:gap-3">
            {projects.map((project, index) => (
                <div key={index} className="relative overflow-hidden group">
                    <img src={project.imgUrl} alt={project.title} className="w-full h-auto transform transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black bg-opacity-75 flex justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <Search className="w-7 h-7 text-white font-bold" />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Gallery