import React, { useRef, useState } from 'react';
import { img1, img2, img3, img4, img5 } from '../utils/imageStore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons'; // Importing Font Awesome icons
import { faTable } from '@fortawesome/free-solid-svg-icons';


const GalleryWidget = () => {

    const fileInputRef = useRef(null);

    const handleAddImageClick = () => {
        fileInputRef.current.click();
    };

    const images = [img1, img2, img3, img4, img5];
    const [startIndex, setStartIndex] = useState(0);

    const imgArr = images.slice(startIndex, startIndex + 3);

    const scrollLeft = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    const scrollRight = () => {
        if (startIndex < images.length - 3) {
            setStartIndex(startIndex + 1);
        }
    };


    return (
        <div className="bg-gray-800 p-4 rounded-2xl shadow-lg w-full">
            <FontAwesomeIcon
                icon={faCircleQuestion}
                className="absolute mt-1 text-gray-400 shadow-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] text-2xl -ml-1 cursor-pointer"
            />
            <FontAwesomeIcon
                icon={faTable}
                className="absolute mt-[130px] text-gray-400  shadow-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] text-xl -ml-1  -rotate-90 cursor-pointer "
            />
            <div className="flex mb-4">
                <button className="bg-slate-950 text-lg text-white font-semibold ml-10 py-4 px-10 rounded-2xl">Gallery</button>

                <div className="flex mt-2 ml-auto">
                    <div className="ml-20">
                        <button className="bg-gray-700 shadow-md shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] text-xs font-semibold text-white py-3 px-4 rounded-full"
                            onClick={handleAddImageClick}
                        >+ ADD IMAGE</button>
                        <input
                            type="file"
                            accept="image/*"
                            ref={fileInputRef}
                            style={{ display: 'none' }}
                            onChange={() => { }}
                        />
                    </div>
                    <div className="flex space-x-4 mx-10">
                        <button
                            onClick={scrollLeft}
                            className="bg-gray-900 shadow-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] text-white font-bold rounded-full w-10 h-10 flex items-center justify-center">
                            🡨
                        </button>
                        <button
                            onClick={scrollRight}
                            className="bg-gray-900 shadow-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] text-white font-bold rounded-full w-10 h-10 flex items-center justify-center">
                            🡪
                        </button>
                    </div>
                </div>
            </div>


            <div className="flex mx-10 mt-10 space-x-4 ">
                {imgArr.map((img, index) => (
                    <div key={index} className="w-48 h-48 bg-gray-700 rounded-3xl flex-shrink-0">
                        <img
                            src={img}
                            className="rounded-3xl w-48 h-48 object-cover cursor-pointer max-w-xs transition duration-300 ease-in-out filter grayscale hover:grayscale-0 hover:scale-110"
                            alt={`photo-${index + 1}`}
                        />

                    </div>
                ))}
            </div>
        </div>
    );
};

export default GalleryWidget;
