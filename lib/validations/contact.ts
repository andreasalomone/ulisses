import { z } from "zod";

export const contactFormSchema = z.object({
    scenario: z.enum(["logistics", "railway", "smart-parking", "smart-building", "other"], {
        required_error: "Please select a scenario",
    }),
    objective: z.enum([
        "reduce_search", "geofencing", "occupancy", "duration",
        "traceability", "flow_monitoring", "integration", "other"
    ], {
        required_error: "Please select an objective",
    }),
    size: z.string().min(1, "Please enter the scenario size"),
    platforms: z.array(z.enum([
        "wms", "cmms", "its", "bi", "erp", "none", "other"
    ])).optional(),
    timing: z.enum([
        "immediately", "0_3_months", "3_6_months", "6_12_months", "exploration"
    ], {
        required_error: "Please select a timeframe",
    }),
    email: z.string().email("Please enter a valid email"),
    phone: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
