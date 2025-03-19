// dateRangeStyles.js
export function injectDateRangeStyles() {
    const styles = `
        /* Modal Overlay */
        .modal-overlay {
            background-color: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(5px);
        }

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
            padding: 10px;
            margin-bottom: 20px;
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

        /* Mobile Responsiveness */
        @media (max-width: 480px) {
            .date-range-modal {
                padding: 20px;
                width: 95%;
            }
        }
    `;

    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
}
