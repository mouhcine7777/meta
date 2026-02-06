'use client';

import React, { useState } from 'react';
import { ChevronDown, Info, Play, Users, Monitor } from 'lucide-react';

const MetaAdsCharts = () => {
  // JSON Data Structure - Fill all your data here
  const chartData = {
    performanceOverview: {
      metrics: [
        {
          label: 'Post engagements',
          value: '1,225',
          hasInfo: true
        },
        {
          label: 'Per Post Engagement',
          value: '$0.01',
          hasInfo: true
        },
        {
          label: 'Amount spent',
          value: '$11.04',
          hasInfo: true
        }
      ],
      chartImage: '/1/charts1.png' // Replace with your chart image URL
    },
    videoPerformance: {
      adsCount: '1 of 1 Ads',
      description: 'See how audiences are engaging with your video creative.',
      metrics: [
        {
          label: 'Video plays',
          value: '6,588',
          hasInfo: true
        },
        {
          label: 'Video average play time',
          value: '00:04',
          hasInfo: true
        },
        {
          label: 'Hook rate',
          value: '18%',
          hasInfo: true
        },
        {
          label: 'Hold rate',
          value: '24.87%',
          hasInfo: true
        }
      ],
      timeWatched: {
        title: 'Time watched',
        description: 'Analyze your video performance by time watched to uncover creative optimization opportunities. Though a decrease in video play time is normal as the video elapses, significant drops may indicate a lack of engagement.'
      },
      videoInfo: {
        title: 'Hilton/V - Executive Lounge',
        length: '00:22'
      },
      chartImage: '/1/charts2.png' // Replace with your video chart image URL
    },
    demographics: {
      title: 'Age and gender distribution',
      chartImage: '/1/charts3.png' // Replace with your demographics chart image URL
    }
  };

  const [dayView, setDayView] = useState('Day');
  const [activityHistory, setActivityHistory] = useState('All');
  const [ageGenderView, setAgeGenderView] = useState('All');
  const [resultsView, setResultsView] = useState('Results');

  return (
    <div className="min-h-screen bg-[#F0F2F5] font-[system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,sans-serif]">
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        
        {/* Performance Overview Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Performance overview</h2>
          </div>

          {/* Metrics Cards - From JSON */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {chartData.performanceOverview.metrics.map((metric, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-1 text-sm text-gray-700 mb-2">
                  {metric.label}
                  {metric.hasInfo && <Info size={14} className="text-gray-400" />}
                </div>
                <div className="text-3xl font-normal text-gray-900">{metric.value}</div>
              </div>
            ))}
          </div>

          {/* Performance Overview Chart - From JSON */}
          <div className="mt-6">
            <img 
              src={chartData.performanceOverview.chartImage}
              alt="Performance Overview Chart"
              className="w-full h-auto rounded"
            />
          </div>
        </div>

        {/* Video Performance Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Play size={20} className="text-gray-700" />
              <h2 className="text-base font-semibold text-gray-900">Video performance</h2>
              <Info size={14} className="text-gray-400" />
            </div>
            <span className="text-xs text-gray-600">{chartData.videoPerformance.adsCount}</span>
          </div>
          
          <p className="text-sm text-gray-600 mb-4">
            {chartData.videoPerformance.description}
          </p>

          {/* Video Metrics - From JSON */}
          <div className="grid grid-cols-4 gap-6 mb-6">
            {chartData.videoPerformance.metrics.map((metric, index) => (
              <div key={index}>
                <div className="flex items-center gap-1 text-sm text-gray-700 mb-1">
                  {metric.label}
                  {metric.hasInfo && <Info size={14} className="text-gray-400" />}
                </div>
                <div className="text-2xl font-normal text-gray-900">{metric.value}</div>
              </div>
            ))}
          </div>

          {/* Time Watched - From JSON */}
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-900 mb-1">
              {chartData.videoPerformance.timeWatched.title}
            </h3>
            <p className="text-xs text-gray-600 mb-4">
              {chartData.videoPerformance.timeWatched.description}
            </p>
          </div>

          {/* Video Title - From JSON */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-900">
              {chartData.videoPerformance.videoInfo.title}
            </h4>
            <p className="text-xs text-gray-600">
              Video length: {chartData.videoPerformance.videoInfo.length}
            </p>
          </div>

          {/* Video Performance Chart - From JSON */}
          <div className="mt-4">
            <img 
              src={chartData.videoPerformance.chartImage}
              alt="Video Performance Chart"
              className="w-full h-auto rounded"
            />
          </div>
        </div>

        {/* Demographics Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-4 border-b border-gray-200 mb-6">
            <button className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-[#0A78BE] border-b-2 border-[#0A78BE]">
              <Users size={16} />
              Demographics
            </button>
            <button className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900">
              <Monitor size={16} />
              Platform
            </button>
          </div>

          <div className="flex items-center justify-between mb-6">
            <h3 className="text-base font-semibold text-gray-900">
              {chartData.demographics.title}
            </h3>
          </div>

          {/* Age and Gender Chart - From JSON */}
          <div className="mt-4">
            <img 
              src={chartData.demographics.chartImage}
              alt="Age and Gender Distribution Chart"
              className="w-full h-auto rounded"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default MetaAdsCharts;