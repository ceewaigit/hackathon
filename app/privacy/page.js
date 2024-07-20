import React from 'react';
import Link from 'next/link';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="bg-card shadow">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0">
                <Link href="/">
                  <span className="text-xl font-bold text-primary cursor-pointer">Home</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </nav>

      <main className="py-10">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-card shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h1 className="text-2xl font-bold leading-6 text-primary">Privacy Policy</h1>
            </div>
            <div className="border-t border-border">
              <dl className="divide-y divide-border">
                <div className="px-4 py-5 sm:px-6">
                  <dt className="text-lg leading-6 font-medium text-primary">Introduction</dt>
                  <dd className="mt-2 text-sm text-foreground">
                    Your privacy is important to us. This privacy policy explains how we collect, use, and protect your personal information.
                  </dd>
                </div>
                <div className="px-4 py-5 sm:px-6">
                  <dt className="text-lg leading-6 font-medium text-primary">Information We Collect</dt>
                  <dd className="mt-2 text-sm text-foreground">
                    We collect information that you provide to us directly, such as when you create an account, update your profile, or make a purchase. We also collect information automatically as you use our services.
                  </dd>
                </div>
                <div className="px-4 py-5 sm:px-6">
                  <dt className="text-lg leading-6 font-medium text-primary">How We Use Information</dt>
                  <dd className="mt-2 text-sm text-foreground">
                    We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to protect our users.
                  </dd>
                </div>
                <div className="px-4 py-5 sm:px-6">
                  <dt className="text-lg leading-6 font-medium text-primary">Sharing of Information</dt>
                  <dd className="mt-2 text-sm text-foreground">
                    We do not share your personal information with third parties except as described in this policy, such as with your consent or to comply with legal obligations.
                  </dd>
                </div>
                <div className="px-4 py-5 sm:px-6">
                  <dt className="text-lg leading-6 font-medium text-primary">Your Choices</dt>
                  <dd className="mt-2 text-sm text-foreground">
                    You have choices regarding the information we collect and how it is used. You can update your account information and preferences at any time.
                  </dd>
                </div>
                <div className="px-4 py-5 sm:px-6">
                  <dt className="text-lg leading-6 font-medium text-primary">Contact Us</dt>
                  <dd className="mt-2 text-sm text-foreground">
                    If you have any questions about this privacy policy, please contact us at support@myapp.com.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
