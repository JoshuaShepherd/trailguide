'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { User, Users } from 'lucide-react';

interface EmptySeatCardProps {
  focusAreas?: string[];
  isDemoMode?: boolean;
}

export function EmptySeatCard({ focusAreas = ['Nonprofit ops or governance', 'Data/AI ethics', 'Scaled fundraising/product'], isDemoMode = true }: EmptySeatCardProps) {
  const [showNominate, setShowNominate] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    org: '',
    role: '',
    why: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast.error('Please consent to having your nomination reviewed.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/nominate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Thanks—our team will review.');
        setShowNominate(false);
        setFormData({
          name: '',
          email: '',
          org: '',
          role: '',
          why: '',
          consent: false
        });
      } else {
        throw new Error('Failed to submit nomination');
      }
    } catch (error) {
      toast.error('Failed to submit nomination. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="relative bg-slate-50 rounded-xl border border-slate-200 p-6 hover:shadow-md hover:bg-slate-100 transition-all duration-200">
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Silhouette Avatar */}
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-slate-300 to-slate-400 flex items-center justify-center">
            <Users className="w-8 h-8 text-slate-500" />
          </div>

          {/* Title */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Open Seat</h3>
            <p className="text-sm text-gray-600 mb-4">
              We&rsquo;re honoring our early board and inviting the right voices to help guide TrailGuide&rsquo;s next stage.
            </p>
          </div>

          {/* Focus Areas */}
          <div className="text-left w-full">
            <p className="text-sm font-medium text-gray-700 mb-2">Focus areas:</p>
            <ul className="text-sm text-gray-600 space-y-1">
              {focusAreas.map((area, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 flex-shrink-0"></span>
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Nominate Button */}
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setShowNominate(true)}
            className="hover:bg-green-50 hover:border-green-200 hover:text-green-700 transition-colors"
          >
            Nominate a Leader
          </Button>
        </div>

        {/* Internal Demo Watermark */}
        {isDemoMode && (
          <div className="absolute bottom-2 right-2 text-xs text-slate-400 font-medium">
            Internal Demo
          </div>
        )}
      </div>

      {/* Nominate Dialog */}
      <Dialog open={showNominate} onOpenChange={setShowNominate}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <User className="w-5 h-5" />
              Nominate a Leader
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="org">Organization</Label>
              <Input
                id="org"
                value={formData.org}
                onChange={(e) => setFormData(prev => ({ ...prev, org: e.target.value }))}
                required
              />
            </div>

            <div>
              <Label htmlFor="role">Role</Label>
              <Input
                id="role"
                value={formData.role}
                onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
                required
              />
            </div>

            <div>
              <Label htmlFor="why">Why are they a fit?</Label>
              <Textarea
                id="why"
                value={formData.why}
                onChange={(e) => setFormData(prev => ({ ...prev, why: e.target.value }))}
                placeholder="Tell us about their relevant experience and why they'd be a great addition to TrailGuide's board..."
                rows={3}
                required
              />
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox
                id="consent"
                checked={formData.consent}
                onCheckedChange={(checked: boolean) => setFormData(prev => ({ ...prev, consent: checked }))}
              />
              <Label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed">
                I consent to having this nomination reviewed by the TrailGuide team and understand they may reach out for additional information.
              </Label>
            </div>

            <div className="flex gap-2 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowNominate(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting || !formData.consent}
                className="flex-1"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Nomination'}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
