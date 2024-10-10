import React, { useEffect, useState } from 'react';
import ProgressBar from './ProgressBar';

function App() {
  const [bars, setBars] = useState([]);
  const [isLastBarComplete, setIsLastBarComplete] = useState(true);

  // Handler to add a new ProgressBar
  const addProgressBar = () => {
    if (isLastBarComplete) {
      console.log('Adding a new ProgressBar');
      // debugger; // Adding a new ProgressBar
      setIsLastBarComplete(false) // Indicate that a ProgressBar is in progress
      setBars([...bars, <ProgressBar key={bars.length} onComplete={handleProgressBarComplete} />]);
    }
  };
  // Callback function when a ProgressBar completes
  const handleProgressBarComplete = () => {
    console.log('A ProgressBar has completed');
    // debugger; // A ProgressBar has completed
    setIsLastBarComplete(true); // Indicate that the ProgressBar has finished
  };


  return (
    // <div className='main' style={{ padding: '50px' }}>
    //   <h1>Progress Bar</h1>
    //   <ProgressBar />
    // </div>

    <div className='main' style={{ padding: "50px", display: "flex", justifyContent: "center", flexDirection: "column" }}>
      <div>
        <ProgressBar />
        {bars}
      </div>
      <button style={{ width: "30%", margin: "0 auto", marginTop: "50px" }} onClick={addProgressBar}>Add Progress Bar</button>
    </div>

  );
}

export default App;
