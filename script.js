const BLOOD_API_URL = "http://localhost:5000";

async function findBlood() {

    const bloodGroup =
        document.getElementById("availabilityBloodGroup").value;

    const location =
        document.getElementById("availabilityLocation").value.trim();

    const resultDiv =
        document.getElementById("bloodResults");

    if (!location) {
        resultDiv.innerHTML = `
            <div class="no-results">
                Please enter a city or area.
            </div>
        `;
        return;
    }

    resultDiv.innerHTML = `
        <div class="loading">
            🔄 Searching blood banks...
        </div>
    `;

    try {

        const url =
            `${BLOOD_API_URL}/api/organizations/search?bloodGroup=${encodeURIComponent(bloodGroup)}&location=${encodeURIComponent(location)}`;

        console.log("Fetching:", url);

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Server returned an error");
        }

        const data = await response.json();

        console.log("API Response:", data);

        if (!data.results || data.results.length === 0) {

            resultDiv.innerHTML = `
                <div class="no-results">
                    🩸 <h3>No Blood Banks Found</h3>
                    <p>
                        No ${bloodGroup} blood was found
                        in ${location}.
                    </p>
                </div>
            `;

            return;
        }

        resultDiv.innerHTML = `
            <h3>🩸 Blood Banks Found: ${data.count}</h3>

            ${data.results.map(bank => `
                <div class="blood-bank-card">

                    <h3>🏥 ${bank.name}</h3>

                    <p>
                        📍 ${bank.area}, ${bank.city}
                    </p>

                    <p>
                        🩸 Blood Group:
                        <strong>${bank.bloodGroup}</strong>
                    </p>

                    <p>
                        🧪 Available Units:
                        <strong>${bank.unitsAvailable}</strong>
                    </p>

                    <button
                        onclick="requestBlood('${bank.name}', '${bank.bloodGroup}')">
                        Request Blood
                    </button>

                </div>
            `).join("")}
        `;

    } catch (error) {

        console.error(error);

        resultDiv.innerHTML = `
            <div class="no-results">
                ❌ Unable to connect to blood database.
                <p>
                    Make sure your Node.js server is running.
                </p>
            </div>
        `;
    }
}

function requestBlood(hospital, bloodGroup) {

    alert(
        `Blood request sent to ${hospital} for ${bloodGroup} blood.`
    );
}