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
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }

        .auth-modal-content {
            background: #fff;
            padding: 20px 30px;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            text-align: center;
            max-width: 400px;
            width: 100%;
        }

        .auth-modal-title {
            margin-bottom: 20px;
            color: black;
        }

        .auth-input {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 1rem;
        }

        .auth-password-container {
            position: relative;
        }

        .toggle-password-btn {
            position: absolute;
            top: 50%;
            right: 10px;
            transform: translateY(-50%);
            border: none;
            background: none;
            cursor: pointer;
            font-size: 0.9rem;
            color: #007bff;
        }

        .auth-button-container {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
        }

        .auth-submit-btn {
            padding: 10px 20px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 1rem;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        .auth-cancel-btn {
            padding: 10px 20px;
            background-color: #6c757d;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 1rem;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        .auth-submit-btn:hover {
            background-color: #0056b3;
        }

        .auth-cancel-btn:hover {
            background-color: #5a6268;
        }
    `;
    document.head.appendChild(styleSheet);
}