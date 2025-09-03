'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  TrendingUp, 
  TrendingDown, 
  Minus, 
  ChevronDown 
} from 'lucide-react';
import { Kpi } from '@/types/kit';

interface KPIBarProps {
  kpis: Kpi[];
  className?: string;
}

export function KPIBar({ kpis, className = '' }: KPIBarProps) {
  return (
    <div className={`bg-white border-b border-gray-200 px-6 py-4 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Key Metrics</h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            Last 30 days
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm">
            All Programs
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm">
            All Locations
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {kpis.slice(0, 6).map((kpi) => (
          <Card key={kpi.id} className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-gray-600 truncate">{kpi.label}</p>
                  <p className="text-2xl font-bold text-gray-900 truncate">
                    {formatKpiValue(kpi.value, kpi.format)}
                  </p>
                  {kpi.delta !== undefined && (
                    <div className="flex items-center mt-1">
                      {kpi.delta > 0 ? (
                        <TrendingUp className="h-4 w-4 text-green-500 flex-shrink-0" />
                      ) : kpi.delta < 0 ? (
                        <TrendingDown className="h-4 w-4 text-red-500 flex-shrink-0" />
                      ) : (
                        <Minus className="h-4 w-4 text-gray-400 flex-shrink-0" />
                      )}
                      <span className={`text-sm ml-1 ${
                        kpi.delta > 0 ? 'text-green-600' : 
                        kpi.delta < 0 ? 'text-red-600' : 'text-gray-500'
                      }`}>
                        {kpi.delta > 0 ? '+' : ''}{kpi.delta}%
                      </span>
                      {kpi.period && (
                        <span className="text-xs text-gray-400 ml-1">({kpi.period})</span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function formatKpiValue(value: string | number | null, format?: string): string {
  if (value === null) return '--';
  
  switch (format) {
    case 'currency':
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(Number(value));
      
    case 'percent':
      return `${value}%`;
      
    case 'number':
      return new Intl.NumberFormat('en-US').format(Number(value));
      
    default:
      return String(value);
  }
}
