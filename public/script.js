document.addEventListener('DOMContentLoaded', () => {
    const codeInput = document.getElementById('codeInput');
    const compileBtn = document.getElementById('compileBtn');
    const loading = document.getElementById('loading');
    const output = document.getElementById('output');
    const error = document.getElementById('error');
    const outputText = document.getElementById('outputText');
    const errorText = document.getElementById('errorText');

    compileBtn.addEventListener('click', async () => {
        const code = codeInput.value.trim();

        if (!code) {
            showError('কোড লিখুন!');
            return;
        }

        // Show loading
        showLoading();

        try {
            const response = await fetch('/compile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ code }),
            });

            const data = await response.json();

            if (response.ok) {
                showOutput(data.result);
            } else {
                showError(data.error);
            }
        } catch (err) {
            showError('সার্ভারের সাথে যোগাযোগ করতে পারছি না।');
        }
    });

    function showLoading() {
        loading.classList.remove('hidden');
        output.classList.add('hidden');
        error.classList.add('hidden');
    }

    function showOutput(text) {
        loading.classList.add('hidden');
        output.classList.remove('hidden');
        error.classList.add('hidden');
        outputText.textContent = text;
    }

    function showError(text) {
        loading.classList.add('hidden');
        output.classList.add('hidden');
        error.classList.remove('hidden');
        errorText.textContent = text;
    }
});




// Button animation (press effect)
const btn = document.getElementById("compileBtn");
btn.addEventListener("mousedown", () => {
    btn.style.transform = "scale(0.97)";
});
btn.addEventListener("mouseup", () => {
    btn.style.transform = "scale(1)";
});

// Textarea auto-expand
const codeInput = document.getElementById("codeInput");
codeInput.addEventListener("input", () => {
    codeInput.style.height = "180px";
    codeInput.style.height = codeInput.scrollHeight + "px";
});

// Dynamic glow when typing
codeInput.addEventListener("keyup", () => {
    codeInput.style.boxShadow = "0 0 12px #38bdf870";
    setTimeout(() => {
        codeInput.style.boxShadow = "none";
    }, 500);
});

// Smooth fade-in for output
function fadeIn(element) {
    element.style.opacity = 0;
    element.style.display = "block";

    let opacity = 0;
    const timer = setInterval(() => {
        opacity += 0.05;
        element.style.opacity = opacity;
        if (opacity >= 1) clearInterval(timer);
    }, 20);
}

// Override your output displaying logic
const outputBox = document.getElementById("output");
const errorBox = document.getElementById("error");

function showOutput(text) {
    errorBox.classList.add("hidden");
    document.getElementById("outputText").textContent = text;
    outputBox.classList.remove("hidden");
    fadeIn(outputBox);
}

function showError(text) {
    outputBox.classList.add("hidden");
    document.getElementById("errorText").textContent = text;
    errorBox.classList.remove("hidden");
    fadeIn(errorBox);
}



// 3rd Change
// Create floating objects dynamically
const container = document.querySelector(".floating-objects");

for (let i = 0; i < 12; i++) {
    const orb = document.createElement("div");
    orb.classList.add("orb");

    // Random horizontal position
    orb.style.left = Math.random() * 100 + "vw";

    // Random animation duration
    orb.style.animationDuration = (8 + Math.random() * 7) + "s";

    // Random delay
    orb.style.animationDelay = Math.random() * 5 + "s";

    container.appendChild(orb);
}
