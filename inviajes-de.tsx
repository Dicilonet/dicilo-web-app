
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { useTranslation, I18nextProvider } from 'react-i18next';
import i18next from './i18n'; // Using the main i18n instance

import { TOP_COMPANIES_DATA } from './constants';
import type { Company } from './types';
import { ClientProfile } from './client'; // Import the reusable component
import { LoadingSpinnerIcon } from './components/icons';

const InviajesPage: React.FC = () => {
    const { t } = useTranslation();
    const inviajesCompany: Company | undefined = TOP_COMPANIES_DATA.find(c => c.name === 'Inviajes - Reisen Club');

    if (!inviajesCompany) {
        return (
             <div className="fixed inset-0 bg-gray-100 flex flex-col justify-center items-center text-center p-4">
                <h1 className="text-3xl font-bold text-gray-800">Error</h1>
                <p className="text-lg text-gray-600 mt-2">{t('client_profile.not_found')}</p>
                 <a href="./" className="mt-6 bg-emerald-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-emerald-700 transition-colors shadow-sm">{t('client_profile.go_home')}</a>
            </div>
        )
    }

    return <ClientProfile company={inviajesCompany} />;
}

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Suspense fallback={
        <div className="fixed inset-0 bg-white flex justify-center items-center">
          <LoadingSpinnerIcon className="h-12 w-12 text-emerald-600"/>
        </div>
      }>
        <I18nextProvider i18n={i18next}>
          <InviajesPage />
        </I18nextProvider>
      </Suspense>
    </React.StrictMode>
  );
}