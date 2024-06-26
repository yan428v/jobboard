'use client';

import React, { ChangeEvent, useState } from 'react';
import styles from './CreatePost.module.scss';
import { createJobPost } from '../../../lib/api/actions';
import Loader from '../../shared/Loader/ui/Loader';
import { City, JobCategory, JobPostData } from '../../../lib/types/types';

function CreatePost() {
    const [formData, setFormData] = useState<JobPostData>({
        name: '',
        phoneNumber: '',
        whatsappNumber: '',
        telegramNumber: '',
        city: City.ChooseCity,
        jobTitle: '',
        jobDescription: '',
        jobCategory: JobCategory.ChooseCategory,
        isVip: false,
    });

    const [isLoading, setIsLoading] = useState(false);

    // const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //     const {
    //         name, value, type, checked,
    //     } = e.target;
    //     setFormData((prev) => ({
    //         ...prev,
    //         [name]: type === 'checkbox' ? checked : value,
    //     }));
    // };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const target = e.target as HTMLInputElement | HTMLTextAreaElement;
        const value = target.type === 'checkbox'
            ? (target as HTMLInputElement).checked : target.value;
        setFormData((prev) => ({
            ...prev,
            [target.name]: value,
        }));
    };

    const handleSubmit = async () => {
        try {
            setIsLoading(true);
            // setTimeout(async () => {
            // }, 2000);
            await createJobPost(formData);

            console.log(formData);
            // alert('Job posted successfully!');
            setFormData({
                name: '',
                phoneNumber: '',
                whatsappNumber: '',
                telegramNumber: '',
                city: City.ChooseCity,
                jobTitle: '',
                jobDescription: '',
                jobCategory: JobCategory.ChooseCategory,
                isVip: false,
            });
            console.log('post was created');
        } catch (error) {
            console.error('Failed to add job post:', error);
            // alert('Failed to post job.');
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
            <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                className={styles.inputField}
            />
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
            <div className={styles.checkboxContainer}>
                <input
                    type="checkbox"
                    name="isVip"
                    checked={formData.isVip}
                    onChange={handleChange}
                />
                <span className={styles.checkboxLabel}>Is VIP</span>
            </div>
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
