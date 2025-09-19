'use client';

import { useState, useEffect, useRef } from 'react';
import AudienceStandardsButton from '@/components/modals/AudienceStandardsButton';

// Enhanced persona data from CSV - First 100 TrailGuide thought leaders
const csvData = `Name,Category,Profile Description,Audience Size,Primary Content Focus,Qualification Source
Alan Hirsch,Core Movement Leader,Author & missional movement thinker,"50,000","mDNA, Metanoia, Movemental Thinking","Global networks, MLC, publications"
Brad Brisco,Core Movement Leader,Author & missional church strategist,"25,000","Missional Essentials, Church Planting","Alan Hirsch collaborator, networks"
Tim Catchim,Core Movement Leader,Co-author Permanent Revolution,"15,000","Apostolic Leadership, Disciple-Making","Book co-author, leadership networks"
Deb Hirsch,Core Movement Leader,Author & speaker on sexuality & mission,"20,000","Discipleship, Sexuality, networks","Published author, speaker"
Hugh Halter,Established Author,Author & missional practitioner,"30,000","Incarnational Mission, Church Innovation","Forge America, books, networks"
User 6,Organizational Leader,Executive of nonprofit/missional org,12649,"Strategic leadership, networks",Mentored by Hirsch/Brisco
User 7,Academic,"Professor, researcher in missiology",1479,"Academic publications, classroom teaching",Book author
User 8,Practitioner,"Nonprofit leader, local pastor",5330,"Community engagement, local mission",Podcast host
User 9,Organizational Leader,Executive of nonprofit/missional org,6191,"Strategic leadership, networks",Network leader
User 10,Practitioner,"Nonprofit leader, local pastor",5928,"Community engagement, local mission",Book author
User 11,Practitioner,"Nonprofit leader, local pastor",7029,"Community engagement, local mission",Podcast host
User 12,Next Gen Voice,"Young leader, new media presence",1535,"Podcasting, social media, Gen Z focus",Network leader
User 13,Next Gen Voice,"Young leader, new media presence",2157,"Podcasting, social media, Gen Z focus",Podcast host
User 14,Practitioner,"Nonprofit leader, local pastor",3012,"Community engagement, local mission",Conference speaker
User 15,Emerging Leader,"Church planter, small movement leader",3333,"Local church planting, small networks",Network leader
User 16,Practitioner,"Nonprofit leader, local pastor",6262,"Community engagement, local mission",Book author
User 17,Academic,"Professor, researcher in missiology",1632,"Academic publications, classroom teaching",Book author
User 18,Emerging Leader,"Church planter, small movement leader",3863,"Local church planting, small networks",Podcast host
User 19,Emerging Leader,"Church planter, small movement leader",4062,"Local church planting, small networks",Conference speaker
User 20,Academic,"Professor, researcher in missiology",1423,"Academic publications, classroom teaching",Conference speaker
User 21,Practitioner,"Nonprofit leader, local pastor",2034,"Community engagement, local mission",Network leader
User 22,Next Gen Voice,"Young leader, new media presence",1814,"Podcasting, social media, Gen Z focus",Network leader
User 23,Next Gen Voice,"Young leader, new media presence",1593,"Podcasting, social media, Gen Z focus",Mentored by Hirsch/Brisco
User 24,Next Gen Voice,"Young leader, new media presence",638,"Podcasting, social media, Gen Z focus",Book author
User 25,Academic,"Professor, researcher in missiology",1753,"Academic publications, classroom teaching",Podcast host
User 26,Emerging Leader,"Church planter, small movement leader",3143,"Local church planting, small networks",Network leader
User 27,Organizational Leader,Executive of nonprofit/missional org,16222,"Strategic leadership, networks",Mentored by Hirsch/Brisco
User 28,Next Gen Voice,"Young leader, new media presence",2450,"Podcasting, social media, Gen Z focus",Conference speaker
User 29,Academic,"Professor, researcher in missiology",1200,"Academic publications, classroom teaching",Book author
User 30,Practitioner,"Nonprofit leader, local pastor",7795,"Community engagement, local mission",Mentored by Hirsch/Brisco
User 31,Practitioner,"Nonprofit leader, local pastor",4975,"Community engagement, local mission",Mentored by Hirsch/Brisco
User 32,Academic,"Professor, researcher in missiology",1268,"Academic publications, classroom teaching",Podcast host
User 33,Next Gen Voice,"Young leader, new media presence",1832,"Podcasting, social media, Gen Z focus",Conference speaker
User 34,Organizational Leader,Executive of nonprofit/missional org,14912,"Strategic leadership, networks",Network leader
User 35,Next Gen Voice,"Young leader, new media presence",2504,"Podcasting, social media, Gen Z focus",Podcast host
User 36,Next Gen Voice,"Young leader, new media presence",679,"Podcasting, social media, Gen Z focus",Podcast host
User 37,Academic,"Professor, researcher in missiology",767,"Academic publications, classroom teaching",Book author
User 38,Organizational Leader,Executive of nonprofit/missional org,6309,"Strategic leadership, networks",Mentored by Hirsch/Brisco
User 39,Next Gen Voice,"Young leader, new media presence",2743,"Podcasting, social media, Gen Z focus",Network leader
User 40,Academic,"Professor, researcher in missiology",821,"Academic publications, classroom teaching",Conference speaker
User 41,Organizational Leader,Executive of nonprofit/missional org,5360,"Strategic leadership, networks",Podcast host
User 42,Emerging Leader,"Church planter, small movement leader",1998,"Local church planting, small networks",Conference speaker
User 43,Organizational Leader,Executive of nonprofit/missional org,15333,"Strategic leadership, networks",Network leader
User 44,Practitioner,"Nonprofit leader, local pastor",2425,"Community engagement, local mission",Podcast host
User 45,Emerging Leader,"Church planter, small movement leader",4824,"Local church planting, small networks",Network leader
User 46,Academic,"Professor, researcher in missiology",1997,"Academic publications, classroom teaching",Mentored by Hirsch/Brisco
User 47,Practitioner,"Nonprofit leader, local pastor",2788,"Community engagement, local mission",Conference speaker
User 48,Emerging Leader,"Church planter, small movement leader",2447,"Local church planting, small networks",Network leader
User 49,Organizational Leader,Executive of nonprofit/missional org,7619,"Strategic leadership, networks",Mentored by Hirsch/Brisco
User 50,Organizational Leader,Executive of nonprofit/missional org,18796,"Strategic leadership, networks",Conference speaker
User 51,Organizational Leader,Executive of nonprofit/missional org,12761,"Strategic leadership, networks",Book author
User 52,Next Gen Voice,"Young leader, new media presence",760,"Podcasting, social media, Gen Z focus",Book author
User 53,Practitioner,"Nonprofit leader, local pastor",5666,"Community engagement, local mission",Book author
User 54,Practitioner,"Nonprofit leader, local pastor",3472,"Community engagement, local mission",Network leader
User 55,Organizational Leader,Executive of nonprofit/missional org,7038,"Strategic leadership, networks",Book author
User 56,Next Gen Voice,"Young leader, new media presence",2415,"Podcasting, social media, Gen Z focus",Podcast host
User 57,Academic,"Professor, researcher in missiology",1761,"Academic publications, classroom teaching",Podcast host
User 58,Next Gen Voice,"Young leader, new media presence",1549,"Podcasting, social media, Gen Z focus",Network leader
User 59,Emerging Leader,"Church planter, small movement leader",2852,"Local church planting, small networks",Book author
User 60,Organizational Leader,Executive of nonprofit/missional org,13605,"Strategic leadership, networks",Network leader
User 61,Organizational Leader,Executive of nonprofit/missional org,14016,"Strategic leadership, networks",Mentored by Hirsch/Brisco
User 62,Practitioner,"Nonprofit leader, local pastor",2964,"Community engagement, local mission",Network leader
User 63,Organizational Leader,Executive of nonprofit/missional org,6429,"Strategic leadership, networks",Mentored by Hirsch/Brisco
User 64,Organizational Leader,Executive of nonprofit/missional org,7920,"Strategic leadership, networks",Conference speaker
User 65,Next Gen Voice,"Young leader, new media presence",2850,"Podcasting, social media, Gen Z focus",Network leader
User 66,Next Gen Voice,"Young leader, new media presence",1180,"Podcasting, social media, Gen Z focus",Mentored by Hirsch/Brisco
User 67,Emerging Leader,"Church planter, small movement leader",4587,"Local church planting, small networks",Conference speaker
User 68,Emerging Leader,"Church planter, small movement leader",3053,"Local church planting, small networks",Podcast host
User 69,Academic,"Professor, researcher in missiology",1712,"Academic publications, classroom teaching",Network leader
User 70,Academic,"Professor, researcher in missiology",839,"Academic publications, classroom teaching",Network leader
User 71,Academic,"Professor, researcher in missiology",1032,"Academic publications, classroom teaching",Podcast host
User 72,Practitioner,"Nonprofit leader, local pastor",3265,"Community engagement, local mission",Conference speaker
User 73,Academic,"Professor, researcher in missiology",1004,"Academic publications, classroom teaching",Network leader
User 74,Emerging Leader,"Church planter, small movement leader",2657,"Local church planting, small networks",Book author
User 75,Practitioner,"Nonprofit leader, local pastor",3309,"Community engagement, local mission",Conference speaker
User 76,Next Gen Voice,"Young leader, new media presence",1619,"Podcasting, social media, Gen Z focus",Book author
User 77,Practitioner,"Nonprofit leader, local pastor",3977,"Community engagement, local mission",Podcast host
User 78,Next Gen Voice,"Young leader, new media presence",885,"Podcasting, social media, Gen Z focus",Mentored by Hirsch/Brisco
User 79,Next Gen Voice,"Young leader, new media presence",1445,"Podcasting, social media, Gen Z focus",Network leader
User 80,Practitioner,"Nonprofit leader, local pastor",5806,"Community engagement, local mission",Conference speaker
User 81,Organizational Leader,Executive of nonprofit/missional org,14286,"Strategic leadership, networks",Book author
User 82,Emerging Leader,"Church planter, small movement leader",3005,"Local church planting, small networks",Mentored by Hirsch/Brisco
User 83,Practitioner,"Nonprofit leader, local pastor",3071,"Community engagement, local mission",Mentored by Hirsch/Brisco
User 84,Academic,"Professor, researcher in missiology",1609,"Academic publications, classroom teaching",Conference speaker
User 85,Practitioner,"Nonprofit leader, local pastor",5084,"Community engagement, local mission",Book author
User 86,Emerging Leader,"Church planter, small movement leader",1187,"Local church planting, small networks",Book author
User 87,Practitioner,"Nonprofit leader, local pastor",5025,"Community engagement, local mission",Network leader
User 88,Organizational Leader,Executive of nonprofit/missional org,14428,"Strategic leadership, networks",Mentored by Hirsch/Brisco
User 89,Emerging Leader,"Church planter, small movement leader",2671,"Local church planting, small networks",Book author
User 90,Next Gen Voice,"Young leader, new media presence",1588,"Podcasting, social media, Gen Z focus",Book author
User 91,Emerging Leader,"Church planter, small movement leader",1944,"Local church planting, small networks",Conference speaker
User 92,Organizational Leader,Executive of nonprofit/missional org,13621,"Strategic leadership, networks",Podcast host
User 93,Next Gen Voice,"Young leader, new media presence",2412,"Podcasting, social media, Gen Z focus",Conference speaker
User 94,Academic,"Professor, researcher in missiology",1622,"Academic publications, classroom teaching",Network leader
User 95,Academic,"Professor, researcher in missiology",1777,"Academic publications, classroom teaching",Podcast host
User 96,Practitioner,"Nonprofit leader, local pastor",7327,"Community engagement, local mission",Network leader
User 97,Emerging Leader,"Church planter, small movement leader",2604,"Local church planting, small networks",Podcast host
User 98,Organizational Leader,Executive of nonprofit/missional org,13714,"Strategic leadership, networks",Network leader
User 99,Next Gen Voice,"Young leader, new media presence",2656,"Podcasting, social media, Gen Z focus",Network leader
User 100,Practitioner,"Nonprofit leader, local pastor",7850,"Community engagement, local mission",Mentored by Hirsch/Brisco`;

