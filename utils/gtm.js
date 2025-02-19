import TagManager from 'react-gtm-module';

export const initializeGTM = (gtmId: string) => {
  if (typeof window !== 'undefined') {
    TagManager.initialize({ gtmId });
  }
};
