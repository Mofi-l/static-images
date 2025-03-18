// alertStyles.js
export function injectAlertStyles() {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        /* Custom Alert Styles */
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

        /* Authentication Modal Styles */
        .auth-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            backdrop-filter: blur(8px);
            animation: modalFadeIn 0.3s ease-out;
        }

        .auth-modal-content {
            background: linear-gradient(145deg, #ffffff, #f5f5f5);
            padding: 30px 40px;
            border-radius: 16px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2),
                       0 0 0 1px rgba(255, 255, 255, 0.1);
            text-align: center;
            max-width: 400px;
            width: 90%;
            transform: translateY(0);
            animation: modalSlideIn 0.4s ease-out;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .auth-modal-title {
            margin-bottom: 25px;
            color: #2c3e50;
            font-size: 24px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            position: relative;
        }

        .auth-modal-title::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 50%;
            transform: translateX(-50%);
            width: 50px;
            height: 3px;
            background: linear-gradient(90deg, #007bff, #00d2ff);
            border-radius: 2px;
        }

        .auth-input {
            width: 100%;
            padding: 12px 15px;
            margin-bottom: 20px;
            border: 2px solid #e1e1e1;
            border-radius: 10px;
            font-size: 1rem;
            transition: all 0.3s ease;
            background: rgba(255, 255, 255, 0.9);
            box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
        }

        .auth-input:focus {
            outline: none;
            border-color: #007bff;
            box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.2);
            transform: translateY(-1px);
        }

        .auth-password-container {
            position: relative;
            margin-bottom: 25px;
        }

        .toggle-password-btn {
            position: absolute;
            top: 50%;
            right: 12px;
            transform: translateY(-50%);
            border: none;
            background: none;
            cursor: pointer;
            font-size: 0.9rem;
            color: #007bff;
            padding: 5px 10px;
            transition: all 0.2s ease;
        }

        .toggle-password-btn:hover {
            color: #0056b3;
            transform: translateY(-50%) scale(1.05);
        }

        .auth-button-container {
            display: flex;
            justify-content: space-between;
            gap: 15px;
            margin-top: 30px;
        }

        .auth-submit-btn,
        .auth-cancel-btn {
            flex: 1;
            padding: 12px 20px;
            border: none;
            border-radius: 10px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .auth-submit-btn {
            background: linear-gradient(135deg, #007bff, #0056b3);
            color: white;
            box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);
        }

        .auth-submit-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(0, 123, 255, 0.4);
            background: linear-gradient(135deg, #0056b3, #003d80);
        }

        .auth-cancel-btn {
            background: linear-gradient(135deg, #6c757d, #495057);
            color: white;
            box-shadow: 0 4px 15px rgba(108, 117, 125, 0.3);
        }

        .auth-cancel-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(108, 117, 125, 0.4);
            background: linear-gradient(135deg, #5a6268, #343a40);
        }

        .auth-submit-btn:active,
        .auth-cancel-btn:active {
            transform: translateY(1px);
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }

        @keyframes modalFadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        @keyframes modalSlideIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Mobile Responsiveness */
        @media (max-width: 480px) {
            .auth-modal-content {
                padding: 25px;
                width: 95%;
            }

            .auth-modal-title {
                font-size: 20px;
            }

            .auth-button-container {
                flex-direction: column;
            }

            .auth-submit-btn,
            .auth-cancel-btn {
                width: 100%;
                margin: 5px 0;
            }
        }

        /* Dark Mode Support */
        @media (prefers-color-scheme: dark) {
            .auth-modal-content {
                background: linear-gradient(145deg, #2c3e50, #1a2639);
            }

            .auth-modal-title {
                color: #ffffff;
            }

            .auth-input {
                background: rgba(255, 255, 255, 0.05);
                border-color: rgba(255, 255, 255, 0.1);
                color: white;
            }

            .auth-input::placeholder {
                color: rgba(255, 255, 255, 0.5);
            }

            .auth-input:focus {
                border-color: #007bff;
                background: rgba(255, 255, 255, 0.1);
            }
        }
    `;
    document.head.appendChild(styleSheet);
}