import React from 'react';
import { JobPostData } from '@/lib/types/types';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Post.module.scss';

interface PostProps {
    post: JobPostData;
}
const Post = ({ post }:PostProps) => {
    // console.log('==========================');
    // console.log(post);
    // console.log(post.creationDate);

    // Преобразуем ISO строку в объект Date
    const date = new Date(post.creationDate);

    const formattedDate = date.toLocaleString('en-EN', { // ru-RU для русского языка
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });
    return (
        <div className={styles.postWrapper}>
            <div className={styles.postCard}>
                <div className={styles.postHeader}>
                    <div className={styles.postCategories}>
                        <p className={styles.postCategory}>{post.jobCategory}</p>
                        <div className={styles.postSeparator} />
                        <p className={styles.postCategory}>{post.jobCategory}</p>
                        <div className={styles.postSeparator} />
                        <p className={styles.postCategory}>{post.jobCategory}</p>
                    </div>
                    <div className={styles.postDate}>{formattedDate}</div>
                </div>
                <div className={styles.postContentWrapper}>
                    <div className={styles.postTileWrapper}>
                        <h2 className={styles.postTitle}>{post.jobTitle}</h2>
                        <p className={styles.postCity}>{post.city}</p>
                    </div>
                    <p className={styles.postDescription}>{post.jobDescription}</p>
                    <div className={styles.postContacts}>
                        <Link
                            className={styles.postWhatsapp}
                            href="/"
                        >
                            <p>Whatsapp</p>
                            <Image
                                src="/whatsapp.svg"
                                alt="whatsapp"
                                width={40}
                                height={39}
                            />
                        </Link>
                        <Link
                            className={styles.postTelegram}
                            href="/"
                        >
                            <p>Telegram</p>
                            <Image
                                src="/telegram.svg"
                                alt="telegram"
                                width={40}
                                height={39}
                            />

                        </Link>
                        <Link
                            className={styles.postNumber}
                            href="/"
                        >
                            <p>{post.phoneNumber}</p>
                            <Image
                                src="/phone.svg"
                                alt="phone"
                                width={36}
                                height={38}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
