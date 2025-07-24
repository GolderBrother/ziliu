import { useEffect, useState } from 'react';

export default function App() {
  const [url, setUrl] = useState<string>('');

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      setUrl(tabs[0]?.url || '');
    });
  }, []);

  return (
    <div style={{ minWidth: 320, padding: 16 }}>
      <h1 style={{ fontSize: 20, fontWeight: 600 }}>字流插件</h1>
      <p style={{ marginTop: 12, fontSize: 14 }}>当前页面 URL:</p>
      <code style={{ fontSize: 12 }}>{url}</code>
    </div>
  );
}