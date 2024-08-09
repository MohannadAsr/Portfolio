'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { IoArrowBackOutline } from 'react-icons/io5';

function GoBack() {
  const router = useRouter();
  return (
    <button className="main-button" onClick={() => router.back()}>
      <IoArrowBackOutline size={'28'} />
    </button>
  );
}

export default GoBack;
