
import React from "react";

interface TeamMember {
    name: string;
    role: string;
}

interface TeamGridProps {
    title: string;
    members: TeamMember[];
}

const gradients = [
    "from-blue-500 to-cyan-500",
    "from-purple-500 to-pink-500",
    "from-orange-500 to-yellow-500",
    "from-green-500 to-emerald-500",
    "from-indigo-500 to-purple-500",
    "from-pink-500 to-rose-500",
];

const getInitials = (name: string) => {
    return name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);
};

export const TeamGrid = ({ title, members }: TeamGridProps) => {
    return (
        <div className="py-12">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-12 text-center md:text-left">
                {title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {members.map((member, i) => {
                    const gradient = gradients[i % gradients.length];
                    const initials = getInitials(member.name);

                    return (
                        <div
                            key={i}
                            className="group relative flex items-center p-4 bg-card rounded-2xl border shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                        >
                            <div className={`h-16 w-16 rounded-xl flex items-center justify-center text-white font-bold text-xl bg-linear-to-br ${gradient} shadow-inner mr-5 group-hover:scale-110 transition-transform duration-300`}>
                                {initials}
                            </div>

                            <div className="min-w-0">
                                <h3 className="font-bold text-lg truncate text-foreground group-hover:text-primary transition-colors">
                                    {member.name}
                                </h3>
                                <p className="text-sm text-muted-foreground truncate">
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
