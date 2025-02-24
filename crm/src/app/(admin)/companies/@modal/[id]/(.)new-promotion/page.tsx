'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import PromotionFormModal from '@/app/components/promotion-form-modal';

export interface PageProps {
  params: Promise<{ id: string }>;
}

export default function Page({ params }: PageProps) {
  const router = useRouter();
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
    <PromotionFormModal
      companyId={resolvedParams.id}
      show={true}
      onClose={() => router.back()}
    />
  );
}
