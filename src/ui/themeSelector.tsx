"use client";

import { Check } from "lucide-react";

import { themes } from "../design-system/themes";
import { useTheme } from "../providers/themeProvider";

type ThemeSelectorProps = {
    onSelect?: () => void;
};

export default function ThemeSelector({
    onSelect,
}: ThemeSelectorProps) {
    const { theme, setTheme } = useTheme();

    return (
        <div className="space-y-1.5">

            {themes.map((item) => {

                const active = theme.id === item.id;

                return (
                    <button
                        key={item.id}
                        type="button"
                        onClick={() => {
                            setTheme(item.id);
                            onSelect?.();
                        }}
                        className={`
                            w-full
                            flex
                            items-center
                            justify-between

                            rounded-xl

                            px-3
                            py-2.5

                            text-left

                            transition-all
                            duration-300

                            ${active
                                ? "border border-zinc-700 bg-zinc-800"
                                : "border border-transparent hover:bg-zinc-900"
                            }
                        `}
                    >
                        <div className="flex items-center gap-3">

                            <div
                                className={`
                                    relative
                                    h-9
                                    w-9
                                    shrink-0

                                    overflow-hidden

                                    rounded-lg

                                    border

                                    transition-all
                                    duration-300

                                    ${active
                                        ? "border-[rgb(var(--accent))]"
                                        : "border-white/10"
                                    }
                                `}
                                style={{
                                    boxShadow: active
                                        ? "0 0 12px rgb(var(--accent) / .15)"
                                        : undefined,
                                }}
                            >

                                <div
                                    className="absolute inset-0"
                                    style={{
                                        background: item.preview.right,
                                    }}
                                />

                                <div
                                    className="absolute inset-0"
                                    style={{
                                        background: item.preview.left,
                                        clipPath: "polygon(0 0,100% 0,0 100%)",
                                    }}
                                />

                                <div
                                    className="
                                        absolute
                                        inset-0

                                        bg-gradient-to-br
                                        from-white/15
                                        via-transparent
                                        to-transparent
                                    "
                                />

                            </div>

                            <div>

                                <div className="text-base font-medium text-white leading-none">
                                    {item.name}
                                </div>

                                <div className="mt-1 text-xs text-zinc-400 leading-snug">
                                    {item.description}
                                </div>

                            </div>

                        </div>

                        <div className="flex w-5 justify-center">

                            {active && (
                                <Check
                                    size={16}
                                    className="text-white"
                                />
                            )}

                        </div>

                    </button>
                );

            })}

        </div>
    );
}