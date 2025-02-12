import React from 'react';

export interface PageProp {}

export default function Page({}: PageProp) {
  return (
    <main>
      <h1 className="text-xl">Dashboard Page</h1>
    </main>
  );
}
