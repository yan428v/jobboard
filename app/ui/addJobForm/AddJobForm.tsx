import React, { useState } from 'react';
import { PrismaClient } from '@prisma/client';
import styles from './AddJobForm.module.css';

const prisma = new PrismaClient();
import { test } from './test';
function AddJobForm() {
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        whatsappNumber: '',
        telegramNumber: '',
        city: '',
        jobTitle: '',
        jobDescription: '',
        jobCategory: '',
        isVip: false,
    });

    const handleChange = (e) => {
        const {
            name, value, type, checked,
        } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            test(formData)
            // const response = await fetch('api/jobPosts/addJobPost', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(formData),
            // });
            // const data = await response.json();
            // console.log(data);
            alert('Job posted successfully!');
        } catch (error) {
            console.error('Failed to add job post:', error);
            alert('Failed to post job.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.formContainer}>
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
                value={formData.whatsappNumber}
                onChange={handleChange}
                placeholder="WhatsApp Number"
                className={styles.inputField}
            />
            <input
                type="text"
                name="telegramNumber"
                value={formData.telegramNumber}
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
            <button type="submit" className={styles.submitButton}>Post Job</button>
        </form>
    );
}

export default AddJobForm;
