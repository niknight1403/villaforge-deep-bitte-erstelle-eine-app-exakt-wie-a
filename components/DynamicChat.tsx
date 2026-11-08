import dynamic from 'next/dynamic';

// Lazy load heavy chat components to reduce initial bundle size
const ChatInterface = dynamic(() => import('./ChatInterface'), {
  loading: () => <div className="animate-pulse h-screen bg-[#0F0F13]" />,
  ssr: false,
});

export default function DynamicChat() {
  return <ChatInterface />;
}