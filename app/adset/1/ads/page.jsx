'use client';

import React, { useState } from 'react';
import { ChevronDown, Search, Plus, Copy, Edit2, BarChart3, FlaskConical, MoreHorizontal, ChevronLeft, ChevronRight, ExternalLink, Image as ImageIcon, FileText, LayoutGrid, Download, Settings, X } from 'lucide-react';

const MetaAdsManager = () => {
  const [activeTab, setActiveTab] = useState('campaigns');
  const [selectedItems, setSelectedItems] = useState([]);

  // Sample campaign data
  const campaigns = [
    {
      id: 1,
      active: true,
      name: 'New Traffic Ad',
      imageUrl: 'https://scontent-lis1-1.xx.fbcdn.net/v/t15.5256-10/624592264_924808776891126_1500684650501456631_n.jpg?_nc_cat=104&ccb=1-7&_nc_ohc=Si-epG1EGn0Q7kNvwGfHMIq&_nc_oc=AdlGN9F49yxil7P08s-6kL15py7Ct27f2oj1F_pLUxMY0hODZZ4Vyk-f5yVXpNL03w8&_nc_zt=23&_nc_ht=scontent-lis1-1.xx&_nc_gid=4gUYY3Y0XDzjJlNxTyHRKA&stp=c0.5000x0.5000f_dst-emg0_p46x46_q75_tt6&ur=a7ce7f&_nc_sid=58080a&oh=00_AfuzdzvQQcJXttQlh46ESdcr4HmRdXMS28YRcNbsWumKaQ&oe=698A765E', // Replace with actual image URL
      dateCreated: 'Feb 4, 2026',
      objective: 'Traffic',
      amountSpent: 16.93,
      reach: 16492,
      impressions: 25469,
      postEngagements: 1642,
      clicks: 186,
      videoPlays: 25120
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

  return (
    <div className="min-h-screen bg-white font-[system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,sans-serif]">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white sticky top-0 z-10">

        {/* Breadcrumb Tabs */}
        <div className="px-4 py-2 flex items-center justify-between border-b border-gray-200">
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md bg-[#0A78BE] text-white">
              <LayoutGrid size={16} />
              Campaigns
              <span className="bg-white/20 px-2 py-0.5 rounded text-xs">1 selected</span>
              <X size={14} />
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md border border-gray-300 text-gray-700 bg-white hover:bg-gray-50">
              <ImageIcon size={16} />
              Ad sets for 1 Campaign
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md border border-gray-300 text-gray-700 bg-white hover:bg-gray-50">
              <ImageIcon size={16} />
              Ads for 1 Ad set
            </button>
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
                  Ad
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
                <div className="flex items-center justify-end gap-1">
                  Amount spent
                  <span className="text-gray-400">⇅</span>
                  <span className="text-gray-400">▼</span>
                </div>
              </th>
              <th className="px-4 py-2 text-right font-medium min-w-[110px]">
                <div className="flex items-center justify-end gap-1">
                  Reach
                  <span className="text-gray-400">⇅</span>
                  <span className="text-gray-400">▼</span>
                </div>
              </th>
              <th className="px-4 py-2 text-right font-medium min-w-[130px]">
                <div className="flex items-center justify-end gap-1">
                  Impressions
                  <span className="text-gray-400">⇅</span>
                  <span className="text-gray-400">▼</span>
                </div>
              </th>
              <th className="px-4 py-2 text-right font-medium min-w-[160px]">
                <div className="flex items-center justify-end gap-1">
                  Post engagements
                  <span className="text-gray-400">⇅</span>
                  <span className="text-gray-400">▼</span>
                </div>
              </th>
              <th className="px-4 py-2 text-right font-medium min-w-[120px]">
                <div className="flex items-center justify-end gap-1">
                  Clicks (all)
                  <span className="text-gray-400">⇅</span>
                  <span className="text-gray-400">▼</span>
                </div>
              </th>
              <th className="px-4 py-2 text-right font-medium min-w-[120px]">
                <div className="flex items-center justify-end gap-1">
                  Video plays
                  <span className="text-gray-400">⇅</span>
                  <span className="text-gray-400">▼</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {campaigns.map((campaign, index) => (
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
                  <div className="relative flex items-center gap-3">
                    {/* Ad Image */}
                    {campaign.imageUrl && (
                      <div className="w-12 h-12 flex-shrink-0 rounded overflow-hidden bg-gray-100">
                        <img 
                          src={campaign.imageUrl} 
                          alt={campaign.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIGZpbGw9IiNFNUU3RUIiLz48cGF0aCBkPSJNMjQgMjJDMjUuMTA0NiAyMiAyNiAyMS4xMDQ2IDI2IDIwQzI2IDE4Ljg5NTQgMjUuMTA0NiAxOCAyNCAxOEMyMi44OTU0IDE4IDIyIDE4Ljg5NTQgMjIgMjBDMjIgMjEuMTA0NiAyMi44OTU0IDIyIDI0IDIyWiIgZmlsbD0iIzlDQTNCNCIvPjxwYXRoIGQ9Ik0xOCAzMEgyMkwyNiAyNkwzMCAzMEgxOFoiIGZpbGw9IiM5Q0EzQjQiLz48L3N2Zz4=';
                          }}
                        />
                      </div>
                    )}
                    
                    <div className="flex-1">
                      <div className="text-gray-900 font-normal">
                        {campaign.name}
                      </div>
                      <div className="hidden group-hover:flex items-center gap-2 text-[10px] mt-0.5">
                        <button className="flex items-center gap-0.5 text-gray-600 hover:text-gray-900">
                          <Edit2 size={10} />
                          <span>Edit</span>
                        </button>
                        <button className="flex items-center gap-0.5 text-gray-600 hover:text-gray-900">
                          <Copy size={10} />
                          <span>Duplicate</span>
                        </button>
                        <button className="flex items-center gap-0.5 text-gray-600 hover:text-gray-900">
                          <BarChart3 size={10} />
                          <span>Charts</span>
                        </button>
                      </div>
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
          <span>Results from {campaigns.length} ad{campaigns.length !== 1 ? 's' : ''}</span>
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