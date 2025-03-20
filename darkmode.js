export function injectDarkModeStyles() {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        /* Toggle Switch */
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

        /* Base Dark Mode Styles */
        body[data-theme='dark'] {
            background-color: #101010;
            color: #ccc;
        }

        /* Header and Navigation */
        body[data-theme='dark'] #footer,
        body[data-theme='dark'] #header,
        body[data-theme='dark'] .dropdown-menu,
        body[data-theme='dark'] .navbar,
        body[data-theme='dark'] .popover,
        body[data-theme='dark'] .pm-card,
        body[data-theme='dark'] .pm-card-workflowtext {
            background-color: #202020 !important;
            color: #e0e2e4 !important;
        }

        /* Main Content Areas */
        body[data-theme='dark'] #mainContent,
        body[data-theme='dark'] .mainContent,
        body[data-theme='dark'] .view-case-content,
        body[data-theme='dark'] .case-details,
        body[data-theme='dark'] .a-box,
        body[data-theme='dark'] .a-box .a-box-inner {
            background-color: #1a1a1a !important;
            color: #e0e2e4 !important;
        }

        /* Tables */
        body[data-theme='dark'] table,
        body[data-theme='dark'] th,
        body[data-theme='dark'] td {
            background-color: #2c2c2c !important;
            color: #7f99a2 !important;
            border-color: #333333 !important;
        }

        body[data-theme='dark'] tr:nth-child(even) {
            background-color: #262626 !important;
        }

        /* Form Elements */
        body[data-theme='dark'] .form-control,
        body[data-theme='dark'] input[type=text],
        body[data-theme='dark'] input[type=search],
        body[data-theme='dark'] input[type=email],
        body[data-theme='dark'] input[type=password],
        body[data-theme='dark'] input[type=number],
        body[data-theme='dark'] select,
        body[data-theme='dark'] textarea {
            background-color: #333333 !important;
            color: #ffffff !important;
            border-color: #444444 !important;
        }

        body[data-theme='dark'] .form-control:focus,
        body[data-theme='dark'] input:focus,
        body[data-theme='dark'] select:focus,
        body[data-theme='dark'] textarea:focus {
            background-color: #404040 !important;
            color: #ffffff !important;
            border-color: #4a9eff !important;
        }

        /* Buttons */
        body[data-theme='dark'] .a-button,
        body[data-theme='dark'] .a-button-inner,
        body[data-theme='dark'] button {
            background-color: #2c2c2c !important;
            color: #ffffff !important;
            border-color: #444444 !important;
        }

        body[data-theme='dark'] .a-button:hover,
        body[data-theme='dark'] button:hover {
            background-color: #404040 !important;
        }

        /* Links */
        body[data-theme='dark'] a,
        body[data-theme='dark'] a:link {
            color: #4a9eff !important;
        }

        body[data-theme='dark'] a:hover {
            color: #66b1ff !important;
            text-decoration: underline;
        }

        body[data-theme='dark'] a:visited {
            color: #59d !important;
        }

        /* Panels and Cards */
        body[data-theme='dark'] .panel,
        body[data-theme='dark'] .card,
        body[data-theme='dark'] .a-box {
            background-color: #2c2c2c !important;
            border-color: #333333 !important;
        }

        /* Labels and Text */
        body[data-theme='dark'] .a-color-tertiary {
            color: #dddfe0 !important;
        }

        body[data-theme='dark'] .help-text,
        body[data-theme='dark'] .muted {
            color: #999999 !important;
        }

        /* Modals and Popups */
        body[data-theme='dark'] .modal-content,
        body[data-theme='dark'] .popover,
        body[data-theme='dark'] .dropdown-menu {
            background-color: #2c2c2c !important;
            border-color: #333333 !important;
        }

        /* Alerts and Messages */
        body[data-theme='dark'] .alert.success,
        body[data-theme='dark'] .alert.success a {
            background-color: #328f74 !important;
            color: #ffffff !important;
        }

        body[data-theme='dark'] .alert.info,
        body[data-theme='dark'] .alert.info a {
            background-color: #2974c4 !important;
            color: #ffffff !important;
        }

        body[data-theme='dark'] .alert.warning,
        body[data-theme='dark'] .alert.warning a {
            background-color: #c6a93a !important;
            color: #000000 !important;
        }

        body[data-theme='dark'] .alert.error,
        body[data-theme='dark'] .alert.error a {
            background-color: #db6a94 !important;
            color: #ffffff !important;
        }

        /* Code and Pre blocks */
        body[data-theme='dark'] pre,
        body[data-theme='dark'] code {
            background-color: #282a36 !important;
            color: #f8f8f2 !important;
            border-color: #333333 !important;
        }

        /* Disabled states */
        body[data-theme='dark'] input[disabled],
        body[data-theme='dark'] select[disabled],
        body[data-theme='dark'] textarea[disabled],
        body[data-theme='dark'] button[disabled] {
            background-color: #404040 !important;
            color: #777777 !important;
            border-color: #444444 !important;
        }

        /* Borders */
        body[data-theme='dark'] hr,
        body[data-theme='dark'] .border {
            border-color: #333333 !important;
        }

        /* Additional Paragon-specific elements */
        body[data-theme='dark'] .pg-case-bar-content,
        body[data-theme='dark'] .pg-case-detail-header,
        body[data-theme='dark'] .pg-tool-search-content,
        body[data-theme='dark'] .a-color-base-background {
            background-color: #202020 !important;
        }

        body[data-theme='dark'] .s3uploader-form {
            background-color: #2c2c2c !important;
        }

        /* Hover states */
        body[data-theme='dark'] tr:hover,
        body[data-theme='dark'] .dropdown-item:hover {
            background-color: #404040 !important;
        }

        /* Scrollbars - WebKit only */
        body[data-theme='dark'] ::-webkit-scrollbar {
            width: 10px;
            height: 10px;
            background-color: #202020;
        }

        body[data-theme='dark'] ::-webkit-scrollbar-thumb {
            background-color: #404040;
            border-radius: 5px;
        }

        body[data-theme='dark'] ::-webkit-scrollbar-track {
            background-color: #202020;
        }
    `;
    document.head.appendChild(styleSheet);
}
