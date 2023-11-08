import StoreProvider from '@/container/nextJs/StoreProvider';

import 'src/styles/globals.scss';


export default function RootLayout(baseProps: any) {
  return (
    <html lang="en">
      <body className={""}>
        <StoreProvider>
          {baseProps.children}
        </StoreProvider>
      </body>
    </html>
  );
}
