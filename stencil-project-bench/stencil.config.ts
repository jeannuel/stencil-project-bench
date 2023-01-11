import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';
import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

const angularValueAccessorBindings: ValueAccessorConfig[] = [];

export const config: Config = {
  namespace: 'stencil-project-bench',
  globalStyle: './src/global.css',
  outputTargets: [
    {
      type: 'dist',
      // esmLoaderPath: '../loader', <- This has to be removed
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    angularOutputTarget({
      componentCorePackage: 'stencil-project-bench',
      directivesProxyFile: '../angular-j-library/projects/j-angular-stencil-library/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular-j-library/projects/j-angular-stencil-library/src/lib/stencil-generated/index.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
  ],
  plugins: [
    sass({
      injectGlobalPaths: ['src/globals/variables.scss', 'src/globals/mixins.scss'],
    }),
  ],
};
