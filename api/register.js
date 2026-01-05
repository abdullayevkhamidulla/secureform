export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false });
  }

  try {
    const { fullname, phone, address, course, company } = req.body;

    if (company) return res.status(200).json({ success: true }); // honeypot

    if (!fullname || !phone || !address || !course) {
      return res.status(400).json({ success: false });
    }
    const googleScriptUrl = process.env.GS_URL;

    const response = await fetch(googleScriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fullname, phone, address, course }),
    });

    const data = await response.json();
    return res.status(200).json({ success: data.success });
  } catch {
    return res.status(500).json({ success: false });
  }
}
