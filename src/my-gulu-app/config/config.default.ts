/**
 * Default config.
 */
export default () => {
  const config: Partial<Gulu.AppConfig> = {
    psm: 'p.s.m',
    middleware: [],
    plugin: ['@gulu/bytedtrace', '@gulu/ms-metrics', '@gulu/ms-logger'],
  };

  return {
    ...config,
  };
};
