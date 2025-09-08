'use client';

import { useState, useEffect, useRef } from 'react';

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
      <div className="relative z-10 text-center py-12">
        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">
          The Network Effect
        </h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto px-6 mb-8">
          100 thought leaders connected, sharing knowledge, and building the future of independent publishing
        </p>

        {/* Action Buttons */}
        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          <button
            onClick={() => setShowWhatTheyGet(true)}
            className="px-4 py-3 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-800 transition-colors shadow-lg hover:shadow-xl text-sm"
          >
            What They Get
          </button>
          <button
            onClick={() => setShowAboutNumbers(true)}
            className="px-4 py-3 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl text-sm"
          >
            About The Numbers
          </button>
          <button
            onClick={() => setShowHowConnected(true)}
            className="px-4 py-3 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition-colors shadow-lg hover:shadow-xl text-sm"
          >
            How They're Connected
          </button>
          <button
            onClick={() => setShowAt1000Users(true)}
            className="px-4 py-3 bg-amber-700 text-white font-semibold rounded-lg hover:bg-amber-800 transition-colors shadow-lg hover:shadow-xl text-sm"
          >
            At 1000 Users
          </button>
          <button
            onClick={() => setShowWhereWeAre(true)}
            className="px-4 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl text-sm"
          >
            Where We Are
          </button>
        </div>
      </div>

      {/* Network Visualization */}
      <div className="relative z-10 flex justify-center">
        <svg
          ref={svgRef}
          width="1000"
          height="600"
          className="border border-slate-700 rounded-2xl bg-slate-800/20 backdrop-blur-sm"
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

      {/* Legend */}
      <div className="relative z-10 flex justify-center mt-8 mb-12">
        <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl px-8 py-4 border border-slate-700">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-amber-400 rounded-full border-2 border-white"></div>
              <span className="text-slate-300 text-sm">Top Tier</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              <span className="text-slate-300 text-sm">Strong</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full border-2 border-white"></div>
              <span className="text-slate-300 text-sm">Upper-Mid</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full border-2 border-white"></div>
              <span className="text-slate-300 text-sm">Mid</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-slate-500 rounded-full border-2 border-white"></div>
              <span className="text-slate-300 text-sm">Emerging</span>
            </div>
            <div className="text-slate-400 text-sm">
              • Outer ring = MRR • Click any node for details
            </div>
          </div>
        </div>
      </div>

        {/* Aggregate Stats */}
        {aggregateStats && (
          <div className="flex justify-center">
            <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl px-8 py-6 border border-slate-700/50">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-400">
                    ${(aggregateStats.totalMRR / 1000).toFixed(0)}K
                  </div>
                  <div className="text-sm text-slate-400">Total MRR</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400">
                    {(aggregateStats.totalSubscribers / 1000).toFixed(0)}K
                  </div>
                  <div className="text-sm text-slate-400">Paid Subscribers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400">
                    {(aggregateStats.totalAudience / 1000).toFixed(0)}K
                  </div>
                  <div className="text-sm text-slate-400">Total Audience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-amber-400">
                    {(aggregateStats.categories['Core Movement Leader'] || 0) + (aggregateStats.categories['Established Author'] || 0)}
                  </div>
                  <div className="text-sm text-slate-400">Top Leaders</div>
                </div>
              </div>
            </div>
          </div>
        )}

      {/* What They Get Modal */}
      {showWhatTheyGet && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowWhatTheyGet(false)}
        >
          <div 
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-slate-200 px-8 py-6 rounded-t-2xl">
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold text-slate-900">What You Get for $1,000 + 10%</h2>
                <button
                  onClick={() => setShowWhatTheyGet(false)}
                  className="text-slate-400 hover:text-slate-600 text-3xl leading-none"
                >
                  ×
                </button>
              </div>
              <p className="text-slate-600 mt-3 text-lg">
                Joining this network is not simply buying a website — it's investing in a complete digital publishing operating system, purpose-built for movement leaders.
              </p>
            </div>

            {/* Content */}
            <div className="px-8 py-6 space-y-8">
              
              {/* Digital Publishing Platform */}
              <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="text-emerald-600">🚀</span>
                  A Digital Publishing Platform
                </h3>
                <div className="space-y-3 text-slate-700">
                  <div className="flex gap-3">
                    <span className="font-semibold text-slate-900">State of the art:</span>
                    <span>Built on React, Next.js, Tailwind, Supabase, and Vercel — modern tech with <em>perfect performance scores</em>.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-semibold text-slate-900">Ultra-personalized:</span>
                    <span>The digital infrastructure and AI agents are calibrated for thought leaders in faith, movemental leadership, and missional networks.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-semibold text-slate-900">Built for transmission of ideas:</span>
                    <span>The platform is optimized for teaching, storytelling, and virality — designed to make ideas "sneezeable."</span>
                  </div>
                </div>
              </section>

              {/* Content Creation Hub */}
              <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="text-green-700">✍️</span>
                  A Content Creation Hub
                </h3>
                <div className="space-y-3 text-slate-700">
                  <div className="flex gap-3">
                    <span className="font-semibold text-slate-900">Adapted environments:</span>
                    <span>Spaces for creating blog posts, videos, podcasts, visualizations, lessons, coaching engagements, workshops, and more.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-semibold text-slate-900">AI support, not AI takeover:</span>
                    <span>Agents help with ideation, drafting, repurposing, and design — while keeping the leader's voice central.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-semibold text-slate-900">Encouragement to publish more:</span>
                    <span>Direct engagement tools + network encouragement increase output. Leaders will not only republish their back-catalog but create more than ever before.</span>
                  </div>
                </div>
              </section>

              {/* E-Commerce */}
              <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="text-slate-700">💳</span>
                  Full E-Commerce, Ready to Go
                </h3>
                <div className="space-y-3 text-slate-700">
                  <div>Integrated <strong>Stripe checkout</strong> for subscriptions, products, donations, and event registrations.</div>
                  <div>No need for external platforms — revenue flows directly to the leader.</div>
                </div>
              </section>

              {/* Membership & Authentication */}
              <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="text-slate-600">👥</span>
                  Membership & Authentication
                </h3>
                <div className="space-y-3 text-slate-700">
                  <div><strong>Supabase-based sign-in/authentication</strong> for subscriber management.</div>
                  <div><strong>Tiered membership</strong> models ready to deploy (free, premium, patron).</div>
                  <div>Immediate ability to gate content behind paywalls or offer "members-only" experiences.</div>
                </div>
              </section>

              {/* Learning Management System */}
              <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="text-amber-700">🎓</span>
                  Customizable Learning Management System
                </h3>
                <div className="space-y-3 text-slate-700">
                  <div>Pre-built LMS modules: courses, workshops, and training pathways.</div>
                  <div>Content creators can <strong>drag-and-drop components</strong> (video cards, lesson outlines, discussion prompts) into their own curricula.</div>
                  <div>Supports multiple "tracks" for general audiences, advanced students, or specialized groups.</div>
                </div>
              </section>

              {/* Analytics & SEO */}
              <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="text-orange-700">📊</span>
                  Analytics, SEO & Digital Strategy
                </h3>
                <div className="space-y-3 text-slate-700">
                  <div>Ongoing <strong>digital & AI consultation</strong> based on years of experience in digital marketing for this sector.</div>
                  <div><strong>Comprehensive analytics:</strong> not just Google-style metrics, but insights aggregated across the network of leaders.</div>
                  <div>Data helps leaders refine messaging, spot opportunities, and grow audiences.</div>
                </div>
              </section>

              {/* AI Agents */}
              <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="text-slate-700">🤖</span>
                  AI Agents, Done Right
                </h3>
                <div className="space-y-3 text-slate-700">
                  <div>Agents embedded into every workflow: writing, teaching, community engagement, donor management.</div>
                  <div>Always aligned with the mission — enhancing productivity while preserving authenticity.</div>
                  <div>Agents will learn from aggregated usage across the network, constantly improving.</div>
                </div>
              </section>

              {/* The Outcome */}
              <section className="bg-emerald-50 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="text-emerald-700">🎯</span>
                  The Outcome
                </h3>
                <div className="space-y-3 text-slate-700">
                  <div><strong>Amplified voice:</strong> Leaders' ideas travel further and faster.</div>
                  <div><strong>Increased revenue:</strong> Direct subscriptions, donations, and product sales without middlemen.</div>
                  <div><strong>Network effects:</strong> Each leader benefits from the visibility, cross-promotion, and credibility of the entire coalition.</div>
                  <div><strong>Trust in a noisy AI world:</strong> Audiences know that these leaders are real, present, and equipped with best-in-class digital tools.</div>
                </div>
                
                <div className="mt-6 p-4 bg-white rounded-lg border-l-4 border-emerald-600">
                  <p className="text-lg font-semibold text-slate-900">This is not just a website.</p>
                  <p className="text-lg font-semibold text-emerald-700">It's a launchpad for movemental impact in the digital age.</p>
                </div>
              </section>

            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-white border-t border-slate-200 px-8 py-6 rounded-b-2xl">
              <div className="flex justify-between items-center">
                <div className="text-slate-600">
                  <span className="font-semibold">Investment:</span> $1,000 setup + 10% platform fee
                </div>
                <button
                  onClick={() => setShowWhatTheyGet(false)}
                  className="px-6 py-2 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors"
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
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowAboutNumbers(false)}
        >
          <div 
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-slate-200 px-8 py-6 rounded-t-2xl">
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold text-slate-900">The Story of the Numbers</h2>
                <button
                  onClick={() => setShowAboutNumbers(false)}
                  className="text-slate-400 hover:text-slate-600 text-3xl leading-none"
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
            <div className="px-8 py-6 space-y-8">
              
              {/* The First 100 */}
              <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
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
            <div className="sticky bottom-0 bg-white border-t border-slate-200 px-8 py-6 rounded-b-2xl">
              <div className="flex justify-between items-center">
                <div className="text-slate-600">
                  <span className="font-semibold">Scale trajectory:</span> 100 → 500 → 1,000 users maximum
                </div>
                <button
                  onClick={() => setShowAboutNumbers(false)}
                  className="px-6 py-2 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors"
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
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowHowConnected(false)}
        >
          <div 
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-slate-200 px-8 py-6 rounded-t-2xl">
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold text-slate-900">How They're Connected</h2>
                <button
                  onClick={() => setShowHowConnected(false)}
                  className="text-slate-400 hover:text-slate-600 text-3xl leading-none"
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
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl transform transition-all duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {selectedUser.name}
                </h3>
                <div className="flex items-center gap-3 mb-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    selectedUser.category === 'Core Movement Leader' ? 'bg-amber-100 text-amber-800' :
                    selectedUser.category === 'Established Author' ? 'bg-orange-100 text-orange-800' :
                    selectedUser.category === 'Organizational Leader' ? 'bg-blue-100 text-blue-800' :
                    selectedUser.category === 'Academic' ? 'bg-green-100 text-green-800' :
                    selectedUser.category === 'Practitioner' ? 'bg-purple-100 text-purple-800' :
                    selectedUser.category === 'Emerging Leader' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-pink-100 text-pink-800'
                  }`}>
                    {getCategoryStyling(selectedUser.category).badge} {selectedUser.category}
                  </span>
                </div>
                <p className="text-slate-600 text-sm mb-2">{selectedUser.profileDescription}</p>
                <div className="text-xs text-slate-500">
                  <strong>Focus:</strong> {selectedUser.contentFocus}
                </div>
              </div>
              <button
                onClick={closeModal}
                className="text-slate-400 hover:text-slate-600 text-2xl leading-none"
              >
                ×
              </button>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                <span className="text-slate-600 font-medium">Audience Size</span>
                <span className="text-2xl font-bold text-blue-600">
                  {selectedUser.audienceSize.toLocaleString()}
                </span>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                <span className="text-slate-600 font-medium">Monthly Revenue (MRR)</span>
                <span className="text-xl font-bold text-green-600">
                  ${selectedUser.grossMRR.toLocaleString()}
                </span>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                <span className="text-slate-600 font-medium">Paid Subscribers</span>
                <span className="text-xl font-bold text-purple-600">
                  {selectedUser.paidSubs.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                <span className="text-slate-600 font-medium">Email List Size</span>
                <span className="text-xl font-bold text-indigo-600">
                  {selectedUser.emailList.toLocaleString()}
                </span>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                <span className="text-slate-600 font-medium">Qualification</span>
                <span className="text-sm font-medium text-slate-700">
                  {selectedUser.qualificationSource}
                </span>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                <span className="text-slate-600 font-medium">Network Connections</span>
                <span className="text-xl font-bold text-amber-600">
                  {selectedUser.connections.length}
                </span>
              </div>

              {/* Conversion metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-green-50 rounded-lg text-center">
                  <div className="text-lg font-bold text-green-700">
                    {selectedUser.conversionRate}%
                  </div>
                  <div className="text-xs text-green-600">Conversion Rate</div>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg text-center">
                  <div className="text-lg font-bold text-blue-700">
                    ${selectedUser.monthlyARPU}
                  </div>
                  <div className="text-xs text-blue-600">Monthly ARPU</div>
                </div>
              </div>
            </div>

            <div className="flex space-x-3">
              <button className="flex-1 bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors">
                Connect
              </button>
              <button className="flex-1 border border-slate-300 text-slate-700 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors">
                View Profile
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default HundredUsersPage;
