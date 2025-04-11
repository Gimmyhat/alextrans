import axios from 'axios';

// Получение URL Strapi из переменных окружения
const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';

/**
 * Интерфейс для мета-информации из Strapi API
 */
interface StrapiMeta {
  pagination?: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

/**
 * Общий интерфейс для ответа от Strapi API
 */
interface StrapiResponse<T> {
  data: StrapiData<T>[];
  meta: StrapiMeta;
}

/**
 * Интерфейс для данных из Strapi API
 */
interface StrapiData<T> {
  id: number;
  attributes: T;
}

/**
 * Класс для работы с API Strapi
 */
class StrapiService {
  /**
   * Получение содержимого страницы по URL
   * @param slug - URL страницы (например, 'home', 'about', 'services')
   */
  async getPageContent(slug: string): Promise<any> {
    try {
      const response = await axios.get(`${STRAPI_URL}/api/pages?filters[slug][$eq]=${slug}&populate=deep`);
      return response.data;
    } catch (error) {
      console.error(`Ошибка при получении содержимого страницы ${slug}:`, error);
      throw error;
    }
  }

  /**
   * Получение данных компонента по имени
   * @param componentName - имя компонента (например, 'hero', 'services', 'advantages')
   */
  async getComponentData(componentName: string): Promise<any> {
    try {
      const response = await axios.get(`${STRAPI_URL}/api/components?filters[name][$eq]=${componentName}&populate=deep`);
      return response.data;
    } catch (error) {
      console.error(`Ошибка при получении данных компонента ${componentName}:`, error);
      throw error;
    }
  }

  /**
   * Получение списка услуг
   */
  async getServices(): Promise<any> {
    try {
      const response = await axios.get(`${STRAPI_URL}/api/services?populate=deep`);
      return response.data;
    } catch (error) {
      console.error('Ошибка при получении списка услуг:', error);
      throw error;
    }
  }

  /**
   * Получение глобальных настроек сайта 
   * (например, контактная информация, реквизиты компании и т.д.)
   */
  async getGlobalSettings(): Promise<any> {
    try {
      const response = await axios.get(`${STRAPI_URL}/api/global?populate=deep`);
      return response.data;
    } catch (error) {
      console.error('Ошибка при получении глобальных настроек:', error);
      throw error;
    }
  }

  /**
   * Получение меню сайта
   */
  async getNavigation(): Promise<any> {
    try {
      const response = await axios.get(`${STRAPI_URL}/api/navigation?populate=deep`);
      return response.data;
    } catch (error) {
      console.error('Ошибка при получении навигации:', error);
      throw error;
    }
  }
}

export default new StrapiService(); 