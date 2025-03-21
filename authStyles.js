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
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        backdrop-filter: blur(10px);
    }

    .auth-modal-content {
        background: linear-gradient(145deg, #1a1f2e, #232836);
        padding: 35px;
        border-radius: 24px;
        width: 420px;
        text-align: center;
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
        border: 1px solid rgba(255, 255, 255, 0.12);
        animation: modalSlideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .auth-modal-title {
        color: white;
        font-size: 26px;
        font-weight: 700;
        margin-bottom: 35px;
        text-transform: uppercase;
        letter-spacing: 1.2px;
        background: linear-gradient(90deg, #0095ff, #40a9ff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .auth-modal-title::after {
        content: '';
        position: absolute;
        bottom: -12px;
        left: 50%;
        transform: translateX(-50%);
        width: 60px;
        height: 3px;
        background: linear-gradient(90deg, #0095ff, #40a9ff);
        border-radius: 3px;
    }

    .auth-input-container {
        margin-bottom: 24px;
        position: relative;
    }

    .auth-input {
        width: 100%;
        padding: 14px 18px;
        background: rgba(255, 255, 255, 0.06);
        border: 2px solid rgba(255, 255, 255, 0.12);
        border-radius: 12px;
        color: white;
        font-size: 16px;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .auth-input:focus {
        outline: none;
        border-color: #0095ff;
        box-shadow: 0 0 0 3px rgba(0, 149, 255, 0.25);
        background: rgba(255, 255, 255, 0.08);
    }

    .auth-input::placeholder {
        color: rgba(255, 255, 255, 0.4);
        font-weight: 500;
    }

    .auth-button-container {
        display: flex;
        gap: 16px;
        margin-top: 35px;
    }

    .auth-submit-btn,
    .auth-cancel-btn {
        flex: 1;
        padding: 14px;
        border: none;
        border-radius: 12px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .auth-submit-btn {
        background: linear-gradient(90deg, #0095ff, #40a9ff);
        color: white;
    }

    .auth-submit-btn:hover {
        background: linear-gradient(90deg, #0077cc, #1890ff);
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(0, 149, 255, 0.3);
    }

    .auth-cancel-btn {
        background: rgba(75, 85, 99, 0.8);
        color: white;
    }

    .auth-cancel-btn:hover {
        background: rgba(55, 65, 81, 0.9);
        transform: translateY(-1px);
    }

    .progress-bar {
        width: 100%;
        height: 5px;
        background: rgba(255, 255, 255, 0.08);
        border-radius: 3px;
        margin: 12px 0;
        overflow: hidden;
        position: relative;
    }

    .progress-bar::after {
        content: '';
        display: block;
        width: 40%;
        height: 100%;
        background: linear-gradient(90deg, #0095ff, #40a9ff);
        position: absolute;
        left: -40%;
        animation: progress 1.8s infinite cubic-bezier(0.4, 0, 0.2, 1);
    }

    @keyframes progress {
        0% { 
            transform: translateX(0%); 
            opacity: 0.9;
        }
        50% {
            opacity: 1;
        }
        100% { 
            transform: translateX(350%); 
            opacity: 0.9;
        }
    }

    @keyframes modalSlideIn {
        0% {
            opacity: 0;
            transform: translateY(-30px) scale(0.95);
        }
        100% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }
    `;
    document.head.appendChild(authStyles);
}
