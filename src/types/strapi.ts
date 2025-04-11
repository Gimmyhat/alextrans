/**
 * Базовые типы для работы со Strapi API
 */

export interface StrapiImage {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string | null;
      caption: string | null;
      width: number;
      height: number;
      formats: {
        thumbnail?: {
          url: string;
          width: number;
          height: number;
        };
        small?: {
          url: string;
          width: number;
          height: number;
        };
        medium?: {
          url: string;
          width: number;
          height: number;
        };
        large?: {
          url: string;
          width: number;
          height: number;
        };
      };
      url: string;
    };
  };
}

export interface StrapiMeta {
  pagination?: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

export interface StrapiResponse<T> {
  data: StrapiData<T>[];
  meta: StrapiMeta;
}

export interface StrapiData<T> {
  id: number;
  attributes: T;
}

export interface StrapiSingleResponse<T> {
  data: {
    id: number;
    attributes: T;
  };
  meta: StrapiMeta;
}

// Типы для конкретных компонентов и страниц

export interface HeroComponent {
  title: string;
  subtitle: string;
  backgroundImage: StrapiImage;
  calculatorButtonText: string;
  contactButtonText: string;
  contactCard: {
    title: string;
    workingHours: string;
    address: string;
    deliveryArea: string;
  };
}

export interface ServiceItem {
  title: string;
  description: string;
  iconName: string;
  linkTo: string;
}

export interface ServicesComponent {
  title: string;
  subtitle: string;
  services: ServiceItem[];
}

export interface AdvantageItem {
  title: string;
  description: string;
  iconName: string;
}

export interface AdvantagesComponent {
  title: string;
  subtitle: string;
  advantages: AdvantageItem[];
}

export interface ContactFormComponent {
  title: string;
  subtitle: string;
  nameLabel: string;
  phonePlaceholder: string;
  messagePlaceholder: string;
  buttonText: string;
  successMessage: string;
  errorMessage: string;
}

export interface PageContent {
  title: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  backgroundImage: StrapiImage;
  mapTitle: string;
  mapBackgroundImage: StrapiImage;
  components: any[]; // Это будет массив компонентов разных типов
}

export interface GlobalSettings {
  siteName: string;
  siteDescription: string;
  contactInfo: {
    email: string;
    phone: string;
    address: string;
    workingHours: string;
  };
  socialLinks: {
    facebook: string;
    instagram: string;
    telegram: string;
    whatsapp: string;
  };
  logo: StrapiImage;
  footerText: string;
  copyrightText: string;
}

export interface NavigationItem {
  title: string;
  url: string;
  order: number;
  isActive: boolean;
}

export interface NavigationMenu {
  items: NavigationItem[];
} 