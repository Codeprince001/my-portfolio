import React, { useState } from 'react';
import { webProjects } from '../constants/webProject';
import { mobileProjects } from '../constants/mobileProject';
import ProjectCard from '../components/ProjectCard';
import { useNavigate } from 'react-router';
// import 'bootstrap/dist/css/bootstrap.min.css';


const ITEMS_PER_PAGE = 6;

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'web' | 'mobile'>('web');
  const [webPage, setWebPage] = useState(1);
  const [mobilePage, setMobilePage] = useState(1);
  const navigate = useNavigate();

  const paginatedWeb = webProjects.slice((webPage - 1) * ITEMS_PER_PAGE, webPage * ITEMS_PER_PAGE);
  const paginatedMobile = mobileProjects.slice((mobilePage - 1) * ITEMS_PER_PAGE, mobilePage * ITEMS_PER_PAGE);

  const handlePageChange = (page: number, type: 'web' | 'mobile') => {
    if (type === 'web') setWebPage(page);
    else setMobilePage(page);
  };

  const totalPages = (type: 'web' | 'mobile') =>
    Math.ceil((type === 'web' ? webProjects : mobileProjects).length / ITEMS_PER_PAGE);

  return (
    <div className="bg-[#0A0A23] text-white min-h-screen py-10 px-4 sm:px-8">
      <button
        onClick={() => navigate('/')}
        className="mb-6 inline-block rounded border border-yellow-400 px-4 py-2 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 transition"
      >
        ← Back
      </button>

      <h2 className="text-center text-3xl font-bold text-yellow-400 mb-8">My Projects</h2>

      {/* Tabs */}
      <ul className="flex justify-center border-b border-gray-700 mb-8">
        <li>
          <button
            onClick={() => setActiveTab('web')}
            className={`py-2 px-6 font-semibold border-b-4 transition ${
              activeTab === 'web'
                ? 'border-yellow-400 text-yellow-400'
                : 'border-transparent text-gray-400 hover:text-yellow-300 hover:border-yellow-300'
            }`}
          >
            Web Development
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveTab('mobile')}
            className={`py-2 px-6 font-semibold border-b-4 transition ${
              activeTab === 'mobile'
                ? 'border-yellow-400 text-yellow-400'
                : 'border-transparent text-gray-400 hover:text-yellow-300 hover:border-yellow-300'
            }`}
          >
            Mobile Development
          </button>
        </li>
      </ul>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {(activeTab === 'web' ? paginatedWeb : paginatedMobile).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Pagination */}
        <nav className="mt-12 flex justify-center space-x-3">
          {Array.from({ length: totalPages(activeTab) }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1, activeTab)}
              className={`px-4 py-2 rounded-md font-medium transition ${
                (activeTab === 'web' ? webPage : mobilePage) === i + 1
                  ? 'bg-yellow-400 text-gray-900'
                  : 'bg-gray-800 text-gray-400 hover:bg-yellow-300 hover:text-gray-900'
              }`}
              aria-current={(activeTab === 'web' ? webPage : mobilePage) === i + 1 ? 'page' : undefined}
            >
              {i + 1}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Projects;
