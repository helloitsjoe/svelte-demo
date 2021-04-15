<script>
  import { Router, Link, Route } from 'svelte-navigator';
  import { Header, Wrapper, Lazy } from './components';

  // Lazy load routes
  const Dates = () => import('./components/Dates.svelte');
  const Count = () => import('./components/Count.svelte');
  const List = () => import('./components/List.svelte');
  const Form = () => import('./components/Form.svelte');
  const Photos = () => import('./components/Photos.svelte');

  export let today;
  export let isDev;

  const basepath = isDev ? '/' : '/svelte-demo';
</script>

<main>
  <Router {basepath}>
    <Header name="Svelte">
      <nav>
        <Link to="/">Home</Link>
        <Link to="date">Dates</Link>
        <Link to="form">Form</Link>
        <Link to="list">List</Link>
        <Link to="count">Count</Link>
        <Link to="photos">Photos</Link>
      </nav>
    </Header>
    <Wrapper>
      <Route path="date"
        ><Lazy
          component={Dates}
          fallback="<h2>Loading dates...</h2>"
          {today}
        /></Route
      >
      <Route path="form"><Lazy component={Form} /></Route>
      <Route path="count"><Lazy component={Count} /></Route>
      <Route path="list"><Lazy component={List} /></Route>
      <Route path="photos"><Lazy component={Photos} /></Route>
    </Wrapper>
  </Router>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  nav {
    display: flex;
    justify-content: space-between;
    max-width: 600px;
    margin: auto;
    flex-wrap: wrap;
  }

  :global(nav a) {
    flex: 1;
    min-width: 72px;
  }

  :global(nav * + *) {
    border-left: 1px solid lightgray;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
