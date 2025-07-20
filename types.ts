import React from 'react';

export type Language = 'de' | 'en' | 'es' | 'pt' | 'it';

export interface CompanyStat {
    value: string;
    labelKey: string;
}

export interface CompanyContact {
    type: 'phone' | 'email' | 'address' | 'website';
    labelKey: string;
    value: string;
    icon: string;
}

export interface CompanySocial {
    platform: 'facebook' | 'instagram' | 'whatsapp' | 'linkedin' | 'x' | 'youtube' | 'tiktok' | 'pinterest' | 'telegram' | 'twitch';
    url: string;
}

export interface CompanyTour {
  url: string;
  image: string;
  descriptionKey: string;
}

export interface CompanyDetails {
  aboutKey: string;
  servicesKey: string;
  strengthsKeys: string[]; // list of translation keys
  mapEmbedUrl: string;
}


export interface Company {
  name: string;
  sloganKey: string;
  categoryKey: string;
  subcategoryKey: string;
  logo: string;
  countryKey: string;
  city: string;
  
  // Fields for client profile page
  taglineKey: string;
  logoChar: string;
  status: 'available' | 'unavailable';
  images: string[];
  stats: CompanyStat[];
  contact: CompanyContact[];
  socials: CompanySocial[];
  
  // New fields for complex layout
  tours?: CompanyTour[];
  details?: CompanyDetails;
}

export interface Category {
  nameKey: string;
  iconKey: string;
  subcategoriesKeys: string[];
}