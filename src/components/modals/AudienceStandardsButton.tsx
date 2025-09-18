'use client';

import { useState } from 'react';
import AudienceGatingModal from './AudienceGatingModal';

const AudienceStandardsButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded-lg border border-slate-300 transition-colors"
      >
        Audience Standards
      </button>
      
      <AudienceGatingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default AudienceStandardsButton;
