import React from 'react';

const Careers = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f2992f]/10 via-white to-[#133331]/5 px-4 py-20">
            <div className="max-w-2xl w-full bg-white/30 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30 p-10 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-[#133331] mb-6">Careers at BNPRS</h1>
                <p className="text-lg text-slate-700 mb-8">We're always looking for passionate, talented people to join our team. Explore opportunities to work on cutting-edge biometrics, AI, and payment technologies.</p>
                <div className="space-y-4">
                    <div className="bg-white/60 rounded-lg p-6 shadow">
                        <h2 className="text-xl font-semibold text-[#f2992f] mb-2">Open Positions</h2>
                        <ul className="text-left text-slate-700 list-disc list-inside">
                            {/* <li>Frontend Developer (React, Tailwind CSS)</li> */}
                            <li>Backend Developer (Node.js)</li>
                            {/* <li>AI/ML Engineer</li> */}
                            {/* <li>UI/UX Designer</li> */}
                            {/* <li>QA Engineer</li> */}
                            <li>Android Developer (Java)</li>
                        </ul>
                    </div>
                    <div className="bg-white/60 rounded-lg p-6 shadow">
                        <h2 className="text-xl font-semibold text-[#f2992f] mb-2">How to Apply</h2>
                        <p className="text-slate-700">Send your resume and portfolio to <a href="mailto:hr@bnprs.in" className="text-[#f2992f] underline">hr@bnprs.in</a>. We look forward to hearing from you!</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Careers;
