import Header from '@/app/components/header';
import React from 'react';

export interface PageProp {}

export default function Page({}: PageProp) {
  return (
    <>
      <Header>Dashboard</Header>
    </>
  );
}
