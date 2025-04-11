import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import strapiService from '../utils/strapiService';

// Интерфейс для контекста Strapi
interface StrapiContextType {
  globalSettings: any;
  navigation: any;
  isLoading: boolean;
  error: Error | null;
  getPageContent: (slug: string) => Promise<any>;
  getComponentData: (componentName: string) => Promise<any>;
  getServices: () => Promise<any>;
}

// Создаем контекст с начальными значениями
const StrapiContext = createContext<StrapiContextType>({
  globalSettings: null,
  navigation: null,
  isLoading: true,
  error: null,
  getPageContent: async () => ({}),
  getComponentData: async () => ({}),
  getServices: async () => ({}),
});

// Интерфейс для props провайдера
interface StrapiProviderProps {
  children: ReactNode;
}

// Провайдер контекста Strapi
export const StrapiProvider: React.FC<StrapiProviderProps> = ({ children }) => {
  const [globalSettings, setGlobalSettings] = useState<any>(null);
  const [navigation, setNavigation] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  // Загрузка глобальных данных при монтировании компонента
  useEffect(() => {
    const loadGlobalData = async () => {
      try {
        setIsLoading(true);
        const [globalData, navigationData] = await Promise.all([
          strapiService.getGlobalSettings(),
          strapiService.getNavigation()
        ]);
        
        setGlobalSettings(globalData);
        setNavigation(navigationData);
        setError(null);
      } catch (err) {
        console.error('Ошибка при загрузке глобальных данных:', err);
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    loadGlobalData();
  }, []);

  // Методы для получения данных из Strapi
  const getPageContent = async (slug: string) => {
    try {
      return await strapiService.getPageContent(slug);
    } catch (err) {
      console.error(`Ошибка при получении содержимого страницы ${slug}:`, err);
      throw err;
    }
  };

  const getComponentData = async (componentName: string) => {
    try {
      return await strapiService.getComponentData(componentName);
    } catch (err) {
      console.error(`Ошибка при получении данных компонента ${componentName}:`, err);
      throw err;
    }
  };

  const getServices = async () => {
    try {
      return await strapiService.getServices();
    } catch (err) {
      console.error('Ошибка при получении списка услуг:', err);
      throw err;
    }
  };

  const value = {
    globalSettings,
    navigation,
    isLoading,
    error,
    getPageContent,
    getComponentData,
    getServices,
  };

  return <StrapiContext.Provider value={value}>{children}</StrapiContext.Provider>;
};

// Хук для использования контекста Strapi
export const useStrapiContext = () => useContext(StrapiContext);

export default StrapiContext; 