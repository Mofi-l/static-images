export function injectMainStyles() {
    const styles = `
/*----------------------
1. Components & Forms
----------------------*/

    /* Enhanced Dropdown Styling */
    #aux-widget select {
        width: 100%;
        padding: 6px;
        border: 1px solid #ddd; /* Slightly lighter border */
        border-radius: 4px;
        background-color: rgba(0, 0, 0, 0.75); /* Darker background */
        color: white;
        font-size: 13px;
        font-family: 'Arial', sans-serif;
        transition: background-color 0.3s ease, color 0.3s ease;
    }

    /* No change in background color on hover */
    #aux-widget select:hover {
        background-color: rgba(0, 0, 0, 0.75); /* Keep background black */
        color: white; /* Keep text color white */
    }

    /* Dropdown option styles - consistent black background */
    #aux-widget select option {
        background-color: #000; /* Solid black background */
        color: white;
        padding: 8px;
        border: none;
    }

    /* Remove hover effects for options */
    #aux-widget select option:hover {
        background-color: #000; /* Keep the black background */
        color: white; /* Keep the text white */
    }

    /* Container styling for margins */
    #aux-l2-container, #aux-l3-container {
        margin-top: 10px;
    }

    /* Timer display styling */
    #aux-timer {
        padding: 5px;
        margin-top: 5px;
        background: rgba(255, 255, 255, 0.85); /* Softer background for the timer */
        border-radius: 4px;
        font-size: 13px;
        color: #333;
    }

    /* Subtle box shadow for the widget */
    #aux-widget {
        width: 250px;
        height: auto;
        max-height: 500px;
        overflow-y: auto;
        transition: height 0.3s ease;
    }

    #aux-widget div {
        margin-top: 5px;
    }

    /* Focus effect for the dropdown */
    #aux-widget select:focus {
        outline: none;
        border: 1px solid #6c5ce7; /* Blue border on focus */
        box-shadow: 0 0 6px rgba(108, 92, 231, 0.7); /* Softer glow effect */
    }

    /* Transparent dropdown styling after selection */
    .transparent-dropdown {
        background-color: rgba(0, 0, 0, 0.75) !important; /* Keep background black after selection */
        color: white !important; /* Ensure text is still visible */
    }

/* Buttons */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1.5rem;
    border-radius: var(--radius-md);
    font-weight: 500;
    transition: var(--transition-normal);
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.btn-primary {
    background: linear-gradient(135deg, var(--primary-color), #8677e9);
    color: white;
    box-shadow: 0 4px 15px rgba(108, 92, 231, 0.3);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(108, 92, 231, 0.4);
}

.btn-secondary {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(4px);
    border: 1px solid var(--border-light);
}

.btn-secondary:hover {
    background: rgba(255, 255, 255, 0.2);
}

.btn-danger {
    background: linear-gradient(135deg, var(--error-color), #ff6b81);
}

.btn-success {
    background: linear-gradient(135deg, var(--success-color), #4cd137);
}

/* Form Elements */
.form-group {
    margin-bottom: var(--spacing-lg);
}

.form-label {
    display: block;
    margin-bottom: var(--spacing-xs);
    font-weight: 500;
    color: rgba(255, 255, 255, 0.9);
}

.form-input {
    width: 100%;
    padding: 12px 16px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    color: var(--text-color);
    transition: var(--transition-normal);
}

.form-input:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(108, 92, 231, 0.2);
}

.form-input::placeholder {
    color: rgba(255, 255, 255, 0.5);
}

/* Custom Select */
.custom-select {
    position: relative;
    width: 100%;
}

.custom-select select {
    width: 100%;
    padding: 12px 16px;
    padding-right: 40px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    color: var(--text-color);
    appearance: none;
    cursor: pointer;
}

.custom-select::after {
    content: '▼';
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    font-size: 0.8em;
    color: rgba(255, 255, 255, 0.7);
}

/* Checkboxes and Radio Buttons */
.custom-control {
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 1.5rem;
    margin-bottom: var(--spacing-sm);
}

.custom-control-input {
    position: absolute;
    left: 0;
    z-index: -1;
    width: 1rem;
    height: 1rem;
    opacity: 0;
}

.custom-control-label {
    position: relative;
    margin-bottom: 0;
    vertical-align: top;
    cursor: pointer;
}

.custom-control-label::before {
    content: '';
    position: absolute;
    left: -1.5rem;
    top: 0.25rem;
    display: block;
    width: 1rem;
    height: 1rem;
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
}

.custom-control-input:checked ~ .custom-control-label::before {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
}

/* Form Validation States */
.form-input.is-valid {
    border-color: var(--success-color);
    padding-right: calc(1.5em + 0.75rem);
    background-image: url("data:image/svg+xml,..."); /* Add checkmark SVG */
    background-repeat: no-repeat;
    background-position: right calc(0.375em + 0.1875rem) center;
    background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}

.form-input.is-invalid {
    border-color: var(--error-color);
    padding-right: calc(1.5em + 0.75rem);
    background-image: url("data:image/svg+xml,..."); /* Add error SVG */
    background-repeat: no-repeat;
    background-position: right calc(0.375em + 0.1875rem) center;
    background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}

.invalid-feedback {
    display: none;
    width: 100%;
    margin-top: 0.25rem;
    font-size: 0.875em;
    color: var(--error-color);
}

.form-input.is-invalid ~ .invalid-feedback {
    display: block;
}

/* Loading States */
.form-loading {
    position: relative;
    pointer-events: none;
}

.form-loading::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    border-radius: var(--radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
}

.form-loading::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 24px;
    height: 24px;
    margin: -12px 0 0 -12px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-top-color: var(--primary-color);
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
    z-index: 1;
}

/*----------------------
3. Popups
----------------------*/
/* Tooltips */
.tooltip {
    position: relative;
    display: inline-block;
}

.tooltip-content {
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    padding: 8px 12px;
    background: var(--bg-secondary);
    border-radius: var(--radius-sm);
    font-size: 0.875rem;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: var(--transition-normal);
    z-index: 100;
}

.tooltip:hover .tooltip-content {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(-8px);
}

/* Dropdown */
.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-toggle {
    padding: var(--spacing-sm) var(--spacing-md);
    background: rgba(255, 255, 255, 0.1);
    border-radius: var(--radius-md);
    cursor: pointer;
}

.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 200px;
    background: var(--bg-secondary);
    border-radius: var(--radius-md);
    padding: var(--spacing-sm) 0;
    margin-top: var(--spacing-sm);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: var(--transition-normal);
    z-index: 100;
}

.dropdown.active .dropdown-menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.dropdown-item {
    padding: var(--spacing-sm) var(--spacing-md);
    display: block;
    color: var(--text-color);
    transition: var(--transition-normal);
}

.dropdown-item:hover {
    background: rgba(255, 255, 255, 0.1);
}

/* Cards */
.card {
    background: rgba(255, 255, 255, 0.05);
    border-radius: var(--radius-lg);
    padding: var(--spacing-lg);
    border: 1px solid var(--border-color);
    transition: var(--transition-normal);
}

.card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
}

.card-header {
    margin-bottom: var(--spacing-md);
}

.card-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: var(--spacing-xs);
}

.card-body {
    color: rgba(255, 255, 255, 0.8);
}

/* Badges */
.badge {
    display: inline-flex;
    align-items: center;
    padding: 4px 8px;
    border-radius: var(--radius-sm);
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.badge-primary {
    background: var(--primary-color);
    color: white;
}

.badge-success {
    background: var(--success-color);
    color: white;
}

.badge-warning {
    background: var(--warning-color);
    color: black;
}

.badge-danger {
    background: var(--error-color);
    color: white;
}

/* Progress Bars */
.progress {
    height: 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: var(--radius-sm);
    overflow: hidden;
}

.progress-bar {
    height: 100%;
    background: var(--primary-color);
    border-radius: var(--radius-sm);
    transition: width 0.3s ease;
}

/* Alerts */
.alert {
    padding: var(--spacing-md);
    border-radius: var(--radius-md);
    margin-bottom: var(--spacing-md);
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
}

.alert-success {
    background: rgba(46, 204, 113, 0.1);
    border: 1px solid var(--success-color);
}

.alert-error {
    background: rgba(255, 71, 87, 0.1);
    border: 1px solid var(--error-color);
}

.alert-warning {
    background: rgba(255, 165, 2, 0.1);
    border: 1px solid var(--warning-color);
}

.alert-info {
    background: rgba(46, 134, 222, 0.1);
    border: 1px solid var(--info-color);
}

/*----------------------
4. Animations & Keyframes
----------------------*/

/* Basic Animations */
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
}

@keyframes slideUp {
    from {
        transform: translateY(20px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes slideDown {
    from {
        transform: translateY(-20px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
}

@keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    75% { transform: translateX(5px); }
}

/* Animation Utility Classes */
.animate-fade-in {
    animation: fadeIn 0.3s ease forwards;
}

.animate-fade-out {
    animation: fadeOut 0.3s ease forwards;
}

.animate-slide-up {
    animation: slideUp 0.4s ease forwards;
}

.animate-slide-down {
    animation: slideDown 0.4s ease forwards;
}

.animate-spin {
    animation: spin 1s linear infinite;
}

.animate-pulse {
    animation: pulse 2s ease infinite;
}

.animate-shake {
    animation: shake 0.3s ease-in-out;
}

/* Hover Animations */
.hover-scale {
    transition: transform var(--transition-normal);
}

.hover-scale:hover {
    transform: scale(1.05);
}

.hover-lift {
    transition: transform var(--transition-normal);
}

.hover-lift:hover {
    transform: translateY(-4px);
}

/*----------------------
5. Media Queries & Responsive Design
----------------------*/

/* Extra small devices (phones) */
@media screen and (max-width: 576px) {
    :root {
        --spacing-lg: 16px;
        --spacing-xl: 24px;
    }

    .container {
        padding: 0 var(--spacing-sm);
    }

    .grid {
        gap: var(--spacing-sm);
    }

    .btn {
        padding: 0.5rem 1rem;
        font-size: 0.875rem;
    }

    .card {
        padding: var(--spacing-md);
    }
}

/* Small devices (tablets) */
@media screen and (min-width: 577px) and (max-width: 768px) {
    .container {
        max-width: 540px;
    }
}

/* Medium devices (laptops) */
@media screen and (min-width: 769px) and (max-width: 992px) {
    .container {
        max-width: 720px;
    }
}

/* Large devices (desktops) */
@media screen and (min-width: 993px) and (max-width: 1200px) {
    .container {
        max-width: 960px;
    }
}

/* Extra large devices */
@media screen and (min-width: 1201px) {
    .container {
        max-width: 1140px;
    }
}

/* Touch Device Optimizations */
@media (hover: none) {
    .hover-scale:hover,
    .hover-lift:hover {
        transform: none;
    }

    .btn:hover {
        transform: none;
    }
}

/* High-Resolution Displays */
@media (-webkit-min-device-pixel-ratio: 2),
       (min-resolution: 192dpi) {
    /* Adjust background images for retina displays */
    .retina-image {
        background-size: contain;
    }
}

/* Reduced Motion Preferences */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
}

/*----------------------
6. Print Styles
----------------------*/

@media print {
    * {
        background: transparent !important;
        color: #000 !important;
        box-shadow: none !important;
        text-shadow: none !important;
    }

    .no-print {
        display: none !important;
    }

    a,
    a:visited {
        text-decoration: underline;
    }

    a[href]::after {
        content: " (" attr(href) ")";
    }

    abbr[title]::after {
        content: " (" attr(title) ")";
    }

    pre,
    blockquote {
        border: 1px solid #999;
        page-break-inside: avoid;
    }

    thead {
        display: table-header-group;
    }

    tr,
    img {
        page-break-inside: avoid;
    }

    img {
        max-width: 100% !important;
    }

    p,
    h2,
    h3 {
        orphans: 3;
        widows: 3;
    }

    h2,
    h3 {
        page-break-after: avoid;
    }
}

/*----------------------
7. Accessibility Features
----------------------*/

/* Focus Styles */
:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
    box-shadow: 0 0 0 4px rgba(108, 92, 231, 0.2);
}

/* Skip Links */
.skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    background: var(--primary-color);
    color: white;
    padding: 8px;
    z-index: 100;
    transition: top 0.3s ease;
}

.skip-link:focus {
    top: 0;
}

/* ARIA States */
[aria-busy="true"] {
    cursor: progress;
}

[aria-disabled="true"],
[disabled] {
    cursor: not-allowed;
    opacity: 0.7;
}

[aria-hidden="true"] {
    display: none;
}

/*----------------------
8. Dark Mode Support
----------------------*/

@media (prefers-color-scheme: dark) {
    :root {
        --bg-primary: #121212;
        --bg-secondary: #1e1e1e;
        --text-color: #ffffff;
        --border-color: rgba(255, 255, 255, 0.1);
    }
}

@media (prefers-color-scheme: light) {
    :root {
        --bg-primary: #ffffff;
        --bg-secondary: #f8f9fa;
        --text-color: #000000;
        --border-color: rgba(0, 0, 0, 0.1);
    }

    .card {
        background: white;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .modal {
        background: white;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    }
}

/*----------------------
9. RTL Support
----------------------*/

[dir="rtl"] {
    .modal-close {
        right: auto;
        left: var(--spacing-md);
    }

    .dropdown-menu {
        left: auto;
        right: 0;
    }

    .alert {
        padding-left: var(--spacing-xl);
        padding-right: var(--spacing-md);
    }

    .custom-control {
        padding-left: 0;
        padding-right: 1.5rem;
    }

    .custom-control-label::before,
    .custom-control-label::after {
        left: auto;
        right: -1.5rem;
    }
}

/*----------------------
10. Advanced Component States
----------------------*/

/* Loading States */
.is-loading {
    position: relative;
    pointer-events: none;
}

.is-loading::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(2px);
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Scrollbar Styling */
::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}

::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
}

::-webkit-scrollbar-thumb {
    background: var(--primary-color);
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: var(--secondary-color);
}

/*----------------------
11. Performance Optimizations
----------------------*/

/* Hardware Acceleration */
.hardware-accelerated {
    transform: translateZ(0);
    backface-visibility: hidden;
    perspective: 1000px;
}

/* Content Visibility */
.offscreen {
    content-visibility: auto;
    contain-intrinsic-size: 0 500px;
}

/*----------------------
12. Advanced Utilities
----------------------*/

/* Aspect Ratio Boxes */
.aspect-ratio-box {
    position: relative;
    padding-top: 56.25%; /* 16:9 Aspect Ratio */
}

.aspect-ratio-box-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

/* Glass Morphism */
.glass-effect {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Text Truncation */
.truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.truncate-multiline {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

/* Z-index Layers */
:root {
    --z-negative: -1;
    --z-normal: 1;
    --z-tooltip: 10;
    --z-fixed: 100;
    --z-modal: 1000;
}

/*----------------------
13. Feature Queries
----------------------*/

@supports (display: grid) {
    .grid-fallback {
        display: grid;
    }
}

@supports (backdrop-filter: blur()) {
    .modal-overlay {
        backdrop-filter: blur(10px);
    }
}

/*----------------------
14. Print Override
----------------------*/

@page {
    margin: 2cm;
}

/*----------------------
15. Custom Alerts
----------------------*/
/* Alert and Confirm Dialog Styles */
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

/* Auth */

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
    
    const styleSheet = document.createElement("style");
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
}
