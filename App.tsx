
import React, { useState } from 'react';
import PaymentModal from './components/PaymentModal';
import { GROUP_NAME, GROUP_DESCRIPTION, PRICE_XAF, CURRENCY } from './constants';

const App: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
            <header className="bg-white shadow-sm">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <h1 className="text-2xl font-bold text-slate-900 flex items-center">
                        <i className="fab fa-whatsapp text-green-500 mr-3 text-3xl"></i>
                        {GROUP_NAME}
                    </h1>
                </div>
            </header>

            <main className="flex-grow flex items-center justify-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
                    <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg transform transition-all hover:scale-[1.01]">
                        <img src="https://i.postimg.cc/0yp9Z17N/images.jpg" alt="Groupe" className="w-full h-48 object-cover rounded-xl mb-6"/>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Rejoignez notre Groupe exclusif</h2>
                        <p className="text-slate-600 mb-6 text-lg">
                            {GROUP_DESCRIPTION}
                        </p>
                        <div className="bg-green-50 border-l-4 border-green-500 text-green-800 p-4 rounded-lg mb-8 text-left">
                            <p className="font-semibold">Accès après approbation.</p>
                            <p>Un groupe actif et des membres de qualité vous attendent.</p>
                        </div>
                        
                        <div className="my-8">
                            <p className="text-xl text-slate-500">Frais d'adhésion unique</p>
                            <p className="text-5xl font-bold text-slate-900 tracking-tight">{PRICE_XAF.toLocaleString('fr-CM')} <span className="text-2xl font-medium text-slate-400">{CURRENCY}</span></p>
                        </div>
                        
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="w-full bg-green-500 text-white font-bold py-4 px-6 rounded-xl text-lg hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 transition-transform transform hover:translate-y-[-2px] shadow-md hover:shadow-lg"
                        >
                            <i className="fas fa-lock mr-2"></i>
                            Payer pour rejoindre
                        </button>
                    </div>
                </div>
            </main>

            {isModalOpen && <PaymentModal onClose={() => setIsModalOpen(false)} />}
            
            <footer className="text-center py-6 text-slate-500 text-sm">
                <p>&copy; {new Date().getFullYear()} {GROUP_NAME}. Tous droits réservés.</p>
            </footer>
        </div>
    );
};

export default App;