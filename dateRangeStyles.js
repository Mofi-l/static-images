// dateRangeStyles.js
export function injectDateRangeStyles() {
    const styles = `
/* Date Range Modal Styles */
.date-range-modal {
    background: rgba(28, 32, 44, 0.95);
    border-radius: 20px;
    padding: 30px;
    width: 90%;
    max-width: 400px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    animation: modalSlideIn 0.4s ease-out;
}

.modal-content {
    color: #ffffff;
}

.modal-title {
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 10px;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.modal-subtitle {
    text-align: center;
    color: rgba(255, 255, 255, 0.7);
    font-size: 14px;
    margin-bottom: 20px;
}

/* Calendar Wrapper Styles */
.calendar-wrapper {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 15px;
    padding: 20px;
    margin-bottom: 20px;
}

/* Flatpickr Custom Styling */
.flatpickr-calendar {
    background: transparent !important;
    box-shadow: none !important;
    border: none !important;
    width: 100% !important;
}

.flatpickr-months {
    margin-bottom: 10px;
}

.flatpickr-month {
    background: transparent !important;
    color: #fff !important;
}

.flatpickr-current-month {
    padding: 10px 0 !important;
}

.flatpickr-weekday {
    background: transparent !important;
    color: rgba(255, 255, 255, 0.7) !important;
}

.flatpickr-day {
    color: #fff !important;
    border-radius: 50% !important;
    height: 40px !important;
    line-height: 40px !important;
    margin: 2px !important;
    border: none !important;
    background: transparent !important;
}

.flatpickr-day.selected,
.flatpickr-day.startRange,
.flatpickr-day.endRange {
    background: #6c5ce7 !important;
    border-color: #6c5ce7 !important;
    box-shadow: 0 0 10px rgba(108, 92, 231, 0.3) !important;
}

.flatpickr-day.inRange {
    background: rgba(108, 92, 231, 0.3) !important;
    border-color: transparent !important;
    box-shadow: -5px 0 0 #1c202c, 5px 0 0 #1c202c !important;
}

.flatpickr-day:hover {
    background: rgba(255, 255, 255, 0.1) !important;
}

.flatpickr-day.today {
    border: 2px solid rgba(108, 92, 231, 0.5) !important;
}

/* Button Group Styles */
.button-group {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
}

.button-group button {
    padding: 12px 30px;
    border: none;
    border-radius: 25px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1px;
}

#apply-date-range {
    background: linear-gradient(135deg, #6c5ce7, #a393f5);
    color: white;
    box-shadow: 0 5px 15px rgba(108, 92, 231, 0.3);
}

#apply-date-range:hover {
    transform: translateY(-2px);
    box-shadow: 0 7px 20px rgba(108, 92, 231, 0.4);
}

#cancel-date-range {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    backdrop-filter: blur(5px);
}

#cancel-date-range:hover {
    background: rgba(255, 255, 255, 0.15);
}

/* Animation Keyframes */
@keyframes modalSlideIn {
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Mobile Responsiveness */
@media (max-width: 480px) {
    .date-range-modal {
        padding: 20px;
        width: 95%;
    }

    .modal-title {
        font-size: 20px;
    }

    .button-group button {
        padding: 10px 20px;
        font-size: 13px;
    }

    .flatpickr-day {
        height: 35px !important;
        line-height: 35px !important;
    }
}

/* Optional: Add these styles for a more polished look */
.flatpickr-prev-month,
.flatpickr-next-month {
    fill: #fff !important;
    opacity: 0.7 !important;
    transition: opacity 0.3s ease;
}

.flatpickr-prev-month:hover,
.flatpickr-next-month:hover {
    opacity: 1 !important;
}

.flatpickr-prev-month svg,
.flatpickr-next-month svg {
    filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.3));
}

    `;

    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
}