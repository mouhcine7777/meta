'use client';

import React, { useState } from 'react';
import { ChevronDown, Search, Plus, Copy, Edit2, BarChart3, FlaskConical, MoreHorizontal, ChevronLeft, ChevronRight, ExternalLink, Image as ImageIcon, FileText, LayoutGrid, Download, Settings } from 'lucide-react';

const MetaAdsManager = () => {
  const [activeTab, setActiveTab] = useState('campaigns');
  const [selectedItems, setSelectedItems] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState('desc'); // 'asc' or 'desc'

  // Sample campaign data
  const campaigns = [
    {
      id: 1,
      active: true,
      name: 'AHC - Ramadan - Ramadan Garden - Traffic',
      dateCreated: 'Feb 4, 2026',
      objective: 'Traffic',

      amountSpent: 16.93,
      reach: 16462,
      impressions: 25417,
      postEngagements: 1638,
      clicks: 186,
      videoPlays: 25055
    },
    {
      id: 2,
      active: true,
      name: 'AHC - HP - Tea Garden',
      dateCreated: 'Feb 4, 2026',
      objective: 'Engagement',
      amountSpent: 5.84,
      reach: 2119,
      impressions: 2295,
      postEngagements: 355,
      clicks: 2,
      videoPlays: 2095
    },
    {
      id: 3,
      active: true,
      name: 'AHC - 2026 - WCSH - engagement',
      dateCreated: 'Jan 9, 2026',
      objective: 'Engagement',
      amountSpent: 195.36,
      reach: 83232,
      impressions: 119476,
      postEngagements: 46044,
      clicks: 188,
      videoPlays: 112934
    },
    {
      id: 4,
      active: true,
      name: 'AHC - AHP - Valentine - Engagement',
      dateCreated: 'Jan 29, 2026',
      objective: 'Engagement',
      amountSpent: 23.48,
      reach: 6886,
      impressions: 9823,
      postEngagements: 1585,
      clicks: 5,
      videoPlays: 8812
    },
    {
      id: 5,
      active: true,
      name: 'AHC - Hilton - Firefly - Engagement Calls',
      dateCreated: 'Jan 30, 2026',
      objective: 'Engagement',
      amountSpent: 1.85,
      reach: 78,
      impressions: 82,
      postEngagements: 4,
      clicks: 0,
      videoPlays: 78
    },
    {
      id: 6,
      active: true,
      name: 'AHC - V Hilton - Engagement - Valentine',
      dateCreated: 'Feb 4, 2026',
      objective: 'Engagement',
      amountSpent: 11.04,
      reach: 4958,
      impressions: 6626,
      postEngagements: 1225,
      clicks: 19,
      videoPlays: 6588
    },
    {
      id: 7,
      active: true,
      name: 'AHC - Ramadan - The Market - Iftaar',
      dateCreated: 'Feb 4, 2026',
      objective: 'Traffic',
      amountSpent: 8.56,
      reach: 1280,
      impressions: 1442,
      postEngagements: 147,
      clicks: 30,
      videoPlays: 1267
    },
    {
      id: 8,
      active: true,
      name: 'AHC - 2026 - Hilton - Iftar at the Market',
      dateCreated: 'Jan 22, 2026',
      objective: 'Engagement',
      amountSpent: 72.89,
      reach: 5084,
      impressions: 12782,
      postEngagements: 12572,
      clicks: 15,
      videoPlays: 12763
    },
    {
      id: 9,
      active: true,
      name: 'AHC - V Hotel - Zoco - Valentine - Traffic',
      dateCreated: 'Jan 30, 2026',
      objective: 'Traffic',
      amountSpent: 31.36,
      reach: 11136,
      impressions: 20509,
      postEngagements: 912,
      clicks: 64,
      videoPlays: 20013
    },
    {
      id: 10,
      active: true,
      name: 'AHC - Hilton - Firefly - Traffic',
      dateCreated: 'Jan 30, 2026',
      objective: 'Traffic',
      amountSpent: 29.66,
      reach: 31668,
      impressions: 49494,
      postEngagements: 3452,
      clicks: 459,
      videoPlays: 49018
    }
  ];

  const toggleSelect = (id) => {
    setSelectedItems(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    setSelectedItems(selectedItems.length === campaigns.length ? [] : campaigns.map(c => c.id));
  };

  const handleSort = (key) => {
    let direction = 'desc';
    if (sortConfig.key === key && sortConfig.direction === 'desc') {
      direction = 'asc';
    }
    setSortConfig({ key, direction });
  };

  const getSortedCampaigns = () => {
    if (!sortConfig.key) return campaigns;

    const sorted = [...campaigns].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (sortConfig.direction === 'desc') {
        return bValue - aValue;
      } else {
        return aValue - bValue;
      }
    });

    return sorted;
  };

  const sortedCampaigns = getSortedCampaigns();

  return (
    <div className="min-h-screen bg-white font-[system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,sans-serif]">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white sticky top-0 z-10">

        {/* Tabs and Actions */}
        <div className="px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('campaigns')}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md border transition-colors ${
                  activeTab === 'campaigns'
                    ? 'text-[#0A78BE] bg-[#E7F3FF] border-[#0A78BE]'
                    : 'text-gray-700 bg-white border-gray-300 hover:bg-gray-50'
                }`}
              >
                <LayoutGrid size={18} />
                Campaigns
              </button>
              <button
                onClick={() => setActiveTab('adsets')}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md border transition-colors ${
                  activeTab === 'adsets'
                    ? 'text-[#0A78BE] bg-[#E7F3FF] border-[#0A78BE]'
                    : 'text-gray-700 bg-white border-gray-300 hover:bg-gray-50'
                }`}
              >
                <FileText size={18} />
                Ad sets
              </button>
              <button
                onClick={() => setActiveTab('ads')}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md border transition-colors ${
                  activeTab === 'ads'
                    ? 'text-[#0A78BE] bg-[#E7F3FF] border-[#0A78BE]'
                    : 'text-gray-700 bg-white border-gray-300 hover:bg-gray-50'
                }`}
              >
                <ImageIcon size={18} />
                Ads
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-gray-600">
            <span>1-10 of 10</span>
            <button className="p-1 hover:bg-gray-100 rounded">
              <ChevronLeft size={16} />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="px-4 py-2 flex items-center justify-between border-t border-gray-200">
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-1.5 bg-green-800 text-white text-sm font-medium rounded-md hover:bg-green-700">
              <Plus size={16} />
              Create
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 text-gray-700 text-sm font-medium hover:bg-gray-50 rounded-md border border-gray-300">
              <Copy size={14} />
              Duplicate
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 text-gray-700 text-sm font-medium hover:bg-gray-50 rounded-md border border-gray-300">
              <Edit2 size={14} />
              Edit
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 text-gray-700 text-sm font-medium hover:bg-gray-50 rounded-md border border-gray-300">
              <div className="w-4 h-4 rounded-full" style={{background: 'conic-gradient(from 0deg, #9333ea, #3b82f6, #06b6d4, #10b981)'}}></div>
              Analyze
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 text-gray-700 text-sm font-medium hover:bg-gray-50 rounded-md border border-gray-300">
              <FlaskConical size={14} />
              A/B test
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 text-gray-700 text-sm font-medium hover:bg-gray-50 rounded-md border border-gray-300">
              More
              <ChevronDown size={14} />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 px-3 py-1.5 text-sm border border-gray-300 rounded-md hover:bg-gray-50 cursor-pointer">
              <span className="text-gray-700">Last 30 days: Jan 6, 2026 – Feb 4, 2026</span>
              <ChevronDown size={14} className="text-gray-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full relative">
          <thead className="bg-white border-b border-gray-200 text-xs text-gray-600">
            <tr>
              <th className="px-4 py-2 text-left font-medium w-12 sticky left-0 bg-white z-20">
                <input 
                  type="checkbox"
                  checked={selectedItems.length === campaigns.length}
                  onChange={toggleSelectAll}
                  className="rounded border-gray-300"
                />
              </th>
              <th className="px-4 py-2 text-left font-medium w-20 sticky left-12 bg-white z-20">
                <div className="flex items-center gap-1">
                  Off / On
                  <span className="text-gray-400">⇅</span>
                </div>
              </th>
              <th className="px-4 py-2 text-left font-medium min-w-[300px] sticky left-32 bg-white z-20 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                <div className="flex items-center gap-1">
                  Campaign
                  <span className="text-gray-400">⇅</span>
                  <span className="text-gray-400">▼</span>
                </div>
              </th>
              <th className="px-4 py-2 text-left font-medium min-w-[120px]">
                <div className="flex items-center gap-1">
                  Date created
                  <span className="text-gray-400">⇅</span>
                  <span className="text-gray-400">▼</span>
                </div>
              </th>
              <th className="px-4 py-2 text-left font-medium min-w-[130px]">
                <div className="flex items-center gap-1">
                  Objective
                  <span className="text-gray-400">⇅</span>
                  <span className="text-gray-400">▼</span>
                </div>
              </th>
              <th className="px-4 py-2 text-right font-medium min-w-[130px]">
                <div className="flex items-center justify-end gap-1 cursor-pointer" onClick={() => handleSort('amountSpent')}>
                  Amount spent
                  <span className="text-gray-400">⇅</span>
                  {sortConfig.key === 'amountSpent' && (
                    <span className="text-gray-600">{sortConfig.direction === 'desc' ? '▼' : '▲'}</span>
                  )}
                </div>
              </th>
              <th className="px-4 py-2 text-right font-medium min-w-[110px]">
                <div className="flex items-center justify-end gap-1 cursor-pointer" onClick={() => handleSort('reach')}>
                  Reach
                  <span className="text-gray-400">⇅</span>
                  {sortConfig.key === 'reach' && (
                    <span className="text-gray-600">{sortConfig.direction === 'desc' ? '▼' : '▲'}</span>
                  )}
                </div>
              </th>
              <th className="px-4 py-2 text-right font-medium min-w-[130px]">
                <div className="flex items-center justify-end gap-1 cursor-pointer" onClick={() => handleSort('impressions')}>
                  Impressions
                  <span className="text-gray-400">⇅</span>
                  {sortConfig.key === 'impressions' && (
                    <span className="text-gray-600">{sortConfig.direction === 'desc' ? '▼' : '▲'}</span>
                  )}
                </div>
              </th>
              <th className="px-4 py-2 text-right font-medium min-w-[160px]">
                <div className="flex items-center justify-end gap-1 cursor-pointer" onClick={() => handleSort('postEngagements')}>
                  Post engagements
                  <span className="text-gray-400">⇅</span>
                  {sortConfig.key === 'postEngagements' && (
                    <span className="text-gray-600">{sortConfig.direction === 'desc' ? '▼' : '▲'}</span>
                  )}
                </div>
              </th>
              <th className="px-4 py-2 text-right font-medium min-w-[120px]">
                <div className="flex items-center justify-end gap-1 cursor-pointer" onClick={() => handleSort('clicks')}>
                  Clicks (all)
                  <span className="text-gray-400">⇅</span>
                  {sortConfig.key === 'clicks' && (
                    <span className="text-gray-600">{sortConfig.direction === 'desc' ? '▼' : '▲'}</span>
                  )}
                </div>
              </th>
              <th className="px-4 py-2 text-right font-medium min-w-[120px]">
                <div className="flex items-center justify-end gap-1 cursor-pointer" onClick={() => handleSort('videoPlays')}>
                  Video plays
                  <span className="text-gray-400">⇅</span>
                  {sortConfig.key === 'videoPlays' && (
                    <span className="text-gray-600">{sortConfig.direction === 'desc' ? '▼' : '▲'}</span>
                  )}
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {sortedCampaigns.map((campaign, index) => (
              <tr 
                key={campaign.id}
                className={`group border-b border-gray-100 hover:bg-[#E5E5E5] ${
                  index % 2 === 0 ? 'bg-white' : 'bg-[#F2F2F2]'
                }`}
              >
                <td className={`px-4 py-3 sticky left-0 z-10 ${index % 2 === 0 ? 'bg-white group-hover:bg-[#E5E5E5]' : 'bg-[#F2F2F2] group-hover:bg-[#E5E5E5]'}`}>
                  <input 
                    type="checkbox"
                    checked={selectedItems.includes(campaign.id)}
                    onChange={() => toggleSelect(campaign.id)}
                    className="rounded border-gray-300"
                  />
                </td>
                <td className={`px-4 py-3 sticky left-12 z-10 ${index % 2 === 0 ? 'bg-white group-hover:bg-[#E5E5E5]' : 'bg-[#F2F2F2] group-hover:bg-[#E5E5E5]'}`}>
                  <div className="flex items-center justify-center">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={campaign.active}
                        className="sr-only peer"
                        readOnly
                      />
                      <div className="w-9 h-5 bg-[#0A78BE] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
                    </label>
                  </div>
                </td>
                <td className={`px-4 py-3 sticky left-32 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] ${index % 2 === 0 ? 'bg-white group-hover:bg-[#E5E5E5]' : 'bg-[#F2F2F2] group-hover:bg-[#E5E5E5]'}`}>
                  <div className="relative">
                    <a href={`/adset/${campaign.id}`} className="text-[#0A78BE] hover:underline cursor-pointer font-normal">
                      {campaign.name}
                    </a>
                    <div className="hidden group-hover:flex items-center gap-2 text-[10px] mt-0.5">
                      <button className="flex items-center gap-0.5 text-gray-600 hover:text-gray-900">
                        <Edit2 size={10} />
                        <span>Edit</span>
                      </button>
                      <button className="flex items-center gap-0.5 text-gray-600 hover:text-gray-900">
                        <Copy size={10} />
                        <span>Duplicate</span>
                      </button>
                      <a href={`/charts/${campaign.id}`} className="flex items-center gap-0.5 text-gray-600 hover:text-gray-900">
                        <BarChart3 size={10} />
                        <span>Charts</span>
                      </a>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 group-hover:bg-[#E5E5E5]">
                  <div className="text-gray-900">{campaign.dateCreated}</div>
                </td>
                <td className="px-4 py-3 group-hover:bg-[#E5E5E5]">
                  <div className="text-gray-900">{campaign.objective}</div>
                </td>
                <td className="px-4 py-3 text-right group-hover:bg-[#E5E5E5]">
                  <div className="text-gray-900">${campaign.amountSpent.toFixed(2)}</div>
                </td>
                <td className="px-4 py-3 text-right group-hover:bg-[#E5E5E5]">
                  <div className="text-gray-900">{campaign.reach.toLocaleString()}</div>
                </td>
                <td className="px-4 py-3 text-right group-hover:bg-[#E5E5E5]">
                  <div className="text-gray-900">{campaign.impressions.toLocaleString()}</div>
                </td>
                <td className="px-4 py-3 text-right group-hover:bg-[#E5E5E5]">
                  <div className="text-gray-900">{campaign.postEngagements.toLocaleString()}</div>
                </td>
                <td className="px-4 py-3 text-right group-hover:bg-[#E5E5E5]">
                  <div className="text-gray-900">{campaign.clicks.toLocaleString()}</div>
                </td>
                <td className="px-4 py-3 text-right group-hover:bg-[#E5E5E5]">
                  <div className="text-gray-900">{campaign.videoPlays.toLocaleString()}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 px-4 py-3 bg-gray-50 flex items-center justify-between text-xs text-gray-600">
        <div className="flex items-center gap-2">
          <span>Results from 10 campaigns</span>
          <button className="text-gray-400 hover:text-gray-600">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
              <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1" fill="none"/>
              <path d="M6.5 5h1v5h-1V5zm0-2h1v1h-1V3z"/>
            </svg>
          </button>
        </div>
        <button className="flex items-center gap-2 px-3 py-1.5 text-gray-700 hover:bg-gray-100 rounded-md border border-gray-300">
          <Download size={14} />
          Export table data
        </button>
      </div>
    </div>
  );
};

export default MetaAdsManager;