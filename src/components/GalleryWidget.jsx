import React, { useRef, useState } from 'react';
import { img1, img2, img3, img4, img5 } from '../utils/imageStore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons'; 
import { faTable } from '@fortawesome/free-solid-svg-icons';


const GalleryWidget = () => {

    const images = [img1, img2, img3, img4, img5];


    const [startIndex, setStartIndex] = useState(0);
    const [image, setImage] = useState(images);

    const fileInputRef = useRef(null);


    const scrollLeft = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    const scrollRight = () => {
        if (startIndex < image.length - 3) {
            setStartIndex(startIndex + 1);
        }
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage([...image, reader.result]);
            };
            reader.readAsDataURL(file);
        }
    };


    return (
        <div className="bg-gray-800 h-[50%] w-[100%] rounded-2xl shadow-lg shadow-black">
            <div className="flex gap-4 p-4">
                <div>
                    <FontAwesomeIcon
                        icon={faCircleQuestion}
                        className="absolute text-gray-400 shadow-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] text-2xl cursor-pointer"
                    />
                </div>
                <div className="flex w-full justify-between items-center">
                    <div>
                        <button className="bg-slate-950 text-lg text-white font-semibold ml-6 py-4 px-10 h-[90%] rounded-2xl">Gallery</button>
                    </div>
                    <div>
                        <div className="flex gap-2 px-4">
                            <div className="ml-4">
                                <button className="bg-gray-700 shadow-md shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] text-xs font-semibold text-white py-3 px-4 rounded-full"
                                    onClick={() => fileInputRef.current.click()}
                                >+ ADD IMAGE</button>
                                <input
                                    type="file"
                                    accept="image/*"
                                    ref={fileInputRef}
                                    style={{ display: 'none' }}
                                    onChange={handleImageUpload}
                                />
                            </div>
                            <div className="flex gap-3 mx-10 mr-6">
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
                </div>
            </div>


            <div className="flex gap-4 p-2 ml-4">
                <div className="mt-10 -ml-3">
                    <FontAwesomeIcon
                        icon={faTable}
                        className="absolute text-gray-400  shadow-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] text-xl -rotate-90 cursor-pointer "
                    />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8 md:pl-4 justify-center items-center mx-auto pb-6 mt-6 md:mt-1 lg:mt-2">
                    {image.slice(startIndex, startIndex + 3).map((img, index) => (
                        <div key={index} className="relative">
                            <img
                                src={img}
                                className="w-[180px] h-[180px] lg rounded-2xl object-cover cursor-pointer transition duration-300 ease-in-out filter grayscale hover:grayscale-0 hover:scale-110"
                                alt={`photo-${index + 1}`}
                            />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default GalleryWidget;
