'use client';

import React, { useState } from 'react';
import {
    GlobeIcon
} from "@radix-ui/react-icons"
import { SearchIcon } from 'lucide-react';
import {
    Command,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandEmpty,
    // CommandSeparator,
} from "@/components/ui/command"
import { Button } from "@/components/ui/button"

import { cn } from "@/lib/utils";
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation'

export function Search({ className }: { className?: string }) {
    const [search, setSearch] = useState('');
    const t = useTranslations('search');
    const router = useRouter();

    const handleSearch = () => {
        router.push(`/tools/${encodeURIComponent(search)}`);
    }

    return (
        <div className="flex flex-col justify-center items-center gap-2">
            <Command className={cn("rounded-lg border shadow-md", className)}>
                <CommandInput placeholder={t('input_placeholder')} value={search} onValueChange={setSearch} className="h-9" />
                <CommandList>
                    <CommandEmpty>{t('no_results')}</CommandEmpty>
                    <CommandGroup heading={t('heading')}>
                        <CommandItem onSelect={() => window.location.href = '/tools/Official'}>
                            <GlobeIcon className="mr-2 h-4 w-4" />
                            <span>Official Sites</span>
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </Command>
            {search &&
                <Button variant="outline" className='mt-6' onClick={handleSearch}>
                    <SearchIcon size={16} className='mr-2 opacity-80' />{t('button')}
                </Button>}
        </div>
    )
}
