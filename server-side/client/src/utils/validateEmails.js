const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default (emails) => {

    const invalidEmails = emails
        .split(',')
        .map(email => email.trim())
        .filter(email => !re.test(email));   // if email is valid, the re.test(email) will return true

    if (invalidEmails.length) {
        return `These emails are invalid: ${invalidEmails}`;
    }
    
    return;
};