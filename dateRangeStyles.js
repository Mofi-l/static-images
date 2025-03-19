// dateRangeStyles.js
export function injectDateRangeStyles() {
    const styles = `
        /* Date Range Modal Styles */
        .date-range-modal {
            background: #1a1f2e;
            border-radius: 20px;
            padding: 30px;
            width: 90%;
            max-width: 400px;
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(255, 255, 255, 0.1);
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

        /* Flatpickr Calendar Styles */
        .flatpickr-calendar {
            background: transparent !important;
            border: none !important;
            box-shadow: none !important;
            width: 100% !important;
            max-width: 340px !important;
            margin: 0 auto !important;
            padding: 0 !important;
        }

        .flatpickr-calendar.inline {
            box-shadow: none !important;
            background: transparent !important;
        }

        .flatpickr-months {
            padding: 10px 0;
            background: transparent !important;
        }

        .flatpickr-month {
            height: 40px !important;
            color: #fff !important;
            fill: #fff !important;
            background: transparent !important;
        }

        .flatpickr-current-month {
            padding: 0 !important;
            color: #fff !important;
            font-size: 16px !important;
        }

        .flatpickr-current-month input.cur-year {
            color: #fff !important;
        }

        .flatpickr-months .flatpickr-prev-month,
        .flatpickr-months .flatpickr-next-month {
            color: #fff !important;
            fill: #fff !important;
            height: 40px !important;
            padding: 10px !important;
        }

        .flatpickr-weekdays {
            background: transparent !important;
            margin: 10px 0 !important;
        }

        .flatpickr-weekday {
            background: transparent !important;
            color: rgba(255, 255, 255, 0.7) !important;
            font-size: 14px !important;
        }

        .flatpickr-days {
            background: transparent !important;
            border: none !important;
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
            color: #fff !important;
            background: transparent !important;
            border: none !important;
            border-radius: 50% !important;
        }

        .flatpickr-day.selected,
        .flatpickr-day.startRange,
        .flatpickr-day.endRange {
            background: #6c5ce7 !important;
            color: #fff !important;
            border: none !important;
        }

        .flatpickr-day.inRange {
            background: rgba(108, 92, 231, 0.2) !important;
            border: none !important;
            box-shadow: -5px 0 0 rgba(108, 92, 231, 0.2), 5px 0 0 rgba(108, 92, 231, 0.2) !important;
        }

        .flatpickr-day:hover {
            background: rgba(255, 255, 255, 0.1) !important;
        }

        .flatpickr-day.today {
            border: 2px solid #6c5ce7 !important;
        }

        .flatpickr-day.prevMonthDay,
        .flatpickr-day.nextMonthDay {
            color: rgba(255, 255, 255, 0.3) !important;
        }

        .flatpickr-day.disabled {
            color: rgba(255, 255, 255, 0.1) !important;
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
            background: rgba(255, 255, 255, 0.1);
            color: white;
        }

        #cancel-date-range:hover {
            background: rgba(255, 255, 255, 0.15);
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
