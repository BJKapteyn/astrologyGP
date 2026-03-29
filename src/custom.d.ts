declare module '*.svg' {
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
} 
declare module '*.jpg' {
  const value: string;
  export default value;
}
declare module '*.css' {
  const value: string;
  export default value;
}

declare module '.tsx' {
  import { ComponentType } from 'react';

  // This module declaration allows importing .tsx files as React components.
  const component: ComponentType<any>;
  export default component;
}
