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

        :root[data-theme='dark'] {
            --background-color: #1a1a1a;
            --text-color: #ffffff;
            --border-color: #333333;
            --hover-color: #2c2c2c;
            background-color: var(--background-color);
            color: var(--text-color);
        }

        :root[data-theme='dark'] * {
            background-color: var(--background-color);
            color: var(--text-color);
            border-color: var(--border-color);
        }

        :root[data-theme='dark'] a {
            color: #4a9eff;
        }

        :root[data-theme='dark'] button,
        :root[data-theme='dark'] input,
        :root[data-theme='dark'] select {
            background-color: #2c2c2c;
            color: var(--text-color);
            border: 1px solid var(--border-color);
        }

        :root[data-theme='dark'] button:hover,
        :root[data-theme='dark'] input:hover,
        :root[data-theme='dark'] select:hover {
            background-color: var(--hover-color);
        }

        :root[data-theme='dark'] table {
            border-color: var(--border-color);
        }

        :root[data-theme='dark'] th,
        :root[data-theme='dark'] td {
            border-color: var(--border-color);
        }
    `;
    document.head.appendChild(styleSheet);
}
