const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());


// ==================================================
// TEST
// ==================================================

app.get("/test", (req, res) => {
    res.send("TEST SERVER IS WORKING");
});


// ==================================================
// AREA GPS COORDINATES
// ==================================================

const areaCoordinates = {
    "Jubilee Hills": [17.4326, 78.4071],
    "Somajiguda": [17.4239, 78.4570],
    "Secunderabad": [17.4399, 78.4983],
    "Banjara Hills": [17.4156, 78.4347],
    "Afzalgunj": [17.3713, 78.4744],
    "Punjagutta": [17.4283, 78.4530],
    "Red Hills": [17.3960, 78.4560],
    "Lakdikapul": [17.4040, 78.4600],
    "LB Nagar": [17.3457, 78.5522],
    "Masab Tank": [17.3970, 78.4530],
    "Ameerpet": [17.4375, 78.4483],
    "Koti": [17.3840, 78.4800],
    "Vidyanagar": [17.4100, 78.5000],
    "Nampally": [17.3850, 78.4670],
    "Himayatnagar": [17.4000, 78.4900],
    "Sanath Nagar": [17.4550, 78.4420],
    "Kukatpally": [17.4849, 78.4138],
    "RTC X Roads": [17.4050, 78.4900],
    "Uppal": [17.4010, 78.5590],
    "Malakpet": [17.3730, 78.5020],
    "Saroornagar": [17.3500, 78.5400],
    "Santosh Nagar": [17.3500, 78.4800],
    "Shah Ali Banda": [17.3600, 78.4750],
    "Petlaburz": [17.3650, 78.4750],
    "Kanchanbagh": [17.3350, 78.4900],
    "Charminar": [17.3616, 78.4747],
    "Nayapool": [17.3750, 78.4750],
    "King Koti": [17.3850, 78.4800],
    "Erragadda": [17.4580, 78.4330]
};


// ==================================================
// 60 BLOOD BANKS
// ==================================================

