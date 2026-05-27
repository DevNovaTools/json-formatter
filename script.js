const input = document.getElementById('jsonInput');
const statusMsg = document.getElementById('statusMessage');

document.getElementById('formatBtn').addEventListener('click', () => processJSON(true));
document.getElementById('minifyBtn').addEventListener('click', () => processJSON(false));
document.getElementById('clearBtn').addEventListener('click', () => {
    input.value = '';
    setStatus('Waiting for input...', '');
});

function processJSON(format) {
    const rawVal = input.value.trim();
    if (!rawVal) {
        setStatus('Please enter JSON data first.', 'error');
        return;
    }

    try {
        const parsed = JSON.parse(rawVal);
        const result = format ? JSON.stringify(parsed, null, 4) : JSON.stringify(parsed);
        input.value = result;
        setStatus('Valid JSON', 'success');
    } catch (e) {
        setStatus(`Invalid JSON: ${e.message}`, 'error');
    }
}

function setStatus(message, type) {
    statusMsg.textContent = message;
    statusMsg.className = `status ${type}`;
}
