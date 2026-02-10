import { useEffect, useState } from 'react';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { 
  LuHouse, 
  LuUser, 
  LuBriefcase, 
  LuFolder, 
  LuMail,
  LuGithub,
  LuLinkedin,
  LuTwitter,
  LuFileText
} from "react-icons/lu";

const CommandPalette = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const navigateTo = (href: string) => {
    setOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openLink = (url: string) => {
    setOpen(false);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const downloadResume = () => {
    setOpen(false);
    const fileUrl = "/resume.pdf";
    const suggestedFileName = "Resume.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = suggestedFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navigationItems = [
    { icon: LuHouse, label: 'Home', href: '#home', shortcut: 'H' },
    { icon: LuUser, label: 'About', href: '#about', shortcut: 'A' },
    { icon: LuBriefcase, label: 'Experience', href: '#experience', shortcut: 'E' },
    { icon: LuFolder, label: 'Projects', href: '#projects', shortcut: 'P' },
    { icon: LuMail, label: 'Contact', href: '#contact', shortcut: 'C' },
  ];

  const socialItems = [
    { icon: LuGithub, label: 'GitHub', url: 'https://github.com/hemantbeast' },
    { icon: LuLinkedin, label: 'LinkedIn', url: 'https://linkedin.com/in/hemantdesharma' },
    { icon: LuTwitter, label: 'Twitter', url: 'https://x.com/hemantbeast' },
  ];

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        
        <CommandGroup heading="Navigation">
          {navigationItems.map((item) => (
            <CommandItem
              key={item.label}
              onSelect={() => navigateTo(item.href)}
              className="cursor-pointer"
            >
              <item.icon className="mr-2 h-4 w-4" />
              <span>{item.label}</span>
              {item.shortcut && (
                <CommandShortcut>{item.shortcut}</CommandShortcut>
              )}
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Social Links">
          {socialItems.map((item) => (
            <CommandItem
              key={item.label}
              onSelect={() => openLink(item.url)}
              className="cursor-pointer"
            >
              <item.icon className="mr-2 h-4 w-4" />
              <span>{item.label}</span>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Actions">
          <CommandItem
            onSelect={downloadResume}
            className="cursor-pointer"
          >
            <LuFileText className="mr-2 h-4 w-4" />
            <span>Download Resume</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};

// Command shortcut component
const CommandShortcut = ({ children }: { children: string }) => {
  return (
    <kbd className="pointer-events-none ml-auto inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
      <span className="text-xs">⌘</span>{children}
    </kbd>
  );
};

export default CommandPalette;
