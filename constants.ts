import type { Category, Company } from './types';

export const CATEGORIES_DATA: Category[] = [
  { nameKey: 'categories.consulting', iconKey: 'consulting', subcategoriesKeys: ['subcategories.consulting.business', 'subcategories.consulting.legal', 'subcategories.consulting.tax'] },
  { nameKey: 'categories.education', iconKey: 'education', subcategoriesKeys: ['subcategories.education.languages', 'subcategories.education.tutoring', 'subcategories.education.training'] },
  { nameKey: 'categories.finance', iconKey: 'finance', subcategoriesKeys: ['subcategories.finance.insurance', 'subcategories.finance.investment', 'subcategories.finance.accounting'] },
  { nameKey: 'categories.gastronomy', iconKey: 'gastronomy', subcategoriesKeys: ['subcategories.gastronomy.restaurants', 'subcategories.gastronomy.cafes', 'subcategories.gastronomy.bars'] },
  { nameKey: 'categories.health', iconKey: 'health', subcategoriesKeys: ['subcategories.health.doctors', 'subcategories.health.pharmacies', 'subcategories.health.gyms'] },
  { nameKey: 'categories.hospitality', iconKey: 'hospitality', subcategoriesKeys: ['subcategories.hospitality.hotels', 'subcategories.hospitality.vacation', 'subcategories.hospitality.pensions'] },
  { nameKey: 'categories.realEstate', iconKey: 'realEstate', subcategoriesKeys: ['subcategories.realEstate.buy', 'subcategories.realEstate.rent', 'subcategories.realEstate.management'] },
  { nameKey: 'categories.food', iconKey: 'food', subcategoriesKeys: ['subcategories.food.supermarkets', 'subcategories.food.organic', 'subcategories.food.markets'] },
  { nameKey: 'categories.music', iconKey: 'music', subcategoriesKeys: ['subcategories.music.instruments', 'subcategories.music.lessons', 'subcategories.music.live'] },
  { nameKey: 'categories.social', iconKey: 'social', subcategoriesKeys: ['subcategories.social.associations', 'subcategories.social.volunteering', 'subcategories.social.counseling'] },
  { nameKey: 'categories.sports', iconKey: 'sports', subcategoriesKeys: ['subcategories.sports.clubs', 'subcategories.sports.equipment', 'subcategories.sports.events'] },
  { nameKey: 'categories.travel', iconKey: 'travel', subcategoriesKeys: ['subcategories.travel.agencies', 'subcategories.travel.flights', 'subcategories.travel.tours'] },
  { nameKey: 'categories.technology', iconKey: 'technology', subcategoriesKeys: ['subcategories.technology.it', 'subcategories.technology.software', 'subcategories.technology.hardware'] },
  { nameKey: 'categories.textiles', iconKey: 'textiles', subcategoriesKeys: ['subcategories.textiles.fashion', 'subcategories.textiles.shoes', 'subcategories.textiles.accessories'] },
  { nameKey: 'categories.pets', iconKey: 'pets', subcategoriesKeys: ['subcategories.pets.vets', 'subcategories.pets.food', 'subcategories.pets.boarding'] },
  { nameKey: 'categories.transport', iconKey: 'transport', subcategoriesKeys: ['subcategories.transport.taxi', 'subcategories.transport.logistics', 'subcategories.transport.moving'] },
  { nameKey: 'categories.environment', iconKey: 'environment', subcategoriesKeys: ['subcategories.environment.recycling', 'subcategories.environment.renewable', 'subcategories.environment.conservation'] },
  { nameKey: 'categories.entertainment', iconKey: 'entertainment', subcategoriesKeys: ['subcategories.entertainment.cinema', 'subcategories.entertainment.theater', 'subcategories.entertainment.events'] },
];

