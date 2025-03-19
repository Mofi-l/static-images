export function injectDateRangeStyles() {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        .flatpickr-calendar {
            background-color: #ffffff;
            border-radius: 12px;
            box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            padding: 16px;
            width: 307px !important;
        }

        .flatpickr-months {
            background-color: #232f3e;
            border-radius: 8px 8px 0 0;
            padding: 10px 0;
        }

        .flatpickr-month {
            color: #ffffff !important;
        }

        .flatpickr-current-month {
            font-size: 1.1em;
            padding: 0;
        }

        .flatpickr-current-month input.cur-year {
            color: #ffffff;
        }

        .flatpickr-monthDropdown-months {
            color: #ffffff;
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

        .flatpickr-day.selected:hover,
        .flatpickr-day.startRange:hover,
        .flatpickr-day.endRange:hover {
            background-color: #35445c;
            border-color: #35445c;
        }

        .flatpickr-prev-month,
        .flatpickr-next-month {
            color: #ffffff !important;
            fill: #ffffff !important;
        }

        .flatpickr-prev-month:hover,
        .flatpickr-next-month:hover {
            opacity: 0.8;
        }

        .flatpickr-day.today {
            border-color: #232f3e;
        }

        .flatpickr-day.today:hover {
            background-color: #232f3e;
            color: #ffffff;
        }

        .flatpickr-day.disabled {
            color: #cccccc;
        }

        .numInputWrapper:hover {
            background: transparent;
        }

        .numInputWrapper span {
            border: none;
        }

        .numInputWrapper span:hover {
            background: rgba(255, 255, 255, 0.1);
        }
    `;
    document.head.appendChild(styleSheet);
}