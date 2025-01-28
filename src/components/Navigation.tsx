'use client'
import React from 'react'; // 确保导入 React
import { useState, useEffect } from 'react'
import { Link, usePathname }from "@/lib/i18n";
import { MenuIcon } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import IconImage from "../../public/android-chrome-192x192.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ThemeModeButton } from "@/components/ThemeModeButton";
import { LocaleButton } from "@/components/LocaleButton";
import {useTranslations} from 'next-intl';

// 定义分类类型接口
type categoriesType = {
  name: string,
  src: string,
  description: string,
  link: string
}

// 定义导航属性接口
type navigationProp = {
  categories: categoriesType[]
}

export const Navigation = ({ categories }: navigationProp ) => {
  // 获取当前路径
  const pathname = usePathname()
  // 控制移动端菜单的开关状态
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // 获取导航相关的翻译函数
  const t = useTranslations('navigation');

  // 定义导航菜单项
  const menuItems: {
    label: string;
    href: string;
  }[] = [
    {
      label: t('homeBtn'),
      href: "/",
    },
    {
      label: t('categoryBtn'),
      href: "/category",
    },
    {
      label: t('articleBtn'),
      href: "/article",
    },
    {
      label: t('changelogBtn'),
      href: "/changelog",
    },
  ];

  // 判断当前菜单项是否激活
  const isMenuItemActive = (href: string) => {
    // console.log(pathname, href);
    return pathname === href;
  };

  // 路由变化时关闭移动端菜单
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // 自定义列表项组件
  const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
  >(({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  })
  ListItem.displayName = "ListItem"

  return (
    // 导航栏主容器
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        {/* 左侧 Logo 和导航区域 */}
        <div className="flex gap-6 md:gap-10">
          {/* Logo 链接 */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={IconImage}
              className="block"
              width={30}
              height={30}
              alt="Mortholme"
              priority
            />
            <span className="inline-block font-bold">Mortholme</span>
          </Link>

          {/* 桌面端导航菜单 */}
          <nav className="hidden md:flex gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                {/* 首页链接 */}
                <NavigationMenuItem>
                  <Link href="/" className={cn(navigationMenuTriggerStyle(), 'font-medium', '/' === pathname && "font-extrabold")}>
                    {t('homeBtn')}
                  </Link>
                </NavigationMenuItem>

                {/* 分类下拉菜单 */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn('font-medium', '/category' === pathname && "font-extrabold")}>
                    {t('categoryBtn')}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[600px]">
                      {/* 遍历分类列表 */}
                      {categories.map((category) => (
                        <ListItem
                          key={category.name}
                          title={category.name}
                          href={`/category/${category.link}`}
                          className='capitalize'
                        >
                          {category.description}
                        </ListItem>
                      ))}
                      {/* 更多分类链接 */}
                      <ListItem
                        title={t('moreCategoryBtn')}
                        href={'/category'}
                        className='capitalize border border-muted bg-gradient-to-b from-muted/50 to-muted/20'
                      >
                        {t('moreCategoryDescription')}
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* 文章下拉菜单 */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn('font-medium', '/article' === pathname && "font-extrabold")}>
                    {t('articleBtn')}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/article"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Mortholme
                            </div>
                            <p className="text-xs leading-tight text-muted-foreground">
                              {t('articleDescription')}
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem 
                        href="/article/mortholme-characters-guide" 
                        title={t('articles.charactersGuide')}
                      >
                        {t('articles.charactersGuideDesc')}
                      </ListItem>
                      <ListItem 
                        href="/article/mortholme-dark-queen-story" 
                        title={t('articles.darkQueenStory')}
                      >
                        {t('articles.darkQueenStoryDesc')}
                      </ListItem>
                      <ListItem 
                        href="/article" 
                        title={t('moreArticleBtn')} 
                        className='border border-muted bg-gradient-to-b from-muted/50 to-muted/20'
                      >
                        {t('moreArticleDescription')}
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* 更新日志链接 */}
                <NavigationMenuItem>
                  <Link href="/changelog" className={cn(navigationMenuTriggerStyle(), 'font-medium', '/changelog' === pathname && "font-extrabold")}>
                    {t('changelogBtn')}
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>

        {/* 右侧功能区 */}
        <div className="flex items-center gap-3">
          {/* 主题切换和语言切换按钮 */}
          <div className="flex items-center gap-1">
            <ThemeModeButton />
            <LocaleButton />
          </div>

          {/* 移动端菜单按钮和抽屉 */}
          <Sheet
            open={mobileMenuOpen}
            onOpenChange={(open) => setMobileMenuOpen(open)}
          >
            <SheetTrigger asChild>
              <Button
                className="md:hidden"
                size="icon"
                variant="outline"
                aria-label="Menu"
              >
                <MenuIcon className="size-4" />
              </Button>
            </SheetTrigger>
            {/* 移动端菜单内容 */}
            <SheetContent className="w-[250px]" side="right">
              <div className="flex flex-col items-start justify-center">
                {menuItems.map((menuItem) => (
                  <Link
                    key={menuItem.href}
                    href={menuItem.href}
                    className={cn(
                      "block px-3 py-2 text-lg",
                      isMenuItemActive(menuItem.href) ? "font-bold" : "",
                    )}
                  >
                    {menuItem.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}