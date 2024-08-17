import { useEffect, useState } from 'react';

const useWebSocket = () => {
  const [data, setData] = useState<[number, string][]>([]);

  const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
  const socket_url = protocol + '://' + window.location.host + '/translation';

  useEffect(() => {
    const socket = new WebSocket(socket_url);

    socket.onmessage = (ev: MessageEvent<any>) => {
      setData((existingData) => existingData.concat([[Date.now(), ev.data]]));
    };

    const heartbeatRef = setInterval(() => {
      if (socket) {
        socket.send('ping');
      }
    }, 30000);

    return () => {
      if (heartbeatRef) {
        clearInterval(heartbeatRef);
      }

      if (socket) {
        socket.close();
      }
    };
  }, []);

  return data;
};

export default useWebSocket;
