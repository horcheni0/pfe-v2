import React, { useEffect, useState, useCallback } from 'react';
import image1 from '../assest/banner/banner_mens.png';
import image2 from '../assest/banner/banner_women.png';
import image3 from '../assest/banner/banner_kids.png';

const BannerProduct = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const desktopImages = [
        image1,
        image2,
        image3,
    ];

    const nextImage = useCallback(() => {
        setCurrentImage(prev => (prev + 1) % desktopImages.length);
    }, [desktopImages.length]);

    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 5000);

        return () => clearInterval(interval);
    }, [nextImage]);

    return (
        <div className='container mx-auto px-4 rounded'>
            <div className='h-56 md:h-72 w-full bg-slate-200 relative'>
                <div className='absolute z-10 h-full w-full md:flex items-center hidden'>
                    {/* You can add any overlay content here */}
                </div>
                <div className='md:flex h-full w-full overflow-hidden'>
                    {desktopImages.map((imageUrl, index) => (
                        <div
                            key={index}
                            className={`w-full h-full ${
                                index === currentImage ? 'block' : 'hidden'
                            }`}
                        >
                            <img
                                src={imageUrl}
                                className='w-full h-full'
                                alt={`Banner ${index}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BannerProduct;
