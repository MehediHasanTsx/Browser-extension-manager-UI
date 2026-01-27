// Remove Buttons Functions
function rmvDevLens() {
    document.getElementById("DevLens").dataset.removed = "true";
    document.getElementById("DevLens").style.display = "none";
}

function rmvStyleSpy() {
    document.getElementById("StyleSpy").dataset.removed = "true";
    document.getElementById("StyleSpy").style.display = "none";
}

function rmvSpeedBoost() {
    document.getElementById("SpeedBoost").dataset.removed = "true";
    document.getElementById("SpeedBoost").style.display = "none";
}

function rmvJSONWizard() {
    document.getElementById("JSONWizard").dataset.removed = "true";
    document.getElementById("JSONWizard").style.display = "none"
}

function rmvTabMasterPro() {
    document.getElementById("TabMasterPro").dataset.removed = "true";
    document.getElementById("TabMasterPro").style.display = "none";
}

function rmvViewportBuddy() {
    document.getElementById("ViewportBuddy").dataset.removed = "true";
    document.getElementById("ViewportBuddy").style.display = "none";
}

function rmvMarkupNotes() {
    document.getElementById("MarkupNotes").dataset.removed = "true";
    document.getElementById("MarkupNotes").style.display = "none";
}

function rmvGridGuides() {
    document.getElementById("GridGuides").dataset.removed = "true";
    document.getElementById("GridGuides").style.display = "none";
}

function rmvPalettePicker() {
    document.getElementById("PalettePicker").dataset.removed = "true";
    document.getElementById("PalettePicker").style.display = "none";
}

function rmvLinkChecker() {
    document.getElementById("LinkChecker").dataset.removed = "true";
    document.getElementById("LinkChecker").style.display = "none";
}

function rmvDOMSnapshot() {
    document.getElementById("DOMSnapshot").dataset.removed = "true";
    document.getElementById("DOMSnapshot").style.display = "none";
}

function rmvConsolePlus() {
    document.getElementById("ConsolePlus").dataset.removed = "true";
    document.getElementById("ConsolePlus").style.display = "none";
}


// Active status toggle functions
document.getElementById("showActive").addEventListener("click", () => {
    document.querySelectorAll(".extension_card").forEach(card => {
        const checkbox = card.querySelector(".status");
        // never show removed cards
        if (card.dataset.removed === "true") {
            return;
        }

        if (checkbox.checked) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
});

// Inactive status toggle functions
document.getElementById("showInactive").addEventListener("click", () => {
    document.querySelectorAll(".extension_card").forEach(card => {
        // never show removed cards
        if (card.dataset.removed === "true") {
            return;
        }

        const checkbox = card.querySelector(".status");

        if (!checkbox.checked) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
});

// Show all extensions
document.getElementById("showAll").addEventListener("click", () => {
    document.querySelectorAll(".extension_card").forEach(card => {
        // never show removed cards
        if (card.dataset.removed === "true") {
            return;
        }
        card.style.display = "flex";
    });
});


// Active or Inactive button active state toggle
const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
    });
});


