'use client';

import React, { useEffect, useState } from 'react';
import PromotionForm from '@/app/components/promotion-form';

export interface PageProps {
  params: Promise<{ id: string }>;
}

export default function Page({ params }: PageProps) {
  const [resolvedParams, setResolvedParams] = useState<{ id: string } | null>(
    null,
  );

  useEffect(() => {
    params.then(setResolvedParams);
  }, [params]);

  if (!resolvedParams) {
    return <p>Loading...</p>;
  }

  return (
    <div className="py-6 px-10">
      <PromotionForm companyId={resolvedParams.id} />
    </div>
  );
}
