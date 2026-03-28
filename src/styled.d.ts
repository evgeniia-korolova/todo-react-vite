/* eslint-disable @typescript-eslint/no-empty-object-type */
import 'styled-components';
import type { Theme } from './models/theme.interface';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
/* eslint-enable @typescript-eslint/no-empty-object-type */
