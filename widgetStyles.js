// widgetStyles.js
export function injectWidgetStyles() {
    const styles = `
/* Core Widget Styling */
#aux-widget {
    position: fixed;
    top: 5px;
    left: 1000px;
    z-index: 10000;
    width: 250px;
    height: auto;
    max-height: 500px;
    overflow-y: auto;
    background: url(https://raw.githubusercontent.com/Mofi-l/static-images/main/Background.jpg) no-repeat center center / cover;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    color: white;
    transition: height 0.3s ease;
}

/* Enhanced Dropdown Styling */
#aux-widget select {
    width: 100%;
    padding: 6px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.75);
    color: white;
    font-size: 13px;
    font-family: 'Arial', sans-serif;
    transition: background-color 0.3s ease, color 0.3s ease;
    appearance: none;
    cursor: pointer;
}

#aux-widget select:hover {
    background-color: rgba(0, 0, 0, 0.75);
    color: white;
}

#aux-widget select:focus {
    outline: none;
    border: 1px solid #6c5ce7;
    box-shadow: 0 0 6px rgba(108, 92, 231, 0.7);
}

/* Dropdown Options */
#aux-widget select option {
    background-color: #000;
    color: white;
    padding: 8px;
    border: none;
}

/* Dropdown Containers */
#aux-l2-container,
#aux-l3-container {
    margin-top: 10px;
    position: relative;
}

/* Timer Display */
#aux-timer {
    padding: 5px;
    margin-top: 5px;
    background: rgba(255, 255, 255, 0.85);
    border-radius: 4px;
    font-size: 13px;
    color: #333;
}

/* Transparent Dropdown State */
.transparent-dropdown {
    background-color: rgba(0, 0, 0, 0.75) !important;
    color: white !important;
}

/* Animation Keyframes */
@keyframes cosmicMinimize {
    0% {
        transform: translate(0, 0) scale(1);
        opacity: 1;
    }
    50% {
        transform: translate(var(--target-x), var(--target-y) - 50px) scale(0.5);
        opacity: 0.7;
    }
    100% {
        transform: translate(var(--target-x), var(--target-y)) scale(0);
        opacity: 0;
    }
}

@keyframes cosmicMaximize {
    0% {
        transform: translate(var(--target-x), var(--target-y)) scale(0);
        opacity: 0;
    }
    50% {
        transform: translate(var(--target-x), var(--target-y) - 50px) scale(0.5);
        opacity: 0.7;
    }
    100% {
        transform: translate(0, 0) scale(1);
        opacity: 1;
    }
}

/* Animation Classes */
#aux-widget.minimizing {
    animation: cosmicMinimize 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

#aux-widget.maximizing {
    animation: cosmicMaximize 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

/* Action Buttons */
#action-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 15px;
}

#action-buttons img {
    width: 30px;
    height: 30px;
    cursor: pointer;
    margin: 5px 2px;
    transition: transform 0.2s ease;
}

#action-buttons img:hover {
    transform: scale(1.1);
}

/* Minimize Box */
#minimized-box {
    position: fixed;
    bottom: 10px;
    right: 10px;
    padding: 10px;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    cursor: pointer;
    border-radius: 5px;
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
    #aux-widget {
        left: 50%;
        transform: translateX(-50%);
        width: 90%;
        max-width: 300px;
    }
}

/* Minimize Button Styling */
#minimize-btn {
    cursor: pointer;
    position: absolute;
    top: -1px;
    right: 5px;
    z-index: 1;
}

#minimize-btn img {
    width: 50px;
    height: 50px;
    filter: drop-shadow(0 0 5px rgba(255, 165, 0, 0.5));
    animation: glowPulse 2s ease-in-out infinite;
    transition: all 0.3s ease;
}

#minimize-btn:hover img {
    filter: drop-shadow(0 0 10px rgba(255, 165, 0, 0.8));
    transform: scale(1.05);
}

/* Glowing Heartbeat Animation */
@keyframes glowPulse {
    0% {
        filter: drop-shadow(0 0 5px rgba(255, 165, 0, 0.5));
        transform: scale(1);
    }
    50% {
        filter: drop-shadow(0 0 15px rgba(255, 165, 0, 0.8));
        transform: scale(1.03);
    }
    100% {
        filter: drop-shadow(0 0 5px rgba(255, 165, 0, 0.5));
        transform: scale(1);
    }
}

/* Optional: Add this if you want a more dramatic effect on hover */
#minimize-btn:hover img {
    animation: glowPulseHover 1s ease-in-out infinite;
}

@keyframes glowPulseHover {
    0% {
        filter: drop-shadow(0 0 10px rgba(255, 165, 0, 0.8));
        transform: scale(1.05);
    }
    50% {
        filter: drop-shadow(0 0 20px rgba(255, 165, 0, 1));
        transform: scale(1.08);
    }
    100% {
        filter: drop-shadow(0 0 10px rgba(255, 165, 0, 0.8));
        transform: scale(1.05);
    }
}

/* Toggle Button Styling with Enhanced Animation */
#toggle-button {
    background: transparent;
    border: none;
    cursor: pointer;
    position: relative;
    padding: 5px;
    transition: all 0.3s ease;
}

#toggle-button img {
    width: 15px;
    height: 15px;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Rotation Animation when Active */
#toggle-button.active img {
    transform: rotate(180deg) scale(1.1);
}

/* Hover Effects */
#toggle-button:hover img {
    opacity: 0.8;
    transform: scale(1.1);
}

#toggle-button.active:hover img {
    transform: rotate(180deg) scale(1.1);
}

/* Date Range */
        .date-range-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
            z-index: 1000;
        }

        .date-range-modal.fade-in {
            opacity: 1;
        }

        .date-range-modal.fade-out {
            opacity: 0;
        }

        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.6);
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .modal-content {
            background: #232f3e;
            padding: 24px;
            border-radius: 12px;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
            text-align: center;
            width: auto;
            max-width: 90%;
            position: relative;
        }

        .modal-content h2 {
            margin-bottom: 15px;
            font-size: 1.5rem;
            color: #ffffff;
        }

        .modal-content p {
            margin-bottom: 20px;
            font-size: 0.95rem;
            color: #999999;
        }

        #calendar-container {
            margin-bottom: 20px;
        }

        .button-container {
            display: flex;
            justify-content: space-between;
            gap: 15px;
            margin-top: 20px;
        }

        .btn-primary, .btn-secondary {
            flex: 1;
            padding: 12px;
            font-size: 0.875rem;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .btn-primary {
            background: linear-gradient(90deg, #28a745, #218838);
            color: white;
        }

        .btn-secondary {
            background-color: #6c757d;
            color: white;
        }

        .btn-primary:hover {
            background: linear-gradient(90deg, #218838, #1e7e34);
            transform: translateY(-1px);
        }

        .btn-secondary:hover {
            background-color: #5a6268;
            transform: translateY(-1px);
        }

        .flatpickr-calendar {
            background-color: #ffffff;
            border-radius: 12px;
            box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            padding: 16px;
            width: 307px !important;
        }

        .flatpickr-months {
            background-color: #ffffff;
            border-radius: 8px 8px 0 0;
            padding: 10px 0;
        }

        .flatpickr-month {
            color: #000000 !important;
        }

        .flatpickr-current-month {
            font-size: 1.1em;
            padding: 0;
        }

        .flatpickr-current-month input.cur-year {
            color: #000000;
        }

        .flatpickr-monthDropdown-months {
            color: #000000;
        }

        .flatpickr-weekdays {
            background-color: #ffffff;
            margin-top: 8px;
        }

        .flatpickr-weekday {
            color: #232f3e !important;
            font-weight: 600;
        }

        .flatpickr-day {
            border-radius: 6px;
            color: #333333;
            margin: 2px;
            height: 36px;
            line-height: 36px;
            width: 36px;
        }

        .flatpickr-day.selected,
        .flatpickr-day.startRange,
        .flatpickr-day.endRange {
            background-color: #232f3e;
            border-color: #232f3e;
            color: #ffffff;
        }

        .flatpickr-day.inRange {
            background-color: #e6eaf0;
            border-color: #e6eaf0;
            color: #232f3e;
        }

        .flatpickr-day:hover {
            background-color: #f5f6f7;
            border-color: #f5f6f7;
        }

        .flatpickr-day.today {
            border-color: #232f3e;
        }

        .flatpickr-day.today:hover {
            background-color: #232f3e;
            color: #ffffff;
        }

        @media (max-width: 480px) {
            .modal-content {
                padding: 16px;
                width: 95%;
            }

            .button-container {
                flex-direction: column;
            }

            .btn-primary, .btn-secondary {
                width: 100%;
            }
        }
    `;

    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
}
