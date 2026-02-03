import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TeamMember {
    name: string;
    role: string;
    image?: string;
}

interface TeamGridProps {
    title: string;
    members: TeamMember[];
}

const getInitials = (name: string) => {
    return name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);
};

// Generates a deterministic color based on the name string
const getAvatarColor = (name: string) => {
    const colors = [
        "bg-blue-500", "bg-cyan-500", "bg-teal-500", "bg-emerald-500", "bg-green-500",
        "bg-indigo-500", "bg-violet-500", "bg-purple-500", "bg-fuchsia-500", "bg-pink-500",
        "bg-rose-500", "bg-orange-500", "bg-amber-500"
    ];

    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }

    return colors[Math.abs(hash) % colors.length];
};

export const TeamGrid = ({ title, members }: TeamGridProps) => {
    return (
        <div className="py-12">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-12 text-center md:text-left">
                {title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {members.map((member, i) => {
                    const initials = getInitials(member.name);
                    const bgColor = getAvatarColor(member.name);

                    return (
                        <div
                            key={i}
                            className="group flex items-center p-4 bg-card rounded-xl border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
                        >
                            <Avatar className="h-14 w-14 mr-4 border-2 border-background shadow-sm group-hover:scale-105 transition-transform duration-300">
                                <AvatarImage src={member.image} alt={member.name} />
                                <AvatarFallback className={`text-white font-semibold text-lg ${bgColor}`}>
                                    {initials}
                                </AvatarFallback>
                            </Avatar>

                            <div className="min-w-0">
                                <h3 className="font-bold text-base truncate text-foreground group-hover:text-primary transition-colors">
                                    {member.name}
                                </h3>
                                <p className="text-sm text-muted-foreground truncate font-medium">
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
