import { z } from "zod";

export const contactFormSchema = z.object({
    scenario: z.enum(["Logistica", "Ferroviario", "Smart Parking", "Smart Building", "Smart City"], {
        required_error: "Seleziona uno scenario",
    }),
    objective: z.string().min(1, "Seleziona un obiettivo"),
    size: z.string().min(1, "Inserisci la dimensione dello scenario"),
    platforms: z.array(z.string()).optional(),
    timing: z.string().min(1, "Seleziona il timing"),
    email: z.string().email("Inserisci un'email valida"),
    phone: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
