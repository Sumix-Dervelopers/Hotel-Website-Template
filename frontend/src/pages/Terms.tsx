import { LegalPage } from "@/components/shared/LegalPage";

export default function Terms() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Stay"
      updated="1 June 2026"
      intro="The house rules, written the way we would explain them over a glass of English sparkling. A reservation with The Ashcombe is accepted on these terms."
      sections={[
        {
          heading: "Reservations & cancellation",
          body: [
            "Flexible rates may be cancelled without charge until 48 hours before arrival; within 48 hours the first night is due. All rates include VAT at 20%.",
            "Seasonal packages, residences and The Hartley Penthouse carry their own terms, always shown before you confirm.",
          ],
        },
        {
          heading: "Arrival & departure",
          body: [
            "Check-in from 15:00, check-out until 12:00. Early arrivals are welcomed in the Drawing Room or the bar while your room is finished.",
          ],
        },
        {
          heading: "The house",
          body: [
            "The Ashcombe is a quiet house: no amplified music in the garden, and the Vaults pool keeps family hours from 09:00 to 11:00.",
            "Small and medium dogs are welcome in garden-level rooms and the Mews Residence. The house is entirely non-smoking, as required by English law.",
          ],
        },
        {
          heading: "Liability",
          body: [
            "We care for the house and its guests with diligence; we cannot be responsible for belongings left in public areas or for the moods of the London weather.",
          ],
        },
        {
          heading: "This website",
          body: [
            "Content on this site describes the house in good faith. Photography is representative; the light is better in person.",
          ],
        },
      ]}
    />
  );
}
