import React from 'react';
import TabsWidget from './TabsWidget';
import GalleryWidget from './GalleryWidget';




const FullLayout = () => {
  return (
    <div className="flex h-screen bg-slate-900">
 
      <div className="hidden lg:block lg:w-1/2"></div>
      
      <div className="w-full lg:w-1/2 p-4 sm:p-6 space-y-6 mt-3">
        <div>
          <TabsWidget />
          <div className="w-[600px] sm:w-[400px] md:w-[300px] xl:w-[400px] lg:w-[450px] h-[4px] mx-auto rounded-full shadow-lg shadow-black bg-gray-600 mt-6"></div>
        </div>
        <GalleryWidget />
        <div className="w-[600px] sm:w-[400px] md:w-[300px] xl:w-[400px] lg:w-[450px] h-[4px] mx-auto rounded-full shadow-lg shadow-black bg-gray-600 mt-6"></div>
      </div>
    </div>
  );
};


export default FullLayout;
