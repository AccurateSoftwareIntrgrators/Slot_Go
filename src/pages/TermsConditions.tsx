import { useEffect } from 'react'
import { motion } from 'framer-motion'

function TermsConditions() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="min-h-screen w-full bg-slotgo-dark text-white font-sans">
            <div className="w-full px-4 pb-16 pt-10 sm:px-6 lg:px-8 md:pt-16">
                <div className="mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        {/* Header */}
                        <div className="space-y-4 border-b border-white/10 pb-6">
                            <div className="flex flex-wrap gap-2">
                                <span className="rounded-full border border-slotgo-green/30 bg-slotgo-green/10 px-3 py-1 text-xs text-slotgo-green">
                                    App-store friendly
                                </span>
                                <span className="rounded-full border border-slotgo-green/30 bg-slotgo-green/10 px-3 py-1 text-xs text-slotgo-green">
                                    India-first
                                </span>
                                <span className="rounded-full border border-slotgo-green/30 bg-slotgo-green/10 px-3 py-1 text-xs text-slotgo-green">
                                    Clear booking rules
                                </span>
                            </div>
                            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                                Terms & Conditions
                            </h1>
                            <p className="text-sm text-white/60">
                                Effective Date: <strong className="text-white">23 Jan 2026</strong> · Company: <strong className="text-white">Skynex Technology Solutions Private Limited</strong> · App: <strong className="text-white">Slotgo</strong>
                            </p>
                        </div>

                        {/* Content */}
                        <div className="space-y-6 text-white/80">
                            <p className="text-sm">
                                By accessing or using Slotgo, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use the app.
                            </p>

                            <section className="space-y-3">
                                <h2 className="text-xl font-semibold text-white">1. User Eligibility</h2>
                                <ul className="ml-6 list-disc space-y-1 text-sm">
                                    <li>Users must be <strong className="text-white">13 years or older</strong></li>
                                    <li>Users under <strong className="text-white">18 years</strong> must have parental consent</li>
                                    <li>You must provide accurate and complete information during registration</li>
                                </ul>
                            </section>

                            <section className="space-y-3">
                                <h2 className="text-xl font-semibold text-white">2. Account Responsibility</h2>
                                <ul className="ml-6 list-disc space-y-1 text-sm">
                                    <li>You are responsible for maintaining the confidentiality of your account</li>
                                    <li>Any activity performed using your account is your responsibility</li>
                                    <li>Notify us immediately if you suspect unauthorized access</li>
                                </ul>
                            </section>

                            <section className="space-y-3">
                                <h2 className="text-xl font-semibold text-white">3. Booking & Slot Rules</h2>
                                <ul className="ml-6 list-disc space-y-1 text-sm">
                                    <li>Bookings are subject to availability</li>
                                    <li>Slot duration and pricing are determined by turf owners</li>
                                    <li>Double bookings or misuse may result in cancellation</li>
                                </ul>
                            </section>

                            <section className="space-y-3">
                                <h2 className="text-xl font-semibold text-white">4. Cancellation & Refund Policy</h2>
                                <ul className="ml-6 list-disc space-y-1 text-sm">
                                    <li>Cancellation rules vary by turf owner</li>
                                    <li>Refund eligibility depends on venue-specific policies</li>
                                    <li>Refunds, if applicable, will be processed to the original payment method</li>
                                </ul>
                            </section>

                            <section className="space-y-3">
                                <h2 className="text-xl font-semibold text-white">5. Payments</h2>
                                <ul className="ml-6 list-disc space-y-1 text-sm">
                                    <li>All payments must be made through supported online methods</li>
                                    <li>Prices are inclusive/exclusive of taxes as applicable</li>
                                    <li>We are not responsible for payment gateway failures</li>
                                </ul>
                            </section>

                            <section className="space-y-3">
                                <h2 className="text-xl font-semibold text-white">6. Vendor / Turf Owner Disclaimer</h2>
                                <ul className="ml-6 list-disc space-y-1 text-sm">
                                    <li>Turf owners are independent service providers</li>
                                    <li>We do not guarantee turf quality, safety, or services</li>
                                    <li>Disputes regarding turf conditions should be resolved with the venue owner</li>
                                </ul>
                            </section>

                            <section className="space-y-3">
                                <h2 className="text-xl font-semibold text-white">7. Reviews & Ratings</h2>
                                <ul className="ml-6 list-disc space-y-1 text-sm">
                                    <li>Users must provide honest and lawful reviews</li>
                                    <li>Offensive, misleading, or abusive content may be removed</li>
                                    <li>We reserve the right to moderate reviews</li>
                                </ul>
                            </section>

                            <section className="space-y-3">
                                <h2 className="text-xl font-semibold text-white">8. Prohibited Activities</h2>
                                <ul className="ml-6 list-disc space-y-1 text-sm">
                                    <li>Using the app for illegal purposes</li>
                                    <li>Submitting false bookings or information</li>
                                    <li>Attempting to hack, scrape, or disrupt the platform</li>
                                    <li>Abusing vendors or other users</li>
                                </ul>
                            </section>

                            <section className="space-y-3">
                                <h2 className="text-xl font-semibold text-white">9. App Availability</h2>
                                <p className="text-sm">
                                    We strive for uninterrupted service but do not guarantee availability. Maintenance or technical issues may cause temporary downtime.
                                </p>
                            </section>

                            <section className="space-y-3">
                                <h2 className="text-xl font-semibold text-white">10. Termination of Account</h2>
                                <p className="text-sm">
                                    We reserve the right to suspend or terminate accounts that violate these terms or engage in fraudulent/abusive behavior.
                                </p>
                            </section>

                            <section className="space-y-3">
                                <h2 className="text-xl font-semibold text-white">11. Limitation of Liability</h2>
                                <p className="text-sm">
                                    Skynex Technology Solutions Private Limited shall not be liable for indirect or consequential damages, losses caused by venue services, or payment/third-party failures.
                                </p>
                            </section>

                            <section className="space-y-3">
                                <h2 className="text-xl font-semibold text-white">12. Governing Law</h2>
                                <p className="text-sm">
                                    These Terms shall be governed by the laws of <strong className="text-white">India</strong>.
                                </p>
                            </section>

                            <section className="space-y-3">
                                <h2 className="text-xl font-semibold text-white">13. Dispute Resolution & Jurisdiction</h2>
                                <p className="text-sm">
                                    Any disputes shall be subject to the exclusive jurisdiction of courts in India. Parties shall attempt amicable resolution before legal action.
                                </p>
                            </section>

                            <section className="space-y-3">
                                <h2 className="text-xl font-semibold text-white">14. Contact</h2>
                                <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm">
                                    <p><strong className="text-white">Email:</strong> <a href="mailto:info@skynextechnology.in" className="text-slotgo-green hover:underline">info@skynextechnology.in</a></p>
                                    <p className="mt-2"><strong className="text-white">Company:</strong> Skynex Technology Solutions Private Limited</p>
                                    <p><strong className="text-white">Address:</strong> NO.27, KAMARAJAR STREET, BALAJI NAGAR, J.J. NAGAR, MARUDAMALAI, COIMBATORE - 641046, TAMIL NADU</p>
                                </div>
                            </section>
                        </div>

                        {/* Back button */}
                        <div className="pt-8">
                            <button
                                onClick={() => window.history.back()}
                                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-white/80 transition-all hover:border-slotgo-green/60 hover:text-white"
                            >
                                ← Back to SlotGo
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default TermsConditions