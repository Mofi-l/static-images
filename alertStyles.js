// alertStyles.js
export function injectAlertStyles() {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        .custom-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.4);
            z-index: 10000;
            display: flex;
            justify-content: center;
            align-items: center;
            backdrop-filter: blur(8px);
        }

        .custom-alert-box {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 8px;
            padding: 15px 25px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            text-align: center;
            max-width: 380px;
            width: 80%;
            animation: fadeIn 0.3s ease-out;
        }

        .custom-message {
            margin-bottom: 20px;
            font-size: 18px;
            line-height: 1.6;
            color: #333;
        }

        .custom-button {
            padding: 10px 25px;
            color: white;
            border: none;
            border-radius: 25px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s ease, transform 0.2s ease;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            margin: 0 5px;
        }

        .custom-button.primary {
            background-color: #4CAF50;
        }

        .custom-button.primary:hover {
            background-color: #45a049;
            transform: scale(1.05);
        }

        .custom-button.danger {
            background-color: #FF6F61;
        }

        .custom-button.danger:hover {
            background-color: #e85f53;
            transform: scale(1.05);
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: scale(0.9);
            }
            to {
                opacity: 1;
                transform: scale(1);
            }
        }
    `;
    document.head.appendChild(styleSheet);
}