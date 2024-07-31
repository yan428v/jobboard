'use client';

import React, { ChangeEvent, useState } from 'react';
import { createJobPost } from '@/lib/actionsJobPosts';
import {
    Cities, JobCategory, JobPostCreateData,
} from '@/lib/types/types';
import Loader from '@/components/shared/Loader/ui/Loader';
import styles from './CreatePost.module.scss';

const initialFormData: JobPostCreateData = {
    name: '',
    phoneNumber: '',
    whatsappNumber: '',
    telegramNumber: '',
    city: Cities.ChooseCity,
    jobTitle: '',
    jobDescription: '',
    jobCategory: JobCategory.AllCategories,
    isVip: false,
};

function CreatePost() {
    const [formData, setFormData] = useState(initialFormData);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async () => {
        try {
            setIsLoading(true);

            await createJobPost(formData);

            setFormData(initialFormData);
            console.log('post was created');
        } catch (error) {
            console.error('Failed to add job post:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form
            action={handleSubmit}
            className={styles.formContainer}
        >
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className={styles.inputField}
                required
            />
            <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                className={styles.inputField}
            />
            <input
                type="text"
                name="whatsappNumber"
                value={formData.whatsappNumber ?? ''}
                onChange={handleChange}
                placeholder="WhatsApp Number"
                className={styles.inputField}
            />
            <input
                type="text"
                name="telegramNumber"
                value={formData.telegramNumber ?? ''}
                onChange={handleChange}
                placeholder="Telegram Number"
                className={styles.inputField}
            />
            <select
                name="city"
                id="city"
                className={styles.inputField}
                onChange={handleChange}
                value={formData.city}
            >
                {Object.keys(Cities).map((key: string) => (
                    <option
                        key={key}
                    >
                        {Cities[key as keyof typeof Cities]}
                    </option>
                ))}
            </select>
            <input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                placeholder="Job Title"
                className={styles.inputField}
            />
            <textarea
                name="jobDescription"
                value={formData.jobDescription}
                onChange={handleChange}
                placeholder="Job Description"
                className={styles.textareaField}
            />
            <input
                type="text"
                name="jobCategory"
                value={formData.jobCategory}
                onChange={handleChange}
                placeholder="Job Category"
                className={styles.inputField}
            />
            <button
                type="submit"
                disabled={isLoading}
                className={styles.submitButton}
            >
                {isLoading ? <Loader />:'Post Job' }
            </button>
        </form>
    );
}

export default CreatePost;