const bloodBanks = [

    { id: 1, name: "Apollo Hospital Blood Centre", area: "Jubilee Hills", city: "Hyderabad",
      blood: { "A+": 12, "A-": 3, "B+": 8, "B-": 2, "O+": 15, "O-": 4, "AB+": 4, "AB-": 1 } },

    { id: 2, name: "Yashoda Hospitals", area: "Somajiguda", city: "Hyderabad",
      blood: { "A+": 9, "A-": 2, "B+": 11, "B-": 3, "O+": 18, "O-": 4, "AB+": 3, "AB-": 1 } },

    { id: 3, name: "Yashoda Hospitals", area: "Secunderabad", city: "Hyderabad",
      blood: { "A+": 7, "A-": 2, "B+": 6, "B-": 1, "O+": 14, "O-": 3, "AB+": 2, "AB-": 1 } },

    { id: 4, name: "Care Hospitals", area: "Banjara Hills", city: "Hyderabad",
      blood: { "A+": 10, "A-": 3, "B+": 9, "B-": 2, "O+": 13, "O-": 4, "AB+": 5, "AB-": 1 } },

    { id: 5, name: "Osmania General Hospital", area: "Afzalgunj", city: "Hyderabad",
      blood: { "A+": 15, "A-": 4, "B+": 12, "B-": 3, "O+": 20, "O-": 5, "AB+": 6, "AB-": 2 } },

    { id: 6, name: "Gandhi Hospital", area: "Secunderabad", city: "Hyderabad",
      blood: { "A+": 11, "A-": 3, "B+": 8, "B-": 2, "O+": 16, "O-": 4, "AB+": 4, "AB-": 1 } },

    { id: 7, name: "NIMS Hospital", area: "Punjagutta", city: "Hyderabad",
      blood: { "A+": 8, "A-": 2, "B+": 10, "B-": 2, "O+": 17, "O-": 3, "AB+": 5, "AB-": 1 } },

    { id: 8, name: "MNJ Institute of Oncology", area: "Red Hills", city: "Hyderabad",
      blood: { "A+": 6, "A-": 2, "B+": 7, "B-": 1, "O+": 12, "O-": 3, "AB+": 3, "AB-": 1 } },

    { id: 9, name: "Global Hospital", area: "Lakdikapul", city: "Hyderabad",
      blood: { "A+": 9, "A-": 2, "B+": 5, "B-": 1, "O+": 11, "O-": 3, "AB+": 2, "AB-": 1 } },

    { id: 10, name: "Kamineni Hospitals", area: "LB Nagar", city: "Hyderabad",
      blood: { "A+": 13, "A-": 3, "B+": 8, "B-": 2, "O+": 16, "O-": 4, "AB+": 4, "AB-": 1 } },

    { id: 11, name: "Aware Gleneagles Hospital", area: "LB Nagar", city: "Hyderabad",
      blood: { "A+": 7, "A-": 2, "B+": 9, "B-": 2, "O+": 14, "O-": 3, "AB+": 3, "AB-": 1 } },

    { id: 12, name: "Star Hospitals", area: "Banjara Hills", city: "Hyderabad",
      blood: { "A+": 10, "A-": 3, "B+": 7, "B-": 2, "O+": 15, "O-": 4, "AB+": 5, "AB-": 1 } },

    { id: 13, name: "Chiranjeevi Blood Centre", area: "Jubilee Hills", city: "Hyderabad",
      blood: { "A+": 14, "A-": 3, "B+": 10, "B-": 2, "O+": 19, "O-": 5, "AB+": 4, "AB-": 1 } },

    { id: 14, name: "Mahavir Hospital", area: "Masab Tank", city: "Hyderabad",
      blood: { "A+": 6, "A-": 1, "B+": 8, "B-": 2, "O+": 12, "O-": 3, "AB+": 3, "AB-": 1 } },

    { id: 15, name: "Image Hospital Blood Centre", area: "Ameerpet", city: "Hyderabad",
      blood: { "A+": 8, "A-": 2, "B+": 6, "B-": 1, "O+": 10, "O-": 2, "AB+": 2, "AB-": 1 } },

    { id: 16, name: "Government Maternity Hospital", area: "Koti", city: "Hyderabad",
      blood: { "A+": 12, "A-": 3, "B+": 9, "B-": 2, "O+": 15, "O-": 4, "AB+": 4, "AB-": 1 } },

    { id: 17, name: "Niloufer Hospital", area: "Red Hills", city: "Hyderabad",
      blood: { "A+": 10, "A-": 2, "B+": 8, "B-": 2, "O+": 13, "O-": 3, "AB+": 3, "AB-": 1 } },

    { id: 18, name: "NTR Memorial Trust Blood Centre", area: "Banjara Hills", city: "Hyderabad",
      blood: { "A+": 9, "A-": 2, "B+": 7, "B-": 2, "O+": 16, "O-": 4, "AB+": 5, "AB-": 1 } },

    { id: 19, name: "Indian Red Cross Blood Centre", area: "Vidyanagar", city: "Hyderabad",
      blood: { "A+": 11, "A-": 3, "B+": 9, "B-": 2, "O+": 17, "O-": 4, "AB+": 4, "AB-": 1 } },

    { id: 20, name: "Care Hospitals", area: "Nampally", city: "Hyderabad",
      blood: { "A+": 7, "A-": 2, "B+": 6, "B-": 1, "O+": 12, "O-": 3, "AB+": 2, "AB-": 1 } },

    { id: 21, name: "PV Blood Centre", area: "Himayatnagar", city: "Hyderabad",
      blood: { "A+": 10, "A-": 2, "B+": 8, "B-": 2, "O+": 16, "O-": 3, "AB+": 4, "AB-": 1 } },

    { id: 22, name: "St Theresa Hospital Blood Bank", area: "Sanath Nagar", city: "Hyderabad",
      blood: { "A+": 8, "A-": 2, "B+": 7, "B-": 1, "O+": 13, "O-": 3, "AB+": 3, "AB-": 1 } },

    { id: 23, name: "Sangam Blood Centre", area: "LB Nagar", city: "Hyderabad",
      blood: { "A+": 12, "A-": 3, "B+": 10, "B-": 2, "O+": 18, "O-": 4, "AB+": 5, "AB-": 1 } },

    { id: 24, name: "Sri Anjaniputhra Blood Centre", area: "Kukatpally", city: "Hyderabad",
      blood: { "A+": 9, "A-": 2, "B+": 8, "B-": 2, "O+": 15, "O-": 3, "AB+": 4, "AB-": 1 } },

    { id: 25, name: "Aayush Blood Bank", area: "Kukatpally", city: "Hyderabad",
      blood: { "A+": 7, "A-": 2, "B+": 9, "B-": 2, "O+": 14, "O-": 3, "AB+": 3, "AB-": 1 } },

    { id: 26, name: "Rudhira Voluntary Blood Bank", area: "Himayatnagar", city: "Hyderabad",
      blood: { "A+": 11, "A-": 3, "B+": 7, "B-": 2, "O+": 17, "O-": 4, "AB+": 4, "AB-": 1 } },

    { id: 27, name: "Sanjeevini Blood Bank", area: "RTC X Roads", city: "Hyderabad",
      blood: { "A+": 8, "A-": 2, "B+": 6, "B-": 1, "O+": 12, "O-": 3, "AB+": 3, "AB-": 1 } },

    { id: 28, name: "Gene Blood Centre", area: "Punjagutta", city: "Hyderabad",
      blood: { "A+": 10, "A-": 2, "B+": 9, "B-": 2, "O+": 15, "O-": 3, "AB+": 4, "AB-": 1 } },

    { id: 29, name: "Adithya Hospital Blood Bank", area: "Koti", city: "Hyderabad",
      blood: { "A+": 7, "A-": 2, "B+": 6, "B-": 1, "O+": 11, "O-": 2, "AB+": 2, "AB-": 1 } },

    { id: 30, name: "MSN Blood Centre", area: "Uppal", city: "Hyderabad",
      blood: { "A+": 9, "A-": 2, "B+": 8, "B-": 2, "O+": 16, "O-": 4, "AB+": 4, "AB-": 1 } },

    { id: 31, name: "Aaraadhya Blood Centre", area: "Kukatpally", city: "Hyderabad",
      blood: { "A+": 8, "A-": 2, "B+": 7, "B-": 1, "O+": 13, "O-": 3, "AB+": 3, "AB-": 1 } },

    { id: 32, name: "Abhaya Blood Centre", area: "LB Nagar", city: "Hyderabad",
      blood: { "A+": 10, "A-": 3, "B+": 9, "B-": 2, "O+": 15, "O-": 4, "AB+": 4, "AB-": 1 } },

    { id: 33, name: "Hyderabad Blood Bank", area: "Malakpet", city: "Hyderabad",
      blood: { "A+": 7, "A-": 2, "B+": 8, "B-": 2, "O+": 14, "O-": 3, "AB+": 3, "AB-": 1 } },

    { id: 34, name: "Gleneagles AWARE Hospital", area: "Saroornagar", city: "Hyderabad",
      blood: { "A+": 9, "A-": 2, "B+": 10, "B-": 2, "O+": 17, "O-": 4, "AB+": 5, "AB-": 1 } },

    { id: 35, name: "Star Hospitals Blood Bank", area: "Banjara Hills", city: "Hyderabad",
      blood: { "A+": 12, "A-": 3, "B+": 9, "B-": 2, "O+": 18, "O-": 4, "AB+": 5, "AB-": 1 } },

    { id: 36, name: "Owaisi Hospital Blood Centre", area: "Santosh Nagar", city: "Hyderabad",
      blood: { "A+": 13, "A-": 3, "B+": 11, "B-": 3, "O+": 19, "O-": 5, "AB+": 5, "AB-": 2 } },

    { id: 37, name: "Princess Esra Hospital", area: "Shah Ali Banda", city: "Hyderabad",
      blood: { "A+": 8, "A-": 2, "B+": 7, "B-": 1, "O+": 13, "O-": 3, "AB+": 3, "AB-": 1 } },

    { id: 38, name: "Modern Government Maternity Hospital", area: "Petlaburz", city: "Hyderabad",
      blood: { "A+": 11, "A-": 3, "B+": 9, "B-": 2, "O+": 16, "O-": 4, "AB+": 4, "AB-": 1 } },

    { id: 39, name: "Indian Red Cross Blood Centre", area: "Vidyanagar", city: "Hyderabad",
      blood: { "A+": 10, "A-": 2, "B+": 8, "B-": 2, "O+": 17, "O-": 4, "AB+": 4, "AB-": 1 } },

    { id: 40, name: "Chiranjeevi Blood Centre", area: "Jubilee Hills", city: "Hyderabad",
      blood: { "A+": 14, "A-": 3, "B+": 10, "B-": 2, "O+": 19, "O-": 5, "AB+": 5, "AB-": 1 } },

    { id: 41, name: "Basavatarakam Cancer Hospital", area: "Banjara Hills", city: "Hyderabad",
      blood: { "A+": 10, "A-": 2, "B+": 8, "B-": 2, "O+": 14, "O-": 3, "AB+": 4, "AB-": 1 } },

    { id: 42, name: "Century Super Speciality Hospital", area: "Banjara Hills", city: "Hyderabad",
      blood: { "A+": 8, "A-": 2, "B+": 7, "B-": 1, "O+": 12, "O-": 3, "AB+": 3, "AB-": 1 } },

    { id: 43, name: "NIGL Blood Centre", area: "Banjara Hills", city: "Hyderabad",
      blood: { "A+": 9, "A-": 2, "B+": 8, "B-": 2, "O+": 15, "O-": 3, "AB+": 4, "AB-": 1 } },

    { id: 44, name: "Aster Prime Blood Bank", area: "Ameerpet", city: "Hyderabad",
      blood: { "A+": 11, "A-": 3, "B+": 9, "B-": 2, "O+": 16, "O-": 4, "AB+": 4, "AB-": 1 } },

    { id: 45, name: "HARD Society Blood Bank", area: "Red Hills", city: "Hyderabad",
      blood: { "A+": 7, "A-": 2, "B+": 6, "B-": 1, "O+": 11, "O-": 2, "AB+": 3, "AB-": 1 } },

    { id: 46, name: "Deccan Blood Centre", area: "Ameerpet", city: "Hyderabad",
      blood: { "A+": 8, "A-": 2, "B+": 7, "B-": 2, "O+": 13, "O-": 3, "AB+": 3, "AB-": 1 } },

    { id: 47, name: "Owaisi Hospital and Research Centre", area: "Kanchanbagh", city: "Hyderabad",
      blood: { "A+": 12, "A-": 3, "B+": 10, "B-": 2, "O+": 18, "O-": 4, "AB+": 5, "AB-": 1 } },

    { id: 48, name: "Princess Esra Hospital Blood Centre", area: "Shah Ali Banda", city: "Hyderabad",
      blood: { "A+": 9, "A-": 2, "B+": 8, "B-": 1, "O+": 14, "O-": 3, "AB+": 3, "AB-": 1 } },

    { id: 49, name: "Nizamia General Hospital", area: "Charminar", city: "Hyderabad",
      blood: { "A+": 10, "A-": 2, "B+": 8, "B-": 2, "O+": 15, "O-": 4, "AB+": 4, "AB-": 1 } },

    { id: 50, name: "Gandhi Hospital Blood Centre", area: "Secunderabad", city: "Hyderabad",
      blood: { "A+": 13, "A-": 3, "B+": 10, "B-": 3, "O+": 19, "O-": 5, "AB+": 5, "AB-": 2 } },

    { id: 51, name: "Niloufer Hospital Blood Centre", area: "Red Hills", city: "Hyderabad",
      blood: { "A+": 11, "A-": 3, "B+": 9, "B-": 2, "O+": 16, "O-": 4, "AB+": 4, "AB-": 1 } },

    { id: 52, name: "MNJ Oncology Blood Centre", area: "Red Hills", city: "Hyderabad",
      blood: { "A+": 8, "A-": 2, "B+": 7, "B-": 2, "O+": 13, "O-": 3, "AB+": 3, "AB-": 1 } },

    { id: 53, name: "NIMS Blood Centre", area: "Punjagutta", city: "Hyderabad",
      blood: { "A+": 12, "A-": 3, "B+": 11, "B-": 2, "O+": 18, "O-": 4, "AB+": 5, "AB-": 1 } },

    { id: 54, name: "Government Maternity Hospital Blood Centre", area: "Nayapool", city: "Hyderabad",
      blood: { "A+": 9, "A-": 2, "B+": 7, "B-": 2, "O+": 14, "O-": 3, "AB+": 3, "AB-": 1 } },

    { id: 55, name: "King Koti Hospital Blood Bank", area: "King Koti", city: "Hyderabad",
      blood: { "A+": 8, "A-": 2, "B+": 6, "B-": 1, "O+": 12, "O-": 3, "AB+": 2, "AB-": 1 } },

    { id: 56, name: "Malakpet Hospital Blood Bank", area: "Malakpet", city: "Hyderabad",
      blood: { "A+": 10, "A-": 2, "B+": 8, "B-": 2, "O+": 15, "O-": 4, "AB+": 4, "AB-": 1 } },

    { id: 57, name: "Nampally Hospital Blood Bank", area: "Nampally", city: "Hyderabad",
      blood: { "A+": 7, "A-": 2, "B+": 7, "B-": 1, "O+": 11, "O-": 2, "AB+": 3, "AB-": 1 } },

    { id: 58, name: "TB and Chest Hospital Blood Bank", area: "Erragadda", city: "Hyderabad",
      blood: { "A+": 8, "A-": 2, "B+": 6, "B-": 1, "O+": 12, "O-": 3, "AB+": 2, "AB-": 1 } },

    { id: 59, name: "ESI Hospital Blood Bank", area: "Erragadda", city: "Hyderabad",
      blood: { "A+": 9, "A-": 2, "B+": 8, "B-": 2, "O+": 13, "O-": 3, "AB+": 3, "AB-": 1 } },

    { id: 60, name: "Indian Red Cross Blood Centre", area: "Vidyanagar", city: "Hyderabad",
      blood: { "A+": 11, "A-": 3, "B+": 9, "B-": 2, "O+": 17, "O-": 4, "AB+": 4, "AB-": 1 } }
];


