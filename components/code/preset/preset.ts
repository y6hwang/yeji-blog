import { srcdocHead, srcdocTail } from './htmlTemplate';

export const presetNameList = ['js', 'ts', 'html', 'rxjs', 'babel', 'react'] as const;
export type PresetName = (typeof presetNameList)[number];

export type Preset = {
  name: PresetName;
  showConsole: (len: number) => boolean;
  showIframe: boolean;
  createSrcDoc: (code: string) => Promise<string>;
  language: 'javascript' | 'xml';
};

export const jsPreset: Preset = {
  name: 'js',
  showConsole: () => true,
  showIframe: false,
  createSrcDoc: async (code) => wrapTemplateHTML(`<script>${code}</script>`),
  language: 'javascript',
};

export const tsPreset: Preset = {
  name: 'ts',
  showConsole: () => true, // TODO: true
  showIframe: false,
  createSrcDoc: async (code) => wrapTemplateHTML(`
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">${code}</script>
    `),
  language: 'javascript',
};

export const htmlPreset: Preset = {
  name: 'html',
  showConsole: (len) => 0 < len,
  showIframe: true,
  createSrcDoc: async (code) => wrapTemplateHTML(code),
  language: 'xml',
};

export const babelPreset: Preset = {
  name: 'babel',
  showConsole: () => true,
  showIframe: false,
  createSrcDoc: async (code: string) => {
    // TODO: iframe에서 캐싱하는 방법은 없나?
    return wrapTemplateHTML(
      `<script>${await fetchText('https://unpkg.com/@babel/standalone/babel.min.js')}</script>
    <script>
      Babel.registerPreset("env-plus", {
        plugins: [
          [Babel.availablePlugins["proposal-decorators"], { version: '2023-11' }],
          [Babel.availablePlugins["proposal-throw-expressions"], { version: '2023-11' }],
          [Babel.availablePlugins["proposal-pipeline-operator"], { proposal: 'hack', topicToken: '@@' }],
        ],
      });
    </script>
    <script type="text/babel" data-presets="env-plus">` +
        code +
        '</script>',
    );
  },
  language: 'javascript',
};

export const rxjsPreset: Preset = {
  name: 'rxjs',
  showConsole: () => true,
  showIframe: true,
  createSrcDoc: async (code: string) => {
    const src = await fetchText(
      'https://unpkg.com/rxjs@^7/dist/bundles/rxjs.umd.min.js',
    );
    return wrapTemplateHTML(`<script>${src}</script><script>${code}</script>`);
  },
  language: 'javascript',
};

export const reactPreset: Preset = {
  name: 'react',
  showConsole: () => false,
  showIframe: false, // TODO: true
  createSrcDoc: async (code: string) => {
    const [react, reactDOM, babel] = await Promise.all([
      fetchText('https://unpkg.com/react@18/umd/react.development.js'),
      fetchText('https://unpkg.com/react-dom@18/umd/react-dom.development.js'),
      fetchText('https://unpkg.com/@babel/standalone/babel.min.js'),
    ]);

    return wrapTemplateHTML(
      `<div id="root"></div>
      <script>${react}</script>
      <script>${reactDOM}</script>
      <script>${babel}</script>
      <script type="text/babel">${code}</script>`,
    );
  },
  language: 'javascript',
};

const wrapTemplateHTML = (src: string) => `${srcdocHead}${src}${srcdocTail}`;

const fetchText = async (src: string) => {
  const resp = await fetch(src);
  return await resp.text();
};
