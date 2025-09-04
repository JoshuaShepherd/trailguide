'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Menu,
  X,
  Bell,
  Search,
  Filter,
  Download,
  Plus,
  TrendingUp,
  TrendingDown,
  Users,
  DollarSign,
  Target,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Heart,
  Award,
  Clock,
  BarChart3,
  PieChart,
  LineChart,
  Settings,
  HelpCircle,
  ChevronRight,
  ChevronDown,
  Star,
  AlertCircle,
  CheckCircle2,
  Zap,
  Eye,
  Edit,
  Trash2,
  Send,
  FileText,
  Globe,
  Shield,
  Bookmark
} from 'lucide-react';

interface Donor {
  id: string;
  name: string;
  email: string;
  totalGiven: number;
  lastGift: string;
  giftCount: number;
  status: 'active' | 'lapsed' | 'prospect';
  tier: 'major' | 'mid-level' | 'grassroots';
  tags: string[];
}

interface Campaign {
  id: string;
  name: string;
  goal: number;
  raised: number;
  donors: number;
  daysLeft: number;
  status: 'active' | 'draft' | 'completed';
  type: 'annual' | 'capital' | 'emergency' | 'program';
}

const SAMPLE_DONORS: Donor[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    totalGiven: 25000,
    lastGift: '2024-08-15',
    giftCount: 12,
    status: 'active',
    tier: 'major',
    tags: ['board', 'monthly', 'education']
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'mchen@techcorp.com',
    totalGiven: 8500,
    lastGift: '2024-08-20',
    giftCount: 6,
    status: 'active',
    tier: 'mid-level',
    tags: ['corporate', 'tech', 'innovation']
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    email: 'emily.r@gmail.com',
    totalGiven: 450,
    lastGift: '2024-07-01',
    giftCount: 15,
    status: 'lapsed',
    tier: 'grassroots',
    tags: ['monthly', 'community']
  }
];

const SAMPLE_CAMPAIGNS: Campaign[] = [
  {
    id: '1',
    name: 'Annual Giving 2024',
    goal: 500000,
    raised: 342000,
    donors: 1247,
    daysLeft: 89,
    status: 'active',
    type: 'annual'
  },
  {
    id: '2',
    name: 'Emergency Relief Fund',
    goal: 50000,
    raised: 38500,
    donors: 425,
    daysLeft: 12,
    status: 'active',
    type: 'emergency'
  },
  {
    id: '3',
    name: 'New Community Center',
    goal: 2000000,
    raised: 1250000,
    donors: 256,
    daysLeft: 365,
    status: 'active',
    type: 'capital'
  }
];

