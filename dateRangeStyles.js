export function injectDateRangeStyles() {
    const styles = `
        /* Modal Overlay */
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            backdrop-filter: blur(5px);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            animation: fadeIn 0.3s ease-out;
        }

        /* Modal Content */
        .date-range-modal {
            background: #ffffff;
            padding: 25px;
            border-radius: 15px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            width: 100%;
            max-width: 350px;
            animation: slideIn 0.3s ease-out;
        }

        .modal-content {
            text-align: center;
        }

        .modal-title {
            color: #333333;
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 10px;
        }

        .modal-subtitle {
            color: #666666;
            font-size: 14px;
            margin-bottom: 20px;
        }

        /* Calendar Container */
        #calendar-container {
            margin-bottom: 20px;
            padding: 10px;
            background: #ffffff;
            border-radius: 10px;
        }

        /* Button Styles */
        .button-group {
            display: flex;
            gap: 15px;
            margin-top: 20px;
        }

        #apply-date-range,
        #cancel-date-range {
            flex: 1;
            padding: 12px 24px;
            border: none;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        #apply-date-range {
            background: linear-gradient(135deg, #28a745, #218838);
            color: white;
            box-shadow: 0 4px 15px rgba(40, 167, 69, 0.3);
        }

        #apply-date-range:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(40, 167, 69, 0.4);
        }

        #cancel-date-range {
            background: #f8f9fa;
            color: #333333;
            border: 1px solid #dee2e6;
        }

        #cancel-date-range:hover {
            background: #e9ecef;
        }

        /* Animations */
        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Mobile Responsiveness */
        @media (max-width: 480px) {
            .date-range-modal {
                max-width: 95%;
                padding: 20px;
                margin: 10px;
            }

            .modal-title {
                font-size: 20px;
            }

            .button-group {
                flex-direction: column;
            }

            #apply-date-range,
            #cancel-date-range {
                width: 100%;
                padding: 10px;
            }
        }

        /* Optional: Custom Scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
        }

        ::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: #666;
        }
    `;

    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
}
