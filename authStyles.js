.auth-modal {
    position: fixed;
    inset: 0;
    background-color: rgba(17, 17, 17, 0.9);
    display: grid;
    place-items: center;
    z-index: 1000;
    backdrop-filter: blur(8px);
}

.auth-modal-content {
    background: #ffffff;
    padding: 2.5rem;
    border-radius: 16px;
    width: min(90%, 400px);
    text-align: center;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
    animation: modalAppear 0.4s ease-out;
}

.auth-modal-title {
    color: #111827;
    font-size: 1.75rem;
    font-weight: 800;
    margin-bottom: 2rem;
    position: relative;
}

.auth-input-container {
    margin-bottom: 1.25rem;
    position: relative;
}

.auth-input {
    width: 100%;
    padding: 1rem 1.25rem;
    background: #f3f4f6;
    border: 2px solid transparent;
    border-radius: 12px;
    color: #111827;
    font-size: 1rem;
    transition: all 0.2s ease;
}

.auth-input:focus {
    outline: none;
    border-color: #6366f1;
    background: #ffffff;
    box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
}

.auth-input::placeholder {
    color: #9ca3af;
}

.auth-button-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-top: 2rem;
}

.auth-submit-btn,
.auth-cancel-btn {
    padding: 0.875rem 1.5rem;
    border: none;
    border-radius: 10px;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
}

.auth-submit-btn {
    background: #6366f1;
    color: white;
}

.auth-submit-btn:hover {
    background: #4f46e5;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(99, 102, 241, 0.2);
}

.auth-cancel-btn {
    background: #f3f4f6;
    color: #4b5563;
}

.auth-cancel-btn:hover {
    background: #e5e7eb;
    color: #374151;
}

/* Password toggle button */
.toggle-password-btn {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0.25rem;
    color: #6b7280;
    transition: color 0.2s ease;
}

.toggle-password-btn:hover {
    color: #4b5563;
}

.eye-icon {
    width: 1.25rem;
    height: 1.25rem;
}

@keyframes modalAppear {
    from {
        opacity: 0;
        transform: scale(0.95) translateY(-10px);
    }
    to {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
}

/* Modern form validation styles */
.auth-input:not(:placeholder-shown):valid {
    border-color: #10b981;
}

.auth-input:not(:placeholder-shown):invalid {
    border-color: #ef4444;
}

/* Loading state */
.auth-submit-btn.loading {
    position: relative;
    background: #6366f1;
    pointer-events: none;
}

.auth-submit-btn.loading::after {
    content: '';
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid #ffffff;
    border-radius: 50%;
    border-top-color: transparent;
    animation: spin 0.6s linear infinite;
}

@keyframes spin {
    to {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}
