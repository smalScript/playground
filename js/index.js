
document.addEventListener('DOMContentLoaded', async () => {

    // Start python script
    // Read File to get current data
    // Waiting for user events to update states

    let currentData = await readComFile();

    document.querySelector('.switch input[type="checkbox"]').addEventListener('change', function () {
        toggleLedSwitch()
    });

    function toggleLedSwitch() {
        let ledButtonToggled = this.checked;
        writeComFile(ledButtonToggled);
    }

    // Reads current JSON File
    async function readComFile() {
        return fetch('data.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();  // Parse as raw string
            })
            .then(jsonString => {
                console.log("JSON string:", jsonString);
                return jsonString;
            })
            .catch(error => {
                console.error("Failed to load JSON file:", error);
                return null;
            });
    }

    // Manipulates JSON file
    function writeComFile(switcherToggled = false) {

        // Write current state into file
    }

})
