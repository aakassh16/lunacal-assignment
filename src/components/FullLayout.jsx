import React from 'react';
import TabsWidget from './TabsWidget';
import GalleryWidget from './GalleryWidget';


const MainLayout = () => {
  return (
    <div className="flex h-screen bg-slate-900">
      {/* Left half empty */}
      <div className="hidden lg:block lg:w-1/2"></div>
      
      {/* Right half with widgets */}
      <div className="w-full lg:w-1/2 p-6 space-y-6 mt-10">
      <div>
        <TabsWidget />
      </div>
        <GalleryWidget />
      </div>
    </div>
  );
};

export default MainLayout;

