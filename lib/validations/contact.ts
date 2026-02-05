import { z } from "zod";
import { SCENARIO_KEYS, OBJECTIVE_KEYS, PLATFORM_KEYS, TIMING_KEYS } from "../constants";

export const contactFormSchema = z.object({
    scenario: z.enum(SCENARIO_KEYS, {
        required_error: "Please select a scenario",
    }),
    objective: z.enum(OBJECTIVE_KEYS, {
        required_error: "Please select an objective",
    }),
    size: z.string().min(1, "Please enter the scenario size"),
    platforms: z.enum(PLATFORM_KEYS).optional(),
    timing: z.enum(TIMING_KEYS, {
        required_error: "Please select a timeframe",
    }),
    email: z.string().email("Please enter a valid email"),
    phone: z.string().optional(),
    _gotcha: z.string().optional(), // Honeypot field for spam protection
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
