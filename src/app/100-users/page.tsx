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
                  className={`cursor-pointer transition-all duration-500 hover:scale-125 ${
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
