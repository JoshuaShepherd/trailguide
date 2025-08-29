'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Person } from '@/data/leadership';

interface BoardMemberCardProps {
  person: Person;
}

export function BoardMemberCard({ person }: BoardMemberCardProps) {
  const [showBio, setShowBio] = useState(false);

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <>
      <div className="group bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg hover:border-slate-300 transition-all duration-200 cursor-pointer focus-within:ring-2 focus-within:ring-green-500 focus-within:ring-offset-2">
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Headshot or Initials Avatar */}
          <div className="relative">
            {person.headshotUrl ? (
              <Image
                src={person.headshotUrl}
                alt={`Headshot of ${person.name}`}
                width={80}
                height={80}
                className="rounded-full object-cover"
              />
            ) : (
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center text-white font-bold text-xl">
                {getInitials(person.name)}
              </div>
            )}
            {person.badge && (
              <Badge 
                variant="secondary" 
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-amber-100 text-amber-800 text-xs px-2 py-1"
              >
                {person.badge}
              </Badge>
            )}
          </div>

          {/* Name and Role */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{person.name}</h3>
            <p className="text-sm text-gray-600 mb-1">{person.role}</p>
            <p className="text-xs text-gray-500">{person.org}</p>
          </div>

          {/* Tags */}
          {person.tags && person.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 justify-center">
              {person.tags.map((tag, index) => (
                <Badge 
                  key={index}
                  variant="outline" 
                  className="text-xs px-2 py-0.5 bg-slate-50 text-slate-600 border-slate-200"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {/* Short Bio */}
          <p className="text-sm text-gray-700 leading-relaxed">
            {person.shortBio}
          </p>

          {/* Read Bio Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowBio(true)}
            className="group-hover:bg-green-50 group-hover:border-green-200 group-hover:text-green-700 transition-colors"
          >
            Read bio
          </Button>
        </div>
      </div>

      {/* Bio Dialog */}
      <Dialog open={showBio} onOpenChange={setShowBio}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0">
                {person.headshotUrl ? (
                  <Image
                    src={person.headshotUrl}
                    alt={`Headshot of ${person.name}`}
                    width={64}
                    height={64}
                    className="rounded-full object-cover"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center text-white font-bold text-lg">
                    {getInitials(person.name)}
                  </div>
                )}
              </div>
              <div className="flex-1">
                <DialogTitle className="text-xl font-semibold text-gray-900 mb-1">
                  {person.name}
                </DialogTitle>
                <p className="text-sm text-gray-600 mb-1">{person.role}</p>
                <p className="text-xs text-gray-500">{person.org}</p>
                {person.badge && (
                  <Badge 
                    variant="secondary" 
                    className="mt-2 bg-amber-100 text-amber-800 text-xs"
                  >
                    {person.badge}
                  </Badge>
                )}
              </div>
            </div>
          </DialogHeader>

          <div className="space-y-4">
            {/* Long Bio */}
            <div className="prose prose-sm max-w-none text-gray-700">
              <p>{person.longBioMd}</p>
            </div>

            {/* Tags */}
            {person.tags && person.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {person.tags.map((tag, index) => (
                  <Badge 
                    key={index}
                    variant="outline" 
                    className="text-xs px-2 py-1 bg-slate-50 text-slate-600 border-slate-200"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            {/* Links */}
            {person.links && person.links.length > 0 && (
              <div className="pt-4 border-t border-gray-200">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Links</h4>
                <div className="flex flex-wrap gap-2">
                  {person.links.map((link, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      asChild
                      className="text-xs"
                    >
                      <a href={link.href} target="_blank" rel="noopener noreferrer">
                        {link.label}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
