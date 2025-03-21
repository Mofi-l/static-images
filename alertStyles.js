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
    `;
    document.head.appendChild(styleSheet);
}