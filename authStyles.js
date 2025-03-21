// authStyles.js
export function injectAuthStyles() {
    const authStyles = document.createElement('style');
    authStyles.textContent = `
    .auth-modal {
        position: fixed;
        inset: 0;
        background: rgba(17, 17, 27, 0.9);
        display: grid;
        place-items: center;
        z-index: 1000;
        backdrop-filter: blur(12px);
    }

    .auth-modal-content {
        background: linear-gradient(165deg, #1e1e2e, #13131f);
        padding: 2.5rem;
        border-radius: 28px;
        width: min(90vw, 460px);
        position: relative;
        isolation: isolate;
        box-shadow: 
            0 25px 50px -12px rgba(0, 0, 0, 0.5),
            0 0 0 1px rgba(255, 255, 255, 0.1);
        animation: modalAppear 0.4s cubic-bezier(0.2, 0.9, 0.4, 1);
        overflow: hidden;
    }

    .auth-modal-content::before {
        content: '';
        position: absolute;
        inset: 0;
        background: radial-gradient(
            circle at top right,
            rgba(64, 169, 255, 0.1),
            transparent 60%
        );
        z-index: -1;
    }

    .auth-modal-title {
        font-size: 1.75rem;
        font-weight: 800;
        margin-bottom: 2rem;
        background: linear-gradient(135deg, #60a5fa, #a78bfa);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        position: relative;
        display: inline-block;
    }

    .auth-input-container {
        margin-bottom: 1.5rem;
        position: relative;
    }

    .auth-input {
        width: 100%;
        padding: 1rem 1.25rem;
        background: rgba(255, 255, 255, 0.03);
        border: 2px solid rgba(255, 255, 255, 0.08);
        border-radius: 16px;
        color: #fff;
        font-size: 1rem;
        transition: all 0.3s ease;
    }

    .auth-input:focus {
        outline: none;
        border-color: #60a5fa;
        background: rgba(255, 255, 255, 0.05);
        box-shadow: 
            0 0 0 4px rgba(96, 165, 250, 0.15),
            0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .auth-input::placeholder {
        color: rgba(255, 255, 255, 0.35);
    }

    .auth-button-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        margin-top: 2rem;
    }

    .auth-submit-btn,
    .auth-cancel-btn {
        padding: 1rem;
        border: none;
        border-radius: 14px;
        font-size: 0.95rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .auth-submit-btn {
        background: linear-gradient(135deg, #ffffff, #a78bfa);
        color: white;
        position: relative;
        overflow: hidden;
    }

    .auth-submit-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 16px rgba(96, 165, 250, 0.25);
    }

    .auth-submit-btn::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(
            to right,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
        );
        transform: translateX(-100%);
        transition: transform 0.5s ease;
    }

    .auth-submit-btn:hover::after {
        transform: translateX(100%);
    }

    .auth-cancel-btn {
        background: rgba(255, 255, 255, 0.05);
        color: rgba(255, 255, 255, 0.8);
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .auth-cancel-btn:hover {
        background: rgba(255, 255, 255, 0.08);
        transform: translateY(-2px);
    }

    .progress-bar {
        width: 100%;
        height: 4px;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 2px;
        overflow: hidden;
        margin: 1rem 0;
    }

    .progress-bar::after {
        content: '';
        position: absolute;
        width: 30%;
        height: 100%;
        background: linear-gradient(90deg, #60a5fa, #a78bfa);
        animation: loading 1.5s ease-in-out infinite;
    }

    @keyframes loading {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(400%); }
    }

    @keyframes modalAppear {
        from {
            opacity: 0;
            transform: scale(0.96) translateY(-20px);
        }
        to {
            opacity: 1;
            transform: scale(1) translateY(0);
        }
    }

    @media (max-width: 480px) {
        .auth-modal-content {
            padding: 2rem;
            border-radius: 24px;
        }

        .auth-button-container {
            grid-template-columns: 1fr;
        }
    }
    `;
    document.head.appendChild(authStyles);
}
