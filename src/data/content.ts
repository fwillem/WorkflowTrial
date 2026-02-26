export const amenities: Array<{
    id: number;
    title: string;
    icon: string;
    description: string;
}> = [
        {
            id: 1,
            title: "Private Spa",
            icon: "spa",
            description: "Heated infinity pool, traditional sauna, and steam room with panoramic valley views."
        },
        {
            id: 2,
            title: "Gourmet Dining",
            icon: "restaurant",
            description: "A dedicated private chef crafting bespoke menus from locally sourced organic ingredients."
        },
        {
            id: 3,
            title: "Ski-in/Ski-out",
            icon: "downhill_skiing",
            description: "Direct access to world-class slopes with a private heated boot room and equipment rental."
        },
        {
            id: 4,
            title: "Concierge",
            icon: "support_agent",
            description: "24/7 dedicated personal concierge to arrange every detail of your mountain stay."
        }
    ];

export const navLinks: Array<{ label: string; href: string; active: boolean }> = [
    { label: "Home", href: "#", active: true },
    { label: "The Chalet", href: "#", active: false },
    { label: "Rooms", href: "#", active: false },
    { label: "Winter", href: "#", active: false },
    { label: "Summer", href: "#", active: false },
    { label: "Reviews", href: "#", active: false },
];

export const footerLinks: Array<{
    title: string;
    links: Array<{
        label: string;
        href: string | null;
        icon?: string;
    }>;
}> = [
        {
            title: "The Chalet",
            links: [
                { label: "History", href: "#" },
                { label: "Suites & Rooms", href: "#" },
                { label: "Amenities", href: "#" },
                { label: "Gastronomy", href: "#" }
            ]
        },
        {
            title: "Experience",
            links: [
                { label: "Winter Activities", href: "#" },
                { label: "Summer Exploration", href: "#" },
                { label: "Local Guide", href: "#" },
                { label: "Guest Reviews", href: "#" }
            ]
        },
        {
            title: "Contact",
            links: [
                { label: "Chalet Strasse 42, Zermatt, CH", href: null, icon: "location_on" },
                { label: "+41 27 123 45 67", href: null, icon: "call" },
                { label: "reservations@luxurychalet.com", href: null, icon: "mail" }
            ]
        }
    ];

export const accommodations: Array<{
    id: string;
    tag: string;
    title: string;
    description: string;
    features: string[];
    buttonText: string;
    imageSrc: string;
    imageAlt: string;
}> = [
        {
            id: "summit-suite",
            tag: "Signature Suite",
            title: "The Summit Master Suite",
            description: "Perched at the highest point of the chalet, this suite offers floor-to-ceiling windows with 270-degree views of the Eiger mountains.",
            features: [
                "King size bed with organic linens",
                "Private terrace with outdoor fireplace",
                "En-suite spa bath with mountain views"
            ],
            buttonText: "View Suite",
            imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBT_hy8HFo2h2F32bFWwpcHL1sXf6RvSuw_ZcHL6GvjPELBpoVfRjtLAxHr0BI_MgNFawE3RgpilzHEvGNDSnrZVDhJNGIQNNDfC-6eA7Iy9NcNv37LhhaIRhkmo5B9F1xmavg7D0MXCTWoo7ySM7P8-5bKS_ViDgpJNSPE91jDlpAoW8hxZEb-l1V52rra3VbQizS-5JBYhKnL1f3z80qu7S-0smUID-GPA9vBM5bPoYT50TyKsRTafhFbahY6lpMGwRiTL5oY",
            imageAlt: "Modern luxury bedroom with large glass windows showing snowy mountains"
        },
        {
            id: "alpine-loft",
            tag: "Family Comfort",
            title: "The Alpine Loft",
            description: "Designed for families or groups, the loft combines social spaces with intimate corners for relaxation after a day on the slopes.",
            features: [
                "Four interconnected bedrooms",
                "Private cinema and gaming room",
                "Fully equipped professional kitchen"
            ],
            buttonText: "View Loft",
            imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCe0PzN28aw8B75sEQ9LfkSQgTYHsFavJcB1W0vUuE0tUnscM4QHcC-6FRpco4I361oFQnDuyWTCBLwCdKaFrNVLBHgfI4vzYEGJDHT9YOx-H7VG2ur_ERoCFt-bp9C_0YKqrKLGPKHGGa4Zf4g1p3zoc4JYveMs4Y8LFShvvIuc-NzjGlTFYFDCiBcdMR694lP13NWfoz6B6HMF_PwQLQ9vucl6ZvKsI1xaz8jMgK4obqXUAOFaq2K2eRvumDUYiYK8TL3nnPC",
            imageAlt: "Cozy chalet living room with plush sofas and warm lighting"
        }
    ];

export const seasons: Array<{
    id: string;
    title: string;
    description: string;
    buttonText: string;
    imageSrc: string;
    imageAlt: string;
}> = [
        {
            id: "winter",
            title: "Winter Wonderland",
            description: "Experience world-class skiing, snowboarding, and cozy fireside nights.",
            buttonText: "Explore Winter",
            imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGc8TxoC1YDHtko05XWmMtmCHJ_9_4OEjxftl7oTWRim5rdqIQtQsTOfuoivDn2TB-V_mURI_ZZSr56rWQpMFd8_mkdbP__ryxmJpar5mgqn5pmABdUtbpVOcaxMLfRGFy1qS9zqt6DYlTjT8wRAn_jZD4JJUL1sWZQiSuEp8bd8Nm3J5_Mi2-GL6XKCrCnPZuTb-rXMSYRrHUl53BdTotWPc6iY_gtcV_oZ1jDVSy-E8LlN2ycxMfOoJaZKhJMb9-NrdG321y",
            imageAlt: "Heavy snow falling on mountain peaks"
        },
        {
            id: "summer",
            title: "Alpine Summer",
            description: "Discover hiking trails, crystal lakes, and the vibrant greenery of the high Alps.",
            buttonText: "Explore Summer",
            imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuADDxS5BdArkDWVrOGkRnUuFTR1sjbsRTaDAjYxFp1FD4bSqetKDOZH2sREEXy_fr-3ylP0cn5iBtqQopkxDG6hVoL_cb8MyomSdq7Htyc97isCkg5sMeGT8ikLSgCDdG9gCmEUHlLoY6U1t24LbLNworW4vRta1LqFZHX9JAZ7zQJfQ0Jp1DoRNZqnIsESXJinIs9ypB2Tlo1pcmQwgKD4ikC68PgscaHfbyy7-_utL3uJ-xzXUuVTgb6vMuvI3fCCNiYYCUx9",
            imageAlt: "Lush green mountain valley with wildflowers in summer"
        }
    ];
