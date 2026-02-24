import type { StorybookConfig } from '@storybook/vue3-vite';
import type { PluginOption } from 'vite';

process.env.STORYBOOK = 'true'; // Flag for vite.config.ts

const config: StorybookConfig = {
  stories: ["../src/modules/**/**/*.stories.@(js|ts|vue)"
  ],
  addons: [],
  framework: "@storybook/vue3-vite",
  async viteFinal(config) {
    // Remove conflicting vue-devtools plugin
    if (config.plugins) {
      config.plugins = config.plugins.filter((p: PluginOption) => {
        return !(p && typeof p === 'object' && 'name' in p && p.name === 'vite:vue-devtools');
      });
    }
    return config;
  },
};

export default config;
