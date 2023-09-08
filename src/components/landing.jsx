import React, { useRef, useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import TypingText from './typingtext';

const Landing = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPauseVideo = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    }

    return (
        <div className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center bg-black">
            <video ref={videoRef} loop muted playsInline className="absolute w-full h-full object-cover z-0">
                <source src="https://chad-distributable.s3.amazonaws.com/trim_E8720173-87FC-4A92-89F9-63B2B4DEE422.mp4" type="video/mp4" />
            </video>
            <div className="absolute w-full h-full bg-black bg-opacity-50 z-10"></div>
            <div className="absolute z-20 text-center text-white px-4 flex flex-col items-center">
                <div className="inline-block overflow-hidden border-r-2 border-white">
                    <TypingText texts={['Let an AI take orders of your restaurant', 'Call us for a private demo']} />
                </div>
                <a href="tel:+14152907886" className="inline-block lg:mt-3 py-2 sm:py-2 md:py-3 lg:py-4 xl:py-5 px-3 sm:px-3 md:px-4 lg:px-5 xl:px-6 bg-orange-500 text-white no-underline rounded-full text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl font-semibold tracking-wide">Call Now</a>
            </div>
            <button onClick={handlePlayPauseVideo} className="absolute bottom-10 right-10 z-30 bg-white p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 rounded-full">
                {isPlaying ? <FaPause size={27} /> : <FaPlay size={27} />}
            </button>
        </div>
    );
}

export default Landing;