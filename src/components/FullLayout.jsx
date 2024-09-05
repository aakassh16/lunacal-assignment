import React from 'react';
import TabsWidget from './TabsWidget';
import GalleryWidget from './GalleryWidget';




const FullLayout = () => {
  return (
    <div className="flex h-screen bg-slate-900">
      {/* Left half empty */}
      <div className="hidden lg:block lg:w-1/2"></div>
      
      {/* Right half with widgets */}
      <div className="w-full lg:w-1/2 p-4 sm:p-6 space-y-6 mt-3">
        <div>
          <TabsWidget />
          <div className="w-[600px] sm:w-[400px] md:w-[300px] xl:w-[400px] lg:w-[450px] h-[4px] mx-auto rounded-full shadow-lg shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] bg-gray-600 mt-6"></div>
        </div>
        <GalleryWidget />
        <div className="w-[600px] sm:w-[400px] md:w-[300px] xl:w-[400px] lg:w-[450px] h-[4px] mx-auto rounded-full shadow-lg shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] bg-gray-600 mt-6"></div>
      </div>
    </div>
  );
};


export default FullLayout;