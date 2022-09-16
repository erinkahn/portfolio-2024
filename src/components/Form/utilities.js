export function processForm({
    fullName,
    emailAddress,
    message
}) {
    if (fullName && emailAddress && message ) {
        alert(`
            Thank you for submitting your info, ${fullName}!
            and your email address is ${emailAddress},
            Your message is ${message},
        `);
    } else {
        const isFullNameAbsent = !fullName
            ? 'Full name'
            : '';
        const isEmailAddressAbsent = !emailAddress
            ? ' Email address'
            : '';
        const ismessageAbsent = !message
            ? ' Message'
            : '';
        alert(
            `Missing fields: ${isFullNameAbsent}${isEmailAddressAbsent}${ismessageAbsent}`
        );
    }
}

const tlds = ['.com', '.org', '.net'];

export function validateField(data, name) {
    switch (name) {
        case 'fullName': {
            return /^[a-z A-Z\s]*$/.test(data);
        }
        
        case 'emailAddress': {
            return (
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(
                data
            ) &&
            tlds.some((tld) => data.includes(tld))
            );
        }

        case 'message': {
            return (
            !isNaN(data) && `${data}`.length === 10
            );
        }
        default:
            return false;
    }
}