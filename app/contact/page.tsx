import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Page Title',
    description: 'This is the contact page of my company',
};

export default function ContactPage() {
    return (
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    );
}
