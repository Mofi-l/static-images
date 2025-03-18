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
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 10000;
            display: flex;
            justify-content: center;
            align-items: center;
            backdrop-filter: blur(8px);
            animation: overlayFadeIn 0.3s ease-out;
        }

        .custom-alert-box {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.98));
            border-radius: 16px;
            padding: 25px 35px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1),
                        0 1px 8px rgba(0, 0, 0, 0.06),
                        0 0 0 1px rgba(255, 255, 255, 0.5) inset;
            text-align: center;
            max-width: 400px;
            width: 90%;
            animation: modalSlideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            transform-origin: center center;
        }

        .custom-message {
            margin-bottom: 25px;
            font-size: 1.125rem;
            line-height: 1.6;
            color: #2c3e50;
            font-weight: 500;
            text-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);
        }

        .custom-button {
            padding: 12px 28px;
            color: white;
            border: none;
            border-radius: 12px;
            cursor: pointer;
            font-size: 0.95rem;
            font-weight: 600;
            letter-spacing: 0.3px;
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            margin: 0 8px;
            position: relative;
            overflow: hidden;
        }

        .custom-button::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .custom-button:hover::after {
            opacity: 1;
        }

        .custom-button.primary {
            background: linear-gradient(135deg, #4CAF50, #43A047);
        }

        .custom-button.primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 15px rgba(76, 175, 80, 0.3);
        }

        .custom-button.primary:active {
            transform: translateY(1px);
            box-shadow: 0 2px 8px rgba(76, 175, 80, 0.2);
        }

        .custom-button.danger {
            background: linear-gradient(135deg, #FF6B6B, #FF5252);
        }

        .custom-button.danger:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 15px rgba(255, 82, 82, 0.3);
        }

        .custom-button.danger:active {
            transform: translateY(1px);
            box-shadow: 0 2px 8px rgba(255, 82, 82, 0.2);
        }

        @keyframes overlayFadeIn {
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
                transform: scale(0.95) translateY(10px);
            }
            to {
                opacity: 1;
                transform: scale(1) translateY(0);
            }
        }

        @media (max-width: 480px) {
            .custom-alert-box {
                width: 85%;
                padding: 20px 25px;
                margin: 20px;
            }

            .custom-message {
                font-size: 1rem;
                margin-bottom: 20px;
            }

            .custom-button {
                padding: 10px 20px;
                font-size: 0.9rem;
                width: 100%;
                margin: 8px 0;
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .custom-overlay,
            .custom-alert-box,
            .custom-button {
                animation: none;
                transition: opacity 0.1s ease-in-out;
            }
        }

        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
            .custom-alert-box {
                background: linear-gradient(135deg, rgba(33, 33, 33, 0.95), rgba(45, 45, 45, 0.98));
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2),
                            0 1px 8px rgba(0, 0, 0, 0.1),
                            0 0 0 1px rgba(255, 255, 255, 0.1) inset;
            }

            .custom-message {
                color: #ffffff;
                text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
            }

            .custom-button.primary {
                background: linear-gradient(135deg, #43A047, #388E3C);
            }

            .custom-button.danger {
                background: linear-gradient(135deg, #FF5252, #D32F2F);
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