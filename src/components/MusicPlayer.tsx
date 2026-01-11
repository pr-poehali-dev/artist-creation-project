import { useState, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

interface Track {
  id: number;
  title: string;
  artist: string;
  duration: string;
  url: string;
}

const tracks: Track[] = [
  { id: 1, title: 'Midnight Dreams', artist: 'Original Track', duration: '3:45', url: '' },
  { id: 2, title: 'Urban Poetry', artist: 'Spoken Word', duration: '4:20', url: '' },
  { id: 3, title: 'Digital Echoes', artist: 'DJ Set', duration: '5:15', url: '' },
  { id: 4, title: 'Cosmic Journey', artist: 'Podcast Episode', duration: '12:30', url: '' },
];

export default function MusicPlayer() {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([70]);
  const [progress, setProgress] = useState([0]);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
  };

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + tracks.length) % tracks.length);
  };

  const handleTrackClick = (index: number) => {
    setCurrentTrack(index);
    setIsPlaying(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying && progress[0] < 100) {
        setProgress([progress[0] + 0.5]);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [isPlaying, progress]);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card className="p-6 backdrop-blur-lg bg-card/50 border-primary/20">
        <div className="flex items-center gap-6 mb-6">
          <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center animate-float">
            <Icon name="Music" size={40} className="text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-heading font-bold gradient-text mb-1">
              {tracks[currentTrack].title}
            </h3>
            <p className="text-muted-foreground">{tracks[currentTrack].artist}</p>
          </div>
          <div className="text-right text-sm text-muted-foreground">
            {tracks[currentTrack].duration}
          </div>
        </div>

        <div className="space-y-4">
          <Slider
            value={progress}
            onValueChange={setProgress}
            max={100}
            step={1}
            className="w-full"
          />

          <div className="flex items-center justify-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevTrack}
              className="hover:bg-primary/20"
            >
              <Icon name="SkipBack" size={24} />
            </Button>

            <Button
              size="icon"
              onClick={togglePlay}
              className="h-14 w-14 rounded-full bg-gradient-to-r from-primary to-secondary hover:scale-110 transition-transform"
            >
              {isPlaying ? (
                <Icon name="Pause" size={28} />
              ) : (
                <Icon name="Play" size={28} />
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextTrack}
              className="hover:bg-primary/20"
            >
              <Icon name="SkipForward" size={24} />
            </Button>
          </div>

          <div className="flex items-center gap-3">
            <Icon name="Volume2" size={20} className="text-muted-foreground" />
            <Slider
              value={volume}
              onValueChange={setVolume}
              max={100}
              step={1}
              className="w-32"
            />
          </div>
        </div>
      </Card>

      <div className="space-y-2">
        {tracks.map((track, index) => (
          <Card
            key={track.id}
            className={`p-4 cursor-pointer transition-all hover:bg-card/80 ${
              currentTrack === index ? 'border-primary bg-card/50' : 'border-border/50'
            }`}
            onClick={() => handleTrackClick(index)}
          >
            <div className="flex items-center gap-4">
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  currentTrack === index
                    ? 'bg-gradient-to-br from-primary to-secondary'
                    : 'bg-muted'
                }`}
              >
                {currentTrack === index && isPlaying ? (
                  <Icon name="Pause" size={20} className="text-white" />
                ) : (
                  <Icon name="Play" size={20} className={currentTrack === index ? 'text-white' : 'text-muted-foreground'} />
                )}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold">{track.title}</h4>
                <p className="text-sm text-muted-foreground">{track.artist}</p>
              </div>
              <div className="text-sm text-muted-foreground">{track.duration}</div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
