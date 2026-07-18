import { Module } from '@nitrostack/core';
import { VeritasTools } from './veritas.tools.js';
import { VeritasResources } from './veritas.resources.js';
import { VeritasPrompts } from './veritas.prompts.js';

@Module({
  name: 'veritas',
  description: 'Veritas AI - Multi-Agent Crisis Verification',
  controllers: [
    VeritasTools,
    VeritasResources,
    VeritasPrompts
  ]
})
export class VeritasModule {}
