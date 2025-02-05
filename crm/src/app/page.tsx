import StatusLabel, { Status } from './components/ststus-label';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl p-12 font-bold underline">Home page</h1>
      <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>NotActive</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
    </main>
  );
}
