import type { ReactNode } from 'react';

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    breadcrumb?: string;
    icon?: ReactNode;
    gradient?: string;
}

export default function PageHeader({
    title,
    subtitle,
    breadcrumb,
    icon,
    gradient = 'from-blue-600 via-cyan-500 to-teal-500'
}: PageHeaderProps) {
    return (
        <div className="relative bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 py-16 px-4 sm:px-6 overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto relative">
                {breadcrumb && (
                    <div className="text-sm text-blue-600 font-medium mb-4">
                        {breadcrumb}
                    </div>
                )}

                <div className="flex items-center gap-4 mb-4">
                    {icon && (
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}>
                            {icon}
                        </div>
                    )}
                    <div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-800">
                            {title}
                        </h1>
                    </div>
                </div>

                {subtitle && (
                    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl">
                        {subtitle}
                    </p>
                )}

                <div className={`w-32 h-2 bg-gradient-to-r ${gradient} rounded-full mt-6`} />
            </div>
        </div>
    );
}
