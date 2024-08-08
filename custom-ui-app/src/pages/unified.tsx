import { RootLayout } from '../components/RootLayout';

const UnifiedPage = () => {
  return (
    <RootLayout>
      <div>custom unified page</div>
      <div id='api' data-name='Unified' role='main'></div>
      {/* <div id='api' data-name='SelfAsserted' role='main'></div>; */}
    </RootLayout>
  );
};

export default UnifiedPage;
