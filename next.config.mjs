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
    output: 'standalone'
};

export default nextConfig;
