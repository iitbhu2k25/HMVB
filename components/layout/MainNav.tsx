'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
    label: string;
    href: string;
    children?: NavItem[];
}

const navItems: NavItem[] = [
    { label: 'Home', href: '/' },
    {
        label: 'About',
        href: '/about',
        children: [
            { label: 'Overview', href: '/about#overview' },
            { label: 'Objectives', href: '/about#objectives' },
            { label: 'Vision & Mission', href: '/about#vision-mission' },
            { label: 'Core Values', href: '/about#core-values' },
            { label: 'Expected Impact', href: '/about#expected-impact' },
        ]
    },
    {
        label: 'GroundWater',
        href: '/groundwater',
        children: [
            { label: 'Depth', href: '/groundwater/depth' },
            { label: 'Quality', href: '/groundwater/quality' },
            { label: 'Potential Zone', href: '/groundwater/potential-zone' },
            { label: 'Aquifer Type', href: '/groundwater/aquifer-type' },
        ]
    },
    {
        label: 'MAR Suitable Zones',
        href: '/mar',
        children: [
            { label: 'Intervention Issues', href: '/mar/implementation-issues' },
            { label: 'Water Available', href: '/mar/water-available' },
            { label: 'MAR Sites', href: '/mar/sites' },
            { label: 'Techniques of MAR', href: '/mar/techniques' },
        ]
    },
    { label: 'TEM Data Visualization', href: '/tem-data' },
];

export default function MainNav() {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const navRef = useRef<HTMLElement>(null);
    const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

    // Scroll listener
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileOpen(false);
        setOpenDropdown(null);
    }, [pathname]);

    // Click outside handler - closes dropdown when clicking outside
    const handleClickOutside = useCallback((event: MouseEvent) => {
        if (openDropdown) {
            const dropdownElement = dropdownRefs.current[openDropdown];
            if (dropdownElement && !dropdownElement.contains(event.target as Node)) {
                setOpenDropdown(null);
            }
        }
    }, [openDropdown]);

    // Add/remove click outside listener
    useEffect(() => {
        if (openDropdown) {
            // Small delay to prevent immediate close on the same click that opened it
            const timeoutId = setTimeout(() => {
                document.addEventListener('click', handleClickOutside);
            }, 10);
            return () => {
                clearTimeout(timeoutId);
                document.removeEventListener('click', handleClickOutside);
            };
        }
    }, [openDropdown, handleClickOutside]);

    // Toggle dropdown on click
    const handleDropdownClick = (label: string, event: React.MouseEvent) => {
        event.stopPropagation();
        setOpenDropdown(prev => prev === label ? null : label);
    };

    // Handle mouse enter for hover-to-open behavior
    const handleMouseEnter = (label: string) => {
        setOpenDropdown(label);
    };

    // Handle mouse leave - only close if moving completely outside the dropdown area
    const handleMouseLeave = (event: React.MouseEvent, label: string) => {
        const dropdownElement = dropdownRefs.current[label];
        if (dropdownElement) {
            const rect = dropdownElement.getBoundingClientRect();
            const mouseX = event.clientX;
            const mouseY = event.clientY;

            // Check if mouse is moving outside the dropdown container bounds
            const isOutside =
                mouseX < rect.left ||
                mouseX > rect.right ||
                mouseY < rect.top ||
                mouseY > rect.bottom + 10; // Add buffer for smooth transition

            if (isOutside) {
                setOpenDropdown(null);
            }
        }
    };

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/';
        return pathname.startsWith(href);
    };

    return (
        <>
            <nav
                ref={navRef}
                className={`bg-[#0a3d62] text-white transition-all duration-300 z-50 ${scrolled ? 'fixed top-0 left-0 right-0 shadow-xl' : 'relative'}`}
            >
                <div className="max-w-7xl mx-auto px-4">
                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center justify-center gap-8">
                        {navItems.map((item) => (
                            <div
                                key={item.label}
                                ref={(el) => { dropdownRefs.current[item.label] = el; }}
                                className="relative"
                                onMouseEnter={() => item.children && handleMouseEnter(item.label)}
                                onMouseLeave={(e) => item.children && handleMouseLeave(e, item.label)}
                            >
                                {item.children ? (
                                    <button
                                        onClick={(e) => handleDropdownClick(item.label, e)}
                                        className={`flex items-center gap-1.5 px-5 py-4 font-medium transition-all hover:bg-white/10 ${isActive(item.href) ? 'bg-white/15' : ''
                                            } ${openDropdown === item.label ? 'bg-white/20' : ''}`}
                                        aria-expanded={openDropdown === item.label}
                                    >
                                        {item.label}
                                        <ChevronDown
                                            size={16}
                                            className={`transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''
                                                }`}
                                        />
                                    </button>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className={`block px-5 py-4 font-medium transition-all hover:bg-white/10 ${isActive(item.href) ? 'bg-white/15 border-b-2 border-accent' : ''
                                            }`}
                                    >
                                        {item.label}
                                    </Link>
                                )}

                                {/* Dropdown */}
                                <AnimatePresence>
                                    {item.children && openDropdown === item.label && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -8 }}
                                            transition={{ duration: 0.15 }}
                                            className="absolute left-0 top-full w-56 bg-white rounded-b-xl shadow-2xl overflow-hidden z-50"
                                        >
                                            {item.children.map((child) => (
                                                <Link
                                                    key={child.href}
                                                    href={child.href}
                                                    onClick={() => setOpenDropdown(null)}
                                                    className={`block px-5 py-3 text-gray-700 hover:bg-primary hover:text-white transition-colors border-l-3 border-transparent hover:border-accent ${isActive(child.href) ? 'bg-primary/10 text-primary font-medium' : ''
                                                        }`}
                                                >
                                                    {child.label}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Nav Button */}
                    <div className="lg:hidden flex items-center justify-between py-3">
                        <span className="font-semibold">Menu</span>
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                        >
                            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="lg:hidden bg-white text-gray-800 overflow-hidden"
                        >
                            <div className="max-h-[70vh] overflow-y-auto">
                                {navItems.map((item) => (
                                    <div key={item.label} className="border-b border-gray-100">
                                        {item.children ? (
                                            <>
                                                <button
                                                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                                                    className="w-full flex items-center justify-between px-5 py-3 font-medium"
                                                >
                                                    {item.label}
                                                    <ChevronDown
                                                        size={18}
                                                        className={`transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`}
                                                    />
                                                </button>
                                                <AnimatePresence>
                                                    {openDropdown === item.label && (
                                                        <motion.div
                                                            initial={{ height: 0 }}
                                                            animate={{ height: 'auto' }}
                                                            exit={{ height: 0 }}
                                                            className="bg-gray-50 overflow-hidden"
                                                        >
                                                            {item.children.map((child) => (
                                                                <Link
                                                                    key={child.href}
                                                                    href={child.href}
                                                                    className="block px-8 py-2.5 text-gray-600 hover:text-primary border-l-3 border-transparent hover:border-accent"
                                                                >
                                                                    {child.label}
                                                                </Link>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </>
                                        ) : (
                                            <Link
                                                href={item.href}
                                                className={`block px-5 py-3 font-medium ${isActive(item.href) ? 'text-primary bg-primary/5' : ''
                                                    }`}
                                            >
                                                {item.label}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Spacer when nav is fixed */}
            {scrolled && <div className="h-14 lg:h-[56px]" />}
        </>
    );
}
