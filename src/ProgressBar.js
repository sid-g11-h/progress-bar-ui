import React, { useState, useEffect } from 'react';
import "./Progress.scss"

const ProgressBar = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    console.log('ProgressBar mounted');
    // debugger; // ProgressBar mounted

    const interval = setInterval(() => {
      setProgress((prev) => {
        console.log(`Current progress: ${prev}%`);
        // debugger; // Before progress update

        if (prev >= 100) {
          console.log('Progress completed');
          // debugger; // Progress completed

          clearInterval(interval);
          if (onComplete) {

            onComplete(); // Notify parent component that progress is complete
          }
          return 100;
        }
        return prev + 20; // Increment progress by 20%
      });
    }, 1000); // Update progress every 1 second


    // Cleanup function to clear the interval when component unmounts
    return () => {
      console.log("ProgressBar unmounted or interval cleared")
      clearInterval(interval);
    }
  }, [onComplete]);

  return (
    <div className='container' style={{ marginBottom: "20px" }}>
      <div className='progress-bar'
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
};

export default ProgressBar;
