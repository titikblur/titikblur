export interface PortfolioItem {
  id: string;
  brandName: string;
  brandLogo: string;
  thumbnail: string;
  title: string;
  views: number;
  likes: number;
  comments: number;
  platform: 'youtube' | 'instagram' | 'tiktok';
}

export const portfolioData: PortfolioItem[] = [
  {
    id: '1',
    brandName: 'Warung Nusantara',
    brandLogo: '/images/brand-placeholder.svg',
    thumbnail: '/images/thumb-placeholder-1.jpg',
    title: 'Review Makanan Tradisional Indonesia',
    views: 125000,
    likes: 8500,
    comments: 423,
    platform: 'youtube',
  },
  {
    id: '2',
    brandName: 'Kopi Nusantara',
    brandLogo: '/images/brand-placeholder.svg',
    thumbnail: '/images/thumb-placeholder-2.jpg',
    title: 'Momen Ngopi Bareng Barista',
    views: 89000,
    likes: 6200,
    comments: 312,
    platform: 'tiktok',
  },
  {
    id: '3',
    brandName: 'Roti Manis Bakery',
    brandLogo: '/images/brand-placeholder.svg',
    thumbnail: '/images/thumb-placeholder-3.jpg',
    title: 'Behind The Scene Bakery',
    views: 67000,
    likes: 4800,
    comments: 189,
    platform: 'instagram',
  },
  {
    id: '4',
    brandName: 'Street Food Hunters',
    brandLogo: '/images/brand-placeholder.svg',
    thumbnail: '/images/thumb-placeholder-4.jpg',
    title: 'Jajanan Street Food Viral',
    views: 156000,
    likes: 11200,
    comments: 567,
    platform: 'youtube',
  },
];

export const getPlatformIcon = (platform: PortfolioItem['platform']): string => {
  switch (platform) {
    case 'youtube':
      return '📺';
    case 'instagram':
      return '📷';
    case 'tiktok':
      return '🎵';
  }
};