// ==================================================
// DISTANCE CALCULATION
// ==================================================

function calculateDistance(lat1, lon1, lat2, lon2) {

    const R = 6371;

    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) *
        Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c =
        2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
}


// ==================================================
// HOME
// ==================================================

app.get("/", (req, res) => {

    res.send(`
        <h1>🩸 Emergency Blood Network</h1>

        <p>Server is working!</p>

        <p>Total Blood Banks: ${bloodBanks.length}</p>

        <p>
            <a href="/test">Test Server</a>
        </p>

        <p>
            <a href="/api/organizations">
                View Blood Banks
            </a>
        </p>
    `);

});


// ==================================================
// GET ALL BLOOD BANKS
// ==================================================

app.get("/api/organizations", (req, res) => {

    res.json({
        success: true,
        count: bloodBanks.length,
        results: bloodBanks
    });

});


// ==================================================
// OLD LOCATION SEARCH
// ==================================================

app.get("/api/organizations/search", (req, res) => {

    const bloodGroup = req.query.bloodGroup;
    const location = req.query.location;

    if (!bloodGroup || !location) {

        return res.status(400).json({
            success: false,
            message: "Please provide bloodGroup and location"
        });

    }

    const searchLocation =
        location.toLowerCase().trim();

    const results = bloodBanks

        .filter(bank =>
            bank.city.toLowerCase().includes(searchLocation) ||
            bank.area.toLowerCase().includes(searchLocation)
        )

        .filter(bank =>
            bank.blood[bloodGroup] !== undefined &&
            bank.blood[bloodGroup] > 0
        )

        .map(bank => ({

            id: bank.id,

            name: bank.name,

            area: bank.area,

            city: bank.city,

            bloodGroup: bloodGroup,

            unitsAvailable:
                bank.blood[bloodGroup]

        }));


    res.json({

        success: true,

        count: results.length,

        results: results

    });

});


