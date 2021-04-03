import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    isDev: process.env.isDev,
    today: new Date(),
  },
});

export default app;
