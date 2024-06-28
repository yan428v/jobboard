/** @type {import('next').NextConfig} */
const nextConfig = {
    poweredByHeader: false,
    reactStrictMode: true,
    swcMinify: true, // Включает минификацию кода с помощью компилятора SWC, что делает итоговый код меньше и ускоряет его загрузку в браузере.
    // в продакшене включить:
    compress: false, // Активирует компрессию ответов сервера, что снижает количество данных, передаваемых между сервером и клиентом, и ускоряет загрузку страниц.
    i18n: {
        locales: ['ru-RU'],
        defaultLocale: 'ru-RU',
    },
    output: 'standalone',
    // images: {
    //     domains: [], // Сюда можно добавить внешние домены, с которых разрешено загружать изображения
    //     path: '/_next/image',
    //     loader: 'default' // Использует стандартный загрузчик Next.js
    // }
};

export default nextConfig;
