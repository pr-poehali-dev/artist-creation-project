import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';

interface VkMusicPlayerProps {
  ownerId: string;
}

export default function VkMusicPlayer({ ownerId }: VkMusicPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Загружаем VK Widget API если еще не загружен
    if (!window.VK) {
      const script = document.createElement('script');
      script.src = 'https://vk.com/js/api/openapi.js?169';
      script.async = true;
      script.onload = () => {
        if (window.VK) {
          window.VK.init({ apiId: 51827538 }); // ID можно любой для виджетов
          initWidget();
        }
      };
      document.body.appendChild(script);
    } else {
      initWidget();
    }

    function initWidget() {
      if (containerRef.current && window.VK && window.VK.Widgets) {
        // Очищаем контейнер перед инициализацией
        containerRef.current.innerHTML = '';
        
        // Создаем плейлист виджет
        window.VK.Widgets.Playlist(
          containerRef.current.id,
          ownerId,
          '', // playlist_id (пустая строка = все аудио пользователя)
          '',
          {
            width: '100%',
            height: 500,
          }
        );
      }
    }

    return () => {
      // Cleanup при размонтировании
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [ownerId]);

  return (
    <Card className="overflow-hidden backdrop-blur-lg bg-card/50 border-primary/20">
      <div
        id="vk_playlist"
        ref={containerRef}
        className="w-full"
        style={{ minHeight: '500px' }}
      />
    </Card>
  );
}

// Типизация для VK API
declare global {
  interface Window {
    VK?: {
      init: (params: { apiId: number }) => void;
      Widgets?: {
        Playlist: (
          elementId: string,
          ownerId: string,
          playlistId: string,
          hash: string,
          options: { width: string; height: number }
        ) => void;
      };
    };
  }
}
