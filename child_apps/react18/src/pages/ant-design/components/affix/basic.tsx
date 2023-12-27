// import { Affix, Button } from 'antd';
// import React, { useState } from 'react';
// const App = () => {
//   const [top, setTop] = useState(10);
//   const [bottom, setBottom] = useState(10);
//   return (
//     <>
//       <Affix offsetTop={top}>
//         <Button type="primary" onClick={() => setTop(top + 10)}>
//           Affix top
//         </Button>
//       </Affix>
//       <br />
//       <Affix offsetBottom={bottom}>
//         <Button type="primary" onClick={() => setBottom(bottom + 10)}>
//           Affix bottom
//         </Button>
//       </Affix>
//     </>
//   );
// };
// export default App;

import React from 'react';
import { Affix, Button } from 'antd';

const App: React.FC = () => {
  const [top, setTop] = React.useState<number>(10);
  const [bottom, setBottom] = React.useState<number>(10);
  return (
    <>
      <Affix offsetTop={top}>
        <Button type="primary" onClick={() => setTop(top + 10)}>
          Affix top
        </Button>
      </Affix>
      <br />
      <Affix offsetBottom={bottom}>
        <Button type="primary" onClick={() => setBottom(bottom + 10)}>
          Affix bottom
        </Button>
      </Affix>
    </>
  );
};

export default App;