import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function DeleteAccount() {

    const [emailSent, setEmailSent] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const handleEmailRequest = () => {
        const subject = encodeURIComponent('Delete My Account - Slotgo Venue')
        const body = encodeURIComponent(
            'Hello,\n\nI would like to request deletion of my Slotgo Venue account.\n\n' +
            'Details:\n' +
            '- Registered mobile number/email: \n' +
            '- User role (Turf Owner/Player): \n' +
            '- Reason (optional): \n\n' +
            'Thank you.'
        )
        window.location.href = `mailto:info@skynextechnology.in?subject=${subject}&body=${body}`
        setEmailSent(true)
        setTimeout(() => setEmailSent(false), 5000)
    }

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
                                <span className="rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs text-red-400">
                                    Google Play compliant
                                </span>
                                <span className="rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs text-red-400">
                                    Account deletion request
                                </span>
                                <span className="rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs text-red-400">
                                    Data removal options
                                </span>
                            </div>
                            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                                Delete Account & Data
                            </h1>
                            <p className="text-sm text-white/70">
                                This page explains how to delete your <strong className="text-white">Slotgo Venue</strong> account and request removal of your personal data.
                                For support, contact <a href="mailto:info@skynextechnology.in" className="text-slotgo-green hover:underline">info@skynextechnology.in</a>.
                            </p>
                        </div>

                        <div className="grid gap-6 lg:grid-cols-[300px,1fr]">
                            {/* Sidebar */}
                            <div className="space-y-4">
                                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                                    <p className="mb-3 font-semibold text-white">Quick links</p>
                                    <ul className="space-y-2 text-sm">
                                        <li><a href="#in-app" className="text-white/70 hover:text-slotgo-green transition-colors">Delete in the app</a></li>
                                        <li><a href="#email" className="text-white/70 hover:text-slotgo-green transition-colors">Request via email</a></li>
                                        <li><a href="#what" className="text-white/70 hover:text-slotgo-green transition-colors">What gets deleted</a></li>
                                        <li><a href="#retention" className="text-white/70 hover:text-slotgo-green transition-colors">What we may retain</a></li>
                                        <li><a href="#timeline" className="text-white/70 hover:text-slotgo-green transition-colors">Processing time</a></li>
                                        <li><a href="#contact" className="text-white/70 hover:text-slotgo-green transition-colors">Contact</a></li>
                                    </ul>
                                    <hr className="my-4 border-white/10" />
                                    <div className="text-xs text-white/50">
                                        <p className="font-semibold text-white/70 mb-1">Skynex Technology Solutions Private Limited</p>
                                        <p>NO.27, KAMARAJAR STREET, BALAJI NAGAR, J.J. NAGAR, MARUDAMALAI, COIMBATORE - 641046</p>
                                    </div>
                                </div>
                            </div>

                            {/* Main Content */}
                            <div className="space-y-8">
                                {/* Option 1 */}
                                <section id="in-app" className="space-y-4">
                                    <h2 className="text-xl font-semibold text-white">Option 1: Delete your account inside the app (Recommended)</h2>
                                    <p className="text-sm text-white/70">
                                        If you have access to the app, you can delete your account directly:
                                    </p>
                                    <ol className="ml-6 list-decimal space-y-2 text-sm text-white/70">
                                        <li>Open <strong className="text-white">Slotgo Venue</strong></li>
                                        <li>Go to <strong className="text-white">Profile</strong></li>
                                        <li>Tap <strong className="text-white">Delete Account</strong></li>
                                        <li>Confirm using password</li>
                                    </ol>
                                    <p className="text-sm text-white/70">
                                        Once confirmed, your account will be scheduled for deletion and you will be logged out.
                                    </p>
                                </section>

                                <hr className="border-white/10" />

                                {/* Option 2 */}
                                <section id="email" className="space-y-4">
                                    <h2 className="text-xl font-semibold text-white">Option 2: Request deletion via email</h2>
                                    <p className="text-sm text-white/70">
                                        If you cannot access the app, you can request deletion by emailing us.
                                    </p>

                                    <div className="rounded-2xl border border-slotgo-green/30 bg-slotgo-green/5 p-5">
                                        <p className="mb-2 font-semibold text-white">Send an email to:</p>
                                        <p><a href="mailto:info@skynextechnology.in" className="text-slotgo-green hover:underline break-all">info@skynextechnology.in</a></p>

                                        <p className="mt-4 mb-2 font-semibold text-white">Email subject:</p>
                                        <p className="font-mono text-sm bg-black/40 inline-block px-3 py-1 rounded-lg">Delete My Account - Slotgo Venue</p>

                                        <p className="mt-4 mb-2 font-semibold text-white">Include these details:</p>
                                        <ul className="ml-6 list-disc space-y-1 text-sm text-white/70">
                                            <li>Registered mobile number or email</li>
                                            <li>User role (Turf Owner / Player)</li>
                                            <li>Reason (optional)</li>
                                        </ul>
                                    </div>

                                    <button
                                        onClick={handleEmailRequest}
                                        className="rounded-full bg-slotgo-green px-6 py-2.5 text-sm font-semibold text-slotgo-dark shadow-glow-green hover:brightness-110 transition-all"
                                    >
                                        Open Email Request →
                                    </button>

                                    {emailSent && (
                                        <div className="rounded-xl border border-slotgo-green/40 bg-slotgo-green/10 p-3 text-sm text-slotgo-green">
                                            ✓ Email client opened. Please send the email to complete your request.
                                        </div>
                                    )}

                                    <p className="text-xs text-white/50 mt-2">
                                        For safety, we may ask for additional verification before deleting the account.
                                    </p>
                                </section>

                                <hr className="border-white/10" />

                                {/* What gets deleted */}
                                <section id="what" className="space-y-4">
                                    <h2 className="text-xl font-semibold text-white">What gets deleted</h2>
                                    <p className="text-sm text-white/70">After successful verification, we will delete or anonymize (as applicable):</p>
                                    <ul className="ml-6 list-disc space-y-1 text-sm text-white/70">
                                        <li>Your profile data (name, phone/email, account identifiers)</li>
                                        <li>Your court details</li>
                                        <li>Your customer details</li>
                                        <li>Saved preferences and app settings linked to your account</li>
                                        <li>Reviews/ratings may be removed or anonymized (depending on platform rules)</li>
                                    </ul>
                                </section>

                                <hr className="border-white/10" />

                                {/* Retention */}
                                <section id="retention" className="space-y-4">
                                    <h2 className="text-xl font-semibold text-white">What we may retain (legal / compliance)</h2>
                                    <p className="text-sm text-white/70">
                                        In certain cases, we may retain limited data for legal, compliance, fraud prevention, or accounting purposes, such as:
                                    </p>
                                    <ul className="ml-6 list-disc space-y-1 text-sm text-white/70">
                                        <li>Booking and transaction records (invoice/payment references)</li>
                                        <li>Refund and dispute logs</li>
                                        <li>Required records under applicable Indian laws</li>
                                    </ul>
                                    <p className="text-xs text-white/40">
                                        If retained, this data will be restricted and used only for legal/compliance needs.
                                    </p>
                                </section>

                                <hr className="border-white/10" />

                                {/* Timeline */}
                                <section id="timeline" className="space-y-4">
                                    <h2 className="text-xl font-semibold text-white">Processing time</h2>
                                    <ul className="ml-6 list-disc space-y-1 text-sm text-white/70">
                                        <li>Most requests are completed within <strong className="text-white">7–15 business days</strong></li>
                                        <li>In some cases (legal/financial verification), it may take longer</li>
                                    </ul>
                                </section>

                                <hr className="border-white/10" />

                                {/* Contact */}
                                <section id="contact" className="space-y-4">
                                    <h2 className="text-xl font-semibold text-white">Contact</h2>
                                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm">
                                        <p><strong className="text-white">Support Email:</strong> <a href="mailto:info@skynextechnology.in" className="text-slotgo-green hover:underline">info@skynextechnology.in</a></p>
                                        <p className="mt-2"><strong className="text-white">Company:</strong> Skynex Technology Solutions Private Limited</p>
                                        <p><strong className="text-white">Address:</strong> NO.27, KAMARAJAR STREET, BALAJI NAGAR, J.J. NAGAR, MARUDAMALAI, COIMBATORE - 641046, TAMIL NADU</p>
                                    </div>
                                </section>
                            </div>
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

export default DeleteAccount