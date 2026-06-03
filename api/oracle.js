export default async function handler(req, res) {
    const oracleUrl = 'https://g9f6559706c9bbf-aviationdb.adb.us-chicago-1.oraclecloudapps.com/ords/admin/proptech_threats/';

    try {
        // Fetch the data server-side, bypassing browser CORS entirely
        const response = await fetch(oracleUrl);

        if (!response.ok) {
            throw new Error(`Oracle rejected request with status: ${response.status}`);
        }

        const data = await response.json();

        // Send the successful data back to your HTML frontend
        res.status(200).json(data);
    } catch (error) {
        console.error("Middleware Error:", error);
        res.status(500).json({ error: error.message });
    }
}
