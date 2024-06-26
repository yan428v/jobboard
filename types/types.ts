export interface JobPostData {
    name: string;
    phoneNumber: string;
    whatsappNumber?: string | null;
    telegramNumber?: string | null;
    city: string;
    jobTitle: string;
    jobDescription: string;
    jobCategory: string;
    isVip: boolean;
}
