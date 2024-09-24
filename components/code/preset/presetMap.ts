import {
  PresetName,
  Preset,
  jsPreset,
  tsPreset,
  htmlPreset,
  babelPreset,
  rxjsPreset,
  reactPreset,
} from './preset';

export const presetMap: { [key in PresetName]: Preset } = {
  js: jsPreset,
  ts: tsPreset,
  html: htmlPreset,
  babel: babelPreset,
  rxjs: rxjsPreset,
  react: reactPreset,
};