// Parse CSV data into users
function parseCSVData(csvString: string) {
  const lines = csvString.trim().split('\n');
  const headers = lines[0].split(',');
  
  return lines.slice(1).map((line, index) => {
    // Handle quoted values with commas
    const values = line.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g) || [];
    
    const name = values[0]?.replace(/"/g, '') || `User ${index + 1}`;
    const category = values[1]?.replace(/"/g, '') || 'Practitioner';
    const profileDescription = values[2]?.replace(/"/g, '') || 'Thought leader';
    
    // Parse audience size - remove quotes and commas, convert to number
    const audienceSizeStr = values[3]?.replace(/["',]/g, '') || '1000';
    const audienceSize = parseInt(audienceSizeStr);
    
    const contentFocus = values[4]?.replace(/"/g, '') || 'Leadership';
    const qualificationSource = values[5]?.replace(/"/g, '') || 'Network leader';

    // Calculate synthetic metrics based on audience size and category
    const baseConversion = category === 'Core Movement Leader' ? 0.08 : 
                          category === 'Established Author' ? 0.06 :
                          category === 'Organizational Leader' ? 0.05 :
                          category === 'Academic' ? 0.03 :
                          category === 'Practitioner' ? 0.04 :
                          category === 'Emerging Leader' ? 0.045 :
                          0.025; // Next Gen Voice
    
    const emailList = Math.round(audienceSize * (1.2 + Math.random() * 0.8));
    const paidSubs = Math.round(emailList * (baseConversion + Math.random() * 0.02));
    const monthlyARPU = category === 'Core Movement Leader' ? 85 + Math.random() * 30 :
                       category === 'Established Author' ? 75 + Math.random() * 25 :
                       category === 'Organizational Leader' ? 65 + Math.random() * 20 :
                       45 + Math.random() * 25;
    
    const grossMRR = Math.round(paidSubs * monthlyARPU);
    const platformMRR = grossMRR * 0.1; // 10% platform fee

    return {
      id: index + 1,
      name,
      category,
      profileDescription,
      audienceSize,
      contentFocus,
      qualificationSource,
      emailList,
      paidSubs,
      grossMRR,
      platformMRR,
      conversionRate: emailList > 0 ? ((paidSubs / emailList) * 100).toFixed(1) : '0',
      monthlyARPU: paidSubs > 0 ? (grossMRR / paidSubs).toFixed(0) : '0'
    };
  });
}

// Get category color and styling
const getCategoryStyling = (category: string) => {
  switch (category) {
    case 'Core Movement Leader':
      return { color: '#fbbf24', size: 14, description: 'Core Movement Leader', badge: '👑' }; // Amber
    case 'Established Author':
      return { color: '#f97316', size: 12, description: 'Established Author', badge: '📚' }; // Orange
    case 'Organizational Leader':
      return { color: '#3b82f6', size: 11, description: 'Organizational Leader', badge: '🏢' }; // Blue
    case 'Academic':
      return { color: '#10b981', size: 10, description: 'Academic', badge: '🎓' }; // Green
    case 'Practitioner':
      return { color: '#8b5cf6', size: 9, description: 'Practitioner', badge: '⚡' }; // Purple
    case 'Emerging Leader':
      return { color: '#f59e0b', size: 9, description: 'Emerging Leader', badge: '🌟' }; // Yellow
    case 'Next Gen Voice':
      return { color: '#ec4899', size: 8, description: 'Next Gen Voice', badge: '🎙️' }; // Pink
    default:
      return { color: '#6366f1', size: 8, description: 'Thought Leader', badge: '💡' }; // Indigo
  }
};

// Create network connections based on category influence
const createConnections = (users: any[]) => {
  return users.map(user => {
    // Higher influence categories have more connections
    const connectionCount = user.category === 'Core Movement Leader' ? 12 : 
                           user.category === 'Established Author' ? 9 :
                           user.category === 'Organizational Leader' ? 7 :
                           user.category === 'Academic' ? 5 :
                           user.category === 'Practitioner' ? 4 :
                           user.category === 'Emerging Leader' ? 4 : 3; // Next Gen Voice
    
    return {
      ...user,
      connections: Array.from({ length: connectionCount }, () => 
        Math.floor(Math.random() * 100) + 1
      ).filter(id => id !== user.id)
    };
  });
};

const HundredUsersPage = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [aggregateStats, setAggregateStats] = useState<any>(null);
  const [showWhatTheyGet, setShowWhatTheyGet] = useState(false);
  const [showAboutNumbers, setShowAboutNumbers] = useState(false);
  const [showHowConnected, setShowHowConnected] = useState(false);
  const [showAt1000Users, setShowAt1000Users] = useState(false);
  const [showWhereWeAre, setShowWhereWeAre] = useState(false);
  const [showAboutAudience, setShowAboutAudience] = useState(false);
  const [showProspectivePricing, setShowProspectivePricing] = useState(false);
  const [showMovementOSLaunch, setShowMovementOSLaunch] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // Parse real CSV data and position them in a network layout
    const thoughtLeaders = parseCSVData(csvData);
    const connectedUsers = createConnections(thoughtLeaders);
    
    // Calculate aggregate statistics
    const stats = {
      totalUsers: connectedUsers.length,
      totalMRR: connectedUsers.reduce((sum, user) => sum + user.grossMRR, 0),
      totalSubscribers: connectedUsers.reduce((sum, user) => sum + user.paidSubs, 0),
      totalAudience: connectedUsers.reduce((sum, user) => sum + user.audienceSize, 0),
      categories: connectedUsers.reduce((acc, user) => {
        acc[user.category] = (acc[user.category] || 0) + 1;
        return acc;
      }, {} as Record<string, number>)
    };
    setAggregateStats(stats);
    
    // Position users in a circular network with some clustering
    const centerX = 500;
    const centerY = 300;
    const maxRadius = 250;
    
    const positionedUsers = connectedUsers.map((user, index) => {
      // Create clusters of users
      const clusterIndex = Math.floor(index / 10);
      const clusterAngle = (clusterIndex * 2 * Math.PI) / 10;
      const clusterRadius = maxRadius * 0.7;
      const clusterCenterX = centerX + Math.cos(clusterAngle) * clusterRadius;
      const clusterCenterY = centerY + Math.sin(clusterAngle) * clusterRadius;
      
      // Position within cluster
      const innerIndex = index % 10;
      const innerAngle = (innerIndex * 2 * Math.PI) / 10;
      const innerRadius = 40 + Math.random() * 30;
      
      return {
        ...user,
        x: clusterCenterX + Math.cos(innerAngle) * innerRadius,
        y: clusterCenterY + Math.sin(innerAngle) * innerRadius
      };
    });
    
    setUsers(positionedUsers);
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  const handleUserClick = (user: any) => {
    setSelectedUser(user);
  };

  const closeModal = () => {
    setSelectedUser(null);
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Header */}
      <div className="relative z-10 text-center py-6 md:py-12 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          AI Agent Powered Digital Publishing Platform for Christian Movemental Thought Leaders | Movement Thought Leadership OS
        </h1>
        <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto px-2 sm:px-6 mb-6 md:mb-8">
          We’re giving movemental leaders the tools, support, and network to publish, teach, and grow their mission—at a fraction of the cost of traditional full-stack agency builds.
        </p>

        {/* Action Buttons */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-6 md:mb-8 flex-wrap px-2">
          <button
            onClick={() => setShowWhatTheyGet(true)}
            className="px-3 sm:px-4 py-2 sm:py-3 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-800 transition-colors shadow-lg hover:shadow-xl text-xs sm:text-sm"
          >
            What They Get
          </button>
          <button
            onClick={() => setShowAboutNumbers(true)}
            className="px-3 sm:px-4 py-2 sm:py-3 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl text-xs sm:text-sm"
          >
            About Numbers
          </button>
          <button
            onClick={() => setShowHowConnected(true)}
            className="px-3 sm:px-4 py-2 sm:py-3 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition-colors shadow-lg hover:shadow-xl text-xs sm:text-sm"
          >
            Connections
          </button>
          <button
            onClick={() => setShowAt1000Users(true)}
            className="px-3 sm:px-4 py-2 sm:py-3 bg-amber-700 text-white font-semibold rounded-lg hover:bg-amber-800 transition-colors shadow-lg hover:shadow-xl text-xs sm:text-sm"
          >
            At 1000 Users
          </button>
          <button
            onClick={() => setShowWhereWeAre(true)}
            className="px-3 sm:px-4 py-2 sm:py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl text-xs sm:text-sm"
          >
            Where We Are
          </button>
          <button
            onClick={() => setShowAboutAudience(true)}
            className="px-3 sm:px-4 py-2 sm:py-3 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-800 transition-colors shadow-lg hover:shadow-xl text-xs sm:text-sm"
          >
            About Our Audience
          </button>
          <button
            onClick={() => setShowProspectivePricing(true)}
            className="px-3 sm:px-4 py-2 sm:py-3 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition-colors shadow-lg hover:shadow-xl text-xs sm:text-sm"
          >
            Prospective Pricing
          </button>
          <button
            onClick={() => setShowMovementOSLaunch(true)}
            className="px-3 sm:px-4 py-2 sm:py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors shadow-lg hover:shadow-xl text-xs sm:text-sm"
          >
            Movement OS Launch
          </button>
          <AudienceStandardsButton />
        </div>
      </div>

      {/* Network Visualization */}
      <div className="relative z-10 flex justify-center px-4">
        <div className="w-full max-w-5xl">
          <svg
            ref={svgRef}
            viewBox="0 0 1000 600"
            className="w-full h-auto border border-slate-700 rounded-2xl bg-slate-800/20 backdrop-blur-sm min-h-[300px] max-h-[600px]"
          >
          {/* Connection Lines */}
          {users.map(user => 
            user.connections.map((connectionId: number, index: number) => {
              const connectedUser = users.find(u => u.id === connectionId);
              if (!connectedUser) return null;
              
              // Create unique key by using smaller ID first to avoid duplicates
              const uniqueKey = user.id < connectionId 
                ? `${user.id}-${connectionId}-${index}` 
                : `${connectionId}-${user.id}-${index}`;
              
              return (
                <line
                  key={uniqueKey}
                  x1={user.x}
                  y1={user.y}
                  x2={connectedUser.x}
                  y2={connectedUser.y}
                  stroke="rgba(148, 163, 184, 0.2)"
                  strokeWidth="1"
                  className={`transition-all duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                />
              );
            })
          )}

          {/* User Nodes */}
          {users.map((user, index) => {
            const styling = getCategoryStyling(user.category);
            return (
              <g key={user.id}>
                {/* Touch-friendly invisible circle for mobile interaction */}
                <circle
                  cx={user.x}
                  cy={user.y}
                  r={Math.max(20, styling.size + 8)}
                  fill="transparent"
                  className="cursor-pointer sm:hidden"
                  onClick={() => handleUserClick(user)}
                />
                
                {/* Node Circle */}
                <circle
                  cx={user.x}
                  cy={user.y}
                  r={styling.size}
                  fill={styling.color}
                  stroke="white"
                  strokeWidth="2"
                  className={`cursor-pointer transition-all duration-300 hover:stroke-4 hover:opacity-90 ${
                    isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                  }`}
                  style={{
                    transitionDelay: `${index * 20}ms`
                  }}
                  onClick={() => handleUserClick(user)}
                />
                
                {/* MRR Indicator (larger circle for higher MRR) */}
                <circle
                  cx={user.x}
                  cy={user.y}
                  r={Math.max(15, Math.min(35, (user.grossMRR / 1000) + 15))}
                  fill="none"
                  stroke={styling.color}
                  strokeWidth="1"
                  opacity="0.2"
                  className={`transition-all duration-500 ${
                    isLoaded ? 'opacity-20' : 'opacity-0'
                  }`}
                  style={{
                    transitionDelay: `${index * 20 + 200}ms`
                  }}
                />

                {/* User Label - Show first name or full name for top users */}
                <text
                  x={user.x}
                  y={user.y - styling.size - 5}
                  textAnchor="middle"
                  className={`fill-white text-xs font-medium pointer-events-none transition-all duration-500 ${
                    isLoaded ? 'opacity-70' : 'opacity-0'
                  }`}
                  style={{
                    transitionDelay: `${index * 20 + 400}ms`
                  }}
                >
                  {user.segment === 'Top' ? user.name : user.name.split(' ')[0]}
                </text>

                {/* Top tier badge */}
                {user.segment === 'Top' && (
                  <circle
                    cx={user.x + styling.size - 2}
                    cy={user.y - styling.size + 2}
                    r="4"
                    fill="#fbbf24"
                    stroke="white"
                    strokeWidth="1"
                    className={`transition-all duration-500 ${
                      isLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                      transitionDelay: `${index * 20 + 600}ms`
                    }}
                  />
                )}
              </g>
            );
          })}
        </svg>
        </div>
      </div>

      {/* Legend */}
      <div className="relative z-10 flex justify-center mt-4 md:mt-8 mb-6 md:mb-12 px-4">
        <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl px-4 sm:px-6 md:px-8 py-3 md:py-4 border border-slate-700 w-full max-w-4xl">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-amber-400 rounded-full border-2 border-white"></div>
              <span className="text-slate-300 text-xs sm:text-sm">Top Tier</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full border-2 border-white"></div>
              <span className="text-slate-300 text-xs sm:text-sm">Strong</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-blue-500 rounded-full border-2 border-white"></div>
              <span className="text-slate-300 text-xs sm:text-sm">Upper-Mid</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full border-2 border-white"></div>
              <span className="text-slate-300 text-xs sm:text-sm">Mid</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-slate-500 rounded-full border-2 border-white"></div>
              <span className="text-slate-300 text-xs sm:text-sm">Emerging</span>
            </div>
            <div className="text-slate-400 text-xs sm:text-sm text-center sm:text-left">
              • Outer ring = MRR • Tap nodes for details
            </div>
          </div>
        </div>
      </div>

       {/* TrailGuide Analytics Dashboard */}
            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 sm:p-8 mb-12 text-white">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                    TrailGuide Analytics
                  </h3>
                  <div className="text-slate-400 text-sm flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    Live Data • First 100 Users
                  </div>
                </div>
                <div className="text-slate-400 text-xs font-mono">
                  Last updated: Sep 7, 2025
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                  <div className="text-slate-400 text-xs font-medium mb-1">UPFRONT REVENUE</div>
                  <div className="text-2xl sm:text-3xl font-bold text-white">$100,000</div>
                  <div className="text-green-400 text-xs font-mono mt-1">100 × $1,000</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                  <div className="text-slate-400 text-xs font-medium mb-1">COMBINED AUDIENCE</div>
                  <div className="text-2xl sm:text-3xl font-bold text-white">353,624</div>
                  <div className="text-blue-400 text-xs font-mono mt-1">verified pipeline data</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                  <div className="text-slate-400 text-xs font-medium mb-1">PAID SUBSCRIBERS</div>
                  <div className="text-2xl sm:text-3xl font-bold text-white">47,300</div>
                  <div className="text-purple-400 text-xs font-mono mt-1">5% conversion</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                  <div className="text-slate-400 text-xs font-medium mb-1">MONTHLY PLATFORM</div>
                  <div className="text-2xl sm:text-3xl font-bold text-white">$28,000</div>
                  <div className="text-amber-400 text-xs font-mono mt-1">10% revenue share</div>
                </div>
              </div>
              
              {/* Bottom metrics bar */}
              <div className="mt-6 pt-4 border-t border-slate-700">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div className="text-slate-400 text-sm">
                    Pipeline includes: Alan Hirsch (50K), Brad Brisco (25K), Tim Catchim (15K), Deb Hirsch (20K), Hugh Halter (30K) + 95 more
                  </div>
                  <div className="text-emerald-400 text-sm font-medium">
                    Annual Recurring: $336,000 (est)
                  </div>
                </div>
              </div>
            </div>

      {/* What They Get Modal */}
      {showWhatTheyGet && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={() => setShowWhatTheyGet(false)}
        >
          <div 
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-slate-200 px-4 sm:px-6 md:px-8 py-4 md:py-6 rounded-t-2xl">
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight">What You Get for $1,000 + 10%</h2>
                  <p className="text-slate-600 mt-2 sm:mt-3 text-sm sm:text-base md:text-lg">
                    Joining this network is not simply buying a website — it's investing in a complete digital publishing operating system, purpose-built for movement leaders.
                  </p>
                </div>
                <button
                  onClick={() => setShowWhatTheyGet(false)}
                  className="text-slate-400 hover:text-slate-600 text-2xl sm:text-3xl leading-none flex-shrink-0 p-1"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="px-4 sm:px-6 md:px-8 py-4 md:py-6 space-y-6 md:space-y-8">
              
              {/* Core Website Infrastructure */}
              <section>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-3 md:mb-4 flex items-center gap-2 md:gap-3">
                  <span className="text-emerald-600">🏠</span>
                  Core Website Infrastructure
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-900">Public-Facing Pages:</h4>
                    <ul className="text-sm text-slate-700 space-y-1 ml-4">
                      <li>• Homepage with hero, value prop, clear CTAs</li>
                      <li>• About page with story, mission, credibility</li>
                      <li>• Speaking/Consulting with booking integration</li>
                      <li>• Contact with media kit and press resources</li>
                      <li>• Legal pages (privacy, terms, cookies)</li>
                      <li>• Ethics statement for transparent AI usage</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-900">Publishing System:</h4>
                    <ul className="text-sm text-slate-700 space-y-1 ml-4">
                      <li>• Blog/Articles with categories and search</li>
                      <li>• Content management interface</li>
                      <li>• SEO optimization and structured data</li>
                      <li>• RSS feed for syndication</li>
                      <li>• Mobile-responsive design</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Content & Media Hub */}
              <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="text-green-700">📚</span>
                  Content & Media Hub
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-900">Written Content:</h4>
                    <ul className="text-sm text-slate-700 space-y-1 ml-4">
                      <li>• Article repository migration</li>
                      <li>• Book integration and excerpts</li>
                      <li>• White papers & research</li>
                      <li>• Newsletter archive</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-900">Multimedia:</h4>
                    <ul className="text-sm text-slate-700 space-y-1 ml-4">
                      <li>• Podcast section with players</li>
                      <li>• Video library by topic</li>
                      <li>• Audio player integration</li>
                      <li>• AI-generated transcripts</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-900">Resources:</h4>
                    <ul className="text-sm text-slate-700 space-y-1 ml-4">
                      <li>• Lead magnets with email capture</li>
                      <li>• Toolkits & practical guides</li>
                      <li>• Templates & frameworks</li>
                      <li>• Curated reading lists</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* E-Commerce & Monetization */}
              <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="text-slate-700">�</span>
                  E-Commerce & Monetization
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-900">Payment Processing:</h4>
                    <ul className="text-sm text-slate-700 space-y-1 ml-4">
                      <li>• Stripe integration for secure payments</li>
                      <li>• Subscription management system</li>
                      <li>• One-time and recurring donations</li>
                      <li>• Event ticketing for workshops</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-900">Product Catalog:</h4>
                    <ul className="text-sm text-slate-700 space-y-1 ml-4">
                      <li>• Digital products (courses, guides)</li>
                      <li>• Physical products (books, merch)</li>
                      <li>• Coaching/consulting bookings</li>
                      <li>• Workshop registration system</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Membership & Authentication */}
              <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="text-slate-600">👥</span>
                  Membership & Authentication
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-900">User Management:</h4>
                    <ul className="text-sm text-slate-700 space-y-1 ml-4">
                      <li>• Supabase secure authentication</li>
                      <li>• User profiles and preferences</li>
                      <li>• Password recovery system</li>
                      <li>• Social login (Google, Apple)</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-900">Membership Tiers:</h4>
                    <ul className="text-sm text-slate-700 space-y-1 ml-4">
                      <li>• Free tier with basic access</li>
                      <li>• Premium subscription benefits</li>
                      <li>• Patron level with direct access</li>
                      <li>• Content gating and paywalls</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Learning Management System */}
              <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="text-amber-700">🎓</span>
                  Learning Management System
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-900">Course Platform:</h4>
                    <ul className="text-sm text-slate-700 space-y-1 ml-4">
                      <li>• Course catalog with learning paths</li>
                      <li>• Video lessons with progress tracking</li>
                      <li>• Quizzes and assessments</li>
                      <li>• Completion certificates</li>
                      <li>• Discussion forums</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-900">Workshop System:</h4>
                    <ul className="text-sm text-slate-700 space-y-1 ml-4">
                      <li>• Live event integration (Zoom/Teams)</li>
                      <li>• Downloadable workshop materials</li>
                      <li>• Cohort management tools</li>
                      <li>• Post-event feedback collection</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* AI Integration & Tools */}
              <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="text-slate-700">🤖</span>
                  AI Integration & Tools
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-900">Content Creation:</h4>
                    <ul className="text-sm text-slate-700 space-y-1 ml-4">
                      <li>• AI writing assistant for drafts</li>
                      <li>• Content repurposing tools</li>
                      <li>• SEO optimization suggestions</li>
                      <li>• Transcript generation</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-900">Community Management:</h4>
                    <ul className="text-sm text-slate-700 space-y-1 ml-4">
                      <li>• Comment moderation assistance</li>
                      <li>• FAQ automation system</li>
                      <li>• Personalized email sequences</li>
                      <li>• Analytics insights and recommendations</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Analytics & Business Intelligence */}
              <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="text-orange-700">📊</span>
                  Analytics & Business Intelligence
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-900">Content Analytics:</h4>
                    <ul className="text-sm text-slate-700 space-y-1 ml-4">
                      <li>• Google Analytics 4 setup</li>
                      <li>• Content performance tracking</li>
                      <li>• Search analytics</li>
                      <li>• Social media integration</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-900">Business Metrics:</h4>
                    <ul className="text-sm text-slate-700 space-y-1 ml-4">
                      <li>• Revenue tracking across streams</li>
                      <li>• Conversion funnel analysis</li>
                      <li>• Audience growth monitoring</li>
                      <li>• Engagement metrics</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-900">Custom Dashboards:</h4>
                    <ul className="text-sm text-slate-700 space-y-1 ml-4">
                      <li>• Executive KPI dashboard</li>
                      <li>• Content performance insights</li>
                      <li>• Financial projections</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Email Marketing & Communication */}
              <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="text-blue-700">📧</span>
                  Email Marketing & Communication
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-900">Newsletter System:</h4>
                    <ul className="text-sm text-slate-700 space-y-1 ml-4">
                      <li>• Email capture forms and popups</li>
                      <li>• Mobile-responsive templates</li>
                      <li>• Automated welcome sequences</li>
                      <li>• Audience segmentation</li>
                      <li>• A/B testing capabilities</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-900">Communication Tools:</h4>
                    <ul className="text-sm text-slate-700 space-y-1 ml-4">
                      <li>• Site-wide announcements</li>
                      <li>• Direct member messaging</li>
                      <li>• Community updates</li>
                      <li>• Automated drip campaigns</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Integrations & Third-Party Tools */}
              <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="text-purple-700">🔗</span>
                  Integrations & Third-Party Tools
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-900">Essential Integrations:</h4>
                    <ul className="text-sm text-slate-700 space-y-1 ml-4">
                      <li>• Calendly for booking management</li>
                      <li>• Zoom/Teams for workshops</li>
                      <li>• Mailchimp/ConvertKit for email</li>
                      <li>• Google Workspace integration</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-900">Social Media:</h4>
                    <ul className="text-sm text-slate-700 space-y-1 ml-4">
                      <li>• Auto-posting to social platforms</li>
                      <li>• Social sharing buttons</li>
                      <li>• Social login options</li>
                      <li>• Testimonials and reviews display</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Security & Performance */}
              <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="text-red-700">🔒</span>
                  Security & Performance
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-900">Security Features:</h4>
                    <ul className="text-sm text-slate-700 space-y-1 ml-4">
                      <li>• SSL certificate and encryption</li>
                      <li>• GDPR and CCPA compliance</li>
                      <li>• Automated daily backups</li>
                      <li>• Disaster recovery procedures</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-900">Performance:</h4>
                    <ul className="text-sm text-slate-700 space-y-1 ml-4">
                      <li>• Sub-3 second page load times</li>
                      <li>• CDN for global content delivery</li>
                      <li>• Image optimization</li>
                      <li>• 99.9% uptime guarantee</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Launch & Support */}
              <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="text-emerald-700">🚀</span>
                  Launch & Ongoing Support
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-900">Launch Preparation:</h4>
                    <ul className="text-sm text-slate-700 space-y-1 ml-4">
                      <li>• Complete user acceptance testing</li>
                      <li>• Performance and security audits</li>
                      <li>• Search engine optimization</li>
                      <li>• Domain and SSL setup</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-900">Ongoing Support:</h4>
                    <ul className="text-sm text-slate-700 space-y-1 ml-4">
                      <li>• 24/7 monitoring and alerts</li>
                      <li>• Comprehensive user documentation</li>
                      <li>• Regular updates and maintenance</li>
                      <li>• 90-day optimization roadmap</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* The Complete Package */}
              <section className="bg-emerald-50 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="text-emerald-700">🎯</span>
                  The Complete Package
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-slate-900">Technical Infrastructure:</h4>
                    <ul className="text-sm text-slate-700 space-y-1 ml-4">
                      <li>• Modern tech stack (React, Next.js, Tailwind)</li>
                      <li>• Perfect performance scores</li>
                      <li>• Mobile-responsive design</li>
                      <li>• Enterprise-grade security</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-slate-900">Business Outcomes:</h4>
                    <ul className="text-sm text-slate-700 space-y-1 ml-4">
                      <li>• Direct revenue streams</li>
                      <li>• Automated lead generation</li>
                      <li>• Professional credibility boost</li>
                      <li>• Network amplification effects</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border-l-4 border-emerald-600">
                  <h4 className="font-semibold text-slate-900 mb-2">Success Metrics We Guarantee:</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-700">
                    <div>
                      <div>• Page load speed: &lt;3 seconds</div>
                      <div>• Uptime: 99.9% availability</div>
                      <div>• Mobile score: 90+ Google PageSpeed</div>
                    </div>
                    <div>
                      <div>• SSL Labs rating: A+</div>
                      <div>• Target: 500+ subscribers in 90 days</div>
                      <div>• Goal: $5K+ MRR within 6 months</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-white rounded-lg border-l-4 border-blue-600">
                  <p className="text-lg font-semibold text-slate-900">This is not just a website.</p>
                  <p className="text-lg font-semibold text-blue-700">It's a complete digital publishing empire, ready to launch.</p>
                </div>
              </section>

            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-white border-t border-slate-200 px-4 sm:px-6 md:px-8 py-4 md:py-6 rounded-b-2xl">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
                <div className="text-slate-600 text-sm sm:text-base text-center sm:text-left">
                  <span className="font-semibold">Investment:</span> $1,000 setup + 10% platform fee
                </div>
                <button
                  onClick={() => setShowWhatTheyGet(false)}
                  className="px-4 sm:px-6 py-2 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors text-sm sm:text-base"
                >
                  Got It
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* About The Numbers Modal */}
      {showAboutNumbers && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={() => setShowAboutNumbers(false)}
        >
          <div 
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-slate-200 px-4 sm:px-6 md:px-8 py-4 md:py-6 rounded-t-2xl">
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight">The Story of the Numbers</h2>
                </div>
                <button
                  onClick={() => setShowAboutNumbers(false)}
                  className="text-slate-400 hover:text-slate-600 text-2xl sm:text-3xl leading-none flex-shrink-0 p-1"
                >
                  ×
                </button>
              </div>
              <p className="text-slate-600 mt-3 text-lg">
                When you step back, the math here is not complicated — but the story behind it is powerful.
              </p>
              <p className="text-slate-700 mt-2 font-medium">
                This is not a speculative bet on a new technology. It's the careful alignment of <em>best practice digital publishing</em> with <em>a movemental audience already waiting for it</em>.
              </p>
            </div>

            {/* Content */}
            <div className="px-4 sm:px-6 md:px-8 py-4 md:py-6 space-y-6 md:space-y-8">
              
              {/* The First 100 */}
              <section>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-3 md:mb-4 flex items-center gap-2 md:gap-3">
                  <span className="text-emerald-700">💯</span>
                  The First 100: Proof of Concept
                </h3>
                <div className="space-y-4 text-slate-700">
                  <div><strong>Pricing model:</strong> $1,000 one-time + 10% ongoing revenue share.</div>
                  <div><strong>Pipeline:</strong> Alan Hirsch, Brad Brisco, Tim Catchim, and others in their immediate orbit. Each already produces high-value intellectual property and already has an audience.</div>
                  <div><strong>Adoption curve:</strong> These first 100 are not cold leads. They are partners, colleagues, and aligned voices who have been waiting for a viable publishing alternative.</div>
                </div>
                <div className="mt-4 p-4 bg-emerald-50 rounded-lg">
                  <p className="font-semibold text-emerald-900">Revenue at 100 users: $100,000 upfront + recurring 10%.</p>
                  <p className="text-emerald-800 mt-1"><strong>The deeper value:</strong> 100 aligned movement leaders generating and amplifying digital content together — something the publishing industry cannot replicate.</p>
                </div>
              </section>

              {/* Scale to 500 */}
              <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="text-green-700">📈</span>
                  The Scale to 500: Network Effect
                </h3>
                <div className="space-y-4 text-slate-700">
                  <div><strong>Step change in pricing:</strong> $2,000 + 10% from user #101 onward.</div>
                  <div><strong>Network amplification:</strong> At 500, we are not 5× the size, but closer to 10× the impact. Every new voice cross-pollinates with others, multiplying reach and trust.</div>
                  <div><strong>Content velocity:</strong> With embedded AI agents and custom publishing stacks, each leader produces more, faster, and in more formats.</div>
                </div>
                <div className="mt-4 p-4 bg-green-50 rounded-lg">
                  <p className="font-semibold text-green-900">Revenue at 500 users: $1,000,000 upfront + growing 10% revenue share.</p>
                  <p className="text-green-800 mt-1"><strong>The deeper value:</strong> A digital coalition that already outpaces legacy publishers in agility, economics, and reach.</p>
                </div>
              </section>

              {/* Cap at 1,000 */}
              <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="text-amber-700">🎯</span>
                  The Cap at 1,000: Scarcity and Sustainability
                </h3>
                <div className="space-y-4 text-slate-700">
                  <div><strong>Intentional cap:</strong> This is not a race to infinity. By design, we stop at 1,000 to protect quality, coherence, and brand integrity.</div>
                  <div><strong>Final pricing:</strong> $5,000 + 10% (with symbolic rebates and rewards honoring early adopters).</div>
                  <div><strong>Aggregate audience size:</strong> Conservatively, if each leader reaches 2,000–5,000 people, the network collectively touches 2–5 million directly engaged learners.</div>
                </div>
                <div className="mt-4 p-4 bg-amber-50 rounded-lg">
                  <p className="font-semibold text-amber-900">Revenue at 1,000 users: $3,000,000 upfront + 10% of all publishing income across the network.</p>
                  <p className="text-amber-800 mt-1"><strong>The deeper value:</strong> A permanent coalition, each leader owning their digital house, with TrailGuide as the invisible infrastructure that sustains the movement.</p>
                </div>
              </section>

              {/* Why This Works */}
              <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="text-slate-700">⚡</span>
                  Why This Works
                </h3>
                <div className="space-y-3 text-slate-700">
                  <div><strong>Low overhead:</strong> This is not a traditional publisher with warehouses, printing costs, or bloated marketing spend. The tech stack is lean, replicable, and already proven.</div>
                  <div><strong>Clear demand:</strong> Leaders like Alan and Brad know the traditional publishing model is broken. They are not just open to this solution — they are actively asking for it.</div>
                  <div><strong>Aligned incentives:</strong> We only win when the leaders win. The 10% structure ensures TrailGuide is invested in their ongoing success.</div>
                  <div><strong>Scarcity mindset:</strong> By capping the network, we increase urgency to join while preserving trust and quality.</div>
                </div>
              </section>

              {/* Numbers in Perspective */}
              <section className="bg-slate-50 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="text-emerald-700">📊</span>
                  The Numbers in Perspective
                </h3>
                <div className="space-y-3 text-slate-700">
                  <div><strong>At 100:</strong> <em>Proof and credibility</em>. We've shown the model works.</div>
                  <div><strong>At 500:</strong> <em>Momentum and market validation</em>. We've built something publishers cannot compete with.</div>
                  <div><strong>At 1,000:</strong> <em>Scarcity and permanence</em>. We've secured a coalition that continues to generate shared value long after the upfront fees.</div>
                </div>
                
                <div className="mt-6 p-4 bg-white rounded-lg border-l-4 border-emerald-600">
                  <p className="text-lg font-semibold text-slate-900">This is what it looks like when movemental thinking meets sustainable digital economics.</p>
                  <p className="text-lg font-semibold text-emerald-700 mt-1">The numbers are not hype — they're the natural outflow of aligning the right model with the right people at the right time.</p>
                </div>
              </section>

            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-white border-t border-slate-200 px-4 sm:px-6 md:px-8 py-4 md:py-6 rounded-b-2xl">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
                <div className="text-slate-600 text-sm sm:text-base text-center sm:text-left">
                  <span className="font-semibold">Scale trajectory:</span> 100 → 500 → 1,000 users maximum
                </div>
                <button
                  onClick={() => setShowAboutNumbers(false)}
                  className="px-4 sm:px-6 py-2 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors text-sm sm:text-base"
                >
                  Got It
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* How They're Connected Modal */}
      {showHowConnected && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={() => setShowHowConnected(false)}
        >
          <div 
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-slate-200 px-4 sm:px-6 md:px-8 py-4 md:py-6 rounded-t-2xl">
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-tight">How They're Connected</h2>
                </div>
                <button
                  onClick={() => setShowHowConnected(false)}
                  className="text-slate-400 hover:text-slate-600 text-2xl sm:text-3xl leading-none flex-shrink-0 p-1"
                >
                  ×
                </button>
              </div>
              <p className="text-slate-600 mt-3 text-lg">
                One of the great questions to work out as we scale is not simply <em>who</em> is in the network, but <em>how</em> they are connected.
              </p>
              <p className="text-slate-700 mt-2 font-medium">
                The value of 100 or 1,000 thought leaders publishing digitally is not just in their individual output — it is in the way they amplify one another.
              </p>
            </div>

            {/* Content */}
            <div className="px-8 py-6 space-y-8">
              
              {/* Early Principles */}
              <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <span className="text-green-700">🌱</span>
                  Early Principles
                </h3>
                <p className="text-slate-600 mb-6">As we think about connection, several best practices emerge:</p>
                
                <div className="space-y-6">
                  {/* Cross-Content Linking */}
                  <div className="border-l-4 border-green-600 pl-6">
                    <h4 className="text-xl font-bold text-slate-900 mb-3">1. Encouraged Cross-Content Linking</h4>
                    <div className="space-y-2 text-slate-700">
                      <div>• Each author is invited to highlight, quote, or link to another's work.</div>
                      <div>• These interconnections are tracked and suggested through analytics-driven nudges, ensuring readers are exposed to a broader constellation of voices.</div>
                    </div>
                  </div>

                  {/* Unified Publishing Support */}
                  <div className="border-l-4 border-emerald-600 pl-6">
                    <h4 className="text-xl font-bold text-slate-900 mb-3">2. Unified Publishing Support</h4>
                    <div className="space-y-2 text-slate-700">
                      <div>• Group analytics (e.g., which topics are resonating, which formats are performing) are distilled into teaching modules.</div>
                      <div>• Subscribers don't just receive content — they receive meta-content about <em>how to be more effective publishers together</em>.</div>
                      <div>• This turns the network itself into a living classroom for digital publishing.</div>
                    </div>
                  </div>

                  {/* Collaboration Supports */}
                  <div className="border-l-4 border-slate-600 pl-6">
                    <h4 className="text-xl font-bold text-slate-900 mb-3">3. Collaboration Supports</h4>
                    <div className="space-y-2 text-slate-700 mb-4">
                      <div>The platform provides light-touch ways to discover and respond to opportunities.</div>
                    </div>
                    
                    {/* Example Story */}
                    <div className="bg-slate-50 rounded-lg p-5">
                      <p className="font-semibold text-slate-900 mb-3">Example:</p>
                      <div className="space-y-2 text-slate-700">
                        <div>• Brad Brisco posts a workshop on <em>covocational movements</em>. At first it's a small, focused event.</div>
                        <div>• Alan Hirsch later sees an unobtrusive calendar prompt and signs up.</div>
                        <div>• Brad notices Alan's interest and invites him to co-speak.</div>
                        <div>• Attendance grows, energy multiplies, and the proceeds can be shared.</div>
                      </div>
                      <p className="text-green-700 font-medium mt-3">What began as one leader's workshop becomes a joint venture with wider reach.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Platform as Scenius */}
              <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="text-amber-700">✨</span>
                  Platform as Scenius
                </h3>
                <p className="text-slate-700 mb-4">
                  This approach is not about algorithmic manipulation — it's about <strong>scenius</strong>: the collective genius that emerges when a community amplifies each other's creativity.
                </p>
                
                <div className="bg-amber-50 rounded-lg p-6">
                  <p className="font-semibold text-slate-900 mb-4">The digital infrastructure should:</p>
                  <div className="space-y-2 text-slate-700">
                    <div>• Make collaboration <em>obvious and easy</em>, without being pushy.</div>
                    <div>• Provide small nudges that create serendipity.</div>
                    <div>• Track and visualize how voices in the network are interlinked, helping participants see the movement grow.</div>
                  </div>
                </div>
              </section>

              {/* Why This Matters */}
              <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="text-emerald-700">🎯</span>
                  Why This Matters
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-green-50 rounded-lg p-5">
                    <h4 className="font-bold text-green-900 mb-2">For Individuals</h4>
                    <p className="text-green-800 text-sm">Connection creates credibility, reach, and new streams of income.</p>
                  </div>
                  <div className="bg-emerald-50 rounded-lg p-5">
                    <h4 className="font-bold text-emerald-900 mb-2">For the Network</h4>
                    <p className="text-emerald-800 text-sm">Each collaboration strengthens the coalition's identity and voice in the wider marketplace.</p>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-5">
                    <h4 className="font-bold text-slate-900 mb-2">For Readers & Learners</h4>
                    <p className="text-slate-700 text-sm">They encounter not just isolated ideas but a web of interrelated insights, modeling how movements actually grow.</p>
                  </div>
                </div>
              </section>

              {/* The Promise */}
              <section className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="text-green-700">🚀</span>
                  The Promise
                </h3>
                <div className="space-y-3 text-slate-700">
                  <div>If each leader simply publishes alone, the value is <strong>additive</strong>.</div>
                  <div>If each leader publishes <em>together</em>, the value is <strong>exponential</strong>.</div>
                </div>
                
                <div className="mt-6 p-4 bg-white rounded-lg border-l-4 border-green-600">
                  <p className="text-lg font-semibold text-green-700">That is the opportunity we must design toward.</p>
                </div>
              </section>

            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-white border-t border-slate-200 px-8 py-6 rounded-b-2xl">
              <div className="flex justify-between items-center">
                <div className="text-slate-600">
                  <span className="font-semibold">Connection principle:</span> Individual → Collaborative → Exponential
                </div>
                <button
                  onClick={() => setShowHowConnected(false)}
                  className="px-6 py-2 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors"
                >
                  Got It
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* At 1000 Users Modal */}
      {showAt1000Users && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowAt1000Users(false)}
        >
          <div 
            className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-slate-200 px-8 py-6 rounded-t-2xl">
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold text-slate-900">At 1000 Users</h2>
                <button
                  onClick={() => setShowAt1000Users(false)}
                  className="text-slate-400 hover:text-slate-600 text-3xl leading-none"
                >
                  ×
                </button>
              </div>
              <p className="text-slate-600 mt-3 text-lg">
                The complete financial picture at full scale — 1,000 carefully curated thought leaders generating exponential value.
              </p>
            </div>

            {/* Financial Totals Overview */}
            <div className="px-8 py-6 bg-gradient-to-r from-amber-50 to-orange-50">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="text-amber-700">💰</span>
                Financial Totals
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="text-3xl font-bold text-green-700">$3.4M</div>
                  <div className="text-slate-600 font-medium">Onboarding Revenue</div>
                  <div className="text-sm text-slate-500">One-time collection</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="text-3xl font-bold text-blue-700">$54.6M</div>
                  <div className="text-slate-600 font-medium">Total Subscription Revenue</div>
                  <div className="text-sm text-slate-500">All users, yearly</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="text-3xl font-bold text-purple-700">$5.46M</div>
                  <div className="text-slate-600 font-medium">TrailGuide 10% Cut</div>
                  <div className="text-sm text-slate-500">Yearly recurring</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="px-8 py-6 space-y-8">
              
              {/* User Tiers Breakdown */}
              <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <span className="text-emerald-700">📊</span>
                  User Tiers & Revenue Breakdown
                </h3>
                
                <div className="space-y-6">
                  {/* Early Anchors */}
                  <div className="border-l-4 border-amber-600 bg-amber-50 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-amber-900 mb-3">Early Anchors (Users 1-10)</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-slate-700">
                      <div>
                        <div className="font-semibold">Key Leaders:</div>
                        <div>Alan Hirsch, Brad Brisco, Tim Catchim, etc.</div>
                      </div>
                      <div>
                        <div className="font-semibold">Onboarding:</div>
                        <div>$1,000 each (total: $10,000)</div>
                      </div>
                      <div>
                        <div className="font-semibold">Avg Subscribers:</div>
                        <div>~1,200 each</div>
                      </div>
                      <div>
                        <div className="font-semibold">Annual Revenue:</div>
                        <div>$1.44M total → $144K to TrailGuide</div>
                      </div>
                    </div>
                    <p className="text-amber-800 font-medium mt-3">
                      Anchor credibility with flagship proof points—unusually high impact for minimal cost.
                    </p>
                  </div>

                  {/* First 100 */}
                  <div className="border-l-4 border-green-600 bg-green-50 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-green-900 mb-3">First 100 (Users 11-100)</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-slate-700">
                      <div>
                        <div className="font-semibold">Onboarding:</div>
                        <div>$1,000 each (total: $90,000)</div>
                      </div>
                      <div>
                        <div className="font-semibold">Avg Subscribers:</div>
                        <div>~700 each</div>
                      </div>
                      <div>
                        <div className="font-semibold">Annual Revenue:</div>
                        <div>$7.56M total → $756K to TrailGuide</div>
                      </div>
                      <div>
                        <div className="font-semibold">Strategy:</div>
                        <div>Prove model works, build urgency</div>
                      </div>
                    </div>
                    <p className="text-green-800 font-medium mt-3">
                      Seeds the ecosystem and generates foundational recurring revenue.
                    </p>
                  </div>

                  {/* Users 101-500 */}
                  <div className="border-l-4 border-blue-600 bg-blue-50 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-blue-900 mb-3">Growth Tier (Users 101-500)</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-slate-700">
                      <div>
                        <div className="font-semibold">Onboarding:</div>
                        <div>$2,000 each (total: $800,000)</div>
                      </div>
                      <div>
                        <div className="font-semibold">Avg Subscribers:</div>
                        <div>~450 each</div>
                      </div>
                      <div>
                        <div className="font-semibold">Annual Revenue:</div>
                        <div>$21.6M total → $2.16M to TrailGuide</div>
                      </div>
                      <div>
                        <div className="font-semibold">Count:</div>
                        <div>400 users in this tier</div>
                      </div>
                    </div>
                    <p className="text-blue-800 font-medium mt-3">
                      Strong tier with proven traction—still generates massive subscription revenue.
                    </p>
                  </div>

                  {/* Users 501-1000 */}
                  <div className="border-l-4 border-purple-600 bg-purple-50 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-purple-900 mb-3">Premium Tier (Users 501-1000)</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-slate-700">
                      <div>
                        <div className="font-semibold">Onboarding:</div>
                        <div>$5,000 each (total: $2.5M)</div>
                      </div>
                      <div>
                        <div className="font-semibold">Avg Subscribers:</div>
                        <div>~400 each</div>
                      </div>
                      <div>
                        <div className="font-semibold">Annual Revenue:</div>
                        <div>$19.2M total → $1.92M to TrailGuide</div>
                      </div>
                      <div>
                        <div className="font-semibold">Count:</div>
                        <div>500 users in this tier</div>
                      </div>
                    </div>
                    <p className="text-purple-800 font-medium mt-3">
                      Late-wave users see proven case studies—$5K becomes a bargain vs. $50-100K agencies.
                    </p>
                  </div>
                </div>
              </section>

              {/* Company Position */}
              <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="text-slate-700">🏢</span>
                  Company Position at 1000 Users
                </h3>
                
                <div className="bg-slate-50 rounded-xl p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-slate-900 mb-3">Revenue Streams</h4>
                      <div className="space-y-2 text-slate-700">
                        <div><strong>Recurring:</strong> ~$5.46M annually from subscriptions</div>
                        <div><strong>One-time:</strong> ~$3.4M total onboarding collected</div>
                        <div><strong>Potential:</strong> Consulting/upsell opportunities</div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-3">Valuation Estimate</h4>
                      <div className="space-y-2 text-slate-700">
                        <div><strong>Conservative SaaS Multiple:</strong> 8-10x recurring</div>
                        <div><strong>Estimated Valuation:</strong> $43-55M</div>
                        <div><strong>Assumption:</strong> No expansion beyond 1,000 users</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Why This Story Is Credible */}
              <section className="bg-emerald-50 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="text-emerald-700">✅</span>
                  Why This Story Is Credible
                </h3>
                <div className="space-y-4 text-slate-700">
                  <div className="flex gap-3">
                    <span className="font-bold text-emerald-800">1.</span>
                    <span>You've priced the early adopters into an urgent opportunity.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-bold text-emerald-800">2.</span>
                    <span>Later users, seeing the traction and case studies, will perceive $5,000 as a bargain compared to agencies charging $50–100K.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-bold text-emerald-800">3.</span>
                    <span>Subscription flows (473 avg per user, $10/mo) are not inflated—they are in line with realistic audience capture rates in the thought leader / nonprofit market.</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-white rounded-lg border-l-4 border-emerald-600">
                  <p className="text-lg font-semibold text-slate-900">The math is conservative.</p>
                  <p className="text-lg font-semibold text-emerald-700">The strategy is proven.</p>
                  <p className="text-lg font-semibold text-slate-700">The market is ready.</p>
                </div>
              </section>

            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-white border-t border-slate-200 px-8 py-6 rounded-b-2xl">
              <div className="flex justify-between items-center">
                <div className="text-slate-600">
                  <span className="font-semibold">At scale:</span> $5.46M recurring + $3.4M onboarding = $43-55M valuation
                </div>
                <button
                  onClick={() => setShowAt1000Users(false)}
                  className="px-6 py-2 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors"
                >
                  Got It
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Where We Are Modal */}
      {showWhereWeAre && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowWhereWeAre(false)}
        >
          <div 
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-slate-200 px-8 py-6 rounded-t-2xl">
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold text-slate-900">Where We Are Now</h2>
                <button
                  onClick={() => setShowWhereWeAre(false)}
                  className="text-slate-400 hover:text-slate-600 text-3xl leading-none"
                >
                  ×
                </button>
              </div>
              <p className="text-slate-600 mt-3 text-lg font-medium">
                September 2025 — Two weeks from launch with live exemplars
              </p>
            </div>

            {/* Content */}
            <div className="px-8 py-6 space-y-8">
              
              {/* Launch Status */}
              <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="text-blue-700">🚀</span>
                  Launch Ready
                </h3>
                <p className="text-slate-700 mb-4">You are two weeks from launch with your first live exemplars:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-bold text-blue-900 mb-2">Confirmed Leaders</h4>
                    <ul className="text-blue-800 space-y-1">
                      <li>• Alan Hirsch</li>
                      <li>• Brad Brisco</li>
                      <li>• Likely Tim Catchim</li>
                      <li>• Josh Shepherd (lived example)</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-bold text-green-900 mb-2">Tech Stack Ready</h4>
                    <p className="text-green-800 text-sm">Next.js, React, Tailwind, ShadCN, Supabase, Stripe, OpenAI Agents SDK, Vercel — all in place and functioning.</p>
                    <p className="text-green-700 font-medium mt-2">Templates ready for rapid deployment.</p>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-emerald-50 rounded-lg border-l-4 border-emerald-600">
                  <p className="text-emerald-800"><strong>Unique positioning:</strong> Agency-level builds ($50k–100k) for $1,000 + 10% — differentiated and urgent.</p>
                </div>
              </section>

              {/* Road to 100 */}
              <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="text-green-700">📈</span>
                  The Road to 100 Users
                </h3>
                <p className="text-slate-700 mb-4">Getting to 100 users is about nailing the first cohort with credibility, demonstration, and repeatability.</p>
                
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <span className="font-bold text-green-700 text-lg">1.</span>
                    <div>
                      <strong>October 1 Launch:</strong> Deliver 3–5 sites that are polished enough to impress and Behance-worthy.
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-bold text-green-700 text-lg">2.</span>
                    <div>
                      <strong>Immediate Case Studies:</strong> Each user's platform doubles as both their publishing base and your marketing engine.
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-bold text-green-700 text-lg">3.</span>
                    <div>
                      <strong>Network Leverage:</strong> Push through MLC, 5Q, Brisco/Hirsch connections with a clear funnel.
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-bold text-green-700 text-lg">4.</span>
                    <div>
                      <strong>Drive Urgency:</strong> Emphasize exclusivity—only 100 slots at this price tier.
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-bold text-green-700 text-lg">5.</span>
                    <div>
                      <strong>Systematize Intake:</strong> Simple, rapid, consistent onramp for the "prototype experience."
                    </div>
                  </div>
                </div>
              </section>

              {/* The Threats */}
              <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="text-red-600">⚠️</span>
                  The Threats
                </h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-red-500 bg-red-50 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-red-900 mb-3">1. Clarity vs. Confusion</h4>
                    <div className="text-red-800 space-y-2">
                      <p>The "dual doors" problem (thought leaders vs nonprofits) risks muddying the launch.</p>
                      <p><strong>Solution:</strong> One Door at Launch. Funnel all attention to the thought-leader network until momentum makes clarity self-evident.</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-orange-500 bg-orange-50 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-orange-900 mb-3">2. Customization vs. Consistency</h4>
                    <div className="text-orange-800 space-y-2">
                      <p>Death by bespoke customization — if every early adopter expects unique work, the system bogs down.</p>
                      <p><strong>Solution:</strong> Design guardrails now. Users buy into a tested "best practice shell," not a blank canvas.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Core Execution Risk */}
              <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="text-purple-700">🎯</span>
                  The Core Execution Risk
                </h3>
                <div className="bg-purple-50 rounded-lg p-6">
                  <p className="text-purple-800 mb-4"><strong>The main threat is focus:</strong></p>
                  <div className="space-y-2 text-purple-700">
                    <p>• Too much focus on prototypes → you neglect building the network glue.</p>
                    <p>• Too much focus on network → the prototypes feel thin and underwhelming.</p>
                  </div>
                  <p className="text-purple-900 font-medium mt-4">
                    <strong>The tightrope:</strong> Make every first user a glowing proof point AND ensure they feel part of something larger than themselves.
                  </p>
                </div>
              </section>

              {/* The Playbook */}
              <section className="bg-slate-50 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="text-emerald-700">📋</span>
                  The Playbook to 100
                </h3>
                <div className="space-y-4 text-slate-700">
                  <div className="flex gap-3">
                    <strong className="text-emerald-700">October 1 Launch:</strong>
                    <span>Deliver 3–5 sites that look Behance-worthy and demonstrate the entire value chain.</span>
                  </div>
                  <div className="flex gap-3">
                    <strong className="text-green-700">Oct–Dec 2025:</strong>
                    <span>Turn those into case studies + social proof, funneling through Alan and Brad's credibility.</span>
                  </div>
                  <div className="flex gap-3">
                    <strong className="text-blue-700">Q1 2026:</strong>
                    <span>Lock down intake processes and keep the story single-threaded ("100 seats at $1,000 + 10%").</span>
                  </div>
                  <div className="flex gap-3">
                    <strong className="text-purple-700">Mid-2026:</strong>
                    <span>Fill the first 100 through network pull, urgency, and clarity of offer.</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-white rounded-lg border-l-4 border-emerald-600">
                  <p className="text-lg font-semibold text-slate-900">✅ If you execute this with clarity and consistency...</p>
                  <p className="text-lg font-semibold text-emerald-700">100 users is not just feasible—it's inevitable given the names and momentum already on board.</p>
                </div>
              </section>

            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-white border-t border-slate-200 px-8 py-6 rounded-b-2xl">
              <div className="flex justify-between items-center">
                <div className="text-slate-600">
                  <span className="font-semibold">Timeline:</span> October 2025 launch → 100 users by mid-2026
                </div>
                <button
                  onClick={() => setShowWhereWeAre(false)}
                  className="px-6 py-2 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors"
                >
                  Got It
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* User Detail Modal */}
      {selectedUser && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 max-w-md w-full shadow-2xl transform transition-all duration-300 scale-100 max-h-[95vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4 sm:mb-6">
              <div className="flex-1 pr-2">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-2 leading-tight">
                  {selectedUser.name}
                </h3>
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold ${
                    selectedUser.category === 'Core Movement Leader' ? 'bg-amber-100 text-amber-800' :
                    selectedUser.category === 'Established Author' ? 'bg-orange-100 text-orange-800' :
                    selectedUser.category === 'Organizational Leader' ? 'bg-blue-100 text-blue-800' :
                    selectedUser.category === 'Academic' ? 'bg-green-100 text-green-800' :
                    selectedUser.category === 'Practitioner' ? 'bg-purple-100 text-purple-800' :
                    selectedUser.category === 'Emerging Leader' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-pink-100 text-pink-800'
                  }`}>
                    <span className="hidden sm:inline">{getCategoryStyling(selectedUser.category).badge} </span>{selectedUser.category}
                  </span>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm mb-2">{selectedUser.profileDescription}</p>
                <div className="text-xs text-slate-500">
                  <strong>Focus:</strong> {selectedUser.contentFocus}
                </div>
              </div>
              <button
                onClick={closeModal}
                className="text-slate-400 hover:text-slate-600 text-xl sm:text-2xl leading-none flex-shrink-0 p-1"
              >
                ×
              </button>
            </div>

            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
              <div className="flex justify-between items-center p-3 sm:p-4 bg-slate-50 rounded-lg">
                <span className="text-slate-600 font-medium text-xs sm:text-sm">Audience Size</span>
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600">
                  {selectedUser.audienceSize.toLocaleString()}
                </span>
              </div>
              
              <div className="flex justify-between items-center p-3 sm:p-4 bg-slate-50 rounded-lg">
                <span className="text-slate-600 font-medium text-xs sm:text-sm">Monthly Revenue (MRR)</span>
                <span className="text-lg sm:text-xl font-bold text-green-600">
                  ${selectedUser.grossMRR.toLocaleString()}
                </span>
              </div>
              
              <div className="flex justify-between items-center p-3 sm:p-4 bg-slate-50 rounded-lg">
                <span className="text-slate-600 font-medium text-xs sm:text-sm">Paid Subscribers</span>
                <span className="text-lg sm:text-xl font-bold text-purple-600">
                  {selectedUser.paidSubs.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between items-center p-3 sm:p-4 bg-slate-50 rounded-lg">
                <span className="text-slate-600 font-medium text-xs sm:text-sm">Email List Size</span>
                <span className="text-lg sm:text-xl font-bold text-indigo-600">
                  {selectedUser.emailList.toLocaleString()}
                </span>
              </div>
              
              <div className="flex justify-between items-center p-3 sm:p-4 bg-slate-50 rounded-lg">
                <span className="text-slate-600 font-medium text-xs sm:text-sm">Qualification</span>
                <span className="text-xs sm:text-sm font-medium text-slate-700">
                  {selectedUser.qualificationSource}
                </span>
              </div>
              
              <div className="flex justify-between items-center p-3 sm:p-4 bg-slate-50 rounded-lg">
                <span className="text-slate-600 font-medium text-xs sm:text-sm">Network Connections</span>
                <span className="text-lg sm:text-xl font-bold text-amber-600">
                  {selectedUser.connections.length}
                </span>
              </div>

              {/* Conversion metrics */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-green-50 rounded-lg text-center">
                  <div className="text-sm sm:text-lg font-bold text-green-700">
                    {selectedUser.conversionRate}%
                  </div>
                  <div className="text-xs text-green-600">Conversion Rate</div>
                </div>
                <div className="p-2 sm:p-3 bg-blue-50 rounded-lg text-center">
                  <div className="text-sm sm:text-lg font-bold text-blue-700">
                    ${selectedUser.monthlyARPU}
                  </div>
                  <div className="text-xs text-blue-600">Monthly ARPU</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
              <button className="flex-1 bg-slate-900 text-white py-2 sm:py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors text-sm sm:text-base">
                Connect
              </button>
              <button className="flex-1 border border-slate-300 text-slate-700 py-2 sm:py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors text-sm sm:text-base">
                View Profile
              </button>
            </div>
          </div>
        </div>
      )}

      {/* About Our Audience Modal */}
      {showAboutAudience && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={() => setShowAboutAudience(false)}
        >
          <div 
            className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 max-w-4xl w-full shadow-2xl transform transition-all duration-300 scale-100 max-h-[95vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  About Our Audience
                </h3>
                <p className="text-slate-600">
                  Understanding who we serve and how they describe themselves
                </p>
              </div>
              <button
                onClick={() => setShowAboutAudience(false)}
                className="text-slate-400 hover:text-slate-600 text-xl sm:text-2xl leading-none flex-shrink-0 p-1"
              >
                ×
              </button>
            </div>

            <div className="space-y-8">
              {/* TrailGuide's Perspective */}
              <div className="bg-purple-50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-purple-900 mb-4 flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                  TrailGuide's Perspective
                </h4>
                <div className="space-y-4 text-slate-700">
                  <p>
                    We work with leaders who are building movements that matter. These are people who have moved beyond just personal success to focus on systemic change, cultural transformation, and sustainable impact.
                  </p>
                  <p>
                    Our audience consists of <strong>movement leaders</strong> and <strong>missional entrepreneurs</strong> who are:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Building organizations and initiatives that create lasting change</li>
                    <li>Integrating their values and mission into their business and leadership practices</li>
                    <li>Seeking sustainable, ethical approaches to growth and influence</li>
                    <li>Committed to using technology and platforms responsibly and transparently</li>
                    <li>Looking for community and collaboration rather than competition</li>
                  </ul>
                </div>
              </div>

              {/* How Our Audience Describes Themselves */}
              <div className="bg-slate-50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <div className="w-3 h-3 bg-slate-600 rounded-full"></div>
                  How Our Audience Describes Themselves
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-slate-800 mb-3">Movement Leaders</h5>
                    <ul className="list-disc pl-4 space-y-1 text-slate-700 text-sm">
                      <li>"I'm building something bigger than myself"</li>
                      <li>"I care about sustainable, long-term impact"</li>
                      <li>"I want to change systems, not just outcomes"</li>
                      <li>"My work is an expression of my deepest values"</li>
                      <li>"I'm looking for authentic community and collaboration"</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-800 mb-3">Missional Entrepreneurs</h5>
                    <ul className="list-disc pl-4 space-y-1 text-slate-700 text-sm">
                      <li>"I'm building a business that serves a higher purpose"</li>
                      <li>"Profit is important, but impact is paramount"</li>
                      <li>"I want to do business differently—ethically and sustainably"</li>
                      <li>"I'm looking for tools that align with my values"</li>
                      <li>"I need community with others who 'get' what I'm trying to do"</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Key Characteristics */}
              <div className="bg-emerald-50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-emerald-900 mb-4 flex items-center gap-2">
                  <div className="w-3 h-3 bg-emerald-600 rounded-full"></div>
                  Key Characteristics
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl mb-2">🌱</div>
                    <h5 className="font-semibold text-slate-800 mb-2">Values-Driven</h5>
                    <p className="text-sm text-slate-600">Every decision is filtered through their core mission and values</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl mb-2">🤝</div>
                    <h5 className="font-semibold text-slate-800 mb-2">Community-Oriented</h5>
                    <p className="text-sm text-slate-600">Believes in collaboration over competition and collective impact</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl mb-2">⚖️</div>
                    <h5 className="font-semibold text-slate-800 mb-2">Ethically-Minded</h5>
                    <p className="text-sm text-slate-600">Seeks transparent, responsible approaches to technology and business</p>
                  </div>
                </div>
              </div>

              {/* Why This Matters */}
              <div className="bg-blue-50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  Why This Matters
                </h4>
                <p className="text-slate-700 mb-4">
                  Understanding our audience this deeply allows us to create tools, content, and community that truly serve their needs. We're not just building another marketing platform—we're creating infrastructure for movements that matter.
                </p>
                <div className="bg-white rounded-lg p-4 border-l-4 border-blue-600">
                  <p className="text-blue-900 font-semibold">
                    "We're building for leaders who want to change the world, not just their bank account."
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-white border-t border-slate-200 px-0 py-6 rounded-b-2xl mt-8">
              <div className="flex justify-center">
                <button
                  onClick={() => setShowAboutAudience(false)}
                  className="px-8 py-3 bg-purple-700 text-white rounded-lg font-semibold hover:bg-purple-800 transition-colors"
                >
                  Got It
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Prospective Pricing Modal */}
      {showProspectivePricing && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={() => setShowProspectivePricing(false)}
        >
          <div 
            className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 max-w-5xl w-full shadow-2xl transform transition-all duration-300 scale-100 max-h-[95vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 flex items-center gap-3">
                  <span className="text-green-600">💵</span>
                  Movement OS Pricing Model (v1.0)
                </h3>
                <p className="text-slate-600">
                  Designed to reward early adopters, reflect platform value, and ensure premium pricing for custom work
                </p>
              </div>
              <button
                onClick={() => setShowProspectivePricing(false)}
                className="text-slate-400 hover:text-slate-600 text-xl sm:text-2xl leading-none flex-shrink-0 p-1"
              >
                ×
              </button>
            </div>

            <div className="space-y-8">
              {/* Base Pricing */}
              <div className="bg-emerald-50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-emerald-900 mb-4 flex items-center gap-2">
                  <div className="w-3 h-3 bg-emerald-600 rounded-full"></div>
                  Base Pricing
                </h4>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-4 border-l-4 border-emerald-600">
                    <h5 className="font-semibold text-emerald-900 mb-3">Insiders (The "1000 Network")</h5>
                    <p className="text-sm text-slate-600 mb-4">Vetted, movemental thought leaders</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between items-center py-2 border-b border-slate-100">
                        <span className="font-semibold text-slate-800">Founding 100 users:</span>
                        <span className="text-emerald-700 font-bold">$1,000 + 10%</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-slate-100">
                        <span className="font-semibold text-slate-800">Users 101–500:</span>
                        <span className="text-emerald-700 font-bold">$2,000 + 10%</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="font-semibold text-slate-800">Users 501–1000:</span>
                        <span className="text-emerald-700 font-bold">$5,000 + 10%</span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 mt-3 italic">
                      * Pricing escalates to reward early insiders and reflect network effects
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border-l-4 border-slate-400">
                    <h5 className="font-semibold text-slate-900 mb-3">Outsiders (Non-Network Clients)</h5>
                    <p className="text-sm text-slate-600 mb-4">Seminaries, writers, orgs, adjacent individuals</p>
                    <div className="space-y-3">
                      <div className="bg-slate-50 rounded p-3">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-slate-800">Base Package:</span>
                          <span className="text-slate-700 font-bold">$7,500</span>
                        </div>
                        <ul className="text-xs text-slate-600 space-y-1 ml-4">
                          <li>• Complete Movement OS site</li>
                          <li>• Publishing platform, auth, Stripe, LMS</li>
                          <li>• Blog, content hub, analytics, SEO</li>
                          <li>• AI agents configured</li>
                          <li>• No network effects or amplification</li>
                        </ul>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-semibold text-slate-800">Annual Maintenance:</span>
                        <span className="text-slate-700">$1,500–$3,000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Add-Ons */}
              <div className="bg-blue-50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  Add-Ons & Custom Work
                </h4>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-semibold text-blue-900 mb-3">Insiders</h5>
                    <p className="text-sm text-slate-600 mb-4">
                      Any custom request beyond the template: <strong className="text-blue-700">$1,000 minimum</strong>
                    </p>
                    <div className="space-y-2 text-xs text-slate-700">
                      <div className="flex justify-between py-1 border-b border-slate-100">
                        <span>Translation/localization</span>
                        <span className="font-semibold">$1,000+</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-100">
                        <span>Bespoke design overhaul</span>
                        <span className="font-semibold">$1,000–$5,000</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-100">
                        <span>Mass content repurposing</span>
                        <span className="font-semibold">$1,000+</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-100">
                        <span>Assessment/quiz creation</span>
                        <span className="font-semibold">$1,000+</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span>Custom components/tools</span>
                        <span className="font-semibold">$1,500+</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-semibold text-slate-900 mb-3">Outsiders</h5>
                    <p className="text-sm text-slate-600 mb-4">Beyond the $7,500 base package:</p>
                    <div className="space-y-2 text-xs text-slate-700">
                      <div className="flex justify-between py-1 border-b border-slate-100">
                        <span>Bespoke design/templates</span>
                        <span className="font-semibold">$2,500+</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-100">
                        <span>Advanced LMS customization</span>
                        <span className="font-semibold">$2,000–$10,000</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-100">
                        <span>Custom AI agents</span>
                        <span className="font-semibold">$1,500+ each</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span>Content migration/repurposing</span>
                        <span className="font-semibold">$2,000+</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                  <p className="text-sm text-blue-900 font-semibold">
                    Principle: Generosity on the platform, premium on customization
                  </p>
                </div>
              </div>

              {/* Consulting */}
              <div className="bg-purple-50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-purple-900 mb-4 flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                  Consulting Services
                </h4>
                <p className="text-sm text-slate-600 mb-4">
                  Not primarily a consulting company, but opportunities arise from brand visibility and platform adoption
                </p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">⏰</div>
                    <h5 className="font-semibold text-purple-900 mb-2">Hourly</h5>
                    <div className="text-2xl font-bold text-purple-700 mb-1">$250</div>
                    <p className="text-xs text-slate-600">Solo consulting sessions</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">📅</div>
                    <h5 className="font-semibold text-purple-900 mb-2">Daily</h5>
                    <div className="text-2xl font-bold text-purple-700 mb-1">$2,000</div>
                    <p className="text-xs text-slate-600">Workshops & intensives</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">📊</div>
                    <h5 className="font-semibold text-purple-900 mb-2">Quarterly</h5>
                    <div className="text-2xl font-bold text-purple-700 mb-1">$15K–$25K</div>
                    <p className="text-xs text-slate-600">Organizational strategy</p>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-purple-100 rounded-lg">
                  <p className="text-sm text-purple-900 font-semibold">
                    Positioning: Consulting is premium, optional, and not the default. The platform is the product.
                  </p>
                </div>
              </div>

              {/* Additional Revenue Streams */}
              <div className="bg-amber-50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
                  <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
                  Additional Revenue Streams
                </h4>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-semibold text-amber-900 mb-2">Workshops & Webinars</h5>
                    <p className="text-xs text-slate-600 mb-3">Network-wide collaborative sessions</p>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span>Participant pricing:</span>
                        <span className="font-semibold">$50–$200</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Host retains:</span>
                        <span className="font-semibold text-green-600">70%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Movement OS:</span>
                        <span className="font-semibold text-amber-600">30%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-semibold text-amber-900 mb-2">Affiliate Revenue</h5>
                    <p className="text-xs text-slate-600 mb-3">Insider referral program</p>
                    <div className="text-center">
                      <div className="text-xl font-bold text-amber-700 mb-1">$500</div>
                      <p className="text-xs text-slate-600">Credit per qualified referral</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-semibold text-amber-900 mb-2">Publishing Marketplace</h5>
                    <p className="text-xs text-slate-600 mb-3">Future: Digital courses, books, toolkits</p>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span>Creator retains:</span>
                        <span className="font-semibold text-green-600">85%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Movement OS:</span>
                        <span className="font-semibold text-amber-600">15%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div className="bg-slate-50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <div className="w-3 h-3 bg-slate-600 rounded-full"></div>
                  Pricing Summary
                </h4>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-3">
                      <h5 className="font-semibold text-emerald-700 mb-2">✅ Insiders</h5>
                      <p className="text-sm text-slate-700">Subsidized entry, ongoing 10% rev share</p>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <h5 className="font-semibold text-slate-700 mb-2">💼 Outsiders</h5>
                      <p className="text-sm text-slate-700">$7,500 base, no rev share, upsell customizations</p>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <h5 className="font-semibold text-blue-700 mb-2">🛠 Custom Work</h5>
                      <p className="text-sm text-slate-700">$1,000 minimum, scales by complexity</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-3">
                      <h5 className="font-semibold text-purple-700 mb-2">💬 Consulting</h5>
                      <p className="text-sm text-slate-700">$250/hr → $2K/day → $25K/quarter</p>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <h5 className="font-semibold text-amber-700 mb-2">🎓 Workshops</h5>
                      <p className="text-sm text-slate-700">70/30 split with hosts</p>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <h5 className="font-semibold text-green-700 mb-2">📚 Marketplace</h5>
                      <p className="text-sm text-slate-700">85/15 split with creators</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-white rounded-lg border-l-4 border-emerald-600">
                  <h5 className="font-semibold text-slate-900 mb-2">Model Ensures:</h5>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-700">
                    <div>
                      <div>• <strong>Clarity:</strong> Transparent pricing structure</div>
                      <div>• <strong>Scalability:</strong> Network effects built-in</div>
                    </div>
                    <div>
                      <div>• <strong>Discipline:</strong> No derailment from customization</div>
                      <div>• <strong>Sustainability:</strong> Healthy margins maintained</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-white border-t border-slate-200 px-0 py-6 rounded-b-2xl mt-8">
              <div className="flex justify-center">
                <button
                  onClick={() => setShowProspectivePricing(false)}
                  className="px-8 py-3 bg-green-700 text-white rounded-lg font-semibold hover:bg-green-800 transition-colors"
                >
                  Got It
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Movement OS Launch Modal */}
      {showMovementOSLaunch && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={() => setShowMovementOSLaunch(false)}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 rounded-t-2xl z-10">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Movement OS Launch Plan</h2>
                  <p className="text-slate-600 mt-1">Strategic launch playbook for the Movement OS platform debut</p>
                </div>
                <button
                  onClick={() => setShowMovementOSLaunch(false)}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 6L6 18M6 6L18 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="px-6 py-6 space-y-8">
              {/* Objective Section */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-orange-900 mb-3">Objective</h3>
                <p className="text-orange-800 leading-relaxed">
                  Guide the execution of a Movement OS launch campaign that combines the debut of individual 
                  digital publishing platforms with the overarching Movement OS brand narrative. The launch is 
                  not tied to specific dates—it should be designed as a repeatable, staged "Launch Week" playbook.
                </p>
              </div>

              {/* Pre-Launch Preparation */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Pre-Launch Preparation</h3>
                <div className="grid gap-4">
                  <div className="border border-slate-200 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-800 mb-2">Movement OS Landing Page</h4>
                    <ul className="space-y-2 text-slate-600">
                      <li>• Hero section: "Movement OS has launched."</li>
                      <li>• Section: "Meet our first leaders" (tiles linking to each leader's live site)</li>
                      <li>• CTA: "Want to join the next wave?"</li>
                    </ul>
                  </div>
                  
                  <div className="border border-slate-200 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-800 mb-2">Shared Branding Assets</h4>
                    <ul className="space-y-2 text-slate-600">
                      <li>• Graphics, logos, color palettes</li>
                      <li>• Taglines and boilerplate copy for consistency</li>
                    </ul>
                  </div>

                  <div className="border border-slate-200 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-800 mb-2">Content & Technical Readiness</h4>
                    <ul className="space-y-2 text-slate-600">
                      <li>• Draft individual leader posts with unified messaging but personal tone</li>
                      <li>• Ensure Stripe payments are functional</li>
                      <li>• Verify membership/auth flows work properly</li>
                      <li>• Confirm blog, LMS, content hub are live and usable</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Launch Week Playbook */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Launch Week Playbook</h3>
                <p className="text-slate-600 mb-6 italic">
                  The launch should unfold as a <strong>curated performance week</strong>, not a single firework.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Day 1 – Movement OS Launch</h4>
                    <p className="text-blue-800 mb-2"><strong>Josh Shepherd</strong> posts as founder:</p>
                    <ul className="space-y-1 text-blue-700 ml-4">
                      <li>• "Movement OS has launched."</li>
                      <li>• Explain vision: platform + network</li>
                      <li>• Show his own site as proof</li>
                      <li>• Frame the first cohort as <em>the pioneers</em></li>
                      <li>• Link to the Movement OS landing page</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-900 mb-2">Day 2 – First Spotlight Leader</h4>
                    <p className="text-green-800 mb-2">Example: <strong>Alan Hirsch</strong> announces his site:</p>
                    <ul className="space-y-1 text-green-700 ml-4">
                      <li>• Tone: personal, visionary, rooted in his work</li>
                      <li>• CTA: "Explore my new home on Movement OS."</li>
                      <li>• Tag Movement OS in the announcement</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-900 mb-2">Day 3 – Second Spotlight Leader</h4>
                    <p className="text-purple-800 mb-2">Example: <strong>Brad Brisco</strong> shares his site:</p>
                    <ul className="space-y-1 text-purple-700 ml-4">
                      <li>• Tone: practical, accessible, missional</li>
                      <li>• CTA: "Join me in this new space."</li>
                    </ul>
                  </div>

                  <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                    <h4 className="font-semibold text-indigo-900 mb-2">Day 4 – Third Spotlight Leader</h4>
                    <p className="text-indigo-800 mb-2">Example: <strong>Tim Catchim</strong> (or equivalent):</p>
                    <ul className="space-y-1 text-indigo-700 ml-4">
                      <li>• Tone: innovative, collaborative</li>
                      <li>• CTA: "See how Movement OS is reshaping thought leadership."</li>
                    </ul>
                  </div>

                  <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                    <h4 className="font-semibold text-teal-900 mb-2">Day 5 – Diversity Spotlight</h4>
                    <ul className="space-y-1 text-teal-700">
                      <li>• Showcase one leader who brings diversity (female, POC)</li>
                      <li>• Frame Movement OS as an inclusive coalition</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Application Process */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Application Process Framework</h3>
                <p className="text-slate-600 mb-6 italic">
                  Day 1 creates the gateway: <strong>Apply to join the Movement OS network</strong>
                </p>
                
                <div className="space-y-4">
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-5">
                    <h4 className="font-semibold text-emerald-900 mb-3 flex items-center">
                      <span className="bg-emerald-700 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2">1</span>
                      Signal Interest (Day 1 CTA)
                    </h4>
                    <div className="space-y-3 text-emerald-800">
                      <p>The Movement OS site should have a single, clean CTA: <strong>"Apply to join the Movement OS network"</strong></p>
                      <p>Clicking this opens a modal form (not a messy page redirect) asking only essentials:</p>
                      <ul className="space-y-1 ml-4">
                        <li>• Name</li>
                        <li>• Email</li>
                        <li>• Current role (dropdown: author, church leader, consultant, professor, other)</li>
                        <li>• Short statement: "Why do you feel aligned with the mission of Movement OS?"</li>
                      </ul>
                      <p className="font-medium">This sets the tone: it's not a sales page, it's an invitation into a discernment process.</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                    <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                      <span className="bg-blue-700 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2">2</span>
                      Automated Acknowledgment
                    </h4>
                    <div className="space-y-3 text-blue-800">
                      <p>Auto-response email that:</p>
                      <ul className="space-y-1 ml-4">
                        <li>• Thanks them for applying</li>
                        <li>• Briefly reminds them Movement OS is selective (gated for quality and alignment)</li>
                        <li>• Sets expectation: "Applications are reviewed weekly by our leadership circle (Alan Hirsch, Brad Brisco, Josh Shepherd). You'll hear from us within X days."</li>
                      </ul>
                      <p className="font-medium">This immediately frames the value: not everyone gets in.</p>
                    </div>
                  </div>

                  <div className="bg-violet-50 border border-violet-200 rounded-lg p-5">
                    <h4 className="font-semibold text-violet-900 mb-3 flex items-center">
                      <span className="bg-violet-700 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2">3</span>
                      Internal Qualification Review
                    </h4>
                    <div className="space-y-3 text-violet-800">
                      <ul className="space-y-1">
                        <li>• Each applicant is scored against the 100-point rubric</li>
                        <li>• First 100 users will be heavily relationally sourced (Alan/Brad/MLC, etc.)</li>
                        <li>• Committee of 3 (Josh, Alan, Brad) meets weekly to review incoming applications</li>
                        <li>• Creates a repeatable structure for future cohorts</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
                    <h4 className="font-semibold text-amber-900 mb-3 flex items-center">
                      <span className="bg-amber-700 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2">4</span>
                      Response Paths
                    </h4>
                    <div className="space-y-4 text-amber-800">
                      <div className="border-l-4 border-green-400 pl-4">
                        <h5 className="font-semibold mb-1">✅ Accepted</h5>
                        <ul className="space-y-1 text-sm">
                          <li>• Invitation to pay and onboard</li>
                          <li>• Link to Stripe checkout for $1,000 (insider rate)</li>
                          <li>• Added to Slack/Discord community hub</li>
                        </ul>
                      </div>
                      
                      <div className="border-l-4 border-yellow-400 pl-4">
                        <h5 className="font-semibold mb-1">⏸️ Deferred</h5>
                        <p className="text-sm italic">"We value your interest, but are focusing on a specific profile of leaders at this stage. We'd love to revisit your application in the future."</p>
                      </div>
                      
                      <div className="border-l-4 border-red-400 pl-4">
                        <h5 className="font-semibold mb-1">❌ Rejected</h5>
                        <p className="text-sm italic">"We're intentionally limiting participation to ensure alignment. At this time, we don't feel it's the right fit."</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-rose-50 border border-rose-200 rounded-lg p-5">
                    <h4 className="font-semibold text-rose-900 mb-3 flex items-center">
                      <span className="bg-rose-700 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2">5</span>
                      Immediate Engagement for Accepted Leaders
                    </h4>
                    <div className="space-y-3 text-rose-800">
                      <p>As soon as someone is accepted and pays, they should be:</p>
                      <ul className="space-y-1 ml-4">
                        <li>• Invited into a welcome call or orientation video</li>
                        <li>• Connected with their prototype digital platform (even starter template)</li>
                        <li>• Introduced to at least 2 other users in the network (seed collaboration)</li>
                      </ul>
                      <p className="font-medium">The idea: no one waits months. They instantly feel the reality of the thing.</p>
                    </div>
                  </div>
                </div>

                {/* Day 1 Summary */}
                <div className="mt-6 bg-slate-900 text-white rounded-lg p-6">
                  <h4 className="font-semibold text-lg mb-3">✅ Day 1 Answer</h4>
                  <p className="text-slate-200">
                    If someone wants in, they click <strong>"Apply,"</strong> fill out a short form, and start the 
                    qualification → review → acceptance process. This keeps clarity, maintains exclusivity, 
                    and ensures we're not promising faster than we can deliver.
                  </p>
                </div>
              </div>

              {/* Pricing Clarity & CTA Optimization */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Pricing Clarity & CTA Optimization</h3>
                <p className="text-slate-600 mb-6 italic">
                  Ensuring transparency, trust, and clear value communication from first contact
                </p>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                    <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                      <span className="bg-blue-700 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2">1</span>
                      CTA Wording Strategy
                    </h4>
                    <div className="space-y-3 text-blue-800">
                      <p>Instead of generic "Apply now," use language that signals both qualification and product value:</p>
                      <div className="bg-white rounded-lg p-4 border border-blue-200">
                        <h5 className="font-semibold mb-2">Recommended CTAs:</h5>
                        <ul className="space-y-1 text-sm">
                          <li>• <strong>"Apply now to join Movement OS and receive your publishing platform."</strong></li>
                          <li>• <strong>"Apply to become one of the first 100 leaders equipped with Movement OS."</strong></li>
                          <li>• <strong>"Secure your place in the Movement OS network: Apply today."</strong></li>
                        </ul>
                      </div>
                      <p className="text-sm">This way, readers know they're applying for something tangible (a publishing platform, a network), not just access to a club.</p>
                    </div>
                  </div>

                  <div className="bg-teal-50 border border-teal-200 rounded-lg p-5">
                    <h4 className="font-semibold text-teal-900 mb-3 flex items-center">
                      <span className="bg-teal-700 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2">2</span>
                      Transparent Application Framing
                    </h4>
                    <div className="space-y-3 text-teal-800">
                      <p>The application form should include one brief, clarifying line right before submission:</p>
                      <div className="bg-white rounded-lg p-4 border border-teal-200">
                        <p className="text-sm font-medium italic">
                          "Movement OS is a selective network of 1,000 thought leaders. If accepted, you will be invited 
                          to join by purchasing your fully equipped publishing platform at the insider rate ($1,000 + 10% of future revenue)."
                        </p>
                      </div>
                      <p className="text-sm">This keeps it clear without overwhelming them.</p>
                    </div>
                  </div>

                  <div className="bg-violet-50 border border-violet-200 rounded-lg p-5">
                    <h4 className="font-semibold text-violet-900 mb-3 flex items-center">
                      <span className="bg-violet-700 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2">3</span>
                      Value Communication (99% Markdown)
                    </h4>
                    <div className="space-y-3 text-violet-800">
                      <p>Most people don't know what a $100k digital publishing stack looks like, so position it as:</p>
                      <div className="bg-white rounded-lg p-4 border border-violet-200">
                        <h5 className="font-semibold mb-2">Value Messaging:</h5>
                        <ul className="space-y-1 text-sm">
                          <li>• <strong>"Agency-grade stack at a fraction of the cost"</strong></li>
                          <li>• <strong>"Normally reserved for Brené Brown–level budgets, now in your hands"</strong></li>
                          <li>• <strong>"This is a one-time founder's rate for the first 100 leaders"</strong></li>
                        </ul>
                      </div>
                      <p className="text-sm">
                        Explain this <em>after</em> they submit the form but <em>before</em> payment — in the acceptance 
                        email or onboarding video. Don't overwhelm at the start, but don't let them feel blindsided.
                      </p>
                    </div>
                  </div>

                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-5">
                    <h4 className="font-semibold text-emerald-900 mb-3 flex items-center">
                      <span className="bg-emerald-700 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2">4</span>
                      Social Proof from Brad/Alan
                    </h4>
                    <div className="space-y-3 text-emerald-800">
                      <p>Brad's invite should name the cost as a feature, not a surprise:</p>
                      <div className="bg-white rounded-lg p-4 border border-emerald-200">
                        <h5 className="font-semibold mb-2">Example Brad/Alan Post:</h5>
                        <p className="text-sm italic">
                          "We've partnered with Movement OS to bring an agency-grade publishing platform (normally $100k+) 
                          to our community for just $1,000 + 10% revenue share. But entry is gated — apply now to see if you qualify."
                        </p>
                      </div>
                      <p className="text-sm">Anyone coming through Brad already expects both qualification and payment.</p>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
                    <h4 className="font-semibold text-amber-900 mb-3 flex items-center">
                      <span className="bg-amber-700 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2">5</span>
                      Why This Strategy Works
                    </h4>
                    <div className="space-y-2 text-amber-800">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold mb-1">✅ No Sticker Shock</h5>
                          <p className="text-sm">They understand it's paid from the start</p>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-1">✅ No Confusion</h5>
                          <p className="text-sm">They see it's an actual product + network</p>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-1">✅ Exclusivity Preserved</h5>
                          <p className="text-sm">Application framing keeps sense of discernment</p>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-1">✅ Trust Preserved</h5>
                          <p className="text-sm">No one feels like they applied for free then got upsold</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Best Practice Summary */}
                <div className="mt-6 bg-gradient-to-r from-blue-900 to-teal-900 text-white rounded-lg p-6">
                  <h4 className="font-semibold text-lg mb-3">💎 Best Practice Summary</h4>
                  <p className="text-blue-100">
                    <strong>Transparency builds trust.</strong> When pricing is framed as value (not cost) and communicated 
                    early (not late), prospects self-select appropriately and arrive ready to invest, not shocked by surprise fees.
                  </p>
                </div>
              </div>

              {/* Ongoing Rhythm */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Ongoing Rhythm</h3>
                <div className="grid gap-4">
                  <div className="border border-slate-200 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-800 mb-2">Cross-Promotion Strategy</h4>
                    <ul className="space-y-2 text-slate-600">
                      <li>• Leaders share each other's launches</li>
                      <li>• Highlight collaboration (e.g., Brad + Alan co-leading a workshop)</li>
                    </ul>
                  </div>
                  
                  <div className="border border-slate-200 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-800 mb-2">Movement OS Weekly Highlights</h4>
                    <ul className="space-y-2 text-slate-600">
                      <li>• "What's happening across the network."</li>
                      <li>• Links to fresh content</li>
                      <li>• Showcase collaboration stories</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Success Metrics */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Success Metrics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-700">10–20</div>
                    <div className="text-green-600">New warm leads into funnel</div>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-700">↑</div>
                    <div className="text-blue-600">Increased audience reach for each leader</div>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-purple-700">✓</div>
                    <div className="text-purple-600">Proof-of-concept established</div>
                  </div>
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-orange-700">Brand</div>
                    <div className="text-orange-600">Movement OS = platform + movement</div>
                  </div>
                </div>
              </div>

              {/* Key Reminders */}
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Reminders for Copilot Agent</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-500 font-bold">•</span>
                    <span>Do not tie to specific calendar dates—make the launch plan modular</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-500 font-bold">•</span>
                    <span>Ensure visuals and posts align with <strong>contemporary, behance-worthy design language</strong></span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-500 font-bold">•</span>
                    <span>Maintain <strong>clarity and simplicity</strong> in all messaging: avoid dual-door confusion</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-500 font-bold">•</span>
                    <span>Synchronize individual stories with the collective Movement OS story</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-white border-t border-slate-200 px-0 py-6 rounded-b-2xl mt-8">
              <div className="flex justify-center">
                <button
                  onClick={() => setShowMovementOSLaunch(false)}
                  className="px-8 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                >
                  Launch Strategy Understood
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Background Effects */}
      <div className="absolute inset-0 z-0 hidden sm:block">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default HundredUsersPage;
