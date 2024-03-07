import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Pricing Page Title',
    description: 'This is my prices services pages',
};

export default function PricingPage() {
    return (
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    );
}
