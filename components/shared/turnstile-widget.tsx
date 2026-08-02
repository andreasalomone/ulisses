"use client";

import { forwardRef, useEffect, useId, useImperativeHandle, useRef, useState } from "react";
import Script from "next/script";

declare global {
    interface Window {
        turnstile?: {
            render: (
                container: HTMLElement,
                options: {
                    sitekey: string;
                    callback: (token: string) => void;
                    "expired-callback"?: () => void;
                    "error-callback"?: () => void;
                    theme?: "light" | "dark" | "auto";
                }
            ) => string;
            reset: (widgetId?: string) => void;
            remove: (widgetId?: string) => void;
        };
    }
}

export interface TurnstileWidgetHandle {
    reset: () => void;
}

interface TurnstileWidgetProps {
    onVerify: (token: string) => void;
    onExpire?: () => void;
    className?: string;
}

export const TurnstileWidget = forwardRef<TurnstileWidgetHandle, TurnstileWidgetProps>(
    function TurnstileWidget({ onVerify, onExpire, className }, ref) {
        const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
        const containerRef = useRef<HTMLDivElement>(null);
        const widgetIdRef = useRef<string | null>(null);
        const containerId = useId();
        const [scriptLoaded, setScriptLoaded] = useState(false);

        useImperativeHandle(ref, () => ({
            reset: () => {
                if (widgetIdRef.current && window.turnstile) {
                    window.turnstile.reset(widgetIdRef.current);
                }
            },
        }));

        useEffect(() => {
            if (!scriptLoaded || !siteKey || !containerRef.current || !window.turnstile) return;
            if (widgetIdRef.current) return;

            widgetIdRef.current = window.turnstile.render(containerRef.current, {
                sitekey: siteKey,
                callback: onVerify,
                "expired-callback": onExpire,
                theme: "light",
            });

            return () => {
                if (widgetIdRef.current && window.turnstile) {
                    window.turnstile.remove(widgetIdRef.current);
                    widgetIdRef.current = null;
                }
            };
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [scriptLoaded, siteKey]);

        if (!siteKey) return null;

        return (
            <>
                <Script
                    src="https://challenges.cloudflare.com/turnstile/v0/api.js"
                    strategy="lazyOnload"
                    onLoad={() => setScriptLoaded(true)}
                />
                <div ref={containerRef} id={containerId} className={className} />
            </>
        );
    }
);
