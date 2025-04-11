
document.addEventListener('DOMContentLoaded', () => {

    // Start python script
    // Read File to get current data
    // Waiting for user events to update states

    document.querySelector('.switch input[type="checkbox"]').addEventListener('change', function () {
        toggleLedSwitch()
    });
})

function toggleLedSwitch() {
    let ledButtonToggled = this.checked;
    writeComFile(ledButtonToggled);
}

function readComFile() {

    // Read states out of data.json
}

function writeComFile(switcherToggled = false) {

    // Write current state into file
}
