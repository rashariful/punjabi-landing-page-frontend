// /dashboard/page.js or page.tsx

import OrderTable from '@/components/dashboard/OrderTable';
import React from 'react';

const DashboardPage = () => {
  return (
    <div>
      <h1 className='py-10 text-xl font-semibold text-black'>Welcome to the prio Fashion BD Dashboard</h1>
      <OrderTable/>
    </div>
  );
}

export default DashboardPage;
