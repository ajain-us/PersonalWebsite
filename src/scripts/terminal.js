document.addEventListener('DOMContentLoaded', () => {
    const commandEl = document.querySelector('.terminal-command');
    const outputEl = document.querySelector('.terminal-output');
    const cursorCommand = document.querySelector('.cursor-command');
    const cursorOutput = document.querySelector('.cursor-output');

    if (!commandEl || !outputEl) {
        return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
    }

    const commandText = commandEl.textContent;
    const outputText = outputEl.textContent;

    commandEl.textContent = '';
    outputEl.textContent = '';
    if (cursorOutput) cursorOutput.style.visibility = 'hidden';

    function typeInto(el, text, speed, onDone) {
        let i = 0;
        const timer = setInterval(() => {
            i++;
            el.textContent = text.slice(0, i);
            if (i >= text.length) {
                clearInterval(timer);
                if (onDone) onDone();
            }
        }, speed);
    }

    typeInto(commandEl, commandText, 90, () => {
        if (cursorCommand) cursorCommand.style.visibility = 'hidden';
        setTimeout(() => {
            if (cursorOutput) cursorOutput.style.visibility = 'visible';
            typeInto(outputEl, outputText, 16);
        }, 350);
    });
});
