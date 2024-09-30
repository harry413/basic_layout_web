import React from 'react';
import BounceLoader from "react-spinners/BounceLoader";

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-slate-500 to-orange-300 ">
      <BounceLoader color={"black"}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader" />
        <span className='text-xl font-bold font-serif'>Loading....</span>
    </div>
  );
};

export default LoadingSpinner;
