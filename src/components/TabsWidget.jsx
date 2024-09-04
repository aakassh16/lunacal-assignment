import React, { useState } from 'react';

const TabsWidget = () => {
    const [activeTab, setActiveTab] = useState('about');

    return (
        <div className="bg-gray-700 p-6 rounded-2xl shadow-lg w-full">

            {/* <div className=""> */}
            <div className="flex justify-between items-center px-2 mx-6 py-2 bg-slate-950 rounded-3xl">
                <button
                    className={`py-1 px-10 text-lg rounded-full hover:bg-gray-800 ${activeTab === 'about' ? 'bg-gray-700 text-white' : 'text-gray-400'
                        }`}
                    onClick={() => setActiveTab('about')}
                >
                    About Me
                </button>
                <button
                    className={`py-1 px-8 text-lg rounded-full hover:bg-gray-800 ${activeTab === 'experiences' ? 'bg-gray-700 text-white' : 'text-gray-400'
                        }`}
                    onClick={() => setActiveTab('experiences')}
                >
                    Experiences
                </button>
                <button
                    className={`py-1 px-10 text-lg rounded-full hover:bg-gray-800 ${activeTab === 'recommended' ? 'bg-gray-700 text-white' : 'text-gray-400'
                        }`}
                    onClick={() => setActiveTab('recommended')}
                >
                    Recommended
                </button>
            </div>
            <div className="h-32 overflow-y-auto">
                <div className="mt-6 mx-10 text-gray-300">
                    {activeTab === 'about' && <p className="text-base text-justify">With a
                        Bachelor of Engineering in Computer Science from the University
                        Institute of Technology, Burdwan University, and hands-on experience
                        in frontend development during my internship at Ardent Computech
                        Pvt. Ltd., I am confident in my ability to contribute effectively
                        to your team. <br />
                        During my academic and professional journey, I have developed strong
                        skills in various programming languages, including Java, JavaScript,
                        HTML, CSS, SQL, and Python. My proficiency with tools such as
                        Git/GitHub and frameworks like React JS, combined with my experience
                        working on projects such as a To-Do List App and a Christmas Website,
                        has equipped me with a solid foundation in web development and design
                    </p>}
                    {activeTab === 'experiences' && <p>My technical skills include Java, JavaScript,
                     HTML, CSS, SQL, and Python, along with tools like Git/GitHub and VS Code.
                      I have practical experience with frameworks and libraries such as 
                      Bootstrap, JQuery, and React JS. One of my notable projects is a 
                      Christmas-themed website developed using various JavaScript libraries,
                       showcasing my ability to create engaging and interactive web pages.
                     <br />   I am particularly drawn to your company because of [specific 
                     reason related to the company, e.g., its innovative projects, commitment
                      to technology, or company culture]. I am eager to bring my dedication, 
                      strong work ethic, and technical expertise to your team, and I am confident 
                      that my background and skills align well with the requirements of this role.</p>}
                    {activeTab === 'recommended' && <p>Recommended content goes here...</p>}
                </div>
            </div>
            {/* </div> */}
        </div>
    );
};

export default TabsWidget;
