// dateRangeStyles.js
export function injectDateRangeStyles() {
    const styles = `
        /* Date Range Modal Styles */
        .date-range-modal {
            background: #ffffff;
            border-radius: 20px;
            padding: 30px;
            width: 90%;
            max-width: 400px;
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(0, 0, 0, 0.1);
        }

        .modal-content {
            color: #333333;
        }

        .modal-title {
            font-size: 24px;
            font-weight: 600;
            text-align: center;
            margin-bottom: 10px;
            color: #333333;
        }

        .modal-subtitle {
            text-align: center;
            color: #666666;
            font-size: 14px;
            margin-bottom: 20px;
        }

        /* Calendar Wrapper Styles */
        .calendar-wrapper {
            background: #ffffff;
            border-radius: 15px;
            padding: 20px;
            margin-bottom: 20px;
            border: 1px solid #e0e0e0;
        }

        /* Flatpickr Calendar Styles */
        .flatpickr-calendar {
            background: #ffffff !important;
            border: none !important;
            box-shadow: none !important;
            width: 100% !important;
            max-width: 340px !important;
            margin: 0 auto !important;
        }

        .flatpickr-months {
            padding: 10px 0;
        }

        .flatpickr-month {
            height: 40px !important;
            color: #333333 !important;
            fill: #333333 !important;
        }

        .flatpickr-current-month {
            color: #333333 !important;
            font-size: 16px !important;
        }

        .flatpickr-current-month input.cur-year {
            color: #333333 !important;
        }

        .flatpickr-months .flatpickr-prev-month,
        .flatpickr-months .flatpickr-next-month {
            color: #333333 !important;
            fill: #333333 !important;
            height: 40px !important;
            padding: 10px !important;
        }

        .flatpickr-weekdays {
            margin: 10px 0 !important;
        }

        .flatpickr-weekday {
            color: #666666 !important;
            font-size: 14px !important;
            font-weight: bold !important;
        }

        .dayContainer {
            width: 100% !important;
            min-width: 100% !important;
            max-width: 100% !important;
        }

        .flatpickr-day {
            max-width: 40px !important;
            height: 40px !important;
            line-height: 40px !important;
            margin: 2px !important;
            color: #333333 !important;
            border: none !important;
            border-radius: 50% !important;
        }

        .flatpickr-day.selected,
        .flatpickr-day.startRange,
        .flatpickr-day.endRange {
            background: #6c5ce7 !important;
            color: #ffffff !important;
            border: none !important;
        }

        .flatpickr-day.inRange {
            background: rgba(108, 92, 231, 0.2) !important;
            color: #333333 !important;
            border: none !important;
            box-shadow: -5px 0 0 rgba(108, 92, 231, 0.2), 5px 0 0 rgba(108, 92, 231, 0.2) !important;
        }

        .flatpickr-day:hover {
            background: rgba(108, 92, 231, 0.1) !important;
        }

        .flatpickr-day.today {
            border: 2px solid #6c5ce7 !important;
            color: #6c5ce7 !important;
        }

        .flatpickr-day.prevMonthDay,
        .flatpickr-day.nextMonthDay {
            color: #999999 !important;
        }

        .flatpickr-day.disabled {
            color: #cccccc !important;
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
            background: #f0f0f0;
            color: #333333;
        }

        #cancel-date-range:hover {
            background: #e0e0e0;
        }

        /* Modal Overlay */
        .modal-overlay {
            background-color: rgba(0, 0, 0, 0.5) !important;
            backdrop-filter: blur(5px) !important;
        }

        /* Mobile Responsiveness */
        @media (max-width: 480px) {
            .date-range-modal {
                padding: 20px;
                width: 95%;
            }

            .flatpickr-calendar {
                max-width: 300px !important;
            }

            .flatpickr-day {
                max-width: 35px !important;
                height: 35px !important;
                line-height: 35px !important;
            }
        }
    `;

    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
}