// ==================================================
// GPS NEARBY BLOOD BANK SEARCH
// ==================================================

app.get("/api/organizations/nearby", (req, res) => {

    const bloodGroup = req.query.bloodGroup;

    const latitude =
        parseFloat(req.query.latitude);

    const longitude =
        parseFloat(req.query.longitude);


    // ----------------------------------------------
    // CHECK INPUT
    // ----------------------------------------------

    if (!bloodGroup) {

        return res.status(400).json({

            success: false,

            message: "Blood group is required"

        });

    }


    if (
        Number.isNaN(latitude) ||
        Number.isNaN(longitude)
    ) {

        return res.status(400).json({

            success: false,

            message:
                "Valid latitude and longitude are required"

        });

    }


    // ----------------------------------------------
    // FIND WITHIN 25 KM
    // ----------------------------------------------

    const MAX_DISTANCE = 25;


    const results = [];


    bloodBanks.forEach(bank => {

        const coordinates =
            areaCoordinates[bank.area];


        if (!coordinates) {
            return;
        }


        const bankLatitude =
            coordinates[0];

        const bankLongitude =
            coordinates[1];


        const distance =
            calculateDistance(
                latitude,
                longitude,
                bankLatitude,
                bankLongitude
            );


        const units =
            bank.blood[bloodGroup];


        if (
            units !== undefined &&
            units > 0 &&
            distance <= MAX_DISTANCE
        ) {

            results.push({

                id: bank.id,

                name: bank.name,

                area: bank.area,

                city: bank.city,

                bloodGroup: bloodGroup,

                unitsAvailable: units,

                distance:
                    Number(distance.toFixed(2))

            });

        }

    });


    // ----------------------------------------------
    // SORT NEAREST FIRST
    // ----------------------------------------------

    results.sort((a, b) =>
        a.distance - b.distance
    );


    // ----------------------------------------------
    // SEND RESPONSE
    // ----------------------------------------------

    res.json({

        success: true,

        count: results.length,

        searchRadius: "25 km",

        userLocation: {

            latitude: latitude,

            longitude: longitude

        },

        results: results

    });

});


// ==================================================
// START SERVER
// ==================================================

app.listen(PORT, () => {

    console.log("");
    console.log("======================================");
    console.log("🩸 EMERGENCY BLOOD NETWORK");
    console.log("======================================");
    console.log("Server: http://localhost:" + PORT);
    console.log("Test: http://localhost:" + PORT + "/test");
    console.log("Blood Banks: " + bloodBanks.length);
    console.log("Nearby Search: /api/organizations/nearby");
    console.log("======================================");
    console.log("");

});