export function injectMainStyles() {
    const styles = `
/* Enhanced Dropdown Styling */
    #aux-widget select {
        width: 100%;
        padding: 6px;
        border: 1px solid #ddd; /* Slightly lighter border */
        border-radius: 4px;
        background-color: rgba(0, 0, 0, 0.75); /* Darker background */
        color: white;
        font-size: 13px;
        font-family: 'Arial', sans-serif;
        transition: background-color 0.3s ease, color 0.3s ease;
    }

    /* No change in background color on hover */
    #aux-widget select:hover {
        background-color: rgba(0, 0, 0, 0.75); /* Keep background black */
        color: white; /* Keep text color white */
    }

    /* Dropdown option styles - consistent black background */
    #aux-widget select option {
        background-color: #000; /* Solid black background */
        color: white;
        padding: 8px;
        border: none;
    }

    /* Remove hover effects for options */
    #aux-widget select option:hover {
        background-color: #000; /* Keep the black background */
        color: white; /* Keep the text white */
    }

    /* Container styling for margins */
    #aux-l2-container, #aux-l3-container {
        margin-top: 10px;
    }

    /* Timer display styling */
    #aux-timer {
        padding: 5px;
        margin-top: 5px;
        background: rgba(255, 255, 255, 0.85); /* Softer background for the timer */
        border-radius: 4px;
        font-size: 13px;
        color: #333;
    }

    /* Subtle box shadow for the widget */
    #aux-widget {
        width: 250px;
        height: auto;
        max-height: 500px;
        overflow-y: auto;
        transition: height 0.3s ease;
    }

    #aux-widget div {
        margin-top: 5px;
    }

    /* Focus effect for the dropdown */
    #aux-widget select:focus {
        outline: none;
        border: 1px solid #6c5ce7; /* Blue border on focus */
        box-shadow: 0 0 6px rgba(108, 92, 231, 0.7); /* Softer glow effect */
    }

    /* Transparent dropdown styling after selection */
    .transparent-dropdown {
        background-color: rgba(0, 0, 0, 0.75) !important; /* Keep background black after selection */
        color: white !important; /* Ensure text is still visible */
    }
    `;
    
    const styleSheet = document.createElement("style");
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
}
