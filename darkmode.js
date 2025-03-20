export function injectDarkModeStyles() {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        .dark-mode-switch {
            position: relative;
            display: inline-block;
            width: 60px;
            height: 34px;
            margin: 10px;
        }

        .dark-mode-switch input {
            opacity: 0;
            width: 0;
            height: 0;
        }

        .dark-mode-slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            transition: .4s;
            border-radius: 34px;
        }

        .dark-mode-slider:before {
            position: absolute;
            content: "";
            height: 26px;
            width: 26px;
            left: 4px;
            bottom: 4px;
            background-color: white;
            transition: .4s;
            border-radius: 50%;
        }

        input:checked + .dark-mode-slider {
            background-color: #2196F3;
        }

        input:checked + .dark-mode-slider:before {
            transform: translateX(26px);
        }

        /* Paragon-specific dark mode styles */
        body[data-theme='dark'] {
            background-color: #1a1a1a !important;
            color: #ffffff !important;
        }

        /* Main content area */
        body[data-theme='dark'] #mainContent,
        body[data-theme='dark'] .mainContent,
        body[data-theme='dark'] .view-case-content,
        body[data-theme='dark'] .case-details {
            background-color: #1a1a1a !important;
            color: #ffffff !important;
        }

        /* Headers and navigation */
        body[data-theme='dark'] .header,
        body[data-theme='dark'] .nav-bar,
        body[data-theme='dark'] .navigation-bar {
            background-color: #2c2c2c !important;
            border-color: #333333 !important;
        }

        /* Panels and containers */
        body[data-theme='dark'] .panel,
        body[data-theme='dark'] .container,
        body[data-theme='dark'] .case-panel,
        body[data-theme='dark'] .detail-panel {
            background-color: #2c2c2c !important;
            border-color: #333333 !important;
            color: #ffffff !important;
        }

        /* Tables */
        body[data-theme='dark'] table,
        body[data-theme='dark'] .table {
            background-color: #2c2c2c !important;
            color: #ffffff !important;
        }

        body[data-theme='dark'] th,
        body[data-theme='dark'] td {
            background-color: #2c2c2c !important;
            border-color: #333333 !important;
            color: #ffffff !important;
        }

        body[data-theme='dark'] tr:nth-child(even) {
            background-color: #262626 !important;
        }

        /* Form elements */
        body[data-theme='dark'] input,
        body[data-theme='dark'] select,
        body[data-theme='dark'] textarea {
            background-color: #333333 !important;
            color: #ffffff !important;
            border-color: #444444 !important;
        }

        /* Links */
        body[data-theme='dark'] a {
            color: #4a9eff !important;
        }

        body[data-theme='dark'] a:hover {
            color: #66b1ff !important;
        }

        /* Buttons */
        body[data-theme='dark'] button,
        body[data-theme='dark'] .button {
            background-color: #2c2c2c !important;
            color: #ffffff !important;
            border-color: #444444 !important;
        }

        /* Modals and popups */
        body[data-theme='dark'] .modal,
        body[data-theme='dark'] .popup,
        body[data-theme='dark'] .dialog {
            background-color: #2c2c2c !important;
            border-color: #333333 !important;
        }

        /* Sidebars */
        body[data-theme='dark'] .sidebar,
        body[data-theme='dark'] .side-panel {
            background-color: #2c2c2c !important;
            border-color: #333333 !important;
        }

        /* Case-specific elements */
        body[data-theme='dark'] .case-header,
        body[data-theme='dark'] .case-body,
        body[data-theme='dark'] .case-footer {
            background-color: #1a1a1a !important;
            color: #ffffff !important;
        }

        /* Search elements */
        body[data-theme='dark'] .search-box,
        body[data-theme='dark'] .search-results {
            background-color: #2c2c2c !important;
            color: #ffffff !important;
        }
    `;
    document.head.appendChild(styleSheet);
}
