export const test = (post) => {
    const {
        name, phoneNumber, city, jobTitle, jobDescription, jobCategory, isVip,
    } = post;
    const newJob = await prisma.job_post.create({
        data: {
            name,
            phoneNumber,
            whatsappNumber: post.whatsappNumber || null,
            telegramNumber: post.telegramNumber || null,
            city,
            jobTitle,
            jobDescription,
            jobCategory,
            isVip,
        },
    });
    console.log(newJob);
    
};
