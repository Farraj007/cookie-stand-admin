const Loader = () => {
    let circleCommonClasses = 'h-2.5 w-2.5 bg-[#5B5790]   rounded-full';

    return (
        <div className='w-full h-screen flex justify-center items-center bg-[#ACA9BB]'>
            <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
            <div
                className={`${circleCommonClasses} mr-1 animate-bounce200`}
            ></div>
            <div className={`${circleCommonClasses} animate-bounce400`}></div>
        </div>
    );
};

export default Loader;