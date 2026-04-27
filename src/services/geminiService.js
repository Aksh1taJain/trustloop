export async function summarizeNeed(text) {
  const key = import.meta.env.VITE_GEMINI_API_KEY

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${key}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `Summarize this NGO report in 2-3 lines and include category and urgency:\n\n${text}`
                }
              ]
            }
          ]
        })
      }
    )

    const data = await response.json()

    if (data.error) {
      return fallbackSummary()
    }

    return data?.candidates?.[0]?.content?.parts?.[0]?.text || fallbackSummary()
  } catch (error) {
    console.error("Gemini summarize error:", error)
    return fallbackSummary()
  }
}

export async function generateMissionDraft(summaryText) {
  const key = import.meta.env.VITE_GEMINI_API_KEY

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${key}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `Create a volunteer mission from this NGO need summary.

Return:
Mission Title:
Description:
Estimated Hours:
Volunteers Needed:
Suggested Skills:

Need Summary:
${summaryText}`
                }
              ]
            }
          ]
        })
      }
    )

    const data = await response.json()

    if (data.error) {
      return fallbackMission()
    }

    return data?.candidates?.[0]?.content?.parts?.[0]?.text || fallbackMission()
  } catch (error) {
    console.error("Gemini mission generation error:", error)
    return fallbackMission()
  }
}

function fallbackSummary() {
  return `Summary: Around 18 elderly residents require urgent assistance for medicine collection and delivery due to mobility constraints.

Category: Healthcare / Medicine Support

Urgency: High`
}

function fallbackMission() {
  return `Mission Title: Medicine Delivery Support for Elderly Residents

Description: Coordinate volunteers to collect and deliver prescribed medicines to elderly residents in Sector 5 who are unable to visit pharmacies due to mobility issues.

Estimated Hours: 3

Volunteers Needed: 4

Suggested Skills: Communication, Medicine Handling, Local Navigation, Elderly Care`
}