export const TOP_COMPANIES_DATA: Company[] = [
    { 
        name: 'HörComfort Services Ammersbek',
        sloganKey: 'companies.horcomfort.slogan',
        categoryKey: 'categories.health',
        subcategoryKey: 'subcategories.health.hearing_systems',
        logo: 'https://picsum.photos/seed/horcomfort/100',
        countryKey: 'countries.germany',
        city: 'Ammersbek',
        taglineKey: 'companies.horcomfort.tagline',
        logoChar: 'H',
        status: 'available',
        images: [
            'https://images.unsplash.com/photo-1581092446347-916c8a75043f?w=800&h=600&fit=crop&crop=entropy&auto=format',
            'https://images.unsplash.com/photo-1554310633-c45c24388647?w=800&h=600&fit=crop&crop=entropy&auto=format',
            'https://images.unsplash.com/photo-1612178524027-a0a625907c10?w=800&h=600&fit=crop&crop=entropy&auto=format',
            'https://images.unsplash.com/photo-1599351432822-2591665a3eb6?w=800&h=600&fit=crop&crop=entropy&auto=format'
        ],
        stats: [
            { value: '2015', labelKey: 'client_profile.founded' },
            { value: '10+', labelKey: 'client_profile.employees' },
            { value: '2k+', labelKey: 'client_profile.projects' },
            { value: '24/7', labelKey: 'client_profile.support' }
        ],
        contact: [
            { type: 'phone', labelKey: 'contact.phone', value: '+49 40 1234567', icon: 'fa-solid fa-mobile-screen-button' },
            { type: 'email', labelKey: 'contact.email', value: 'info@horcomfort.de', icon: 'fa-solid fa-envelope' },
            { type: 'address', labelKey: 'contact.address', value: 'Hauptstraße 1, Ammersbek', icon: 'fa-solid fa-map-marker-alt' },
            { type: 'website', labelKey: 'contact.website', value: 'horcomfort.dicilo.net', icon: 'fa-solid fa-globe' }
        ],
        socials: [
            { platform: 'facebook', url: 'https://facebook.com/dicilo.net' },
            { platform: 'whatsapp', url: 'https://wa.me/49401234567' }
        ]
    },
    { 
        name: 'Inviajes - Reisen Club',
        sloganKey: 'companies.inviajes.slogan',
        categoryKey: 'categories.travel',
        subcategoryKey: 'subcategories.travel.travel_club',
        logo: 'https://dicilo.net/wp-content/uploads/2024/11/Isotipo-Inviajes-298x300.png',
        countryKey: 'countries.international',
        city: 'Hamburg',
        taglineKey: 'companies.inviajes.tagline',
        logoChar: 'I',
        status: 'available',
        images: [
            'https://inviajes.net/main/media/trips/photos/Taj_Mahal_1920.jpg',
            'https://inviajes.net/main/media/trips/photos/Ciudad_Perdida_1xin.jpg',
            'https://inviajes.net/main/media/trips/photos/Machu_Picchu_in_1_1280.jpg',
            'https://inviajes.net/main/media/trips/photos/foto-uy-2.png'
        ],
        stats: [
            { value: '2004', labelKey: 'client_profile.founded' },
            { value: '150+', labelKey: 'client_profile.countries_active' },
            { value: '100k+', labelKey: 'client_profile.partners' },
            { value: '24/7', labelKey: 'client_profile.support' }
        ],
        contact: [
            { type: 'email', labelKey: 'contact.email', value: 'info@inviajes.net', icon: 'fa-solid fa-envelope' },
            { type: 'address', labelKey: 'contact.address', value: 'Mühlendam 84a, 22087 Hamburg', icon: 'fa-solid fa-map-marker-alt' },
            { type: 'website', labelKey: 'contact.website', value: 'inviajes.net', icon: 'fa-solid fa-globe' }
        ],
        socials: [
            { platform: 'facebook', url: 'https://www.facebook.com/inviajes24' },
            { platform: 'instagram', url: 'https://www.instagram.com/inviajes.net' },
            { platform: 'linkedin', url: 'https://www.linkedin.com/showcase/club-inviajes/' }
        ],
        tours: [
          { url: "https://inviajes.net/es/trips/fc0fa6db-278b-4562-aba8-878cb26d725e/", image: "https://inviajes.net/main/media/trips/photos/Taj_Mahal_1920.jpg", descriptionKey: "companies.inviajes.tours.tour1" },
          { url: "https://inviajes.net/es/trips/2998ef3c-9b1c-4b9d-b23b-44a0dc3965be/", image: "https://inviajes.net/main/media/trips/photos/photo_2023-05-19_10-27-59.jpg", descriptionKey: "companies.inviajes.tours.tour2" },
          { url: "https://inviajes.net/es/trips/fcee2c5a-846a-424b-adde-cd800f8b5d50/", image: "https://inviajes.net/main/media/trips/photos/Ciudad_Perdida_1xin.jpg", descriptionKey: "companies.inviajes.tours.tour3" },
          { url: "https://inviajes.net/es/trips/e715f300-894a-4629-9d39-91a210c00396/", image: "https://inviajes.net/main/media/trips/photos/Machu_Picchu_in_1_1280.jpg", descriptionKey: "companies.inviajes.tours.tour4" }
        ],
        details: {
            aboutKey: "companies.inviajes.details.about",
            servicesKey: "companies.inviajes.details.services",
            strengthsKeys: [
                "companies.inviajes.details.strength1",
                "companies.inviajes.details.strength2",
                "companies.inviajes.details.strength3",
                "companies.inviajes.details.strength4",
                "companies.inviajes.details.strength5",
                "companies.inviajes.details.strength6"
            ],
            mapEmbedUrl: "https://www.openstreetmap.org/export/embed.html?bbox=10.024005174636843%2C53.56239816358096%2C10.027827322483065%2C53.563749082306515&layer=mapnik&marker=53.56307362833679%2C10.02591758966446"
        }
    },
    { 
        name: 'MHC - INT',
        sloganKey: 'companies.mhc.slogan',
        categoryKey: 'categories.consulting',
        subcategoryKey: 'subcategories.consulting.business',
        logo: 'https://picsum.photos/seed/mhc/100',
        countryKey: 'countries.international',
        city: '',
        taglineKey: 'companies.mhc.tagline',
        logoChar: 'M',
        status: 'available',
        images: [
            'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop&crop=entropy&auto=format',
            'https://images.unsplash.com/photo-1542744095-291d1f67b221?w=800&h=600&fit=crop&crop=entropy&auto=format',
            'https://images.unsplash.com/photo-1520607162513-77705c6f0d4a?w=800&h=600&fit=crop&crop=entropy&auto=format'
        ],
        stats: [
            { value: '2010', labelKey: 'client_profile.founded' },
            { value: '150+', labelKey: 'client_profile.employees' },
            { value: '1k+', labelKey: 'client_profile.projects' },
            { value: '24/7', labelKey: 'client_profile.support' }
        ],
        contact: [
            { type: 'phone', labelKey: 'contact.phone', value: '+1 212 555 0123', icon: 'fa-solid fa-mobile-screen-button' },
            { type: 'email', labelKey: 'contact.email', value: 'contact@mhc-int.com', icon: 'fa-solid fa-envelope' },
            { type: 'address', labelKey: 'contact.address', value: 'Global Operations', icon: 'fa-solid fa-map-marker-alt' },
            { type: 'website', labelKey: 'contact.website', value: 'mhc.dicilo.net', icon: 'fa-solid fa-globe' }
        ],
        socials: [
            { platform: 'linkedin', url: 'https://linkedin.com/company/dicilo-net' },
            { platform: 'x', url: 'https://x.com/dicilonet' }
        ]
    },
    { 
        name: 'Brückenstern - Hamburg',
        sloganKey: 'companies.bruckenstern.slogan',
        categoryKey: 'categories.gastronomy',
        subcategoryKey: 'subcategories.gastronomy.restaurants',
        logo: 'https://picsum.photos/seed/bruckenstern/100',
        countryKey: 'countries.germany',
        city: 'Hamburg',
        taglineKey: 'companies.bruckenstern.tagline',
        logoChar: 'B',
        status: 'available',
        images: [
            'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop&crop=entropy&auto=format',
            'https://images.unsplash.com/photo-1559329007-447de37f4553?w=800&h=600&fit=crop&crop=entropy&auto=format',
            'https://images.unsplash.com/photo-1579734063722-c435a6f2d2de?w=800&h=600&fit=crop&crop=entropy&auto=format'
        ],
        stats: [
            { value: '2018', labelKey: 'client_profile.founded' },
            { value: '20+', labelKey: 'client_profile.employees' },
            { value: '100+', labelKey: 'client_profile.projects' },
            { value: '24/7', labelKey: 'client_profile.support' }
        ],
        contact: [
            { type: 'phone', labelKey: 'contact.phone', value: '+49 40 87654321', icon: 'fa-solid fa-mobile-screen-button' },
            { type: 'email', labelKey: 'contact.email', value: 'reservierung@brueckenstern.de', icon: 'fa-solid fa-envelope' },
            { type: 'address', labelKey: 'contact.address', value: 'Sternstraße 1, Hamburg', icon: 'fa-solid fa-map-marker-alt' },
            { type: 'website', labelKey: 'contact.website', value: 'brueckenstern.dicilo.net', icon: 'fa-solid fa-globe' }
        ],
        socials: [
            { platform: 'facebook', url: 'https://facebook.com/dicilo.net' },
            { platform: 'instagram', url: 'https://instagram.com/dicilo.net_' }
        ]
    },
    { 
        name: 'IndoRoutes - India',
        sloganKey: 'companies.indoroutes.slogan',
        categoryKey: 'categories.travel',
        subcategoryKey: 'subcategories.travel.agencies',
        logo: 'https://picsum.photos/seed/indoroutes/100',
        countryKey: 'countries.india',
        city: '',
        taglineKey: 'companies.indoroutes.tagline',
        logoChar: 'IR',
        status: 'available',
        images: [
            'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop&crop=entropy&auto=format',
            'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&h=600&fit=crop&crop=entropy&auto=format',
            'https://images.unsplash.com/photo-1594482564348-0238a929c546?w=800&h=600&fit=crop&crop=entropy&auto=format'
        ],
        stats: [
            { value: '2012', labelKey: 'client_profile.founded' },
            { value: '30+', labelKey: 'client_profile.employees' },
            { value: '5k+', labelKey: 'client_profile.projects' },
            { value: '24/7', labelKey: 'client_profile.support' }
        ],
        contact: [
            { type: 'phone', labelKey: 'contact.phone', value: '+91 11 1234 5678', icon: 'fa-solid fa-mobile-screen-button' },
            { type: 'email', labelKey: 'contact.email', value: 'info@indoroutes.com', icon: 'fa-solid fa-envelope' },
            { type: 'address', labelKey: 'contact.address', value: 'New Delhi, India', icon: 'fa-solid fa-map-marker-alt' },
            { type: 'website', labelKey: 'contact.website', value: 'indoroutes.dicilo.net', icon: 'fa-solid fa-globe' }
        ],
        socials: [
            { platform: 'instagram', url: 'https://instagram.com/dicilo.net_' },
            { platform: 'whatsapp', url: 'https://wa.me/911112345678' }
        ]
    },
    { 
        name: 'Carlota Stockar - Argentina',
        sloganKey: 'companies.carlota.slogan',
        categoryKey: 'categories.travel',
        subcategoryKey: 'subcategories.travel.agencies',
        logo: 'https://picsum.photos/seed/carlota/100',
        countryKey: 'countries.argentina',
        city: '',
        taglineKey: 'companies.carlota.tagline',
        logoChar: 'CS',
        status: 'available',
        images: [
            'https://images.unsplash.com/photo-1587595431629-a734612e4f3a?w=800&h=600&fit=crop&crop=entropy&auto=format',
            'https://images.unsplash.com/photo-1619120238346-978e0259a857?w=800&h=600&fit=crop&crop=entropy&auto=format',
            'https://images.unsplash.com/photo-1577801594399-5553b6f24d73?w=800&h=600&fit=crop&crop=entropy&auto=format'
        ],
        stats: [
            { value: '2008', labelKey: 'client_profile.founded' },
            { value: '15+', labelKey: 'client_profile.employees' },
            { value: '3k+', labelKey: 'client_profile.projects' },
            { value: '24/7', labelKey: 'client_profile.support' }
        ],
        contact: [
            { type: 'phone', labelKey: 'contact.phone', value: '+54 11 4567 8901', icon: 'fa-solid fa-mobile-screen-button' },
            { type: 'email', labelKey: 'contact.email', value: 'info@carlotastockar.com.ar', icon: 'fa-solid fa-envelope' },
            { type: 'address', labelKey: 'contact.address', value: 'Buenos Aires, Argentina', icon: 'fa-solid fa-map-marker-alt' },
            { type: 'website', labelKey: 'contact.website', value: 'carlotastockar.dicilo.net', icon: 'fa-solid fa-globe' }
        ],
        socials: [
            { platform: 'facebook', url: 'https://facebook.com/dicilo.net' },
            { platform: 'instagram', url: 'https://instagram.com/dicilo.net_' },
            { platform: 'whatsapp', url: 'https://wa.me/541145678901' }
        ]
    },
];