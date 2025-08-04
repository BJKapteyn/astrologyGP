declare module '.tsx' {
  import { ComponentType } from 'react';

  // This module declaration allows importing .tsx files as React components.
  const component: ComponentType<any>;
  export default component;
}