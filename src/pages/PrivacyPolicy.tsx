import { useEffect } from 'react'
import { motion } from 'framer-motion'

function PrivacyPolicy() {
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
                                    GDPR-aligned best practices
                                </span>
                            </div>
                            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                                Privacy Policy
                            </h1>
                            <p className="text-sm text-white/60">
                                Effective Date: <strong className="text-white">21 Jan 2026</strong> · Company: <strong className="text-white">Skynex Technology Solutions Private Limited</strong> · App: <strong className="text-white">Slotgo</strong>
                            </p>
                        </div>

                        {/* Content */}
                        <div className="space-y-6 text-white/80">
                            <p className="text-sm">
                                Slotgo ("we", "our", "us") is a sports turf and ground booking platform operating in India, with future plans for global expansion. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our mobile applications (Android & iOS) and related services.
                            </p>
                            <p className="text-sm">
                                By using our app, you agree to the collection and use of information in accordance with this Privacy Policy.
                            </p>

                            <section className="space-y-3">
                                <h2 className="text-xl font-semibold text-white">1. Information We Collect</h2>

                                <h3 className="text-lg font-semibold text-white/90 mt-4">1.1 Personal Information</h3>
                                <ul className="ml-6 list-disc space-y-1 text-sm">
                                    <li>Full name</li>
                                    <li>Mobile number</li>
                                    <li>Email address</li>
                                    <li>Profile information</li>
                                    <li>Login credentials (encrypted)</li>
                                </ul>

                                <h3 className="text-lg font-semibold text-white/90 mt-4">1.2 Authentication Data</h3>
                                <ul className="ml-6 list-disc space-y-1 text-sm">
                                    <li>OTP verification details</li>
                                    <li>Google Sign-In authentication tokens (via Google Firebase)</li>
                                </ul>

                                <h3 className="text-lg font-semibold text-white/90 mt-4">1.3 Booking & Usage Data</h3>
                                <ul className="ml-6 list-disc space-y-1 text-sm">
                                    <li>Turf / court booking details</li>
                                    <li>Date, time slot, and venue information</li>
                                    <li>Cancellation and refund records</li>
                                    <li>Reviews and ratings submitted by users</li>
                                </ul>

                                <h3 className="text-lg font-semibold text-white/90 mt-4">1.4 Location Information</h3>
                                <ul className="ml-6 list-disc space-y-1 text-sm">
                                    <li>Approximate or precise location (GPS), only when permission is granted</li>
                                    <li>Used for showing nearby turfs and improving search results</li>
                                </ul>

                                <h3 className="text-lg font-semibold text-white/90 mt-4">1.5 Payment Information</h3>
                                <ul className="ml-6 list-disc space-y-1 text-sm">
                                    <li>Transaction ID</li>
                                    <li>Payment method used (UPI / Card / Wallet)</li>
                                    <li>Payment status</li>
                                </ul>
                                <p className="text-sm text-slotgo-green mt-2">
                                    <strong>We do NOT store any card numbers, CVV, or UPI PINs.</strong> All payments are securely processed by third-party payment gateways.
                                </p>

                                <h3 className="text-lg font-semibold text-white/90 mt-4">1.6 Device & Technical Data</h3>
                                <ul className="ml-6 list-disc space-y-1 text-sm">
                                    <li>Device type, OS version</li>
                                    <li>App usage analytics</li>
                                    <li>IP address (anonymized where feasible)</li>
                                    <li>Crash logs</li>
                                </ul>
                            </section>

                            <section className="space-y-3">
                                <h2 className="text-xl font-semibold text-white">2. Purpose of Data Collection</h2>
                                <ul className="ml-6 list-disc space-y-1 text-sm">
                                    <li>Create and manage user accounts</li>
                                    <li>Verify identity using OTP</li>
                                    <li>Enable turf and slot bookings</li>
                                    <li>Process payments and refunds</li>
                                    <li>Show nearby turfs using location services</li>
                                    <li>Send booking confirmations and notifications</li>
                                    <li>Improve app performance and user experience</li>
                                    <li>Prevent fraud and misuse</li>
                                    <li>Comply with legal obligations</li>
                                </ul>
                            </section>

                            <section className="space-y-3">
                                <h2 className="text-xl font-semibold text-white">3. Firebase & Third-Party Services</h2>
                                <p className="text-sm">
                                    We use <strong className="text-white">Google Firebase</strong> for authentication (OTP, Google login), push notifications, analytics, and crash reporting. We may also use payment gateways, SMS/email providers, and cloud hosting services. These providers process data only to deliver their services and in accordance with applicable laws.
                                </p>
                            </section>

                            <section className="space-y-3">
                                <h2 className="text-xl font-semibold text-white">4. Cookies & Analytics</h2>
                                <p className="text-sm">
                                    Our app and website (if applicable) may use cookies or similar technologies for analytics, performance monitoring, and user experience improvements. You can manage permissions through your device or browser settings.
                                </p>
                            </section>

                            <section className="space-y-3">
                                <h2 className="text-xl font-semibold text-white">5. Location Permissions</h2>
                                <p className="text-sm">
                                    Location access is used only to display nearby turfs/venues and improve search accuracy. You may enable or disable location permissions anytime through device settings.
                                </p>
                            </section>

                            <section className="space-y-3">
                                <h2 className="text-xl font-semibold text-white">6. Data Sharing & Disclosure</h2>
                                <p className="text-sm">We may share necessary data with:</p>
                                <ul className="ml-6 list-disc space-y-1 text-sm">
                                    <li>Turf owners / venue managers (booking-related information only)</li>
                                    <li>Payment processors for transaction handling</li>
                                    <li>Government or legal authorities when required by law</li>
                                </ul>
                                <p className="text-sm text-slotgo-green mt-2">
                                    <strong>We do not sell</strong> personal data to third parties.
                                </p>
                            </section>

                            <section className="space-y-3">
                                <h2 className="text-xl font-semibold text-white">7. Data Retention</h2>
                                <ul className="ml-6 list-disc space-y-1 text-sm">
                                    <li>Account data is retained while your account is active</li>
                                    <li>Booking and transaction data may be retained for legal/accounting purposes</li>
                                    <li>You may request account deletion at any time</li>
                                </ul>
                            </section>

                            <section className="space-y-3">
                                <h2 className="text-xl font-semibold text-white">8. Your Rights</h2>
                                <ul className="ml-6 list-disc space-y-1 text-sm">
                                    <li>Access your personal data</li>
                                    <li>Update or correct your information</li>
                                    <li>Request deletion of your account</li>
                                    <li>Withdraw consent for certain permissions</li>
                                </ul>
                                <p className="text-sm">Requests can be sent to <a href="mailto:info@skynextechnology.in" className="text-slotgo-green hover:underline">info@skynextechnology.in</a>.</p>
                            </section>

                            <section className="space-y-3">
                                <h2 className="text-xl font-semibold text-white">9. Children's Privacy</h2>
                                <p className="text-sm">
                                    Our services are intended for users <strong className="text-white">13 years and above</strong>. Users under <strong className="text-white">18 years</strong> should use the app under parental or guardian supervision. We do not knowingly collect data from children below 13 years.
                                </p>
                            </section>

                            <section className="space-y-3">
                                <h2 className="text-xl font-semibold text-white">10. Security Practices</h2>
                                <p className="text-sm">
                                    We implement reasonable security measures such as encrypted transmission (HTTPS), secure authentication, and restricted internal access controls. However, no system is 100% secure.
                                </p>
                            </section>

                            <section className="space-y-3">
                                <h2 className="text-xl font-semibold text-white">11. Changes to This Policy</h2>
                                <p className="text-sm">
                                    We may update this policy from time to time. Changes will be notified through the app or website.
                                </p>
                            </section>

                            <section className="space-y-3">
                                <h2 className="text-xl font-semibold text-white">12. Contact</h2>
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

export default PrivacyPolicy