export default function FundraisingDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedTab, setSelectedTab] = useState('overview');
  const [showNotifications, setShowNotifications] = useState(false);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'lapsed': return 'bg-yellow-100 text-yellow-800';
      case 'prospect': return 'bg-blue-100 text-blue-800';
      case 'draft': return 'bg-gray-100 text-gray-800';
      case 'completed': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'major': return 'bg-gold-100 text-yellow-800 border-yellow-200';
      case 'mid-level': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'grassroots': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-16'} transition-all duration-300 bg-white border-r border-gray-200 flex flex-col`}>
        
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            {sidebarOpen && (
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-trailguide-sage to-trailguide-evergreen rounded-lg flex items-center justify-center">
                  <Heart className="h-4 w-4 text-white" />
                </div>
                <span className="font-bold text-gray-900">FundingHub</span>
              </div>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2"
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            <Button
              variant={selectedTab === 'overview' ? 'default' : 'ghost'}
              className={`w-full justify-start ${!sidebarOpen && 'px-2'}`}
              onClick={() => setSelectedTab('overview')}
            >
              <BarChart3 className="h-4 w-4" />
              {sidebarOpen && <span className="ml-2">Overview</span>}
            </Button>
            
            <Button
              variant={selectedTab === 'donors' ? 'default' : 'ghost'}
              className={`w-full justify-start ${!sidebarOpen && 'px-2'}`}
              onClick={() => setSelectedTab('donors')}
            >
              <Users className="h-4 w-4" />
              {sidebarOpen && <span className="ml-2">Donors</span>}
            </Button>
            
            <Button
              variant={selectedTab === 'campaigns' ? 'default' : 'ghost'}
              className={`w-full justify-start ${!sidebarOpen && 'px-2'}`}
              onClick={() => setSelectedTab('campaigns')}
            >
              <Target className="h-4 w-4" />
              {sidebarOpen && <span className="ml-2">Campaigns</span>}
            </Button>
            
            <Button
              variant={selectedTab === 'analytics' ? 'default' : 'ghost'}
              className={`w-full justify-start ${!sidebarOpen && 'px-2'}`}
              onClick={() => setSelectedTab('analytics')}
            >
              <PieChart className="h-4 w-4" />
              {sidebarOpen && <span className="ml-2">Analytics</span>}
            </Button>
            
            <Button
              variant={selectedTab === 'communications' ? 'default' : 'ghost'}
              className={`w-full justify-start ${!sidebarOpen && 'px-2'}`}
              onClick={() => setSelectedTab('communications')}
            >
              <Mail className="h-4 w-4" />
              {sidebarOpen && <span className="ml-2">Communications</span>}
            </Button>
          </div>

          {sidebarOpen && (
            <div className="mt-8">
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Quick Actions
              </h4>
              <div className="space-y-2">
                <Button variant="ghost" className="w-full justify-start text-sm">
                  <Plus className="h-4 w-4 mr-2" />
                  New Campaign
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm">
                  <Send className="h-4 w-4 mr-2" />
                  Send Update
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm">
                  <FileText className="h-4 w-4 mr-2" />
                  Generate Report
                </Button>
              </div>
            </div>
          )}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" className={!sidebarOpen ? 'px-2' : ''}>
              <Settings className="h-4 w-4" />
              {sidebarOpen && <span className="ml-2">Settings</span>}
            </Button>
            {sidebarOpen && (
              <Button variant="ghost" size="sm">
                <HelpCircle className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        
        {/* Top Bar */}
        <div className="bg-white border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Fundraising Dashboard</h1>
              <p className="text-gray-500">Welcome back! Here's your organization's funding overview.</p>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search donors, campaigns..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trailguide-evergreen focus:border-transparent"
                />
              </div>
              
              {/* Notifications */}
              <div className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="relative"
                >
                  <Bell className="h-4 w-4" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
                </Button>
                
                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    <div className="p-4 border-b border-gray-200">
                      <h3 className="font-semibold text-gray-900">Notifications</h3>
                    </div>
                    <div className="max-h-64 overflow-y-auto">
                      <div className="p-3 border-b border-gray-100 hover:bg-gray-50">
                        <div className="flex items-start space-x-3">
                          <AlertCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">Campaign deadline approaching</p>
                            <p className="text-xs text-gray-500">Emergency Relief Fund ends in 12 days</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 border-b border-gray-100 hover:bg-gray-50">
                        <div className="flex items-start space-x-3">
                          <DollarSign className="h-5 w-5 text-green-500 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">Large donation received</p>
                            <p className="text-xs text-gray-500">$10,000 from Johnson Foundation</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 hover:bg-gray-50">
                        <div className="flex items-start space-x-3">
                          <Users className="h-5 w-5 text-blue-500 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">New donor registered</p>
                            <p className="text-xs text-gray-500">3 new donors this week</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Actions */}
              <Button className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90">
                <Plus className="h-4 w-4 mr-2" />
                New Campaign
              </Button>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          
          {selectedTab === 'overview' && (
            <div className="space-y-6">
              
              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Total Raised YTD</p>
                      <p className="text-3xl font-bold text-gray-900">{formatCurrency(1630500)}</p>
                      <div className="flex items-center mt-2">
                        <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                        <span className="text-sm text-green-600">+12.5% from last year</span>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <DollarSign className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Active Donors</p>
                      <p className="text-3xl font-bold text-gray-900">1,928</p>
                      <div className="flex items-center mt-2">
                        <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                        <span className="text-sm text-green-600">+8.2% this month</span>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Avg. Gift Size</p>
                      <p className="text-3xl font-bold text-gray-900">{formatCurrency(846)}</p>
                      <div className="flex items-center mt-2">
                        <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                        <span className="text-sm text-red-600">-2.1% this month</span>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Target className="h-6 w-6 text-purple-600" />
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Retention Rate</p>
                      <p className="text-3xl font-bold text-gray-900">78%</p>
                      <div className="flex items-center mt-2">
                        <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                        <span className="text-sm text-green-600">+5.3% from last year</span>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Heart className="h-6 w-6 text-orange-600" />
                    </div>
                  </div>
                </Card>
              </div>

              {/* Active Campaigns Overview */}
              <Card>
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-900">Active Campaigns</h2>
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      View All
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    {SAMPLE_CAMPAIGNS.filter(c => c.status === 'active').map((campaign) => (
                      <div key={campaign.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="font-semibold text-gray-900">{campaign.name}</h3>
                            <div className="flex items-center space-x-4 mt-1">
                              <Badge className={getStatusColor(campaign.status)}>
                                {campaign.status}
                              </Badge>
                              <span className="text-sm text-gray-500">
                                {campaign.daysLeft} days left
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-gray-900">
                              {formatCurrency(campaign.raised)}
                            </p>
                            <p className="text-sm text-gray-500">
                              of {formatCurrency(campaign.goal)} goal
                            </p>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <div className="flex justify-between text-sm text-gray-500 mb-2">
                            <span>{Math.round((campaign.raised / campaign.goal) * 100)}% Complete</span>
                            <span>{campaign.donors} donors</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-trailguide-evergreen h-2 rounded-full transition-all duration-300"
                              style={{ width: `${Math.min((campaign.raised / campaign.goal) * 100, 100)}%` }}
                            ></div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm">
                              <Edit className="h-4 w-4 mr-1" />
                              Edit
                            </Button>
                            <Button variant="outline" size="sm">
                              <Send className="h-4 w-4 mr-1" />
                              Share
                            </Button>
                          </div>
                          <Button size="sm" className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90">
                            View Details
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Recent Activity */}
              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <div className="p-6 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900">Recent Donations</h2>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            <DollarSign className="h-4 w-4 text-green-600" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">Sarah Johnson</p>
                            <p className="text-sm text-gray-500">2 hours ago</p>
                          </div>
                        </div>
                        <span className="font-semibold text-gray-900">{formatCurrency(2500)}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <DollarSign className="h-4 w-4 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">Corporate Match - TechCorp</p>
                            <p className="text-sm text-gray-500">1 day ago</p>
                          </div>
                        </div>
                        <span className="font-semibold text-gray-900">{formatCurrency(8500)}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                            <DollarSign className="h-4 w-4 text-purple-600" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">Monthly Recurring - 15 donors</p>
                            <p className="text-sm text-gray-500">3 days ago</p>
                          </div>
                        </div>
                        <span className="font-semibold text-gray-900">{formatCurrency(1250)}</span>
                      </div>
                    </div>
                  </div>
                </Card>
                
                <Card>
                  <div className="p-6 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900">Action Items</h2>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <AlertCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">Follow up with major donors</p>
                          <p className="text-sm text-gray-500">12 donors haven't given in 90+ days</p>
                          <Button variant="outline" size="sm" className="mt-2">
                            Review List
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Clock className="h-5 w-5 text-blue-500 mt-0.5" />
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">Campaign deadline reminder</p>
                          <p className="text-sm text-gray-500">Emergency fund ends in 12 days</p>
                          <Button variant="outline" size="sm" className="mt-2">
                            Send Reminder
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">Stewardship report ready</p>
                          <p className="text-sm text-gray-500">Q3 impact report for major donors</p>
                          <Button variant="outline" size="sm" className="mt-2">
                            Review & Send
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          )}

          {selectedTab === 'donors' && (
            <div className="space-y-6">
              
              {/* Donor Filters */}
              <Card>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-gray-900">Donor Management</h2>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <Filter className="h-4 w-4 mr-2" />
                        Filters
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Export
                      </Button>
                      <Button size="sm" className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Donor
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                      <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                        <option>All Statuses</option>
                        <option>Active</option>
                        <option>Lapsed</option>
                        <option>Prospect</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Tier</label>
                      <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                        <option>All Tiers</option>
                        <option>Major Donor</option>
                        <option>Mid-Level</option>
                        <option>Grassroots</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Gift</label>
                      <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                        <option>Any Time</option>
                        <option>Last 30 days</option>
                        <option>Last 90 days</option>
                        <option>Last Year</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Total Given</label>
                      <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                        <option>Any Amount</option>
                        <option>$1,000+</option>
                        <option>$5,000+</option>
                        <option>$10,000+</option>
                      </select>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Donor List */}
              <Card>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Donor
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status & Tier
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Total Given
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Last Gift
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {SAMPLE_DONORS.map((donor) => (
                        <tr key={donor.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                <span className="text-sm font-medium text-gray-600">
                                  {donor.name.split(' ').map(n => n[0]).join('')}
                                </span>
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{donor.name}</div>
                                <div className="text-sm text-gray-500">{donor.email}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="space-y-1">
                              <Badge className={getStatusColor(donor.status)}>
                                {donor.status}
                              </Badge>
                              <Badge variant="outline" className={getTierColor(donor.tier)}>
                                {donor.tier}
                              </Badge>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm font-medium text-gray-900">
                              {formatCurrency(donor.totalGiven)}
                            </div>
                            <div className="text-sm text-gray-500">
                              {donor.giftCount} gifts
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-900">{donor.lastGift}</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-2">
                              <Button variant="ghost" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Mail className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Edit className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          )}

          {selectedTab === 'campaigns' && (
            <div className="space-y-6">
              
              {/* Campaign Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Campaign Management</h2>
                  <p className="text-gray-500">Create, manage, and track your fundraising campaigns</p>
                </div>
                <Button className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Campaign
                </Button>
              </div>

              {/* Campaign Grid */}
              <div className="grid lg:grid-cols-2 gap-6">
                {SAMPLE_CAMPAIGNS.map((campaign) => (
                  <Card key={campaign.id} className="overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{campaign.name}</h3>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge className={getStatusColor(campaign.status)}>
                              {campaign.status}
                            </Badge>
                            <Badge variant="outline">
                              {campaign.type}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm text-gray-500 mb-2">
                            <span>Progress: {Math.round((campaign.raised / campaign.goal) * 100)}%</span>
                            <span>{campaign.daysLeft} days left</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-trailguide-evergreen h-2 rounded-full transition-all duration-300"
                              style={{ width: `${Math.min((campaign.raised / campaign.goal) * 100, 100)}%` }}
                            ></div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4">
                          <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wider">Raised</p>
                            <p className="text-lg font-semibold text-gray-900">{formatCurrency(campaign.raised)}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wider">Goal</p>
                            <p className="text-lg font-semibold text-gray-900">{formatCurrency(campaign.goal)}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wider">Donors</p>
                            <p className="text-lg font-semibold text-gray-900">{campaign.donors}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 px-6 py-3 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                          <Send className="h-4 w-4 mr-1" />
                          Share
                        </Button>
                        <Button variant="ghost" size="sm">
                          <BarChart3 className="h-4 w-4 mr-1" />
                          Analytics
                        </Button>
                      </div>
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {selectedTab === 'analytics' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Analytics & Reports</h2>
                  <p className="text-gray-500">Deep insights into your fundraising performance</p>
                </div>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export Report
                </Button>
              </div>

              {/* Analytics placeholder - would contain charts */}
              <div className="grid lg:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Donation Trends</h3>
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <LineChart className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-500">Chart visualization would appear here</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Donor Segments</h3>
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <PieChart className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-500">Pie chart would appear here</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          )}

          {selectedTab === 'communications' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Communications</h2>
                  <p className="text-gray-500">Donor outreach and stewardship tools</p>
                </div>
                <Button className="bg-trailguide-evergreen hover:bg-trailguide-evergreen/90">
                  <Send className="h-4 w-4 mr-2" />
                  New Message
                </Button>
              </div>

              {/* Communication tools placeholder */}
              <div className="grid lg:grid-cols-3 gap-6">
                <Card className="p-6">
                  <Mail className="h-8 w-8 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Campaigns</h3>
                  <p className="text-gray-500 mb-4">Send targeted emails to donor segments</p>
                  <Button variant="outline" className="w-full">
                    Create Email
                  </Button>
                </Card>
                
                <Card className="p-6">
                  <FileText className="h-8 w-8 text-green-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Thank You Letters</h3>
                  <p className="text-gray-500 mb-4">Automated stewardship communications</p>
                  <Button variant="outline" className="w-full">
                    Setup Templates
                  </Button>
                </Card>
                
                <Card className="p-6">
                  <Globe className="h-8 w-8 text-purple-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Social Updates</h3>
                  <p className="text-gray-500 mb-4">Share campaign progress online</p>
                  <Button variant="outline" className="w-full">
                    Post Update
                  </Button>
                </Card>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
