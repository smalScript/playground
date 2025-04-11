
document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('.switch input[type="checkbox"]').addEventListener('change', function () {
        toggleLedSwitch()
    });
})

function toggleLedSwitch() {
    ledButtonToggled = this.checked;
    writeComFile(ledButtonToggled);
}

function writeComFile(switcherToggled = false) {

    // Write current state into file
}
