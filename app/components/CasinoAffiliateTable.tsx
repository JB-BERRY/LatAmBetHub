"use client";

import React from 'react';
import Image from 'next/image';

type Casino = {
  logoFileName: string;
  affiliateLink: string;
  bonus: string;
  paymentMethods: string;
  wageringRequirements: string;
  rating: string;
};

interface CasinoAffiliateTableProps {
  casinos: Casino[];
}

const CasinoAffiliateTable: React.FC<CasinoAffiliateTableProps> = ({ casinos }) => {
  return (
    <div className="overflow-x-auto mt-5">
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 border-b border-gray-300">Casino</th>
            <th className="p-2 border-b border-gray-300">Bonus d&apos;Inscription</th>
            <th className="p-2 border-b border-gray-300">Méthodes de Paiement</th>
            <th className="p-2 border-b border-gray-300">Exigences de Paris</th>
            <th className="p-2 border-b border-gray-300">Évaluation</th>
            <th className="p-2 border-b border-gray-300">Lien</th>
          </tr>
        </thead>
        <tbody>
          {casinos.map((casino, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="p-2 border-b border-gray-300 text-center">
                <div className="relative w-20 h-12 mx-auto">
                  <Image 
                    src={`/logos/casinos/${casino.logoFileName}`}
                    alt={`${casino.logoFileName.split('.')[0]} logo`}
                    layout="fill" // Permet d'ajuster l'image en fonction de la taille du conteneur
                    objectFit="contain" // Ajuste l'image sans la déformer
                  />
                </div>
              </td>
              <td className="p-2 border-b border-gray-300">{casino.bonus}</td>
              <td className="p-2 border-b border-gray-300">{casino.paymentMethods}</td>
              <td className="p-2 border-b border-gray-300">{casino.wageringRequirements}</td>
              <td className="p-2 border-b border-gray-300">{casino.rating}</td>
              <td className="p-2 border-b border-gray-300">
                <a
                  href={casino.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white font-semibold rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl hover:shadow-green-500 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                >
                  <span className="mr-2">✅</span>Visiter le casino
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CasinoAffiliateTable;