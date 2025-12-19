
import React, { useState, useEffect } from 'react';
import { PRICE_XAF, CURRENCY, PAYMENT_NUMBER, RECIPIENT_NAME, ADMIN_WHATSAPP_LINK } from '../constants';
import MtnIcon from './icons/MtnIcon';
import OrangeIcon from './icons/OrangeIcon';

interface PaymentModalProps {
    onClose: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ onClose }) => {
    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
           if (event.key === 'Escape') {
              onClose();
           }
        };
        window.addEventListener('keydown', handleEsc);
        return () => {
           window.removeEventListener('keydown', handleEsc);
        };
    }, [onClose]);

    const handleCopy = () => {
        const numberToCopy = PAYMENT_NUMBER.replace(/\s/g, '');
        navigator.clipboard.writeText(numberToCopy);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 transition-opacity" onClick={onClose}>
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 sm:p-8 transform transition-transform scale-100" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                    <i className="fas fa-times text-2xl"></i>
                </button>
                
                <div>
                    <h3 className="text-2xl font-bold text-center text-slate-800 mb-2">Instructions de Paiement</h3>
                    <p className="text-center text-slate-500 mb-6">Montant total : <span className="font-bold text-slate-700">{PRICE_XAF.toLocaleString('fr-CM')} {CURRENCY}</span></p>
                    
                    <div className="bg-slate-50 p-4 rounded-lg space-y-4">
                        <div>
                            <p className="text-sm font-medium text-slate-600">1. Envoyez le paiement à :</p>
                            <div className="flex items-center justify-between mt-1">
                                <span className="font-mono text-lg font-bold text-slate-800">{PAYMENT_NUMBER}</span>
                                <button onClick={handleCopy} className={`px-3 py-1 text-sm rounded-md transition-all ${isCopied ? 'bg-green-500 text-white' : 'bg-slate-200 hover:bg-slate-300 text-slate-700'}`}>
                                    {isCopied ? 'Copié !' : 'Copier'}
                                </button>
                            </div>
                            <p className="text-sm text-slate-500 mt-1">Nom: <span className="font-semibold">{RECIPIENT_NAME}</span></p>
                        </div>

                         <div className="flex items-center space-x-4">
                            <p className="text-sm font-medium text-slate-600">Via :</p>
                            <div className="flex items-center space-x-2">
                                <MtnIcon className="h-8 w-8"/>
                                <OrangeIcon className="h-6 w-6"/>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 text-center">
                        <p className="text-md font-bold text-slate-800">2. Étape Finale (Obligatoire)</p>
                        <p className="text-slate-600 mt-1">
                            Après le paiement, envoyez une capture d'écran de la transaction à l'administrateur sur WhatsApp pour être ajouté au groupe.
                        </p>
                        <a
                            href={ADMIN_WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full mt-4 inline-block bg-green-500 text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300"
                        >
                            <i className="fab fa-whatsapp mr-2"></i>
                            Contacter l'admin
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentModal;
