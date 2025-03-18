// authStyles.js
export function injectAuthStyles() {
    const authStyles = document.createElement('style');
    authStyles.textContent = `
    .auth-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.75);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        backdrop-filter: blur(8px);
    }

    .auth-modal-content {
        background: #1a1f2e;
        padding: 30px;
        border-radius: 20px;
        width: 400px;
        text-align: center;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        border: 1px solid rgba(255, 255, 255, 0.1);
        animation: modalSlideIn 0.3s ease;
    }

    .auth-modal-title {
        color: white;
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 30px;
        text-transform: uppercase;
        letter-spacing: 1px;
        position: relative;
    }

    .auth-modal-title::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 50px;
        height: 2px;
        background: #0095ff;
        border-radius: 2px;
    }

    .auth-input-container {
        margin-bottom: 20px;
        position: relative;
    }

    .auth-input {
        width: 100%;
        padding: 12px 15px;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        color: white;
        font-size: 16px;
        transition: all 0.3s ease;
    }

    .auth-input:focus {
        outline: none;
        border-color: #0095ff;
        box-shadow: 0 0 0 2px rgba(0, 149, 255, 0.2);
    }

    .auth-input::placeholder {
        color: rgba(255, 255, 255, 0.5);
    }

    .toggle-password-btn {
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .toggle-password-btn svg {
        width: 20px;
        height: 20px;
        fill: #0095ff;
        transition: fill 0.2s ease;
    }

    .toggle-password-btn:hover svg {
        fill: #40a9ff;
    }

    .auth-button-container {
        display: flex;
        gap: 15px;
        margin-top: 30px;
    }

    .auth-submit-btn,
    .auth-cancel-btn {
        flex: 1;
        padding: 12px;
        border: none;
        border-radius: 8px;
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease;
        text-transform: uppercase;
    }

    .auth-submit-btn {
        background: #0095ff;
        color: white;
    }

    .auth-submit-btn:hover {
        background: #0077cc;
    }

    .auth-cancel-btn {
        background: #4b5563;
        color: white;
    }

    .auth-cancel-btn:hover {
        background: #374151;
    }

    @keyframes modalSlideIn {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    `;
    document.head.appendChild(authStyles);
}
