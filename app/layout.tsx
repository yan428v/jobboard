import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
    title: 'Поиск работы в Израиле - Доска вакансий',
    description: 'Найдите идеальную работу в Израиле с помощью нашей доски вакансий. '
        + 'Платформа предлагает широкий выбор вакансий в различных отраслях, '
        + 'удобный поиск и поддержку на каждом шагу поиска работы.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <body>{children}</body>
        </html>
    );
}
