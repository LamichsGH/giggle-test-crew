// Global type declarations for external libraries
declare global {
  interface Window {
    AOS: {
      init: (options?: {
        duration?: number;
        once?: boolean;
        offset?: number;
      }) => void;
    };
    jQuery: any;
    $: any;
  }
}

export {};