import * as migration_20250108_192651_finalversion from './20250108_192651_finalversion';

export const migrations = [
  {
    up: migration_20250108_192651_finalversion.up,
    down: migration_20250108_192651_finalversion.down,
    name: '20250108_192651_finalversion'
  },
];
