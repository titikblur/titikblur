export interface SocialStats {
  platform: string;
  icon: string;
  followers: string;
  avgViews: string;
  color: string;
}

export const socialStats: SocialStats[] = [
  {
    platform: 'YouTube',
    icon: '📺',
    followers: '250K',
    avgViews: '75K',
    color: 'bg-red-500/10 text-red-500',
  },
  {
    platform: 'Instagram',
    icon: '📷',
    followers: '120K',
    avgViews: '25K',
    color: 'bg-pink-500/10 text-pink-500',
  },
  {
    platform: 'TikTok',
    icon: '🎵',
    followers: '180K',
    avgViews: '50K',
    color: 'bg-black/10 text-gray-800',
  },
];

export const totalFollowers = '550K+';
export const totalAvgViews = '150K+';
