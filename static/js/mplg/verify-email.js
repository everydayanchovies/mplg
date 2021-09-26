// $(() => {
//     const verifyEmailButton = $('#verify-button');

//     verifyEmailButton.val('Verifying...');
//     verifyEmailButton.prop('disabled', true);

//     const pathParts = window.location.pathname.split('/');
//     const token = pathParts[pathParts.length - 2];

//     $.ajax({
//         type: 'POST',
//         url: `/mplg/user/verify-email/${token}/verify`,
//         success: () => {
//             window.location = '/mplg/email-verified';
//         },
//         error: () => {
//             verifyEmailButton.val('Invalid verification link');
//         }
//     });
// })
