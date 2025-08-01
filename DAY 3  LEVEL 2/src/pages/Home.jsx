import React, { useState } from 'react';
import { Search, Bell, Settings, Users, TrendingUp, Activity, Calendar, Star, ChevronRight, Filter, Download, MoreVertical } from 'lucide-react';

export default function ModernDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [notifications, setNotifications] = useState(3);

  const stats = [
    { label: 'Total Users', value: '2,847', change: '+12%', trend: 'up' },
    { label: 'Revenue', value: '$48,392', change: '+8.2%', trend: 'up' },
    { label: 'Conversion', value: '3.24%', change: '-0.5%', trend: 'down' },
    { label: 'Growth Rate', value: '24.8%', change: '+4.1%', trend: 'up' }
  ];

  const recentActivity = [
    { user: 'Sarah Chen', action: 'completed onboarding', time: '2 min ago', avatar: 'SC' },
    { user: 'Marcus Rivera', action: 'upgraded to Pro', time: '5 min ago', avatar: 'MR' },
    { user: 'Elena Kozlov', action: 'shared project', time: '12 min ago', avatar: 'EK' },
    { user: 'James Wilson', action: 'left feedback', time: '18 min ago', avatar: 'JW' }
  ];

  const projects = [
    { name: 'Brand Redesign', progress: 85, status: 'In Progress', team: 4, color: 'from-violet-500 to-purple-600' },
    { name: 'Mobile App', progress: 92, status: 'Review', team: 6, color: 'from-blue-500 to-cyan-600' },
    { name: 'Website Refresh', progress: 67, status: 'In Progress', team: 3, color: 'from-emerald-500 to-teal-600' },
    { name: 'Analytics Setup', progress: 100, status: 'Complete', team: 2, color: 'from-amber-500 to-orange-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Main Container */}
      <div className="flex h-screen">
        
        {/* Sidebar */}
        <div className="w-72 bg-white/80 backdrop-blur-xl border-r border-slate-200/60 p-6">
          <div className="flex items-center space-x-3 mb-10">
            <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Zyn
              </h1>
              <p className="text-xs text-slate-500">Analytics Suite</p>
            </div>
          </div>

          <nav className="space-y-2">
            {['overview', 'analytics', 'projects', 'team', 'settings'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-3 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-violet-500 to-indigo-600 text-white shadow-lg shadow-violet-500/25'
                    : 'text-slate-600 hover:bg-slate-100/70 hover:text-slate-900'
                }`}
              >
                {tab === 'overview' && <Activity className="w-5 h-5" />}
                {tab === 'analytics' && <TrendingUp className="w-5 h-5" />}
                {tab === 'projects' && <Calendar className="w-5 h-5" />}
                {tab === 'team' && <Users className="w-5 h-5" />}
                {tab === 'settings' && <Settings className="w-5 h-5" />}
                <span className="capitalize">{tab}</span>
              </button>
            ))}
          </nav>

          <div className="mt-auto pt-8">
            <div className="bg-gradient-to-r from-violet-50 to-indigo-50 p-4 rounded-2xl border border-violet-200/50">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-indigo-600 rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-slate-800">Upgrade to Pro</span>
              </div>
              <p className="text-xs text-slate-600 mb-3">Unlock advanced analytics and unlimited projects</p>
              <button className="w-full bg-gradient-to-r from-violet-500 to-indigo-600 text-white py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300">
                Upgrade Now
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          {/* Top Bar */}
          <div className="bg-white/60 backdrop-blur-xl border-b border-slate-200/60 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-slate-800 capitalize">{activeTab}</h2>
                <p className="text-slate-600">Welcome back! Here's what's happening today.</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search anything..."
                    className="pl-10 pr-4 py-2 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-400 transition-all duration-300"
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <button className="relative p-2 bg-white/80 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors duration-300">
                    <Bell className="w-5 h-5 text-slate-600" />
                    {notifications > 0 && (
                      <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                        {notifications}
                      </span>
                    )}
                  </button>
                  
                  <div className="w-10 h-10 bg-gradient-to-r from-violet-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-semibold">JD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="p-6 space-y-6">
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-xl border border-slate-200/60 p-6 rounded-2xl hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 group">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-slate-600 font-medium">{stat.label}</span>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      stat.trend === 'up' ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'
                    }`}>
                      <TrendingUp className={`w-4 h-4 ${stat.trend === 'down' ? 'rotate-180' : ''}`} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold text-slate-800 group-hover:scale-105 transition-transform duration-300">
                      {stat.value}
                    </h3>
                    <p className={`text-sm font-medium ${
                      stat.trend === 'up' ? 'text-emerald-600' : 'text-red-500'
                    }`}>
                      {stat.change} from last month
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              
              {/* Projects */}
              <div className="lg:col-span-2 bg-white/80 backdrop-blur-xl border border-slate-200/60 p-6 rounded-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-slate-800">Active Projects</h3>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors duration-300">
                      <Filter className="w-4 h-4 text-slate-600" />
                    </button>
                    <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors duration-300">
                      <Download className="w-4 h-4 text-slate-600" />
                    </button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {projects.map((project, index) => (
                    <div key={index} className="p-4 border border-slate-200/60 rounded-xl hover:bg-slate-50/50 transition-all duration-300 group">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.color}`}></div>
                          <h4 className="font-semibold text-slate-800">{project.name}</h4>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            project.status === 'Complete' ? 'bg-emerald-100 text-emerald-700' :
                            project.status === 'Review' ? 'bg-amber-100 text-amber-700' :
                            'bg-blue-100 text-blue-700'
                          }`}>
                            {project.status}
                          </span>
                          <button className="p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <MoreVertical className="w-4 h-4 text-slate-400" />
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-full bg-slate-200 rounded-full h-2 flex-1 max-w-xs">
                            <div 
                              className={`h-2 bg-gradient-to-r ${project.color} rounded-full transition-all duration-500`}
                              style={{ width: `${project.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium text-slate-600">{project.progress}%</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-slate-500">
                          <Users className="w-4 h-4" />
                          <span>{project.team}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-slate-800 mb-6">Recent Activity</h3>
                
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 hover:bg-slate-50/50 rounded-xl transition-colors duration-300">
                      <div className="w-10 h-10 bg-gradient-to-r from-violet-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-semibold">{activity.avatar}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-slate-800">
                          <span className="font-semibold">{activity.user}</span> {activity.action}
                        </p>
                        <p className="text-xs text-slate-500 mt-1">{activity.time}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    </div>
                  ))}
                </div>
                
                <button className="w-full mt-4 py-2 text-sm font-medium text-violet-600 hover:text-violet-700 transition-colors duration-300">
                  View All Activity
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}